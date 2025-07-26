<template>
    <Navbar />

    <v-container>
        <v-row>
            <v-col cols="12">
            <v-container class="my-4">
                <v-row>
                    <v-col cols="12">
                        <v-img src="../../assets/zhongwen.png" class="my-4" contain height="300" />
                    </v-col>
                </v-row>


                <v-row>
                    <v-col cols="12">
                        <div>
                            <h2>{{ $t('chinese.title') }}</h2>

                            <h3>{{ $t('chinese.weekend_schools_title') }}</h3>
                            <p>
                                <ul>
                                    <li>{{ $t('chinese.weekend_schools_p1') }}</li>
                                    <li>{{ $t('chinese.weekend_schools_p2') }}</li>
                                </ul>
                            </p>

                            <h3>{{ $t('chinese.online_courses_title') }}</h3>
                            <p>
                                <ul>
                                    <li>{{ $t('chinese.lingoace_p') }}
                                        <a href="https://r.lingoace.com/iv9GHoP1WvEA" target="_blank">{{ $t('chinese.lingoace_link') }}</a></li>
                                    <li>{{ $t('chinese.yoyo_p') }}
                                        <a href="https://yoyochinese.com/" target="_blank">{{ $t('chinese.yoyo_link') }}</a></li>
                                    <li>{{ $t('chinese.everyday_p') }}
                                        <a href="https://www.everydaychinese.com/" target="_blank">{{ $t('chinese.everyday_link') }}</a>
                                    </li>
                                </ul>
                            </p>

                            <h3>{{ $t('chinese.official_websites_title') }}</h3>
                            <p>
                                <ul>
                                    <li>{{ $t('chinese.smart_education_p') }}
                                        <a href="https://basic.smartedu.cn/" target="_blank">{{ $t('chinese.smart_education_link') }}</a></li>
                                    <li>{{ $t('chinese.ndlc_p') }}
                                        <a href="https://www.nlc.cn/web/index.shtml" target="_blank">{{ $t('chinese.ndlc_link') }}</a></li>
                                    <li>{{ $t('chinese.docuchina_p') }}
                                        <a href="http://www.docuchina.cn/" target="_blank">{{ $t('chinese.docuchina_link') }}</a>
                                    </li>
                                </ul>
                            </p>

                            <v-row>
                                <v-col cols="12">
                                    <v-img src="../../assets/4classics.jpg" class="my-4" contain height="300" />
                                </v-col>
                            </v-row>

                            <h3>{{ $t('chinese.four_classics_title') }}</h3>
                            <p>
                                <ul style="list-style: none;">
                                    <li class="body-1">
                                        <v-row align="center">
                                            <v-col cols="12" md="2" class="pr-md-2">
                                                <a href="https://www.amazon.com/Journey-West-Revised-1/dp/0226971325/ref=sr_1_1" target="_blank">
                                                    <v-img src="../../assets/xiyouV1.jpg" contain height="300"/>
                                                </a>
                                            </v-col>
                                            <v-col cols="12" md="2" class="pr-md-2">
                                                <a href="https://www.amazon.com/Journey-West-Revised-2/dp/0226971341/ref=pd_bxgy_thbs_d_sccl_1/142-8678302-4789264" target="_blank">
                                                    <v-img src="../../assets/xiyouV2.jpg" contain height="300"/>
                                                </a>
                                            </v-col>
                                            <v-col cols="12" md="2" class="pr-md-2">
                                                <a href="https://www.amazon.com/Journey-West-Revised-3/dp/0226971376/ref=pd_bxgy_d_sccl_2/142-8678302-4789264" target="_blank">
                                                    <v-img src="../../assets/xiyouV3.jpg" contain height="300"/>
                                                </a>
                                            </v-col>
                                            <v-col cols="12" md="2" class="pr-md-2">
                                                <a href="https://www.amazon.com/Journey-West-Revised-4/dp/0226971392/ref=pd_bxgy_d_sccl_2/142-8678302-4789264" target="_blank">
                                                    <v-img src="../../assets/xiyouV4.jpg" contain height="300"/>
                                                </a>
                                            </v-col>
                                            <v-col cols="12" md="10" class="pl-md-2">
                                                <p>{{ $t('chinese.journey_to_the_west_p') }}
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </li>
                                    
                                    <li class="body-1">
                                        <v-row align="center">
                                            <v-col cols="12" md="2" class="pr-md-2">
                                                <a href="https://www.amazon.com/Story-Stone-Dream-Chamber-Vol/dp/0140442936/ref=sr_1_1" target="_blank">
                                                    <v-img src="../../assets/honglouV1.jpg" contain height="300"/>
                                                </a>
                                            </v-col>
                                            <v-col cols="12" md="2" class="pr-md-2">
                                                <a href="https://www.amazon.com/Story-Stone-Vol-Crab-Flower-Club/dp/0140443266/ref=pd_bxgy_thbs_d_sccl_1/142-8678302-4789264" target="_blank">
                                                    <v-img src="../../assets/honglouV2.jpg" contain height="300"/>
                                                </a>
                                            </v-col>
                                            <v-col cols="12" md="2" class="pr-md-2">
                                                <a href="https://www.amazon.com/Story-Stone-Dream-Chamber-Warning/dp/0140443703/ref=pd_bxgy_thbs_d_sccl_1/142-8678302-4789264" target="_blank">
                                                    <v-img src="../../assets/honglouV3.jpg" contain height="300"/>
                                                </a>
                                            </v-col>
            
                                            <v-col cols="12" md="10" class="pl-md-2">
                                                <p>{{ $t('chinese.dream_of_red_chamber_p') }}
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </li>
                                    <li class="body-1">
                                        <v-row align="center">
                                            <v-col cols="12" md="2" class="pr-md-2">
                                                <a href="https://www.amazon.com/Romance-Three-Kingdoms-Luo-Guanzhong/dp/024133277X/ref=sr_1_1" target="_blank">
                                                    <v-img src="../../assets/sanguo.jpg" contain height="300"/>
                                                </a>
                                            </v-col>
                                            <v-col cols="12" md="8" class="pl-md-2">
                                                <p>{{ $t('chinese.romance_of_three_kingdoms_p') }}
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </li>
                                    <li class="body-1">
                                        <v-row align="center">
                                            <v-col cols="12" md="2" class="pr-md-2">
                                                <a href="https://www.amazon.com/Water-Margin-Outlaws-Classic-Classics/dp/0804840954/ref=tmm_pap_swatch_0" target="_blank">
                                                    <v-img src="../../assets/shuihu.jpg" contain height="300"/>
                                                </a>
                                            </v-col>
                                            <v-col cols="12" md="8" class="pl-md-2">
                                                <p>{{ $t('chinese.water_margin_p') }}
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </li>
                                </ul>
                    
                            </p>

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
    name: 'Chinese',
    components: {
        Navbar, Footer
    },
};
</script>

<style scoped>

</style>
