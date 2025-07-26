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
                    <h2>{{ $t('math.general_math_categories') }}</h2>

                    <h3>{{ $t('math.pure_math') }}</h3>
                    <p>
                        {{ $t('math.pure_math_p') }}
                    </p>

                    <h3>{{ $t('math.applied_math') }}</h3>
                    <p>
                        {{ $t('math.applied_math_p') }}
                    </p>

                    <h3>{{ $t('math.competitive_math') }}</h3>
                    <p>
                        {{ $t('math.competitive_math_p') }}
                    </p>
                </div>
            </v-col>
        </v-row>
    </v-container>

    

    <v-container class="my-4">
        <v-row>
            <v-col cols="12">
                <v-img src="../assets/math_geometry.jpg" class="my-4" contain height="380" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div>
                    <h2>{{ $t('math.popular_competitions_elem_middle') }}</h2>

                    <p><strong> <a href="https://mathkangaroo.org/mks/" target="_blank">{{ $t('math.math_kangaroo') }}</a></strong>
                        {{ $t('math.math_kangaroo_p') }}
                        Also see <a href="https://www.matematica.pt/en/useful/kangaroo-questions.php" target="_blank">{{ $t('math.kangaroo_questions') }}</a>
                    </p>

                    <p><strong><a href="https://www.pimathcontest.com/" target="_blank">{{ $t('math.pi_math_contest') }}</a> </strong>
                        {{ $t('math.pi_math_contest_p') }}
                        <v-row align="center">
                            <v-col cols="12" md="2" class="pr-md-2">
                                <a href="https://www.amazon.com/Math-Contest-Elementary-2015-2018-ALPHASTAR/dp/B09V27HFMP" target="_blank">
                                    <v-img src="../assets/piMathContestV1.jpg" contain height="300"/>
                                </a>
                            </v-col>
                            <v-col cols="12" md="2" class="pr-md-2">
                                <a href="https://www.amazon.com/Math-Contest-Elementary-2019-2021-ALPHASTAR/dp/B0BSY4T832/ref=pd_bxgy_d_sccl_1/142-8678302-4789264" target="_blank">
                                    <v-img src="../assets/piMathContestV2.jpg" contain height="300"/>
                                </a>
                            </v-col>
                            <v-col cols="12" md="2" class="pr-md-2">
                                <a href="https://www.amazon.com/Pi-Math-Contest-2019-2021-ALPHASTAR/dp/B0BSY4T63L/ref=pd_bxgy_d_sccl_2/142-8678302-4789264" target="_blank">
                                    <v-img src="../assets/piMathContestV3.jpg" contain height="300"/>
                                </a>
                            </v-col>
                            <v-col cols="12" md="6" class="pl-md-2">
                                <p>{{ $t('math.pi_math_books_p') }}
                                </p>
                            </v-col>
                        </v-row>
                    </p>

                    <p><strong><a href="https://moems.org/" target="_blank">{{ $t('math.moems') }}</a></strong>
                        {{ $t('math.moems_p') }}
                        <v-row align="center">
                            <v-col cols="12" md="2" class="pr-md-2">
                                <a href="https://www.amazon.com/Olympiad-Contest-Problems-Elementary-Schools/dp/0962666211" target="_blank">
                                    <v-img src="../assets/moemsV1.jpg" contain height="300"/>
                                </a>
                            </v-col>
                            <v-col cols="12" md="2" class="pr-md-2">
                                <a href="https://www.amazon.com/Math-Olympiad-Contest-Problems-REVISED/dp/B00XHGQKXU/ref=pd_bxgy_d_sccl_1/142-8678302-4789264" target="_blank">
                                    <v-img src="../assets/moemsV2.jpg" contain height="300"/>
                                </a>
                            </v-col>
                            <v-col cols="12" md="2" class="pr-md-2">
                                <a href="https://www.amazon.com/Contest-Problems-Division-Richard-Kalman/dp/1882144120/ref=pd_bxgy_thbs_d_sccl_2/142-8678302-4789264" target="_blank">
                                    <v-img src="../assets/moemsV3.jpg" contain height="300"/>
                                </a>
                            </v-col>
                            <v-col cols="12" md="2" class="pr-md-2">
                                <a href="https://www.amazon.com/Moems-Contest-Problems-Vol-International/dp/B0CN1K9V84/ref=sr_1_10" target="_blank">
                                    <v-img src="../assets/moemsV4.jpg" contain height="300"/>
                                </a>
                            </v-col>
                            <v-col cols="12" md="4" class="pl-md-2">
                                <p>{{ $t('math.moems_books_p') }}
                                </p>
                            </v-col>
                        </v-row>
                    </p>

                    <p><strong>{{ $t('math.more_competitions') }}</strong>
                        {{ $t('math.more_competitions_elem_middle_p1') }} <br>
                        <a href="https://www.artofproblemsolving.com/wiki/index.php/List_of_United_States_elementary_school_mathematics_competitions" target="_blank">{{ $t('math.more_competitions_elem_middle_l1') }}</a>
                        <br> 
                        <a href="https://www.artofproblemsolving.com/wiki/index.php/List_of_United_States_middle_school_mathematics_competitions" target="_blank">{{ $t('math.more_competitions_elem_middle_l2') }}</a>
                    </p>
                    <p><strong>{{ $t('math.more_resources') }}</strong>
                         {{ $t('math.more_resources_p') }}
                        <br>
                        <a href="https://www.khanacademy.org/" target="_blank">{{ $t('math.khan_academy') }}</a>
                        <br>
                        <a href="https://artofproblemsolving.com/wiki/index.php/Resources_for_mathematics_competitions" target="_blank">{{ $t('math.aops_resources') }}</a>
                    </p>
                </div>
            </v-col>
        </v-row>
    </v-container>

    <v-container class="my-4">
        <v-row>
            <v-col cols="12">
                <v-img src="../assets/math_head.jpeg" class="my-4" contain height="580" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div>
                    <h2>{{ $t('math.popular_competitions_high') }}</h2>

                    <p><strong> <a href="https://maa.org/student-programs/amc/" target="_blank">{{ $t('math.amc') }}</a> </strong>
                        {{ $t('math.amc_p') }} <a href="https://artofproblemsolving.com/wiki/index.php/American_Invitational_Mathematics_Examination" target="_blank">{{ $t('math.aime') }}</a>.
                    </p>

                    <p><strong>{{ $t('math.usamo') }}</strong>
                        {{ $t('math.usamo_p') }} <a href="https://artofproblemsolving.com/wiki/index.php/United_States_of_America_Mathematical_Olympiad" target="_blank">{{ $t('math.usamo') }}</a> or {{ $t('math.usajmo') }}.
                    </p>

                    <p><strong>{{ $t('math.math_olympiads') }}</strong>
                        {{ $t('math.math_olympiads_p') }} <a href="https://artofproblemsolving.com/wiki/index.php/International_Mathematical_Olympiad" target="_blank">{{ $t('math.imo') }} </a> 
                        {{ $t('math.imo_p') }}
                    </p>

                    <p><strong><a href="https://www.hmmt.org/" target="_blank">{{ $t('math.hmmt') }}</a></strong>
                        {{ $t('math.hmmt_p') }}
                    </p>

                    <p><strong>{{ $t('math.more_competitions') }}</strong>
                        {{ $t('math.more_competitions_high_p') }} <br>
                        <a href="https://www.artofproblemsolving.com/wiki/index.php/List_of_United_States_high_school_mathematics_competitions" target="_blank">{{ $t('math.more_competitions_high_l1') }}</a>
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
                    <h2>{{ $t('math.amc_title') }}</h2>

                    <p><strong>{{ $t('nav.amc8') }}:</strong>
                        {{ $t('math.amc8_p1') }}
                        <router-link to="/math/amc8">{{ $t('math.amc8_page') }}</router-link>
                        
                    </p>

                    <p><strong>{{ $t('math.amc1012_title') }}</strong>
                        {{ $t('math.amc1012_p') }}
                    </p>

                    <p><strong>{{ $t('math.important') }}</strong>  
                        {{ $t('math.important_p') }}
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

