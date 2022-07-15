<template>
  <v-container>
    <section>
      <div class="text-xl" style="margin-bottom: 10px">
        Sesi yang sedang berjalan
      </div>
      <div class="gap" >
        <div @click="pushToSession()">
        <CardVaksin  img="/img/product.png" date="Senin 30 Mei 2020" time="08:00-12.00" vaksin="Sinovac" title="Sesi 1" number="200"  />

        </div>
        <div  @click="pushToSession()">
          <CardVaksin  img="/img/Vaccine-B.png" date="Senin 30 Mei 2020" time="12.00-16:00" vaksin="Sinovac" title="Sesi 2" number="200"  />

        </div>

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
  data () {
    return{
    session: [],
    }
  },
  methods: {
    pushToSession() {
     this.$router.push('/admin/action/sectionData')
    },
  },
  
};
</script>

<style>
.gap {
  display: flex;
  gap: 15px;
}
</style>