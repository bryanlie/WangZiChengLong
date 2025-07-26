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
    };
  },
  mounted() {
    document.title = this.$t('nav.site_title');
  },
  watch: {
    '$i18n.locale': function() {
      document.title = this.$t('nav.site_title');
    }
  }
}
</script>
