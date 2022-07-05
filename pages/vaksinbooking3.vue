<template>
  <div>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" style="margin-left:250px; margin-top: 50px;">
          <v-col cols="12" sm="9" md="9">
            <v-card class="elevation-10">
                  <v-row class="fill-height">
                    <v-col cols="12" md="6"  class="accent-3">
                      <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" height="500"></v-img>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 --text text--accent-3" style="text-align:center; margin-top: 50px;">Booking Vaksin</h1>
                        <v-form>
                         <h2 style="margin-top: 20px; text-align: center;">Pilih sesi</h2>
                          <v-checkbox
                            v-model="ex4"
                            label="Sesi 1"
                            color="primary"
                            value="Vaksin Ke -1"
                            hide-details
                            style="margin-left:110px;"
                        ></v-checkbox>
                          
                          <v-checkbox
                            v-model="ex4"
                            label="sesi 2"
                            color="primary"
                            value="Vaksin ke -2"
                            hide-details 
                            style="margin-left:110px;"
                        ></v-checkbox>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5" style="text-align:center;">
                        <v-btn color="teal accent-3" dark href="/vaksinbooking2">Next</v-btn>
                      </div>
                    </v-col>
                  </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</div>
</template>

<script>
export default {
  name: 'VaksinBooking3',
  layout: 'userLayout',
}
</script>

<style>

</style>