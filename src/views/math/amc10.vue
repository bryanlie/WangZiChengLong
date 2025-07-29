<template>
    <Navbar />

    <v-container>
        <v-row>
            <v-col cols="12">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <h2 class="display-1">{{ $t('amc10.title') }}</h2>
                    </v-col>
                </v-row>

                

                <v-row>
                    <v-col cols="12">
                        <h3 class="display-2">{{ $t('amc10.what_is_amc10_title') }}</h3>
                        <p class="body-1">
                            {{ $t('amc10.what_is_amc10_p') }}
                        </p>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <h3 class="display-2">{{ $t('amc10.core_areas_title') }}</h3>
                        <ul>
                            <li class="body-1">
                                <strong>{{ $t('amc10.algebra_title') }}</strong> {{ $t('amc10.algebra_p') }}
                            </li>
                            <li class="body-1">
                                <strong>{{ $t('amc10.geometry_title') }}</strong> {{ $t('amc10.geometry_p') }}
                            </li>
                            <li class="body-1">
                                <strong>{{ $t('amc10.number_theory_title') }}</strong> {{ $t('amc10.number_theory_p') }}
                            </li>
                            <li class="body-1">
                                <strong>{{ $t('amc10.counting_probability_title') }}</strong> {{ $t('amc10.counting_probability_p') }}
                            </li>
                            <li class="body-1">
                                <strong>{{ $t('amc10.arithmetic_title') }}</strong> {{ $t('amc10.arithmetic_p') }}
                            </li>
                        </ul>
                    </v-col>
                </v-row>
            </v-container>
            </v-col>
        </v-row>
    </v-container>

    <v-container>
        <v-row>
            <v-col cols="12">
                <h2 class="display-1">{{ $t('amc10.prep_tips_title') }}</h2>
                <v-container>
                  
                    <v-row>
                        <v-col cols="12">
                            <h3 class="display-2">{{ $t('amc10.aops_algebra_title') }}</h3>
                            <v-col cols="12" md="2" class="pr-md-2">
                                    <a href="https://www.amazon.com/Problem-Solving-Introduction-Textbook-Solutions/dp/B00NFSNIJE" target="_blank">
                                        <v-img src="../../assets/aopsAlg.jpg" contain height="200"/>
                                    </a>
                            </v-col>
                            <p class="body-1">{{ $t('amc10.aops_algebra_p') }}</p>
                            <ul>
                                <li class="body-1" v-for="(topic, index) in $tm('amc10.aops_algebra_topics')" :key="index">{{ topic }}</li>
                            </ul>
                        </v-col>
                    </v-row>

                    <v-row>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <h3 class="display-2">{{ $t('amc10.aops_geometry_title') }}</h3>
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <a href="https://www.amazon.com/Introduction-Geometry-2nd-Problem-Solving/dp/1934124087" target="_blank">
                                                <v-img src="../../assets/aopsGeom.jpg" contain height="200"/>
                                            </a>
                                        </v-col>
                                        <p class="body-1">{{ $t('amc10.aops_geometry_p') }}</p>
                                        <ul>
                                            <li class="body-1" v-for="(topic, index) in $tm('amc10.aops_geometry_topics')" :key="index">{{ topic }}</li>
                                        </ul>
                                    </v-col>
                                </v-row>
                            </v-container>
                    </v-row>

                    <v-row>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <h3 class="display-2">{{ $t('amc10.aops_number_theory_title') }}</h3>
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <a href="https://www.amazon.com/Introduction-Number-Theory-Problem-Solving/dp/1934124125/ref=sr_1_1" target="_blank">
                                                <v-img src="../../assets/aopsNumb.jpg" contain height="200"/>
                                            </a>
                                        </v-col>
                                        <p class="body-1">{{ $t('amc10.aops_number_theory_p') }}</p>
                                        <ul>
                                            <li class="body-1" v-for="(topic, index) in $tm('amc10.aops_number_theory_topics')" :key="index">{{ topic }}</li>
                                        </ul>
                                    </v-col>
                                </v-row>
                            </v-container>
                    </v-row>

                    <v-row>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <h3 class="display-2">{{ $t('amc10.aops_counting_title') }}</h3>
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <a href="https://www.amazon.com/Introduction-Counting-Probability-David-Patrick/dp/0977304507/ref=sr_1_4" target="_blank">
                                                <v-img src="../../assets/aopsProp.jpg" contain height="200"/>
                                            </a>
                                        </v-col>
                                        <p class="body-1">{{ $t('amc10.aops_counting_p') }}</p>
                                        <ul>
                                            <li class="body-1" v-for="(topic, index) in $tm('amc10.aops_counting_topics')" :key="index">{{ topic }}</li>
                                        </ul>
                                    </v-col>
                                </v-row>
                            </v-container>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            
                            {{ $t('amc10.official_prep_p') }} <a href="https://maa.org/student-programs/amc/" target="_blank">MAA AMC</a>
                            <br>   
                            {{ $t('amc10.aops_prep_p') }} <a href="https://artofproblemsolving.com/wiki/index.php/AMC_10_Problems_and_Solutions" target="_blank">{{ $t('amc10.aops_prep_link') }}</a>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>

    <v-container>
        <v-row>
            <v-col cols="12">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <h2 class="display-1">{{ $t('amc10.books_with_links_title') }}</h2>
                            <ul style="list-style: none;">
                                <li class="body-1">
                                    <v-row align="center">
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <a href="https://www.omegalearn.org/mastering-amc1012" target="_blank">
                                                <v-img src="../../assets/mastering_amc10.png" contain height="200"/>
                                            </a>
                                        </v-col>
                                        <v-col cols="12" md="10" class="pl-md-2">
                                            <p>{{ $t('amc10.aops_series_p') }}</p>
                                        </v-col>
                                    </v-row>
                                </li>
                            </ul>
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
    name: 'AMC10',
    components: {
        Navbar, Footer
    },
};
</script>

<style scoped>

</style>
