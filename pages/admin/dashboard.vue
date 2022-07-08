<template>
<v-container fluid>
  <v-row>
    <v-col cols="8">
      <v-row>
        <v-col cols="12" class="mb-6">
          <v-card height="500">
            <v-card-title>Total Penerima Vaksin</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height="250">
            <div  class="card-vact">
              <div class="side">
                <v-img src="/img/product.png"> </v-img>
              </div>
              <div>
                <div class="text-md">
                  Sesi 1
                </div>
                <div class="text-sm">
                  Senin, 30 Mei 2022
                </div>
                <div class="text-sm">
                  08.00-12.00
                </div>
               
              <div class="text-sm">
                Vaksin Sinovac
                50/60
              </div>
            </div>
            </div>
          </v-card>
        </v-col>
        
        <v-col cols="6">
          <v-card height="250">
            <div  class="card-vact">
              <div class="side">
                <v-img src="/img/Vaccine-B.png" > </v-img>
              </div>
              <div>
                <div class="text-md">
                  Sesi 2
                </div>
                <div class="text-sm">
                  Senin, 30 Mei 2022
                </div>
                <div class="text-sm">
                  12.00-16.00
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="4">
      <v-row>
        <v-col cols="12">
          <v-card height="250">
            <v-card-title>Total Pengguna</v-card-title>
            <div class="slice">
              <img src="/img/iconvact.png" alt="iconvact" style="width: 82px" />
              <div class="text-2xl">700</div>
            </div>
          </v-card>  
        </v-col>
        
        <v-col cols="12">
          <v-card height="250">
            <v-card-title>Total Pendaftar</v-card-title>
            <div class="slice">
              <img src="/img/iconvact.png" alt="iconvact" style="width: 82px" />
              <div class="text-2xl">700</div>
            </div>
          </v-card>  
        </v-col>

        <v-col cols="12">
          <v-card height="250">
            <v-card-title>Stok Vaksin</v-card-title>
            <div class="slice">
              <img src="/img/iconvact.png" alt="iconvact" style="width: 82px" />
              <div class="text-2xl">700</div>
            </div>
          </v-card>  
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</v-container>

</template>

<script>
import AppBar from '~/components/core/AppBar.vue'
import Vaksinbooking from '../vaksinbooking.vue'
export default {
  components: { AppBar, Vaksinbooking },
  name: 'IndexPage',
  layout: 'adminLayout',
}
</script>

<style >

.text-md {
font-size: 24px;
font-weight: bold;
}

.text-sm {
  font-size: 11px;
  font-weight: 500;
  color: #bababa;
}
.card-vact {
  display: flex;
  width: 90%;
  margin: 0 auto;
  gap: 10px;
}

.sidee {
  width: 50%;
}
</style>