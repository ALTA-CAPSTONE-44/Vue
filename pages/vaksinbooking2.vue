<template>
 <div>
    <div class="container" style="padding-right:300px; padding-left: 300px;">
        <v-form justify="center">
          <h1 style="text-align:center">Booking Vaksin - Identitas Diri</h1>
          <v-text-field
          v-model="nama"
          label="Nama"
          required
          outlined
          ></v-text-field>
          <v-text-field
          v-model="nik"   
          label="NIK"
          required
          outlined
          ></v-text-field>
          <v-text-field
            v-model="TanggalLahir"   
            label="Tanggal Lahir"
            required
            outlined
          ></v-text-field>
          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="jenis kelamin"
            required
            outlined
          ></v-select>
          <v-text-field
            v-model="email"   
            label="Nomor Ponsel"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="email"   
            label="Masukan Kota/ kecamatan /provinsi/ Alamat dengan benar"
            required
            outlined
          ></v-text-field>
          <div class="text-center mt-n5" style="text-align:center;">
            <v-btn type="submit" color="#61E8DA" dark href="/konfirmasivaksin">Next</v-btn>
          </div>
        </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VaksinBooking2',
  layout: 'userLayout',
  data() {
    return {
      activePicker: null,
      date: null,
      menu: false,
    }
  },
  watch: {
    menu (val) {
    val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
    save (date) {
      this.$refs.menu.save(date)
    }
  }
}
</script>

<style>

</style>