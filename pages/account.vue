<template>
  <div>
    <v-container>
   <div class="ma-10 pa-12" style="float:left">
    <v-card style="margin-right:150px; padding-right: 0px;">
      <v-navigation-drawer
        permanent
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Zahra pariska
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item href="/account">    
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Akun saya</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Kotak Masuk</v-list-item-title>
          </v-list-item>
          <v-list-item href="/riwayattiketvaksin">
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Riwayat dan Tiket Vaksin</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
  <div style="float:left;">
    <v-card
    width="500px"
  >

 <v-btn depressed outlined style="float:right; margin-top: 10px; margin-right: 5px;">
      <nuxt-link to="/pembaruanprofil">Perbarui Profil</nuxt-link>
    </v-btn>
    <v-card-title>Profil</v-card-title>
    <div style="border-top:1px solid black; margin-bottom: 20px;">
      </div>
    <v-card-text style="color: black;">
        <h3 style="margin-bottom:10px">Indentitas user</h3>
        <h3 style="margin-bottom:10px">Nama Lengkap</h3>
        <h3 style="margin-bottom:10px">NIK</h3>
        <h3 style="margin-bottom:10px">Nomor Paspor</h3>
        <h3 style="margin-bottom:10px">Nomor Ponsel</h3>
        <h3 style="margin-bottom:10px">Email</h3>
        <h3>Tanggal Lahir</h3>
    </v-card-text>
  </v-card>
  </div>
  </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AccountPage',
  layout: 'userLayout',

  async asyncData() {
    const { data } = await axios.get('http://54.255.189.230:8888/users/{user_id}')
    return {
      user: data
    }
  },
  
  data() {
    return {
      user_id: this.$route.params.id
    }
  }
}
</script>

<style>

</style>