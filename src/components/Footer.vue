<template>
    <v-footer class="text-center py-4">
        &copy; {{ new Date().getFullYear() }} - Wang Zi Cheng Long - All Rights Reserved
        <v-spacer></v-spacer>
        <v-tabs
            v-model="tab"
            align-with-title
            background-color="transparent"
            color="white"
        >
            <v-tab v-for="t in tabs" :key="t.text" :to="t.route">
                {{ t.text }}
            </v-tab>
            
        </v-tabs>
        <v-spacer></v-spacer> 
        <v-btn icon rounded  @click="scrollToTop">
            <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
        
    </v-footer>
</template>
  
<script>
export default {
name: 'Footer',
data() {
  return {
        tabs: [
            { icon: 'home', text: 'Home', route: '/' },
            { icon: 'about', text: 'About', route: '/about' },
        ]
  };
},
methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
/* Add any custom footer styles here */
</style>
