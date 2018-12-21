<template>
  <v-app>
    <v-toolbar app dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>NS</span>
        <span class="font-weight-light">JS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content transition="slide-x-transition">
      <router-view></router-view>
      
      
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>
