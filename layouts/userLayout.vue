<template>
  <div>
    <v-app-bar
    class="app-bar"
    >
      <img width="183px" src="../assets/VaccineHub-logo.png">
      <v-spacer></v-spacer> 
      <v-toolbar-title style="margin-left:20px;">
        <nuxt-link to="/" style="margin-right:40px;">Beranda</nuxt-link> 
        <nuxt-link to="#statistik" style="margin-right:40px;">Statistik</nuxt-link>
        <nuxt-link to="/vaksinbooking" style="margin-right:40px;">Booking</nuxt-link> 
        <nuxt-link to="#tentang">Tentang</nuxt-link>  
      </v-toolbar-title>
      <v-spacer></v-spacer> 
      <v-btn depressed outlined>
        <nuxt-link to="/login" style="color: #2FC4B1">Masuk</nuxt-link>
      </v-btn>     
    </v-app-bar>
  <div>
    <nuxt></nuxt>
  </div>

  <v-footer
  padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title>
        <img width="255px" style="margin-left:50px;" src="../assets/VaccineHub-logo.png" >
        <div style="margin-left:180px;">
          <p style="font-weight:bold">Syarat Kententuan</p>
          <p style="font-weight:bold">Bantuan</p>
          <p style="font-weight:bold">Tentang</p>
        </div>
         <div style="margin-left:180px;">
          <strong>Pelayanan</strong>
          <div style="display:block">
          <p style="float:left">Booking Vaskin</p>
          <p style="float:right; margin-left: 20px;">Cetak Sertifikat</p>
          </div>
          <div style="display:inline-flex">
          <p>Cek Lokasi</p>
          <p style="float:right; margin-left: 65px;">Statistik</p>
          </div>
        </div>
        <div style="margin-left:150px">
          <p style="font-weight:bold">Unduh Aplikasi</p>
          <v-btn width="120px" color="#61E8DA">
            <v-icon>mdi-google-play</v-icon>
          </v-btn>
        </div>
        <v-spacer></v-spacer>
      </v-card-title>
    </v-card>
  </v-footer>
</div>  
</template>

<style>
.app-bar {
   font-family: 'Inter', sans-serif;
}

.app-bar a {
  color: #7D7C7C; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}

.app-bar a:hover {
  color: #61E8DA; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
</style>