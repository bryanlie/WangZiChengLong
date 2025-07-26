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
                        <h2>{{ $t('language_view.english_education_title') }}</h2>
                        
                        <h3>{{ $t('language_view.philosophy_title') }}</h3>
                            <ul>
                                <li><b><i>{{ $t('language_view.literacy_communication_title') }}</i></b> {{ $t('language_view.literacy_communication_desc') }}</li>
                                <li><b><i>{{ $t('language_view.critical_thinking_title') }}</i></b> {{ $t('language_view.critical_thinking_desc') }}</li>
                                <li><b><i>{{ $t('language_view.cultural_awareness_title') }}</i></b> {{ $t('language_view.cultural_awareness_desc') }}</li>
                                <li><b><i>{{ $t('language_view.college_career_readiness_title') }}</i></b>  {{ $t('language_view.college_career_readiness_desc') }}</li>
                            </ul>
                        <br>
                        <h3>{{ $t('language_view.methodology_title') }}</h3>
                            <ul>
                                <li><b><i>{{ $t('language_view.balanced_literacy_title') }}</i></b> {{ $t('language_view.balanced_literacy_desc') }}</li>
                                <li><b><i>{{ $t('language_view.close_reading_title') }}</i></b>  {{ $t('language_view.close_reading_desc') }}</li>
                                <li><b><i>{{ $t('language_view.differentiated_instruction_title') }}</i></b>  {{ $t('language_view.differentiated_instruction_desc') }}</li>
                                <li><b><i>{{ $t('language_view.student_centered_learning_title') }}</i></b>  {{ $t('language_view.student_centered_learning_desc') }}</li>
                            </ul>
                        <br>
                        {{ $t('language_view.more_details_english_link') }} <router-link :to="'/language/english'">{{ $t('nav.english') }}</router-link>
                        
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
                        <h2>{{ $t('language_view.chinese_learning_title') }}</h2>
                        
                        <h3>{{ $t('language_view.solid_foundation_title') }}</h3>
                            <ul>
                                <li><b><i>{{ $t('language_view.mastering_basic_literacy_title') }}</i></b> {{ $t('language_view.mastering_basic_literacy_desc') }}</li>
                                <li><b><i>{{ $t('language_view.oral_aural_skills_title') }}</i></b> {{ $t('language_view.oral_aural_skills_desc') }}</li>
                                <li><b><i>{{ $t('language_view.grammar_syntax_title') }}</i></b> {{ $t('language_view.grammar_syntax_desc') }}</li>
                            </ul>
                            <br>
                            <h3>{{ $t('language_view.cultural_appreciation_title') }}</h3>
                            <ul>
                                <li><b><i>{{ $t('language_view.exploring_chinese_literature_title') }}</i></b> {{ $t('language_view.exploring_chinese_literature_desc') }}</li>
                                <li><b><i>{{ $t('language_view.understanding_chinese_customs_title') }}</i></b> {{ $t('language_view.understanding_chinese_customs_desc') }}</li>
                                <li><b><i>{{ $t('language_view.intercultural_communication_title') }}</i></b> {{ $t('language_view.intercultural_communication_desc') }}</li>
                            </ul>
                            <br>
                            <h3>{{ $t('language_view.fostering_critical_thinking_title') }}</h3>
                            <ul>
                                <li><b><i>{{ $t('language_view.analyzing_texts_title') }}</i></b> {{ $t('language_view.analyzing_texts_desc') }}</li>
                                <li><b><i>{{ $t('language_view.expressing_ideas_title') }}</i></b> {{ $t('language_view.expressing_ideas_desc') }}</li>
                                <li><b><i>{{ $t('language_view.creative_language_use_title') }}</i></b> {{ $t('language_view.creative_language_use_desc') }}</li>
                            </ul>
                        <br>
                        {{ $t('language_view.more_details_chinese_link') }} <router-link :to="'/language/chinese'">{{ $t('nav.chinese') }}</router-link>

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
