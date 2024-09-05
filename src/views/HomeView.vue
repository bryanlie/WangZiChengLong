<template>
  <Navbar />
  <v-container>
    <v-container class="home">
      <v-row align="center">
        <v-col cols="12" sm="6">
          <v-img src="../assets/wangzichenglong.png" class="my-4" contain height="300" />
        </v-col>
        <v-col cols="12" sm="6">
          <v-card class="pa-4">
            <v-card-text>
              <p class="headline">
                {{ $t('homepage.logo_intro') }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  
    <v-container fluid class="ma-5">
        <h2> {{ $t('homepage.welcome') }} </h2>
        <h3>{{ $t('homepage.header') }}</h3>

        <p>{{ $t('homepage.platform') }} </p>

        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-4">
              <v-card-text>
                <h3>{{ $t('homepage.key_pt1_header') }}</h3>
                <p>{{ $t('homepage.key_pt1') }}</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-4">
              <v-card-text>
                <h3>{{ $t('homepage.key_pt2_header') }}</h3>
                <p>{{ $t('homepage.key_pt2') }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <p>{{ $t('homepage.journey') }}</p>

        <v-img src="../assets/yourjourney.jpg"  />
  </v-container>
  
      
  <v-container fluid class="ma-5">
      <h2>Bridging East and West: A Blended Approach to Education</h2>
      <p>As we embark on this journey together, it's important to acknowledge the distinct approaches to education in
         Eastern and Western cultures. Each offers unique strengths, and by understanding these differences, 
         we can create a more holistic learning experience for our children.</p>

        <v-row>
        <v-col cols="12" md="6">
          <v-card class="pa-4">
            <v-card-text>
      
              <p><strong>Eastern Education</strong> emphasizes a strong foundation in core subjects like math, science, and language, 
                building a solid base for future learning. This focus on mastery is complemented by a culture of respect for teachers and elders, 
                fostering discipline and a strong work ethic. Eastern classrooms often utilize memorization techniques to promote knowledge retention and focus.</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-4">
            <v-card-text>
              <p><strong>Western Education</strong> fosters well-rounded individuals by encouraging critical thinking, analysis, and problem-solving skills. 
                 Western classrooms celebrate individuality and self-expression, 
                allowing students to share their unique perspectives. Collaborative learning is also a hallmark, preparing students for teamwork and success in the real world.</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="20" sm="12">
          <v-card class="pa-4">
            <v-card-text>
                <h2>Creating a Holistic Learning Experience by Embracing the Strengths of Both Worlds</h2>
              <p>By acknowledging these differences, we can strive to create a blended approach that leverages the strengths of both Eastern and Western education. Here's how:</p>
              <ul>
                <li>Balance Rigor with Innovation: We can incorporate the emphasis on foundational knowledge from the East with the encouragement of creativity from the West.</li>
                <li>Foster Respectful Inquiry: Encourage students to ask questions while maintaining an environment that honors teachers and the learning process.</li>
                <li>Develop Well-Rounded Individuals: Combine a focus on core subjects with an appreciation for diverse skills and interests.</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <v-row align="center">
                  <v-col cols="12" md="2" class="pr-md-2">
                    <a href="https://www.amazon.com/Battle-Hymn-Tiger-Mother-Chua/dp/0143120581/ref=sr_1_1" target="_blank">
                      <v-img src="../assets/battle.jpg" contain height="300"/>
                    </a>  
                  </v-col>
                  <v-col cols="12" md="6" class="pl-md-2">
                      <p>Battle Hymn of the Tiger Mother is a memoir by Amy Chua that ignited a global debate on parenting styles. 
                        Chua candidly shares her experiences raising her daughters with a demanding, Chinese-influenced approach she terms "Tiger Mothering." 
                        By contrasting her methods with the perceived permissiveness of Western parenting, the book sparked intense discussions about culture, child development, and the appropriate balance between nurture and discipline. 
                        <a href="https://www.amazon.com/Battle-Hymn-of-Tiger-Mother-audiobook/dp/B004INSU48/ref=tmm_aud_swatch_0?_encoding=UTF8&qid=&sr=" target="_blank">Audiobook Free trial</a>
                      </p>
                  </v-col>
              </v-row>
      <br>
      <v-img src="../assets/bridge.jpg"  />
  </v-container>

    
  <v-container fluid class="ma-5">
      <h2>Cracking the Ivy League Code: A Guide to College Admissions Success</h2>
      <p>Unlocking the gatekeepers to top universities, including Ivy League institutions, is a dream for many students. 
        These institutions are renowned for their academic rigor and exceptional learning environments. 
        Here, we'll unveil some general principles and guidelines to strengthen your child's application and increase their chances of admission.
      </p>

      <v-row>
        <v-col cols="20" sm="12">
          <v-card class="pa-4">
            <v-card-text>
              <p><strong>Academic Excellence:</strong> Strong academic performance is a cornerstone of college admissions. Encourage your child to excel in their coursework, 
                take challenging classes, and maintain a high GPA. Additionally, standardized test scores like the SAT or ACT play a significant role in the admissions process.</p>
              <p><strong>Extracurricular Involvement:</strong> in extracurricular activities demonstrates a well-rounded student. Encourage your child to pursue their passions, 
                join clubs, volunteer, and take on leadership roles. These experiences showcase their interests, skills, and commitment beyond the classroom.</p>
            </v-card-text>
          </v-card>
          
          
             
        </v-col>
        <v-col cols="12" sm="6">
          <v-card class="pa-4">
            <v-card-title>
              <v-img src="../assets/girl.webp"  />
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card class="pa-4">
            <v-card-title>
              <v-img src="../assets/boy.webp"  />
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
      
    <v-container fluid class="ma-5">
    <h2>Unlocking Your Child's Potential: Nurturing Lifelong Learning</h2>
    <p>While college admissions are a significant milestone, the journey doesn't end there. Lifelong learning is a continuous process that extends far beyond the classroom, 
      enriching your child's personal and professional life. Here are some key aspects of lifelong education:</p>
    <v-row>
      <v-col cols="20" sm="12">
        <v-card class="pa-4">
          <v-card-text>
            <p><strong>Developing Life Skills:</strong> 
              Beyond academics, lifelong education encompasses essential life skills like financial literacy, relationship management, 
              communication skills, and critical thinking. These skills empower individuals to navigate complex situations, make sound decisions, and build fulfilling lives.</p>
            <p><strong>Adaptability and Resilience: </strong> 
              world is constantly changing, and lifelong learning fosters the ability to adapt to new information, technologies, 
              and career landscapes. By encouraging a love of learning, you equip your child with the resilience and flexibility to thrive in an ever-evolving world.</p>
            <p><strong>Personal Growth and Well-Being:</strong> 
              Lifelong learning isn't just about acquiring knowledge; it's about personal growth and well-being. 
              Exploring diverse interests, hobbies, and learning opportunities fosters self-discovery, creativity, and a sense of purpose.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-img src="../assets/lifelong-learning.png"  />
  </v-container>

</v-container>

<Footer />

</template>



<script>
import { defineComponent } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

// Components


export default defineComponent({
  name: 'HomeView',

  components: {
    Navbar, Footer
  },

  data() {
    return {
      
    };
  },
});
</script>
