<template>
  <div id="app">
    <div class="columns col-gapless">
      <div class="column col-12">
        <ribbon></ribbon>
      </div>
      <div class="column col-12">
        <breadcrumbs></breadcrumbs>
      </div>
    </div>

    <div class="columns col-gapless">
      <div class="column col-3">
        <sidebar></sidebar>
      </div>

      <div class="column col-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Breadcrumbs from '@/components/Breadcrumbs'
  import Ribbon from '@/components/Ribbon'
  import Sidebar from '@/components/Sidebar'

  export default {
    name: 'wander',
    components: {
      Breadcrumbs,
      Ribbon,
      Sidebar
    }
  }
</script>

<style>
  @import "~spectre.css/dist/spectre.min.css";
  @import "~spectre.css/dist/spectre-icons.min.css";

  html,
  body {
    overflow: hidden;
  }

  .column { padding: 0 1em; }
</style>
