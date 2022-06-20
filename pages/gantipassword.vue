<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="9" md="9">
            <v-card class="elevation-10">
                  <v-row class="fill-height">
                    <v-col cols="12" md="6"  class="accent-3">
                      <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" height="600"></v-img>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 --text text--accent-3">Ganti Password</h1>
                        <h3 class="text-center">Silahkan Masukan Password Baru Anda</h3>
                        <v-form>
                          <h4 style="margin-bottom:10px; margin-top:10px;">Password Baru</h4>
                          <v-text-field
                            id="password"
                            name="password"
                            type="password"
                            color="teal accent-3"
                            outlined
                          />
                          <h4 style="margin-bottom:10px; margin-top:10px;">Ulangi Password Baru</h4>
                          <v-text-field
                            id="password"
                            name="password"
                            type="password"
                            color="teal accent-3"
                            outlined
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn color="teal accent-3" dark>Ganti Password</v-btn>
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