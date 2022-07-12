<template>
      <v-app-bar id="core-app-bar" absolute app color="transparent" flat height="88">
        <v-toolbar-title class="black--text forn-weight-bold align-self-center">
            <v-btn v-if="responsive" dark icon @click.stop="onClick">
                <v-icon>mdi-view-list</v-icon>
            </v-btn>
            <v-icon >mdi-view-dashboard</v-icon> {{title}}
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
            <v-row align-items="center" class="mx-0">

                <v-menu bottom left offset-y transition="slide-y-transition">
                    <template v-slot:activator="{attrs, on}">
                        <v-btn class="toolbar-items" icon v-bind="attrs" v-on="on">
                            <v-badge color="error" overlap>
                                <template slot="badge">
                                 {{ notifications.length }}
                                </template>
                            <v-icon color="tertiary">mdi-bell</v-icon>

                            </v-badge>
                        </v-btn>
                    </template>
                    <v-card  shaped elevation="0">
                        <v-list danse>
                            <v-list-item>
                                <v-list-item-title>Notification</v-list-item-title>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item v-for="notification in notifications" :key="notification" @click="onClick">
                                <v-list-item-title  ><v-icon class="mr-3" color="blue">{{notification.icon}}</v-icon> {{notification.title}}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>
            </v-row>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
         notifications: [
            {title:'Mike, John responded to your email',icon: 'mdi-file'},
            {title:'You have 5 new tasks',icon: 'mdi-file'},
            {title:"You're now a friend with Andrew",icon: 'mdi-file'},
            {title:'Another Notification',icon: 'mdi-file'},
            {title:'Another One',icon: 'mdi-file'},
            
            
            
            
            
        ],
        responsive: false,
        title: null,
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
    }),
    watch: {
        $route(val) {
            this.title = val.name;
        }
    },
    mounted(){
        this.onResponsiveInverted();
        window.addEventListener("resize",this.onResponsiveInverted);
    },
    beforeDestroy(){
        window.removeEventListener("resize",this.onResponsiveInverted);
    },
    methods: {

        onResponsiveInverted(){
            if(window.innerWidth < 991){
                this.responsive = true;
            } else{
                this.responsive = false;
            }
        }
    }
}
</script>

<style>

</style>