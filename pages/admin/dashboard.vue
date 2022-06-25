<template>
<v-container fluid>
  <v-row>
    <v-col cols="8">
      <v-row>
        <v-col cols="12" class="mb-6">

          <v-card
            height="500"
          >
            <v-card-title>Total Penerima Vaksin</v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card height="250">
            <v-card-title >Test</v-card-title>
          </v-card>
        </v-col>
        
        <v-col cols="6">
          <v-card height="250">
            <v-card-title >Test</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="4">
      <v-row>
        <v-col cols="12">
          <v-card height="250">
            <v-card-title>Test</v-card-title>
          </v-card>  
        </v-col>
        
        <v-col cols="12">
          <v-card height="250">
            <v-card-title>Test</v-card-title>
          </v-card>  
        </v-col>
        
        <v-col cols="12">
          <v-card height="250" >
            <div  class="card-vact">
             
              <div class="sidee">
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
              </div>
              </div>
            
          
          </v-card>  
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</v-container>

</template>

<script>
export default {
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