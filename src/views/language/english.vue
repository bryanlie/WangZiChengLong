<template>
    <Navbar />

    <v-container>
        <v-row>
            <v-col cols="12">
            <v-container class="my-4">
                <v-row>
                    <v-col cols="12">
                        <v-img src="../../assets/phonics.jpg" class="my-4" contain height="260" />
                    </v-col>
                </v-row>


                <v-row>
                    <v-col cols="12">
                        <div>
                            <h2>{{ $t('english.phonics_title') }}</h2>

                            <h3>{{ $t('english.what_is_phonics_title') }}</h3>
                            <p>
                                <ul>
                                    <li>{{ $t('english.what_is_phonics_p1') }}</li>
                                    <li>{{ $t('english.what_is_phonics_p2') }}</li>
                                    <li>{{ $t('english.what_is_phonics_p3') }}</li>
                                </ul>
                            </p>

                            <h3>{{ $t('english.how_to_teach_phonics_title') }}</h3>
                            <p>
                                <ul>
                                    <li>{{ $t('english.how_to_teach_phonics_l1') }}</li>
                                    <li>{{ $t('english.how_to_teach_phonics_l2') }}</li>
                                    <li>{{ $t('english.how_to_teach_phonics_l3') }}</li>
                                    <li>{{ $t('english.how_to_teach_phonics_l4') }}</li>
                                </ul>
                            </p>

                            <h3>{{ $t('english.books_with_links_title') }}</h3>
                            <ul style="list-style: none;">
                                        <li class="body-1">
                                            <v-row align="center">
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Pete-Cat-Phonics-Box-Mini-Books/dp/0062404520/ref=sr_1_1?sr=8-1" target="_blank">
                                                        <v-img src="../../assets/peteTheCat.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="6" class="pl-md-2">
                                                    <p>{{ $t('english.pete_the_cat_p') }}
                                                    <a href="https://www.amazon.com/Pete-12-Book-Phonics-First-Read-ebook/dp/B08BLM3MTR/ref=tmm_kin_swatch_0?_encoding=UTF8&sr=8-1" target="_blank">{{ $t('english.pete_the_cat_kindle') }}</a></p>
                                                </v-col>
                                            </v-row>
                                        </li>
                                        <li class="body-1">
                                            <v-row align="center">
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Fat-Other-Tales-Phonics-Readers/dp/1474995535/ref=sr_1_1?s=books&sr=1-1" target="_blank">
                                                        <v-img src="../../assets/fatCatMat.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="6" class="pl-md-2">
                                                    <p>{{ $t('english.fat_cat_mat_p') }}
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
                        <v-img src="../../assets/readingfun.jpg" class="my-4" contain height="300" />
                    </v-col>
                </v-row>


                <v-row>
                    <v-col cols="12">
                        <div>
                            <h2>{{ $t('english.reading_is_fun_title') }}</h2>
                            {{ $t('english.reading_is_fun_p') }}

                            <h3>{{ $t('english.sight_words_title') }}</h3>
                            <p>
                                <ul>
                                    <li>{{ $t('english.sight_words_l1') }}</li>
                                    <li>{{ $t('english.sight_words_l2') }}</li>
                                    <li>{{ $t('english.sight_words_l3') }}</li>
                                </ul>
                            </p>

                            <h3>{{ $t('english.reading_practice_title') }}</h3>
                            <p>
                                <ul>
                                    <li>{{ $t('english.reading_practice_l1') }}</li>
                                    <li>{{ $t('english.reading_practice_l2') }}</li>
                                    <li>{{ $t('english.reading_practice_l3') }}</li>
                                </ul>
                            </p>

                            <h3>{{ $t('english.books_with_links_title') }}</h3>
                            <ul style="list-style: none;">
                                        <li class="body-1">
                                            <v-row align="center">
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Cat-Hat-Dr-Seuss/dp/039480001X" target="_blank">
                                                        <v-img src="../../assets/catinHat.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Lorax-Classic-Seuss-Dr/dp/0394823370/ref=pd_sim_d_sccl_3_6/142-8678302-4789264" target="_blank">
                                                        <v-img src="../../assets/lorax.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Fox-Socks-Beginner-Books-Seuss/dp/0394800389/ref=pd_sim_d_sccl_3_3/142-8678302-4789264" target="_blank">
                                                        <v-img src="../../assets/foxSocks.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/dp/0394800788" target="_blank">
                                                        <v-img src="../../assets/hortonHears.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/One-Fish-Blue-Read-Myself/dp/0394800133/ref=pd_sim_d_sccl_3_2/142-8678302-4789264" target="_blank">
                                                        <v-img src="../../assets/onefishBluefish.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/dp/0394800796" target="_blank">
                                                        <v-img src="../../assets/grinchXmas.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="10" class="pl-md-2">
                                                    <p>{{ $t('english.dr_seuss_p') }}
                                                    </p>
                                                </v-col>
                                            </v-row>
                                        </li>
                                        <li class="body-1">
                                            <v-row align="center">
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Charlottes-Web-Read-Aloud-White/dp/0060882611" target="_blank">
                                                        <v-img src="../../assets/charlotteWeb.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="6" class="pl-md-2">
                                                    <p>{{ $t('english.charlotte_web_p') }}
                                                    <a href="https://www.amazon.com/Charlottes-Web-E-B-White-audiobook/dp/B0000W6SOK/ref=tmm_aud_swatch_0?_encoding=UTF8&qid=&sr=" target="_blank">{{ $t('homepage.audiobook') }}</a></p>
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
                        <v-img src="../../assets/hogwarts.jpg" class="my-4" contain height="400" />
                    </v-col>
                </v-row>


                <v-row>
                    <v-col cols="12">
                        <div>
                            <h2>{{ $t('english.harry_potter_title') }}</h2>
                            {{ $t('english.harry_potter_p') }}

                            <h3>{{ $t('english.reading_level_title') }}</h3>
                            <p>
                                <ul>
                                    <li>{{ $t('english.reading_level_l1') }}</li>
                                    <li>{{ $t('english.reading_level_l2') }}</li>
                                    <li>{{ $t('english.reading_level_l3') }}</li>
                                    <li>{{ $t('english.reading_level_l4') }}</li>
                                </ul>
                            </p>

                            <h3>{{ $t('english.making_it_engaging_title') }}</h3>
                            <p>
                                <ul>
                                    <li>{{ $t('english.making_it_engaging_l1') }}</li>
                                    <li>{{ $t('english.making_it_engaging_l2') }}</li>
                                    <li>{{ $t('english.making_it_engaging_l3') }}</li>
                                    <li>{{ $t('english.making_it_engaging_l4') }}
                                        <a href="https://www.wizardingworld.com/" target="_blank">{{ $t('english.wizarding_world_website') }}</a></li>
                                </ul>
                            </p>

                            <h3>{{ $t('english.books_with_links_title') }}</h3>
                            <ul style="list-style: none;">
                                        <li class="body-1">
                                            <v-row align="center">
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/gp/product/0590353403" target="_blank">
                                                        <v-img src="../../assets/sorceresStone.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Harry-Potter-Chamber-Secrets-Rowling/dp/0439064864/ref=pd_bxgy_thbs_d_sccl_1/142-8678302-4789264" target="_blank">
                                                        <v-img src="../../assets/chamberSecrets.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Harry-Potter-Prisoner-Azkaban-Rowling/dp/0439136350/ref=pd_bxgy_thbs_d_sccl_2/142-8678302-4789264" target="_blank">
                                                        <v-img src="../../assets/prisonerAzkaban.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Harry-Potter-Goblet-Fire-Book/dp/0439139597/ref=bmx_dp_om0pagio_d_sccl_2_1/142-8678302-4789264" target="_blank">
                                                        <v-img src="../../assets/gobletFire.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Harry-Potter-Order-Phoenix-Book/dp/043935806X/ref=bmx_dp_om0pagio_d_sccl_2_5/142-8678302-4789264" target="_blank">
                                                        <v-img src="../../assets/orderPhoenix.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>
                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Harry-Potter-Half-Blood-Prince-Book/dp/0439784549/ref=bmx_dp_om0pagio_d_sccl_2_4/142-8678302-4789264" target="_blank">
                                                        <v-img src="../../assets/halfbloodPrince.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>

                                                <v-col cols="12" md="2" class="pr-md-2">
                                                    <a href="https://www.amazon.com/Harry-Potter-Deathly-Hallows-Book/dp/1338878980" target="_blank">
                                                        <v-img src="../../assets/deathlyHallows.jpg" contain height="300"/>
                                                    </a>
                                                </v-col>

                                                <v-col cols="12" md="8" class="pl-md-2">
                                                    <p>{{ $t('english.harry_potter_series_p') }}
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
    name: 'English',
    components: {
        Navbar, Footer
    },
};
</script>

<style scoped>

</style>
