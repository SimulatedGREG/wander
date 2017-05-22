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
  import store from '@/store'

  export default {
    name: 'place',
    beforeRouteEnter (to, from, next) {
      store.dispatch('getContents', to.params.path).then(() => {
        next()
      }, err => {
        next()
        console.error(err)
      })
    },
    components: { File },
    computed: {
      contents () {
        return this.$store.state.Place.contents
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
    }
  }
</script>

<style lang="scss" scoped>
  #place {
    background: $background;
    height: calc(100vh - 80px);
    overflow: auto;
  }
</style>
