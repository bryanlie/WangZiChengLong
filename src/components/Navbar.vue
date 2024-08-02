<template>
    <nav>
        <v-toolbar flat app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <span class="font-weight-light">LEARN</span>
            </v-toolbar-title>
            

            <v-spacer></v-spacer>
            <v-tabs
                v-model="tab"
                align-with-title
                background-color="transparent"
                color="white"
            >
                <v-tab v-for="t in tabs" :key="t.text" :to="t.route">
                    {{ t.text }}
                </v-tab>
                
            </v-tabs>
            
            <v-spacer></v-spacer>

            <!-- <v-btn icon @click="$router.push('/about')">
                <v-icon>mdi-gift</v-icon>
            </v-btn> -->
        </v-toolbar>

        <v-navigation-drawer
            class="bg-deep-purple"
            theme="dark"
            permanent
            app v-model="drawer" 
        >
        <v-list color="primary">
            <v-list-item :to="links[0].route">
                <v-list-item-action>
                    <v-icon class="white--text">{{ links[0].icon }}</v-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ links[0].text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item-action>
            </v-list-item>
                <v-list-item :to="'/math/amc8'">
                    <v-list-item-action>
                        <v-icon>mdi-chevron-right</v-icon>
                        <v-icon>mdi-numeric-8-circle-outline</v-icon>
                        <v-list-item-content>
                            <v-list-item-title> AMC 8</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item-action>
                </v-list-item>
            <v-list-item :to="links[1].route">
                <v-list-item-action>
                    <v-icon class="white--text">{{ links[2].icon }}</v-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ links[1].text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item-action>
            </v-list-item>
                <v-list-item :to="'/language/english'">
                    <v-list-item-action>
                        <v-icon>mdi-chevron-right</v-icon>
                        <v-icon>mdi-alpha-e-box-outline</v-icon>
                        <v-list-item-content>
                            <v-list-item-title> English</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item-action>
                </v-list-item>
                <v-list-item :to="'/language/chinese'">
                    <v-list-item-action>
                        <v-icon>mdi-chevron-right</v-icon>
                        <v-icon>mdi-alpha-c-box-outline</v-icon>
                        <v-list-item-content>
                            <v-list-item-title> Chinese</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item-action>
                </v-list-item>
               
            <v-list-item :to="links[2].route">
                <v-list-item-action>
                    <v-icon class="white--text">{{ links[2].icon }}</v-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ links[2].text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item-action>
            </v-list-item>
                <v-list-item :to="'/compute/python'">
                    <v-list-item-action>
                        <v-icon>mdi-chevron-right</v-icon>
                        <v-icon>mdi-language-python</v-icon>
                        <v-list-item-content>
                            <v-list-item-title> Python </v-list-item-title>
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
           drawer: false,
           links: [
                { icon: 'mdi-math-compass', text: 'Math', route: '/math' },
                { icon: 'mdi-web', text: 'Language', route: '/language' },
                { icon: 'mdi-laptop', text: 'Computing', route: '/compute' },  
            ],

            tabs: [
                { icon: 'home', text: 'Home', route: '/' },
                { icon: 'about', text: 'About', route: '/about' },
            ]
        };
    },
};
</script>
