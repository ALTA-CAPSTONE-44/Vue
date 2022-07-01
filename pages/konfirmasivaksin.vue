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
      <nuxt-link to="#" style="margin-right:10px;">Booking</nuxt-link> 
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

    <v-container>
    <h3 style="margin-top:50px; margin-bottom: 50px; text-align: center;">Silahkan Cek Terlebih Dahulu Anda Dengan benar, jika sudah benar silahkan klik tombol Konfirmasi:</h3>
  <div style="margin-left: 300px;">
    <v-card
    width="500px"
  >
    <v-card-text style="color: black;">
        <h3 style="margin-bottom:10px">Nama</h3>
        <h3 style="margin-bottom:10px">NIK</h3>
        <h3 style="margin-bottom:10px">Rumah Sakit/Instansi</h3>
        <h3 style="margin-bottom:10px">Sesi</h3>
        <h3 style="margin-bottom:10px">Vaksin</h3>  
    </v-card-text>
    <v-btn style="background-color:aqua; margin-left: 190px;">Konfirmasi</v-btn>
  </v-card>
  </div>
  </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>