<template>
  <div class="file">
    <div class="tile tile-centered">
      <div class="tile-icon">
        <div class="example-tile-icon">
          <i class="icon icon-file centered"></i>
        </div>
      </div>
      <div class="tile-content">
        <template v-if="!isFile">
          <router-link tag="div" event="dblclick" :to="{ name: 'place', query: { path: file.path } }">
            <div class="tile-title">{{ file.name }}</div>
            <div
              class="tile-subtitle"
              v-if="isFile">
              {{ file.stat.size | prettySize }} · {{ file.stat.birthtime | prettyDateTime }}
            </div>
          </router-link>
        </template>
        <template v-else>
          <div class="tile-title" @dblclick="$electron.shell.openItem(file.path)">{{ file.name }}</div>
        </template>
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
    }
  }
</script>

<style lang="scss" scoped>
  .file {
    padding: 10px;
  }
</style>
