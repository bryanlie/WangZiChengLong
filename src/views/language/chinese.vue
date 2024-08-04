<template>
    <Navbar />

    <v-container>
        <v-row>
            <v-col cols="12">
            <v-container class="my-4">
                <v-row>
                    <v-col cols="12">
                        <v-img src="../../assets/zhongwen.png" class="my-4" contain height="300" />
                    </v-col>
                </v-row>


                <v-row>
                    <v-col cols="12">
                        <div>
                            <h2>Learn Chinese</h2>

                            <h3>Weekend Schools:</h3>
                            <p>
                                <ul>
                                    <li>Community Staple: A popular choice, especially within Chinese communities. Weekend schools offer structured learning on weekends, typically covering speaking, reading, writing, and listening.</li>
                                    <li>According to statistics from the National Association of Chinese Language Schools, the association currently has over 400 member schools in nearly 50 states across the United States, with over 100,000 students.</li>
                                </ul>
                            </p>

                            <h3>Online Courses</h3>
                            <p>
                                <ul>
                                    <li>LingoAce is an online language learning platform that specializes in teaching Mandarin Chinese to children aged 3-15 years old. 
                                        LingoAce offers one-on-one online classes with dedicated teachers tailored to each child's unique learning needs and goals.
                                        <a href="https://www.lingoace.com/programs/learn-chinese/" target="_blank">LingoAce Learn Chinese</a></li>
                                    <li>Yoyo Chinese is an online platform designed to teach Mandarin Chinese, particularly for beginners and intermediate learners.
                                        The platform uses short video lessons (typically 4-10 minutes long) to explain concepts, pronunciations, and cultural information.
                                        <a href="https://yoyochinese.com/" target="_blank">Yoyo Chinese</a></li>
                                    <li>Everyday Chinese is an online platform designed to help people learn Mandarin Chinese. 
                                        The platform emphasizes teaching "the most authentic Chinese we use every day in China," making it relevant for real-life situations.
                                        <a href="https://www.everydaychinese.com/" target="_blank">Everyday Chinese</a>
                                    </li>
                                </ul>
                            </p>

                            <h3>Official websites</h3>
                            <p>
                                <ul>
                                    <li>The National Primary and Secondary School Smart Education Platform is a comprehensive online learning platform developed by the Ministry of Education of China. 
                                        It aims to provide high-quality digital educational resources and services to primary and secondary school students across the country.
                                        The platform offers a vast library of digital learning resources: textbooks, teaching materials, multimedia content, and online courses -- all aligned with the national curriculum.
                                        <a href="https://basic.smartedu.cn/" target="_blank">Smart Education Platform</a></li>
                                    <li>The National Digital Library of China is a treasure trove of Chinese cultural heritage. Established in 2002, it offers online access to millions of digital items including books, historical documents, multimedia resources, and more. The NDLC serves as a valuable resource for scholars, students, and anyone interested in exploring Chinese culture.
                                        <a href="https://www.nlc.cn/web/index.shtml" target="_blank">NDLC</a></li>
                                    <li>China Documentary Network is a treasure trove of Chinese documentaries. Launched in 2009, it offers a vast online library of over 10,000 documentaries for streaming or download. Explore history, culture, nature, and more through these captivating films. Whether you're a documentary buff or simply curious about China, CDN has something for you.
                                        <a href="http://www.docuchina.cn/" target="_blank">China Documentary Network</a>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
            </v-col>
        </v-row>
    </v-container>

    <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'Chinese',
    components: {
        Navbar, Footer
    },
};
</script>

<style scoped>

</style>
