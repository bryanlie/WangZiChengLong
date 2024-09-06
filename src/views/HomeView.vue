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
      <h2>{{ $t('homepage.bridge')}}</h2>
      <p>{{ $t('homepage.embark') }}</p>

        <v-row>
        <v-col cols="12" md="6">
          <v-card class="pa-4">
            <v-card-text>
      
              <p><strong>{{ $t('homepage.east_edu') }}  </strong> {{ $t('homepage.key_pt3') }}</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card class="pa-4">
            <v-card-text>
              <p><strong>{{ $t('homepage.west_edu') }}</strong> {{ $t('homepage.foster') }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="20" sm="12">
          <v-card class="pa-4">
            <v-card-text>
                <h2>{{ $t('homepage.experience')}}</h2>
              <p>{{ $t('homepage.difference')}}</p>
              <ul>
                <li>{{ $t('homepage.innovation') }}</li>
                <li>{{ $t('homepage.inquiry')}}</li>
                <li>{{ $t('homepage.individual')}}</li>
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
                      <p>{{ $t('homepage.tiger_mom')}}
                        <a href="https://www.amazon.com/Battle-Hymn-of-Tiger-Mother-audiobook/dp/B004INSU48/ref=tmm_aud_swatch_0?_encoding=UTF8&qid=&sr=" target="_blank">{{ $t('homepage.audiobook')}}</a>
                      </p>
                  </v-col>
              </v-row>
      <br>
      <v-img src="../assets/bridge.jpg"  />
  </v-container>

    
  <v-container fluid class="ma-5">
      <h2>{{ $t('homepage.crack')}}</h2>
      <p>{{ $t('homepage.unlock')}}
      </p>

      <v-row>
        <v-col cols="20" sm="12">
          <v-card class="pa-4">
            <v-card-text>
              <p><strong>{{ $t('homepage.academic')}}</strong> {{ $t('homepage.key_pt4')}}</p>
              <p><strong>{{ $t('homepage.extra')}}</strong> {{ $t('homepage.activity') }} </p>
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
      <h2>{{ $t('homepage.title') }}</h2>
      <p>{{ $t('homepage.description') }}</p>
    <v-row>
      <v-col cols="20" sm="12">
        <v-card class="pa-4">
          <v-card-text>
            <p><strong>{{ $t('homepage.life_skills_title') }}</strong> {{ $t('homepage.life_skills_desc') }}</p>
            <p><strong>{{ $t('homepage.adaptability_title') }}</strong> {{ $t('homepage.adaptability_desc') }}</p>
            <p><strong>{{ $t('homepage.personal_growth_title') }}</strong> {{ $t('homepage.personal_growth_desc') }}</p>

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
