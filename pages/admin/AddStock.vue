<template>
  <v-container>

    <v-row class="pl-10 pr-10">
      <v-col cols="12" md="12" lg="12" class="text-h5">

            Tambah Stock Vaksin
      </v-col>
      <v-col cols="4" lg="5" md="6" xs="12">
        <v-card class="pl-4 pr-4">
          <v-row>
            <v-col cols="4" md="6">
              <v-img :src="require('@/static/img/sinovac vaksin.png')">

              </v-img>
            </v-col>
            
            <v-col cols="6">
              <v-card-title>
                  Vaksin Sinovac
              </v-card-title>
              <v-card-title style="font-size: 60px !important; ">
                  {{valueSinovac}}
              </v-card-title>
                <p style="font-size:10px; margin-right:5px; margin-left: 50px;">Tambah Stock</p>
                
                <div style="margin-left:100px;" class="d-flex justify-end">
                  <v-btn x-small style="padding:20px; margin-left: ;" @click="minusSinovac">
                    <v-icon >mdi-minus</v-icon>
                  </v-btn>
                   <v-btn x-small style="padding:20px;" color="white">
                    {{sinovac}}
                  </v-btn>
                  <v-btn color="#EEF2FE" x-small style="padding:20px;" @click="addSinovac">
                    <v-icon >mdi-plus</v-icon>
                  </v-btn>
                </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
            <v-col cols="4" lg="5" md="6" xs="12">
        <v-card class="pl-4 pr-4">
          <v-row>
            <v-col cols="4" md="6">
              <v-img :src="require('@/static/img/Astrazeneca Vaksin.png')">

              </v-img>
            </v-col>
            
            <v-col cols="6">
              <v-card-title style="font-size: 17px;">
                  Vaksin Astrazeneca
              </v-card-title>
              <v-card-title style="font-size: 60px !important; ">
                  {{valueAstrazeneca}}
              </v-card-title>
                <p style="font-size:10px; margin-right:5px; margin-left: 50px;">Tambah Stock</p>
 
                <div style="margin-left:100px;" class="d-flex justify-end">
                  <v-btn x-small style="padding:20px; margin-left: ;" @click="minusAstrazeneca">
                    <v-icon >mdi-minus</v-icon>
                  </v-btn>
                   <v-btn x-small style="padding:20px;" color="white">
                    {{astrazeneca}}
                  </v-btn>
                  <v-btn color="#EEF2FE" x-small style="padding:20px;" @click="addAstrazeneca">
                    <v-icon >mdi-plus</v-icon>
                  </v-btn>
                </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="4" lg="5" md="6" xs="12" class="mt-5">
        <v-card class="pl-4 pr-4">
          <v-row>
            <v-col cols="4" md="6">
              <v-img :src="require('@/static/img/Moderna Vaksin.png')">

              </v-img>
            </v-col>
            
            <v-col cols="6" md="6">
              <v-card-title style="font-size: 17px;">
                  Vaksin Moderna
              </v-card-title>
              <v-card-title style="font-size: 60px !important; ">
                  {{valueModerena}}
              </v-card-title>
                <p style="font-size:10px; margin-right:5px; margin-left: 50px;">Tambah Stock</p>
                
                <div style="margin-left:100px;" class="d-flex justify-end pt-9">
                  <v-btn x-small style="padding:20px; margin-left: ;" @click="minusModerena">
                    <v-icon >mdi-minus</v-icon>
                  </v-btn>
                   <v-btn x-small style="padding:20px;" color="white">
                    {{moderena}}
                  </v-btn>
                  <v-btn color="#EEF2FE" x-small style="padding:20px;" @click="addModerena">
                    <v-icon >mdi-plus</v-icon>
                  </v-btn>
                </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
       <v-col cols="4" lg="5" md="6" xs="12" class="mt-5">
        <v-card class="pl-4 pr-4"  >
          <v-row>
            <v-col cols="4" md="6">
              <v-img :src="require('@/static/img/Pfizer vaksin.png')">

              </v-img>
            </v-col>
            
            <v-col cols="6" md="6">
              <v-card-title>
                  Vaksin Pfizer
              </v-card-title>
              <v-card-title style="font-size: 60px !important; ">
                  {{valuePfizer}}
              </v-card-title>
                <p style="font-size:10px; margin-right:5px; margin-left: 50px;">Tambah Stock</p>
                
                <div style="margin-left:100px;" class="d-flex justify-end">
                  <v-btn x-small style="padding:20px; margin-left: ;" @click="minuspfizer">
                    <v-icon >mdi-minus</v-icon>
                  </v-btn>
                   <v-btn x-small style="padding:20px;" color="white">
                    {{pfizer}}
                  </v-btn>
                  <v-btn color="#EEF2FE" x-small style="padding:20px;"  @click="addpfizer">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" class="mt-10">
        <v-btn color="#0FE0CB" class="pl-15 pr-15"  x-large @click="addAllValue">
          Simpan Stock
        </v-btn>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import NavBar from '~/components/core/NavBar.vue'
import Vaksinbooking from '../vaksinbooking.vue'
export default {
  components: { NavBar, Vaksinbooking },
  data: () => ({
    sinovac: 0,
    astrazeneca: 0,
    moderena: 0,
    pfizer: 0,
    valueSinovac: 100,
    valueAstrazeneca: 50,
    valueModerena: 160,
    valuePfizer: 100,
  }),
  methods: {
    addAllValue(){
      this.valueSinovac = this.valueSinovac + this.sinovac;
      this.valueAstrazeneca = this.valueAstrazeneca + this.astrazeneca;
      this.valueModerena = this.valueModerena + this.moderena;
      this.valuePfizer = this.valuePfizer +this.pfizer;
      this.sinovac = 0;
      this.moderena = 0;
      this.pfizer = 0;
      this.astrazeneca = 0;
    },
    addpfizer() {
      this.pfizer = this.pfizer +1
    },
    
    minuspfizer() {
      if(this.pfizer > 0) {
        
        this.pfizer = this.pfizer - 1

      }
    },
    addModerena() {
      this.moderena = this.moderena + 1
    },
    minusModerena() {
      if(this.moderena > 0) {

          this.moderena = this.moderena - 1

      }
    },
    addAstrazeneca(){
      this.astrazeneca = this.astrazeneca + 1
    },
    
    minusAstrazeneca(){
      if (this.astrazeneca > 0) {
        
        this.astrazeneca = this.astrazeneca - 1
        
      }
    },
    addSinovac() {
      this.sinovac = this.sinovac + 1
    },
    minusSinovac(){
      if(this.sinovac > 0){
        this.sinovac = this.sinovac -1
      }
    }
  },
  name: 'IndexPage',
  layout: "adminLayout",
};
</script>

<style>
.gap {
  display: flex;
  gap: 15px;
}
</style>