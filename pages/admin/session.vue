<template>
  <v-container>
    <section>
      <v-row>
        <v-col class="d-flex justify-start">
          <div class="text-xl" style="margin-bottom: 10px">
            Sesi yang sedang berjalan 
          </div>
          <v-spacer></v-spacer>
          <v-btn
            href="/admin/AddSession"
            style="color: white"
            color="#45C6FC"><v-icon>mdi-plus</v-icon>
            Tambah Sesi Baru</v-btn>
        </v-col>
      </v-row>
      <div class="gap d-flex overflow-x-auto" >
        <div @click="pushToSession()" v-for="item in stateSessions" :key="item.id">
        <CardVaksin  img="/img/product.png" :date="item.date" time="08:00-12.00" vaksin="Sinovac" :title="item.name" :number="item.stock_vaccine"  />

        </div>


      </div>
    </section>
  </v-container>
</template>

<script>
import {mapActions,mapState} from 'vuex'

import NavBar from '~/components/core/NavBar.vue'
import Vaksinbooking from '../vaksinbooking.vue'
export default {
  components: { NavBar, Vaksinbooking },
  name: 'IndexPage',
  layout: "adminLayout",
  computed: {
      stateSessions(){
        return this.$store.state.vaccines.sessions
      }
    },
  data () {
    return{
    session: [],
    }
  },
  mounted(){
    this.getSession();
  },
  methods: {
    ...mapActions({
      getSession: 'vaccines/handleSession'
    }),
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