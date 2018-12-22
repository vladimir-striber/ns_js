<template>
  <v-app>
    <v-toolbar app class="yellow">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="nsjs_logo headline text-uppercase">
        <span class="display-1">NS</span>
        <span class="font-weight-light display-1">JS</span>
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
  .nsjs_logo {
    color: #333;
  }

</style>
