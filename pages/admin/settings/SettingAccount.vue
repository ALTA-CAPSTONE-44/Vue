<template>
    <div class="ma-8">
        <v-container>
            <v-row class="d-flex flex-row setting-menu">
                <nuxt-link to="/admin/settings/SettingAccount" class="mr-6">Account</nuxt-link>
                <nuxt-link to="/admin/settings/ManageAdmin" class="mr-6">Manage Account Admin</nuxt-link>
                <nuxt-link to="/admin/settings/ManageUser" class="mr-6">Manage Account User</nuxt-link>
            </v-row>
        </v-container>
        <v-card style="background-color:white" class="mt-8 mb-10">
            <v-row class="m-6">
                <v-col cols="12" md="5" align="center" justify="center" class="mt-10">
                    <v-img :src="require('@/static/img/profile.png')" width="200px"></v-img>
                    <h1 class="mt-8">Ahmad Alfian</h1>
                    <v-btn color="#45C6FC" small>Admin Nakes</v-btn>
                </v-col>
                <v-col cols="12" md="7">
                    <v-card-text>
                        <h1 class="mt-8 mb-4">Account Setting</h1>
                        <v-form>
                            <p>Nama Lengkap</p>
                            <v-text-field
                            v-model="username"
                            name="name"
                            type="text"
                            color="#0FE0CB"
                            outlined
                            />
                            <p>Alamat/Rumah Sakit</p>
                            <v-text-field
                            v-model="address"
                            name="name"
                            type="text"
                            color="#0FE0CB"
                            outlined
                            />
                            <p>Nomor ID</p>
                            <v-text-field
                            v-model="noid"
                            name="name"
                            type="text"
                            color="#0FE0CB"
                            outlined
                            />
                            <p>Password</p>
                            <v-text-field
                            
                            :value="pass"
                            name="password"
                            color="#0FE0CB"
                            outlined
                            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="() => (value = !value)"
                            :type="value ? 'password' : 'text'"
                            />
                        </v-form>
                        <v-btn @click="snackbar = true" color="#0FE0CB" width="300px">Simpan</v-btn>
                        <v-snackbar
                            v-model="snackbar"
                            color="#45C6FC"
                          >
                            {{ text }}

                            <template v-slot:action="{ attrs }">
                              <v-btn
                                color="white"
                                text
                                v-bind="attrs"
                                @click="snackbar = false"
                              >
                                OKE
                              </v-btn>
                            </template>
                          </v-snackbar>
                    </v-card-text>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'SettingAccount',
    layout: 'adminLayout',
    data(){
        return {
            username: 'Ahmad Alfian',
            address: 'RS. Sultan Haldirin',
            noid: '3320062508090003',
            pass: '12345678',
            value: String,
            snackbar: false,
            text: 'Profil berhasil disimpan',
        }
    }
}
</script>