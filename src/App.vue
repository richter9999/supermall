<template>
  <div id="nav">
    <router-view/>
    <main-tab-bar/>
  </div>

</template>

<script>

import MainTabBar from "@/components/tabbar/MainTabBar";
export default {
  name: 'App',
  components: {MainTabBar},
}
</script>

<style>
#nav {
  display: flex;
}

</style>
