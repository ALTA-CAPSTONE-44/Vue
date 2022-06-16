<template>
      <v-navigation-drawer
        id="app-drawer"
        v-model="inputValue"
        :src="image"
        app
        color="white"
        mobile-breakpoint="911"
        persistent
        width="260"
    >


        <v-list-item two-line>
            <v-list-item-avatar color="white">
                <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png" height="34" contain />
            </v-list-item-avatar>
            <v-list-item-title class="title">
                Vaksin Booking
            </v-list-item-title>
        </v-list-item>
        <v-divider class="mx-3 mb-3" />

        <v-list nav>
            <div />
            <v-list-item v-for="(link,i) in links" :key="i" :to="link.to" active-class="primary white--text">
                <v-list-item-action>
                    <v-icon>
                        {{ link.icon }}
                    </v-icon>
                </v-list-item-action>
                <v-list-item-title v-text="link.text" />
            </v-list-item>
        </v-list>
        
        <template v-slot:append>
            <v-list nav>
                <v-list-item to="#">
                    <v-list-item-action>
                        <v-icon>mdi-package-up</v-icon>
                    </v-list-item-action>

                    <v-list-item-title class="font-weight-light">Something else</v-list-item-title>
                </v-list-item>
            </v-list>
        </template>
    </v-navigation-drawer>
</template>

<script>
import {mapMutations, mapState} from 'vuex';

export default {
    props: {
        opened: {
            type: Boolean,
            default: true,
        }
    },
    data: () => ({
        links: [
            {
                to: '/',
                icon: 'mdi-view-dashboard',
                text: 'Dashboard',
            },
            {
                to: '/products',
                icon: 'mdi-note-text',
                text: 'Session',
            },
            {
                to: '/user-profile',
                icon: 'mdi-account',
                text: 'Stock'
            },
            
            {
                to: '/user-profile',
                icon: 'mdi-account',
                text: 'Chat'
            },
                {
                to: '/user-profile',
                icon: 'mdi-settings',
                text: 'Setting'
            },
        ],
    }),
    computed: {
        ...mapState('app', ['image','color']),
        inputValue: {
            get(){
                return this.$store.state.app.drawer;
            },
            set(val){
                this.setDrawer(val);
            },
        }
    },
    methods: {
        ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    }
}
</script>

<style>

</style>