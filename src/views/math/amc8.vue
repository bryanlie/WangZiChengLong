<template>
    <Navbar />

    <v-container>
        <v-row>
            <v-col cols="12">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <h2 class="display-1">{{ $t('amc8.title') }}</h2>
                    </v-col>
                </v-row>

                

                <v-row>
                    <v-col cols="12">
                        <h3 class="display-2">{{ $t('amc8.what_is_amc8_title') }}</h3>
                        <p class="body-1">
                            {{ $t('amc8.what_is_amc8_p') }}
                        </p>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <h3 class="display-2">{{ $t('amc8.core_areas_title') }}</h3>
                        <ul>
                            <li class="body-1">
                                <strong>{{ $t('amc8.arithmetic_logic_title') }}</strong> {{ $t('amc8.arithmetic_logic_p') }}
                            </li>
                            <li class="body-1">
                                <strong>{{ $t('amc8.number_theory_title') }}</strong> {{ $t('amc8.number_theory_p') }}
                            </li>
                            <li class="body-1">
                                <strong>{{ $t('amc8.algebraic_word_problems_title') }}</strong> {{ $t('amc8.algebraic_word_problems_p') }}
                            </li>
                        </ul>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <h3 class="display-2">{{ $t('amc8.additional_topics_title') }}</h3>
                        <ul>
                            <li class="body-1">
                                <strong>{{ $t('amc8.counting_probability_title') }}</strong> {{ $t('amc8.counting_probability_p') }}
                            </li>
                            <li class="body-1">
                                <strong>{{ $t('amc8.estimation_patterns_title') }}</strong> {{ $t('amc8.estimation_patterns_p') }}
                            </li>
                            <li class="body-1">
                                <strong>{{ $t('amc8.elementary_geometry_title') }}</strong> {{ $t('amc8.elementary_geometry_p') }}
                            </li>
                            <li class="body-1">
                                <strong>{{ $t('amc8.reading_interpreting_graphs_title') }}</strong> {{ $t('amc8.reading_interpreting_graphs_p') }}
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
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <h2 class="display-1">{{ $t('amc8.prep_tips_title') }}</h2>
                            <ul>
                                <li class="body-1">
                                    {{ $t('amc8.official_prep_p') }} <a href="https://maa.org/student-programs/amc/" target="_blank">MAA AMC</a>
                                </li>
                                <li class="body-1">
                                    {{ $t('amc8.aops_prep_p') }} <a href="https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions" target="_blank">{{ $t('amc8.aops_prep_link') }}</a>
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
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <h2 class="display-1">{{ $t('amc8.books_with_links_title') }}</h2>
                            <ul style="list-style: none;">
                                <li class="body-1">
                                    <v-row align="center">
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <a href="https://www.amazon.com/Prealgebra-Richard-Rusczyk/dp/1934124214" target="_blank">
                                                <v-img src="../../assets/aopsPrealg.jpg" contain height="300"/>
                                            </a>
                                        </v-col>
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <a href="https://www.amazon.com/Problem-Solving-Introduction-Textbook-Solutions/dp/B00NFSNIJE" target="_blank">
                                                <v-img src="../../assets/aopsAlg.jpg" contain height="300"/>
                                            </a>
                                        </v-col>
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <a href="https://www.amazon.com/Introduction-Counting-Probability-David-Patrick/dp/0977304507/ref=sr_1_4" target="_blank">
                                                <v-img src="../../assets/aopsProp.jpg" contain height="300"/>
                                            </a>
                                        </v-col>
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <a href="https://www.amazon.com/Introduction-Number-Theory-Problem-Solving/dp/1934124125/ref=sr_1_1" target="_blank">
                                                <v-img src="../../assets/aopsNumb.jpg" contain height="300"/>
                                            </a>
                                        </v-col>
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <a href="https://www.amazon.com/Introduction-Geometry-2nd-Problem-Solving/dp/1934124087" target="_blank">
                                                <v-img src="../../assets/aopsGeom.jpg" contain height="300"/>
                                            </a>
                                        </v-col>
                                        <v-col cols="12" md="10" class="pl-md-2">
                                            <p>{{ $t('amc8.aops_series_p') }}
                                            </p>
                                        </v-col>
                                    </v-row>
                                </li>
                                <li class="body-1">
                                    <v-row align="center">
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <a href="https://www.amazon.com/American-Mathematics-Competitions-AMC-Preparation/dp/150061419X" target="_blank">
                                                <v-img src="../../assets/amc8prepV1.jpg" contain height="300"/>
                                            </a>
                                        </v-col>
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <a href="https://www.amazon.com/American-Mathematics-Competitions-AMC-Preparation/dp/1500965634" target="_blank">
                                                <v-img src="../../assets/amc8prepV2.jpg" contain height="300"/>
                                            </a>
                                        </v-col>
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <a href="https://www.amazon.com/American-Mathematics-Competitions-AMC-Preparation/dp/1501040553" target="_blank">
                                                <v-img src="../../assets/amc8prepV3.jpg" contain height="300"/>
                                            </a>
                                        </v-col>
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <a href="https://www.amazon.com/American-Mathematics-Competitions-AMC-Preparation/dp/1501040561" target="_blank">
                                                <v-img src="../../assets/amc8prepV4.jpg" contain height="300"/>
                                            </a>
                                        </v-col>
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <a href="https://www.amazon.com/American-Mathematics-Competitions-AMC-Preparation/dp/1503019705" target="_blank">
                                                <v-img src="../../assets/amc8prepV5.jpg" contain height="300"/>
                                            </a>
                                        </v-col>
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <a href="https://www.amazon.com/American-Mathematics-Competitions-AMC-Preparation/dp/1507544162" target="_blank">
                                                <v-img src="../../assets/amc8prepV6.jpg" contain height="300"/>
                                            </a>
                                        </v-col>
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <a href="https://www.amazon.com/American-Mathematics-Competitions-AMC-Preparation/dp/1728952182" target="_blank">
                                                <v-img src="../../assets/amc8prepV7.jpg" contain height="300"/>
                                            </a>
                                        </v-col>
                                        <v-col cols="12" md="8" class="pl-md-2">
                                            <p>{{ $t('amc8.amc_prep_series_p') }}
                                            </p>
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
    name: 'AMC8',
    components: {
        Navbar, Footer
    },
};
</script>

<style scoped>

</style>
