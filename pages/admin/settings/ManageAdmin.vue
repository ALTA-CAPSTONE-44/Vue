<template>
    <div class="ma-8">
        <v-container>
            <v-row class="d-flex flex-row setting-menu">
                <nuxt-link to="/admin/settings/SettingAccount" class="mr-6">Account</nuxt-link>
                <nuxt-link to="/admin/settings/ManageAdmin" class="mr-6">Manage Account Admin</nuxt-link>
                <nuxt-link to="/admin/settings/ManageUser" class="mr-6">Manage Account User</nuxt-link>
            </v-row>
        </v-container>
        <v-card class="mt-8 pa-4">
            <v-row>
                <v-col class="d-flex justify-start">
                    <h3 class="mt-2">Account Admin</h3>
                    <v-spacer></v-spacer>
                    <v-text-field
                    prepend-inner-icon="mdi-magnify"
                    outlined
                    rounded
                    placeholder="Search"
                    color="#45C6FC"
                    dense
                    width="250px"
                    class="shrink mx-6"
                    ></v-text-field>
                    <v-btn
                    href="/admin/settings/AddAdmin"
                    style="color: white"
                    color="#45C6FC"><v-icon>mdi-plus</v-icon>
                    Tambah Admin</v-btn>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="d-flex justify-start">
                <v-col cols="12" md="3">
                    <v-checkbox
                    label="Nama"
                    color="#44444"></v-checkbox>
                </v-col>
                <v-col cols="12" md="2" class="mt-5">
                   <p>Status</p> 
                </v-col>
                <v-col cols="12" md="3" class="mt-5">
                    <p>Tempat Kesehatan</p>
                </v-col>
                <v-col cols="12" md="4" class="mt-5">
                    <p>Team</p>
                </v-col>
            </v-row>
        </v-card>
        <div v-for="admin in stateAllAdmins" :key="admin.id">
            <v-card class="mt-3 pa-4">
                <v-row class="d-flex justify-start">
                    <v-col cols="12" md="3">
                        <v-checkbox
                        :label="admin.email"
                        color="#44444"></v-checkbox>
                    </v-col>
                    <v-col cols="12" md="2" class="mt-5">
                       <v-btn color="success">Aktif</v-btn> 
                    </v-col>
                    <v-col cols="12" md="3" class="mt-5">
                        <p>{{admin.vaccinationlocation}}</p>
                    </v-col>
                    <v-col cols="12" md="2" class="mt-5">
                        <p>{{ admin.role }}</p>
                    </v-col>
                    <v-col cols="12" md="2" class="d-flex mt-5">
                        <v-dialog v-model="dialog" width="500">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                icon
                                large
                                v-bind="attrs"
                                v-on="on"
                                ><v-icon>mdi-delete-outline</v-icon></v-btn>
                            </template>
                            <v-card>
                                <v-card-title
                                class="headline grey lighten-2"
                                primary-title
                                >
                                Confirmation
                                </v-card-title>

                                <v-card-text>
                                Are you sure?
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="primary"
                                    text
                                    @click="deleteItem()"
                                >
                                    Confirm
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-btn icon large><v-icon>mdi-pencil-outline</v-icon></v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </div>
        <div class="mt-6 float-right">
            <v-pagination
            v-model="page"
            :length="stateAllAdmins.length"
            :total-visible="5"
            ></v-pagination>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'ManageAdmin',
    layout: 'adminLayout',
    computed: {
        stateAllAdmins() {
            return this.$store.state.admins.admins
        }
    },
    data () {
      return {
        page: 1,
        admins: [],
      }
    },
    mounted() {
        this.getAdmins()
    },
    methods: {
        ...mapActions({
            getAdmins: 'admins/handleAllAdmins'
        }),
        deleteItem(){
            this.dialog = false;
        }
    },
}
</script>