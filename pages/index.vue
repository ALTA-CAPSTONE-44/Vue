<template>
<div>
      <v-card>
        <v-img
        height="350px"
        :src="require('../assets/VaccineHub-logo.png')"
        >
          <v-card-title>
            Langkah kecil ke arah yang benar lebih baik daripada langkah besar ke arah yang salah. Karena itu, <b>ayo ikut vaksin!</b>
          </v-card-title>
          <v-card-actions>
            <v-btn
            color="#61E8DA"
            >
              Pendaftaran vaksin >>
            </v-btn>
          </v-card-actions>
        </v-img>
      </v-card>
  <v-form >
    <v-card style="margin-left:350px; margin-right:500px; display: absolute; bottom:100px; padding:20px; width: 800px;">
      <h2>Status Sertifikat Vaksin</h2>
      <h3 style="margin-bottom:20px;">Isi Nama Lengkap dan NIK anda</h3>
      <v-row>
        <v-col
        cols="12"
        md="6"
        >
          <v-text-field
          label="Nama Lengkap"
          v-model="firstname"
          required
          outlined
          ></v-text-field>
        </v-col>
        <v-col
        cols="12"
        md="6"
        >
          <v-text-field
          label="NIK"
          v-model="nik"
          required
          outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn 
      color="#61E8DA"
      type="submit"
      style="margin-left:300px; margin-top: 10px; width: 150px;"
      >Cek Status</v-btn>
    </v-card>
  </v-form>
  <div style="margin-bottom:20px;" id="statistik">
    <h1 style="margin-left:50px;">Statistik</h1>
  </div>
  <div style="margin-bottom:20px;">
    <v-row style="margin-left:30px">
      <v-col
      cols="12"
      sm="4"
      >
        <v-card width="400px">
          <v-row>
            <v-col>
              <p>Pengguna Vaksin</p>
              <p>200 Juta</p>
            </v-col>
            <v-col>
              <img width="150px" src="../assets/statistic-1.png" >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col
      cols="12"
      sm="4"
      >
        <v-card width="400px">
          <v-row>
            <v-col>
              <p>Pengguna Vaksin</p>
              <p>200 Juta</p>
            </v-col>
            <v-col>
              <img width="150px" src="../assets/statistic-1.png" >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col
      cols="12"
      sm="4"
      >
        <v-card width="400px">
          <v-row>
            <v-col>
              <p>Pengguna Vaksin</p>
              <p>200 Juta</p>
            </v-col>
            <v-col>
              <img width="150px" src="../assets/statistic-1.png" >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
  <div style="margin-bottom:20px;" id="tentang">
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
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'userLayout',
}
</script>

<style>
body {
  font-family: 'Nunito', sans-serif;
}
</style>
