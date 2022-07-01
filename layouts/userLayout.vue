<template>
<div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      white
    >

      <v-toolbar-title>VaccineHub</v-toolbar-title>

        <v-spacer></v-spacer> 
      <v-toolbar-title style="margin-left:20px;">
      <nuxt-link to="/" style="margin-right:10px;">Beranda</nuxt-link> 
      <nuxt-link to="#" style="margin-right:10px;">Statistik</nuxt-link>
      <nuxt-link to="/vaksinbooking" style="margin-right:10px;">Booking</nuxt-link> 
      <nuxt-link to="#">Tentang</nuxt-link>  
      </v-toolbar-title>
      <v-spacer></v-spacer> 

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

       <v-btn depressed outlined>
           <nuxt-link to="/login">Masuk</nuxt-link>
        </v-btn>

    </v-app-bar>

  <div>
    <nuxt></nuxt>
  </div>

  <v-footer
  outlined
  padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">VaccineHub</strong>
        <div style="margin-left:200px;">
          <p style="font-weight:bold">Syarat Kententuan</p>
          <p style="font-weight:bold">Bantuan</p>
          <p style="font-weight:bold">Tentang</p>
        </div>
         <div style="margin-left:200px;">
          <strong>Pelayanan</strong>
          <div style="display:block">
          <p style="float:left">Booking Vaskisn</p>
          <p style="float:right; margin-left: 20px;">Cetak Sertifikat</p>
          </div>
          <div style="display:inline-flex">
          <p>Cek Lokasi</p>
          <p style="float:right; margin-left: 65px;">Cek Lokasi</p>
          </div>
        </div>
        <v-spacer></v-spacer>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</div>  
</template>