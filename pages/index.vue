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
      <nuxt-link to="/login" style="margin-right:10px;">Beranda</nuxt-link> 
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

      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#73777B"
            dark
            height="350"
          >
            <v-card-title class="text-h5" style="padding-right:1135px; color: black;">
              Langkah kecil ke arah yang benar lebih baik daripada langkah besar ke arah yang salah. Karena itu, ayo ikut vaksin!
            </v-card-title>

            <v-card-actions>
              <v-btn>
                Pendaftaran vaksin >>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        </v-row>

        <v-form >
    <v-card style="margin-left:350px; margin-right:500px; display: absolute; bottom:100px; padding:20px; width: 800px;">
      <h2>Status Sertifikat Vaksin</h2>
      <h3 style="margin-bottom:20px;">Isi Nama Lengkap dan NIK anda</h3>
      <div style="border-top:1px solid black; margin-bottom: 20px;">
      </div>
    <v-row>
        <v-col
          cols="12"
          md="6"
        >
        <p>Nama Lengkap</p>
          <v-text-field
            v-model="firstname"
            required
            outlined
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
        <p>NIK</p>
          <v-text-field
            v-model="NIK"
            required
            outlined
          ></v-text-field>
        </v-col>
        </v-row>
     <v-btn type="submit" style="margin-left:300px;margin-top: 10px; width: 150px;">Cek Status</v-btn>
</v-card>
        </v-form>

 <div>
    <div style="margin-bottom:20px;">
    <h1 style="margin-left:50px;">Tentang</h1>
    </div>
    <div class="berita1" style="margin-bottom:200px; display: flex;">
      <h1 style="margin-left:50px; width:600px; color: turquoise;" >Apa itu VaccineHub ?</h1>
      <h1 style="padding-right:200px; margin-left:300px; font-size: 25px;">VaccineHub adalah aplikasi untuk membantu masyarakat dalam melakukan booking vaksin dan untuk mengetahui status sertifikat vaksin masyarakat.</h1>
    </div>
    <div class="berita2" style="display:flex">
      <h1 style="margin-left:50px; width:600px; color: turquoise;" >Vaksin Covid - 19 ?</h1>
      <h1 style="padding-right:200px; margin-left:405px; margin-bottom: 40px; font-size: 25px;">Pada tahap awal, vaksinasi Covid-19 sudah berhasil diberikan kepada seluruh tenaga kesahatan, asisten tenaga kesehatan, dan mahasiswa yang menjalankan pendidikan profesi kedokteran yang bekerja pada fasilitas pelayanan kesehatan. </h1>
    </div>
    <h1 style="padding-right:250px; margin-left:620px; margin-bottom: 40px; font-size: 25px;">Vaksin tahap kedua juga sudah diberikan kepada lansia, pekerja sektor esensial, dan guru.  </h1>
    <h1 style="padding-right:250px; margin-left:620px;margin-bottom: 40px; font-size: 25px;">Pemerataan vaksinasi hingga saat ini dilanjutkan untuk masyarakat umum dan terus berjalan hingga berhasil menjangkau seluruh warga negara Indonesia dan warga negara asing yang bertempat tinggal di Indonesia. </h1>
    <h1 style="padding-right:250px; margin-left:620px;margin-bottom: 40px; font-size: 25px;">Harapannya dengan upaya pemerataan vaksinasi ini, Indonesia dapat segera bangkit dan terbebas dari penyebaran virus Covid-19. </h1>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
