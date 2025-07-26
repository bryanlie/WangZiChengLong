<template>
    <nav>
        <v-toolbar flat app color="success">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <span class="font-weight-light text-h6"> {{ $t('nav.learn') }}</span>
            </v-toolbar-title>
            

    
            <v-tabs
                v-model="tab"
                align-with-title
                background-color="transparent"
                color="white"
            >
            <v-tab :to="'/'" class="text-h6">
                <v-icon>mdi-home</v-icon>
                {{ $t('nav.home') }}
            </v-tab>
            <v-tab :to="'/about'" class="text-h6">
                <v-icon>mdi-information</v-icon>
                {{ $t('nav.about') }}
            </v-tab>
                
            </v-tabs>
            
            <v-spacer></v-spacer>

            <v-btn icon @click="toggleLanguage">
                <v-icon>mdi-translate</v-icon>
            </v-btn>
            <v-btn icon @click="$router.push('/about')">
                <v-icon>mdi-gift</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer
            class="bg-deep-purple"
            theme="dark"
            permanent
            app v-model="drawer" 
        >
        <v-list color="primary">
            <v-list-item :to="'/math'">
                <v-list-item-action>
                    <v-icon class="white--text">mdi-math-compass</v-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text text-h6">{{ $t('nav.math') }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item-action>
            </v-list-item>
                <v-list-item :to="'/math/amc8'">
                    <v-list-item-action>
                        <v-icon>mdi-chevron-right</v-icon>
                        <v-icon>mdi-numeric-8-circle-outline</v-icon>
                        <v-list-item-content>
                            <v-list-item-title> {{ $t('nav.amc8') }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item-action>
                </v-list-item>
            <v-list-item :to="'/language'">
                <v-list-item-action>
                    <v-icon class="white--text">mdi-web</v-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text text-h6" >{{ $t('nav.language') }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item-action>
            </v-list-item>
                <v-list-item :to="'/language/english'">
                    <v-list-item-action>
                        <v-icon>mdi-chevron-right</v-icon>
                        <v-icon>mdi-alpha-e-box-outline</v-icon>
                        <v-list-item-content>
                            <v-list-item-title> {{ $t('nav.english') }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item-action>
                </v-list-item>
                <v-list-item :to="'/language/chinese'">
                    <v-list-item-action>
                        <v-icon>mdi-chevron-right</v-icon>
                        <v-icon>mdi-alpha-c-box-outline</v-icon>
                        <v-list-item-content>
                            <v-list-item-title> {{ $t('nav.chinese') }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item-action>
                </v-list-item>
               
            <v-list-item :to="'/compute'">
                <v-list-item-action>
                    <v-icon class="white--text">mdi-laptop</v-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text text-h6">{{ $t('nav.compute') }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item-action>
            </v-list-item>
                <v-list-item :to="'/compute/python'">
                    <v-list-item-action>
                        <v-icon>mdi-chevron-right</v-icon>
                        <v-icon>mdi-language-python</v-icon>
                        <v-list-item-content>
                            <v-list-item-title> {{ $t('nav.python') }} </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item-action>
                </v-list-item>
        </v-list>
        </v-navigation-drawer>

    </nav>
</template>

<script>

export default {
    name: 'Navbar',
    props: {
        type: String,
        // default: 'left',
    },
    data() {
        return {
           drawer: true,
           links: [
                { icon: 'mdi-math-compass', text: 'Math', route: '/math' },
                { icon: 'mdi-web', text: 'Language', route: '/language' },
                { icon: 'mdi-laptop', text: 'Computing', route: '/compute' },  
            ],

 
        };
    },
    methods: {
        toggleLanguage() {
        // Assuming you have two languages: 'en' and 'secondLanguage'
        const currentLocale = this.$i18n.locale;
        this.$i18n.locale = currentLocale === 'en' ? 'ch' : 'en';
        },
    },
};
</script>
