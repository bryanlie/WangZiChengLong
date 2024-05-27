<template>
    <Navbar />

    <div>
        <h2>violin page</h2>
    </div>

    <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'Violin',
    components: {
        Navbar, Footer
    },
};
</script>

<style scoped>

</style>
