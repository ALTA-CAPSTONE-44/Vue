<template>
      <v-nav-bar id="core-nav-bar" absolute app color="transparent" flat height="88">
        <v-toolbar-title class="black--text forn-weight-bold align-self-center">
            <v-btn v-if="responsive" dark icon @click.stop="onClick">
                <v-icon>mdi-view-list</v-icon>
            </v-btn>
            <v-icon >mdi-view-Session</v-icon> Session
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
            <v-row align="center" class="mx-0">
                <v-card-subtitle>Mulai tanggal</v-card-subtitle>
                <v-col
                cols="12"
                sm="6"
                md="4"
                >
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="date"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="date"
                        no-title
                        scrollable
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="menu = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(date)"
                        >
                            OK
                        </v-btn>
                    </v-date-picker>
                </v-menu>
            </v-col>
            <v-icon>mdi-minus</v-icon>
                <v-col
                cols="12"
                sm="6"
                md="4"
                >
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="date"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="date"
                        no-title
                        scrollable
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="menu = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(date)"
                        >
                            OK
                        </v-btn>
                    </v-date-picker>
                </v-menu>
            </v-col>
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
                    <v-card>
                        <v-list danse>
                            <v-list-item v-for="notification in notifications" :key="notification" @click="onClick">
                                <v-list-item-title v-text="notification" />
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-menu>
            </v-row>
        </v-toolbar-items>
    </v-nav-bar>
</template>

<script>
export default {
    data: () => ({
         notifications: [
            'Mike, John responded to your email',
            'You have 5 new tasks',
            "You're now a friend with Andrew",
            'Another Notification',
            'Another One',
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