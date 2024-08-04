<template>
    <Navbar />

    <v-container>
        <v-row>
            <v-col cols="12">
            <v-container class="my-4">
                <v-row>
                    <v-col cols="12">
                        <v-img src="../assets/Learning-English.png" class="my-4" contain height="500" />
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <h2>English education in K-12 US schools</h2>
                        
                        <h3>Philosophy:</h3>
                            <ul>
                                <li><b><i> Literacy and Communication:</i></b> This foundational skillset equips students with the essential abilities to read, write, speak, and listen effectively, laying the groundwork for lifelong success.</li>
                                <li><b><i> Critical Thinking and Analysis:</i></b> English courses empower students to deconstruct information, develop persuasive arguments, and articulate their ideas effectively. By cultivating critical reading habits and inspiring thoughtful discourse, these courses equip students for independent thought.</li>
                                <li><b><i> Cultural Awareness and Appreciation:</i></b> Through exposure to a diverse range of literature spanning cultures and eras, students cultivate a broader worldview and a deeper appreciation for human experience.</li>
                                <li><b><i> College and Career Readiness:</i></b>  Mastering effective communication is paramount for success in both higher education and professional life. English courses equip students with the advanced writing and critical thinking skills essential to thrive in these demanding environments.</li>
                            </ul>
                        <br>
                        <h3>Methodology:</h3>
                            <ul>
                                <li><b><i>Balanced Literacy Approach:</i></b> This method incorporates various activities to develop all aspects of literacy. It includes phonics instruction for foundational reading skills, exposure to rich literature to build vocabulary and comprehension, and guided writing exercises that focus on different writing styles and purposes.</li>
                                <li><b><i>Close Reading and Text Analysis:</i></b>  Students delve deeply into texts, examining elements like plot, character development, figurative language, and authorial intent. This trains them to critically analyze information, identify themes, and form their own interpretations.</li>
                                <li><b><i>Differentiated Instruction:</i></b>  This recognizes that students have different learning styles and paces. Teachers use various activities, texts at different reading levels, and scaffolding techniques to ensure all students are challenged and supported. This could involve small group work, individual projects, or technology integration.</li>
                                <li><b><i>Student-Centered Learning:</i></b>  Moving away from teacher-directed lectures, this approach encourages active student participation. This can involve discussions, debates, presentations, creative writing assignments, and student-led projects. It fosters critical thinking, collaboration, and communication skills.</li>
                            </ul>
                        <br>
                        For more details about learning English, visit the <router-link to="/language/english">English page</router-link>
                        
                    </v-col>
                </v-row>
            </v-container>
            </v-col>
        </v-row>
    </v-container>

    <v-container>
        <v-row>
            <v-col cols="12">
            <v-container class="my-4">
                <v-row>
                    <v-col cols="12">
                        <v-img src="../assets/chinese-lang.png" class="my-4" contain height="500" />
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <h2>Chinese language learning for American students</h2>
                        
                        <h3>Laying a Solid Foundation in Chinese Language Skills:</h3>
                            <ul>
                                <li><b><i>Mastering Basic Literacy:</i></b> Students should develop proficiency in reading and writing Chinese characters, including recognizing and writing thousands of characters, understanding their meanings, and using them correctly in context.</li>
                                <li><b><i>Developing Oral and Aural Skills:</i></b> Students should cultivate strong listening and speaking abilities, enabling them to comprehend spoken Chinese in various situations, engage in conversations fluently, and express their thoughts clearly and accurately.</li>
                                <li><b><i>Grasping Grammar and Syntax:</i></b> Students should acquire a thorough understanding of Chinese grammar rules, sentence structure, and word usage, enabling them to construct grammatically correct and meaningful sentences in both written and spoken forms.</li>
                            </ul>
                            <br>
                            <h3>Nurturing Cultural Appreciation and Understanding:</h3>
                            <ul>
                                <li><b><i>Exploring Chinese Literature:</i></b> Students should immerse themselves in a rich variety of Chinese literary works, including classical poetry, prose, and modern literature. This exposure fosters an appreciation for Chinese culture, values, and historical context.</li>
                                <li><b><i>Understanding Chinese Customs and Traditions:</i></b> Students should gain insights into Chinese customs, traditions, and social norms, promoting cross-cultural understanding and respect.</li>
                                <li><b><i>Developing Intercultural Communication Skills:</i></b> Students should learn to communicate effectively in culturally sensitive ways, recognizing and bridging potential cultural gaps in interactions with Chinese speakers.</li>
                            </ul>
                            <br>
                            <h3>Fostering Critical Thinking and Creativity:</h3>
                            <ul>
                                <li><b><i>Analyzing Texts and Ideas:</i></b> Students should develop critical thinking skills by analyzing Chinese texts, identifying themes, evaluating arguments, and forming their own interpretations.</li>
                                <li><b><i>Expressing Ideas Effectively:</i></b> Students should learn to express their thoughts, opinions, and arguments clearly and persuasively in both written and spoken Chinese.</li>
                                <li><b><i>Engaging in Creative Language Use:</i></b> Students should be encouraged to explore creative forms of language expression, such as writing poetry, composing stories, or creating multimedia presentations in Chinese.</li>
                            </ul>
                        <br>
                        For more details about learning Chinese, visit the <router-link to="/language/chinese">Chinese page</router-link>

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
    name: 'LanguageView',
    components: {
        Navbar,  Footer
    },
};

</script>

<style scoped>

</style>
