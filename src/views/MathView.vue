<template>
    <Navbar position="left" />

    <v-app>
  
  

    <v-container class="my-4">
        <v-row>
            <v-col cols="12">
                <v-img src="../assets/mathbanner.jpg" class="my-4" contain height="400" />
            </v-col>
        </v-row>

        

        <v-row>
            <v-col cols="12">
                <div>
                    <h2>General Math Categories</h2>

                    <h3>Pure Mathematics</h3>
                    <p>
                        Have you ever wondered about the fundamental patterns hidden in numbers, shapes, and logic? Pure mathematics
                        delves into these, driven by the inherent beauty and structure of math itself. It explores concepts like
                        algebra, geometry, number theory, and topology. While pure math focuses on the elegance of mathematical
                        ideas, its discoveries often have surprising applications later on, like cryptography or computer graphics.
                    </p>

                    <h3>Applied Mathematics</h3>
                    <p>
                        Imagine using math to build bridges, predict weather patterns, or create secure online transactions. Applied
                        mathematics equips you with the tools to solve real-world problems across various fields. From optimizing
                        traffic flow to developing new drugs, applied mathematics provides a powerful toolkit for tackling
                        real-world challenges in science, engineering, finance, and more. This category includes probability and
                        statistics, operations research, game theory, and numerical analysis.
                    </p>

                    <h3>Competitive Mathematics</h3>
                    <p>
                        Do you thrive on challenges and creative problem-solving? Competitive mathematics is an exciting arena where
                        you race against the clock and others to find clever solutions. Competitive math emphasizes problem-solving
                        speed, creative approaches, and the thrill of competition. While the focus is on winning, competitive math
                        hones your problem-solving skills, creativity, and critical thinking - valuable assets not just for math
                        competitions, but for various academic and professional pursuits.
                    </p>
                </div>
            </v-col>
        </v-row>
    </v-container>

    

    <v-container class="my-4">
        <v-row>
            <v-col cols="12">
                <v-img src="../assets/math_geometry.jpg" class="my-4" contain height="400" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div>
                    <h2>Popular math competitions for elementary and middle school students</h2>

                    <p><strong>Math Kangaroo:</strong>
                        This worldwide competition focuses on fun and engaging math problems with multiple-choice answers. It caters to grades 1-12, 
                        with separate levels for elementary school students.
                    </p>

                    <p><strong>National Trimathlon: </strong>
                        This competition is designed for grades 3-6 and combines mental math, problem-solving, and speed rounds, making it a well-rounded challenge.
                    </p>

                    <p><strong>Pi Math Contest (PiMC):</strong>
                        This online competition offers two divisions for students up to grade 8. It emphasizes creative problem-solving and celebrates the fascination with pi.
                    </p>

                    <p><strong>Math League (various names):</strong>
                        This is a league-based competition with different names depending on your region. It offers various levels for middle school students, 
                        focusing on problem-solving skills.
                    </p>

                    <p><strong>Noetic Learning Math Contest (NLMC):</strong>
                        This semiannual competition is known for its challenging problems and encourages problem-solving approaches in grades 2-8.
                    </p>

                    <p><strong>Beestar National Competition:</strong>
                        This online competition is the largest of its kind for grades 2-8, offering multiple difficulty levels and promoting problem-solving strategies.
                    </p>
                </div>
            </v-col>
        </v-row>
    </v-container>

    <v-container class="my-4">
        <v-row>
            <v-col cols="12">
                <v-img src="../assets/math_head.jpeg" class="my-4" contain height="600" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div>
                    <h2>Popular math competitions can benefit college applications</h2>

                    <p><strong>American Mathematics Competitions (AMC)</strong>
                        This is a multi-tiered competition with the AMC 10/12 for high school students. 
                        Top scorers qualify for the next level, the American Invitational Mathematics Examination (AIME).
                    </p>

                    <p><strong>USA Mathematical Olympiad (USAMO)</strong>
                        This prestigious competition is the final stage of the AMC pipeline and is considered 
                        a major achievement for prospective math students.
                    </p>

                    <p><strong>Math Olympiads (MO)</strong>
                        The International Math Olympiad (IMO) and other regional Math Olympiads 
                        (like Asian Math Olympiad or European Girls' Mathematical Olympiad) are highly selective 
                        competitions for the absolute top math students globally.
                    </p>

                    <p><strong>Harvard-MIT Mathematics Tournament (HMMT)</strong>
                        This invitation-only team-based competition is known for its challenging problems and attracts top math students from around the world.
                    </p>
                </div>
            </v-col>
        </v-row>
    </v-container>

    <v-container class="my-4">
        <v-row>
            <v-col cols="12">
                <v-img src="../assets/amc_logo.png" class="my-4" contain height="500" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div>
                    <h2>American Mathematics Competitions</h2>

                    <p><strong>AMC 8:</strong>
                        This 25-question, 40-minute multiple-choice exam is designed for students in grades 8 and below (under 14.5 years old). 
                        It focuses on middle school math concepts.
                    </p>

                    <p><strong>AMC 10/12:</strong>
                        These are separate 25-question, 75-minute multiple-choice exams aimed at high school students. 
                        The AMC 10 is for students in grades 10 and below, while the AMC 12 is for those in grades 11 and 12. 
                        Both exams require strong problem-solving skills using pre-calculus math concepts. Calculators are not allowed since 2008.
                    </p>

                    <p><strong>Importance:</strong>  
                        Scoring well on the AMC 10 or 12 can qualify a student for the next level, the American Invitational Mathematics Examination (AIME).
                        High performance on the AIME and AMC can lead to invitations to the prestigious USA Mathematical Olympiad (USAMO), a training camp for the IMO team.
                        Top scorers on the USAMO are selected to represent the USA at the IMO, the pinnacle of international math competitions for high school students.
                    </p>

                    
                </div>
            </v-col>
        </v-row>
    </v-container>

</v-app>
    
<Footer />

</template>

<script>
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default defineComponent({
    name: 'MathView',
    components: {
        Navbar, Footer
    },
    data() {
        return {
            // blogList: [
            //     {
            //         id: 1,
            //         title: 'AMC 8',
            //         url: '/math/amc8'
            //     },
            // ],
        };
    },
    
});
</script>

<style scoped>

</style>

