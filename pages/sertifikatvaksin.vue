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
      <nuxt-link to="/signin" style="margin-right:10px;">Beranda</nuxt-link> 
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
    <div class="title">
        <h1 style="text-align:center">Sertifikat Vaksin</h1>
    </div>
    <div class="Nama">
        <h1 style="margin-bottom:20px;">Zahra pariska</h1>
    </div>
  <v-card
    class="mx-auto my-12"
    max-width="380"
  >

    <v-img
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Vaksin Pertama</v-card-title>
    <v-card-text>
      <h3>15 juni 2022</h3>
      <p>Alianyang</p>
    </v-card-text>
  </v-card>

  
   

    </v-container>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>