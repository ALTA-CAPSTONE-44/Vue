<template>
  <v-container>
    <section>
      <div class="text-xl" style="margin-bottom: 10px">
        Jenis Vaksin
      </div>
      <div class="text-xl" style="margin-bottom: 10px">
        Stock Vaksin
           
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