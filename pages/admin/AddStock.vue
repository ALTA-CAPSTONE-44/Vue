<template>
  <v-container>
    <section>
      <div class="text-xl" style="margin-bottom: 10px">
        Tambahkan Stock Vaksin
        <v-col cols="3">
          <CardStockVaksin2 vaksin="240" img="/img/Sinovac Vaksin.png" />
      </v-col>
      
      <v-col cols="3">
          <CardStockVaksin2 vaksin="200" img="/img/Astrazeneca Vaksin.png" />
      </v-col>
      
      <v-col cols="3">
          <CardStockVaksin2 vaksin="160" img="/img/Moderna Vaksin.png" />
      </v-col>

      <v-col cols="3">
          <CardStockVaksin2 vaksin="100" img="/img/Pfizer Vaksin.png" />
      </v-col>   
    
 </div>
    </section>
  </v-container>
</template>

<script>
import NavBar from '~/components/core/NavBar.vue'
import Vaksinbooking from '../vaksinbooking.vue'
export default {
  components: { NavBar, Vaksinbooking },
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