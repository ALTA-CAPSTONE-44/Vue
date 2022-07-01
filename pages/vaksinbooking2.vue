<template>
 <div>
    <div class="container" style="padding-right:300px; padding-left: 300px;">
        <v-form justify="center">
            <h1 style="text-align:center">Booking vaksin - identitas Diri</h1>
        <P>Nama</P>
            <v-text-field
      v-model="nama"
      label="Nama"
      required
      outlined
    ></v-text-field>
    <p>Email</p>
    <v-text-field
      v-model="email"   
      label="Email"
      required
      outlined
    ></v-text-field>
    <p>tanggal lahir</p>
    <v-text-field
      v-model="TanggalLahir"   
      label="Tanggal Lahir"
      required
      outlined
    ></v-text-field>
    <p>Jenis Kelamin</p>
    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="jenis kelamin"
      required
      outlined
    ></v-select>
    <p>Nomor Ponsel</p>
    <v-text-field
      v-model="email"   
      label="Nomor Ponsel"
      required
      outlined
    ></v-text-field>
    <p>Kota/ kecamatan /provinsi/ Alamat</p>
    <v-text-field
      v-model="email"   
      label="Masukan Kota/ kecamatan /provinsi/ Alamat dengan benar"
      required
      outlined
    ></v-text-field>
    <div class="text-center mt-n5" style="text-align:center;">
    <v-btn type="submit" color="teal accent-3" dark href="/konfirmasivaksin">Next</v-btn>
    </div>
        </v-form>
    </div>
    </div>

</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'userLayout',
}
</script>

<style>

</style>