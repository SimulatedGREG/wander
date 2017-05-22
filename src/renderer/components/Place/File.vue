<template>
  <div class="file">
    <div class="tile tile-centered">
      <div class="tile-icon">
        <div class="example-tile-icon">
          <i class="icon icon-file centered"></i>
        </div>
      </div>
      <div class="tile-content">
        <div class="tile-title">{{ file.name }}</div>
        <div
          class="tile-subtitle"
          v-if="isFile">
          {{ file.stat.size | prettySize }} · {{ file.stat.birthtime | prettyDateTime }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'file',
    props: {
      file: Object
    },
    computed: {
      isFile () {
        return this.file.stat.isFile()
      }
    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="css" scoped>
</style>
