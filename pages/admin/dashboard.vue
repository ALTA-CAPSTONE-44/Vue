<template>
<v-container fluid>
  <v-row>
    <v-col cols="8">
      <v-row>
        <v-col cols="12">
          <v-card height="500">
            <v-card-title>Total Penerima Vaksin</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12">
           <v-card>
            <v-card-title>Sesi yang sedang berjalan</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <div  class="card-vact">
              <div class="slice">
                <div>
                  <img src="/img/product.png" alt="product"/>
                </div>
                <div>
                  <div>
                    <div class="text-xl">Sesi 1</div>
                    <div class="text-sm">Senin, 30 Mei 2020</div>
                    <div class="text-sm">08.00 - 12.00</div>
                  </div>
                  <div style="margin-top: 50px">
                    <div class="text-sm">Vaksin Sinovac</div>
                    <div class="text-sm"><v-icon color="#45C6FC">mdi-needle</v-icon>50/60</div>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
        
        <v-col cols="6">
          <v-card>
            <div  class="card-vact">
              <div class="slice">
                <div>
                  <img src="/img/vaccine-2.png" width="160px" alt="vaccine-2"/>
                </div>
                <div>
                  <div>
                    <div class="text-xl">Sesi 1</div>
                    <div class="text-sm">Senin, 30 Mei 2020</div>
                    <div class="text-sm">08.00 - 12.00</div>
                  </div>
                  <div style="margin-top: 50px">
                    <div class="text-sm">Vaksin Sinovac</div>
                    <div class="text-sm"><v-icon color="#45C6FC">mdi-needle</v-icon>50/60</div>
                  </div>
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
          <v-card rounded-lg height="250">
            <v-card-title>Total Pengguna</v-card-title>
            <div class="slice">
              <img src="/img/user.png" alt="iconvact" style="width: 82px" />
              <div class="text-2xl">700</div>
            </div>
          </v-card>  
        </v-col>
        
        <v-col cols="12">
          <v-card height="250">
            <v-card-title>Total Pendaftar</v-card-title>
            <div class="slice">
              <img src="/img/subtract.png" alt="subtract" style="width: 82px" />
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
}
.card-vact {
  display: flex;
  margin: 0 auto;
  gap: 10px;
}

.side {
  margin-top: 10%;
  width: 40%;
}
</style>