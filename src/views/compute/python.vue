<template>
    <Navbar />

    <v-container>
        <v-row>
            <v-col cols="12">
            <v-container class="my-4">
                <v-row>
                    <v-col cols="12">
                        <v-img src="../../assets/Python-Header.png" class="my-4" contain height="300" />
                    </v-col>
                </v-row>


                <v-row>
                    <v-col cols="12">
                        <div>
                            <h2>{{ $t('python.title') }}</h2>

                            <h3>{{ $t('python.why_learn_title') }}</h3>
                            <p>
                                <ul>
                                    <li><strong>{{ $t('python.easy_to_learn_title') }}:</strong> {{ $t('python.easy_to_learn_p') }}</li>
                                    <li><strong>{{ $t('python.versatile_title') }}:</strong> {{ $t('python.versatile_p') }}</li>
                                    <li><strong>{{ $t('python.in_demand_title') }}:</strong> {{ $t('python.in_demand_p') }}</li>
                                </ul>
                            </p>

                            <h3>{{ $t('python.popular_paths_title') }}</h3>
                            <p>
                                <ul>
                                    <li><strong>{{ $t('python.web_dev_title') }}:</strong> {{ $t('python.web_dev_p') }}</li>
                                    <li><strong>{{ $t('python.data_science_title') }}:</strong> {{ $t('python.data_science_p') }}</li>
                                    <li><strong>{{ $t('python.automation_title') }}:</strong> {{ $t('python.automation_p') }}</li>
                                </ul>
                            </p>

                            <h3>{{ $t('python.books_with_links_title') }}</h3>
                            <ul style="list-style: none;">
                                        <li class="body-1">
                                            <v-row align="center">
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Python-Crash-Course-Eric-Matthes-dp-1718502702/dp/1718502702" target="_blank">
                                                        <v-img src="../../assets/pythonCrashCourse.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="6" class="pl-md-2">
                                                    <p>{{ $t('python.python_crash_course_p') }}
                                                    </p>
                                                </v-col>
                                            </v-row>
                                        </li>
                                        <li class="body-1">
                                            <v-row align="center">
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Automate-Boring-Stuff-Python-2nd/dp/1593279922" target="_blank">
                                                        <v-img src="../../assets/autoBoringStuff.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="6" class="pl-md-2">
                                                    <p>{{ $t('python.automate_boring_stuff_p') }}
                                                    </p>
                                                </v-col>
                                            </v-row>                                
                                        </li>
                                        <li class="body-1">
                                            <v-row align="center">
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Fluent-Python-Concise-Effective-Programming/dp/1492056359" target="_blank">
                                                        <v-img src="../../assets/fluentPython.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="6" class="pl-md-2">
                                                    <p>{{ $t('python.fluent_python_p') }}
                                                    </p>
                                                </v-col>
                                            </v-row>                                
                                        </li>
                                
                                    </ul>
                        </div>
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
                        <v-img src="../../assets/ml-header.webp" class="my-4" contain height="300" />
                    </v-col>
                </v-row>


                <v-row>
                    <v-col cols="12">
                        <div>
                            <h2>{{ $t('python.ml_dl_title') }}</h2>

                            <h3>{{ $t('python.what_is_ml_title') }}</h3>
                            {{ $t('python.what_is_ml_p') }}
                            <p>
                                <ul>
                                    <li><strong>{{ $t('python.learning_from_data_title') }}:</strong> {{ $t('python.learning_from_data_p') }}</li>
                                    <li><strong>{{ $t('python.improving_over_time_title') }}:</strong> {{ $t('python.improving_over_time_p') }}</li>
                                    <li><strong>{{ $t('python.predictions_decisions_title') }}:</strong> {{ $t('python.predictions_decisions_p') }}</li>
                                </ul>
                            </p>

                            <h3>{{ $t('python.what_is_dl_title') }}</h3>
                            {{ $t('python.what_is_dl_p') }}
                            <p>
                                <ul>
                                    <li><strong>{{ $t('python.ann_title') }}:</strong> {{ $t('python.ann_p') }}</li>
                                    <li><strong>{{ $t('python.learning_through_hierarchies_title') }}:</strong> {{ $t('python.learning_through_hierarchies_p') }}</li>
                                    <li><strong>{{ $t('python.handling_large_data_title') }}:</strong> {{ $t('python.handling_large_data_p') }}</li>
                                    <li><strong>{{ $t('python.widespread_apps_title') }}:</strong> {{ $t('python.widespread_apps_p') }}</li>
                                </ul>
                            </p>

                            <h3>{{ $t('python.books_with_links_title') }}</h3>
                            <ul style="list-style: none;">
                                        <li class="body-1">
                                            <v-row align="center">
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.in/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/9355421982" target="_blank">
                                                        <v-img src="../../assets/handson-ML.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="6" class="pl-md-2">
                                                    <p>{{ $t('python.hands_on_ml_p') }}
                                                    </p>
                                                </v-col>
                                            </v-row>
                                        </li>
                                        <li class="body-1">
                                            <v-row align="center">
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Deep-Learning-Python-Francois-Chollet/dp/1617294438" target="_blank">
                                                        <v-img src="../../assets/dpPython.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="6" class="pl-md-2">
                                                    <p>{{ $t('python.dl_with_python_p') }}
                                                    </p>
                                                </v-col>
                                            </v-row>                                
                                        </li>
                                        <li class="body-1">
                                            <v-row align="center">
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Deep-Learning-Adaptive-Computation-Machine/dp/0262035618" target="_blank">
                                                        <v-img src="../../assets/deepLearning.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="6" class="pl-md-2">
                                                    <p>{{ $t('python.deep_learning_book_p') }}
                                                    </p>
                                                </v-col>
                                            </v-row>                                
                                        </li>
                                
                                    </ul>
                        </div>
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
                        <v-img src="../../assets/llm_gpt.png" class="my-4" contain height="300" />
                    </v-col>
                </v-row>


                <v-row>
                    <v-col cols="12">
                        <div>
                            <h2>{{ $t('python.gen_ai_llm_title') }}</h2>

                            <h3>{{ $t('python.what_is_gen_ai_title') }}</h3>
                            {{ $t('python.what_is_gen_ai_p') }}
                            <p>
                                <ul>
                                    <li><strong>{{ $t('python.creative_potential_title') }}:</strong> {{ $t('python.creative_potential_p') }}</li>
                                    <li><strong>{{ $t('python.multi_modal_title') }}:</strong> {{ $t('python.multi_modal_p') }}</li>
                                    <li><strong>{{ $t('python.adaptive_learning_title') }}:</strong> {{ $t('python.adaptive_learning_p') }}</li>
                                    <li><strong>{{ $t('python.transformative_impact_title') }}:</strong> {{ $t('python.transformative_impact_p') }}</li>
                                </ul>
                            </p>

                            <h3>{{ $t('python.intro_llm_title') }}</h3>
                            {{ $t('python.intro_llm_p1') }}
                            {{ $t('python.intro_llm_p2') }}
                            <p>
                                <ul>
                                    <li><strong>{{ $t('python.transformer_arch_title') }}:</strong> {{ $t('python.transformer_arch_p') }}</li>
                                    <li><strong>{{ $t('python.extensive_training_data_title') }}:</strong> {{ $t('python.extensive_training_data_p') }}</li>
                                    <li><strong>{{ $t('python.wide_apps_title') }}:</strong> {{ $t('python.wide_apps_p') }}</li>
                                    <li><strong>{{ $t('python.high_param_count_title') }}:</strong> {{ $t('python.high_param_count_p') }}</li>
                                </ul>
                            </p>

                            <h3>{{ $t('python.books_with_links_title') }}</h3>
                            <ul style="list-style: none;">
                                        <li class="body-1">
                                            <v-row align="center">
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Generative-Deep-Learning-Teaching-Machines/dp/1098134184/ref=sr_1_4" target="_blank">
                                                        <v-img src="../../assets/generative_dp.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="6" class="pl-md-2">
                                                    <p>{{ $t('python.gen_dl_book_p') }}
                                                    </p>
                                                </v-col>
                                            </v-row>
                                        </li>
                                
                                    </ul>
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
    name: 'Python',
    components: {
        Navbar, Footer
    },
};
</script>

<style scoped>

</style>
