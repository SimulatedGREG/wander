<template>
  <div id="breadcrumbs">
    <ul class="breadcrumb">
      <li class="breadcrumb-item" v-for="crumb in crumbs">
        <router-link :to="{ name: 'place', query: { path: crumb.path } }">
          {{ crumb.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      delimiter () {
        return process.platform === 'win32'
          ? '\\'
          : '/'
      },
      crumbs () {
        let arr = []
        let split = this.placePath.split(this.delimiter)

        for (let x = 0; x < split.length; x++) {
          let obj = {
            name: split[x],
            path: this.delimiter
          }

          for (let y = x; y > 0; y--) {
            obj.path = this.delimiter + split[y] + obj.path
          }

          arr.push(obj)
        }

        return arr
      },
      placePath () {
        return this.$store.state.Place.path
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
