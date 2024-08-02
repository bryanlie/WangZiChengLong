<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      customTitle: 'Wang Zi Cheng Long'
    };
  },
  mounted() {
    document.title = this.customTitle;
  }
}
</script>
