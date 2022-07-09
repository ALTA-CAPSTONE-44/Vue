<template>
  <div>
    <v-container class="fill-height" fluid>
        <v-row align-items="center" justify="center" style="margin-left:250px; margin-top: 50px;">
          <v-col cols="12" sm="9" md="9">
            <v-card class="elevation-10">
                  <v-row class="fill-height">
                    <v-col cols="12" md="6"  class="accent-3">
                      <v-img :src="require('../assets/vaccine-shield.png')" height="500"></v-img>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 --text text--accent-3" style="text-align:center; margin-top: 50px;">Booking Vaksin</h1>
                        <v-form>
                         <h2 style="margin-top: 20px; text-align: center;">Vaksin ke berapa</h2>
                          <v-radio-group
                          v-model="ex7"
                          column
                          style="margin-left:110px"
                          >
                            <v-radio
                              label="Vaksin ke -1"
                              color="#61E8DA"
                              value="Vaksin Ke -1"
                          ></v-radio>
                            
                            <v-radio
                              label="Vaksin ke -2"
                              color="#61E8DA"
                              value="Vaksin ke -2"
                          ></v-radio>
  
                          <v-radio
                              label="Vaksin ke -3"
                              color="#61E8DA"
                              value="Vaksin ke -3"
                          ></v-radio>
                          </v-radio-group>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5" style="text-align:center;">
                        <v-btn color="#61E8DA" dark href="/vaksinbooking3">Next</v-btn>
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
  name: 'VaksinBooking1',
  layout: 'userLayout',
}
</script>

<style>

</style>