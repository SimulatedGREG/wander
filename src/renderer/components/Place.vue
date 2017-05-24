<template>
  <div id="place">
    <file
      v-for="file in sortedContents"
      :key="file.path"
      :file="file">
    </file>
  </div>
</template>

<script>
  import File from './Place/File'
  import junk from 'junk'
  import { join } from 'path'

  export default {
    name: 'place',
    created () {
      this.load(this.$route.query.path)
    },
    beforeRouteUpdate (to, from, next) {
      this.load(to.query.path)
    },
    components: { File },
    computed: {
      contents () {
        return this.$store.state.Place.contents.filter(({ name }) => junk.not(name) && !/^\./.test(name))
      },
      pathExists () {
        return this.sortedContents.length > 0
      },
      sortedContents () {
        return [
          ...this.contents.filter(file => file.stat.isDirectory()),
          ...this.contents.filter(file => file.stat.isFile())
        ]
      }
    },
    data () {
      return {

      }
    },
    methods: {
      load (path = this.$electron.remote.app.getPath('home')) {
        path = join(path)
        this.$store.dispatch('getContents', path).then(() => {
          this.$store.commit('setPlacePath', path)
        }, err => {
          console.error(err)
          this.$route.push('/')
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #place {
    background: $background;
    height: calc(100vh - 134px);
    overflow: auto;
  }
</style>
