<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="9" md="9">
            <v-card class="elevation-10">
                  <v-row class="fill-height">
                    <v-col cols="12" md="6"  class="accent-3">
                      <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" height="500"></v-img>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 --text text--accent-3">Verifikasi</h1>
                        <v-form>
                            <P style="text-align:center">Masukan 5 digit kode yang dikirimkan melalui email anda</P>
                            <v-otp-input
                             v-model="otp"
                            type="password"
                            length="5"
                             dark
                             ></v-otp-input>
                          <div style="margin-bottom:20px; text-align:center;" >
                          <nuxt-link to="/#" class="text-center"> kirim Ulang</nuxt-link>
                          </div>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn href="/" color="teal accent-3" dark>verifikasi Email</v-btn>
                      </div>
                    </v-col>
                  </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>