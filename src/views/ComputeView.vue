<template>
    <Navbar />
    <v-container class="my-4">
        <v-row>
            <v-col cols="12">
                <v-img src="../assets/ComputerScience.png" class="my-4" contain height="300" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div>
                    <h2>{{ $t('compute.major_categories') }}</h2>

                    <p>{{ $t('compute.major_categories_p') }}</p>

                    <h3>{{ $t('compute.ai') }}</h3>
                    <p>
                        {{ $t('compute.ai_p') }}
                    </p>

                    <h3>{{ $t('compute.software_eng') }}</h3>
                    <p>
                        {{ $t('compute.software_eng_p') }}
                    </p>

                    <h3>{{ $t('compute.algorithms') }}</h3>
                    <p>
                        {{ $t('compute.algorithms_p') }}
                    </p>
                  
                </div>
            </v-col>
        </v-row>
    </v-container>

    <v-container class="my-4">
        <v-row>
            <v-col cols="12">
                <v-img src="../assets/cs_download.jpeg" class="my-4" contain height="400" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div>
                    <h2>{{ $t('compute.popular_competitions_kids') }}</h2>

                    <p><strong>{{ $t('compute.bebras') }}</strong>
                        {{ $t('compute.bebras_p') }}
                        <a href="https://www.bebraschallenge.org/" target="_blank">{{ $t('compute.bebras_link') }}</a>
                    </p>

                    <p><strong>{{ $t('compute.codemonkey') }} </strong>
                        {{ $t('compute.codemonkey_p') }}
                        <a href="https://www.codemonkey.com/" target="_blank">{{ $t('compute.codemonkey_link') }}</a>
                    </p>

                    <p><strong>{{ $t('compute.codechef') }}</strong>
                        {{ $t('compute.codechef_p') }}
                        <a href="https://www.codechef.com/" target="_blank">{{ $t('compute.codechef_link') }}</a>
                    </p>

                </div>
            </v-col>
        </v-row>
    </v-container>

    <v-container class="my-4">
        <v-row>
            <v-col cols="12">
                <v-img src="../assets/comp_sci_banner.jpg" class="my-4" contain height="532" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div>
                    <h2>{{ $t('compute.popular_competitions_college') }}</h2>

                    <p><strong>{{ $t('compute.usaco') }}</strong>
                        {{ $t('compute.usaco_p') }}
                        <a href="http://www.usaco.org/" target="_blank">{{ $t('compute.usaco_link') }}</a>
                    </p>

                    <p><strong>{{ $t('compute.acsl') }}</strong>
                        {{ $t('compute.acsl_p') }}
                        <a href="https://www.acsl.org/" target="_blank">{{ $t('compute.acsl_link') }}</a>
                    </p>
                    <p><strong>{{ $t('compute.imagine_cup') }}</strong>
                        {{ $t('compute.imagine_cup_p') }}
                        <a href="https://imaginecup.microsoft.com/" target="_blank">{{ $t('compute.imagine_cup_link') }}</a>              
                    </p>

                </div>
            </v-col>
        </v-row>
    </v-container>

    <v-container class="my-4">
        <v-row>
            <v-col cols="12">
                <v-img src="../assets/robots.png" class="my-4" contain height="516" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div>
                    <h2>{{ $t('compute.popular_robotics_competitions') }}</h2>

                    <p><strong>{{ $t('compute.frc') }}</strong>
                        {{ $t('compute.frc_p') }}
                        <a href="https://www.firstinspires.org/robotics/frc" target="_blank">{{ $t('compute.frc_link') }}</a>
                    </p>

                    <p><strong>{{ $t('compute.vex') }}</strong>
                        {{ $t('compute.vex_p') }}
                        <a href="https://www.roboticseducation.org/vex-robotics-competition/" target="_blank">{{ $t('compute.vex_link') }}</a>
                    </p>
                    <p><strong>{{ $t('compute.robocup') }}</strong>
                        {{ $t('compute.robocup_p') }}
                        <a href="https://www.robocup.org/" target="_blank">{{ $t('compute.robocup_link') }}</a>        
                    </p>

                </div>
            </v-col>
        </v-row>
        <br>
        <p>{{ $t('compute.dive_in') }}
                        <router-link to="/compute/python">{{ $t('compute.python_page') }}</router-link>
                    </p>
    </v-container>

    <Footer />
    
</template>

<script>
import Footer from '@/components/Footer.vue';
import Navbar from '../components/Navbar.vue';

export default {
    name: 'ComputeView',
    components: {
        Navbar, Footer
    },
};

</script>

<style scoped>

</style>
