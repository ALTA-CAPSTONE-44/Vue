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
              <v-list-item-title class="text-h6" to="/tiketvaksin">
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
    <h1>Riwayat dan tiket vaksin</h1>
    <div style="margin-top:100px;">
    <v-btn outlined style=" margin-top: 10px; margin-right: 5px; width: 500px;">
      <nuxt-link to="/tiketvaksin">Zahra pariska</nuxt-link>
    </v-btn>
    </div>
  </div>
  </v-container>
  </div>
</template>

<script>
export default {
  name: 'RiwayatTiketVaksin',
  layout: 'userLayout',
}
</script>

<style>

</style>