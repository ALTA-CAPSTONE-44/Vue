<template>
  <v-container>
    <v-row>
      <v-col class="gap d-flex overflow-x-auto">
          <CardStockVaksin />
          <CardStockVaksin2 vaksin="240" img="/img/Sinovac Vaksin.png" />
          <CardStockVaksin2 vaksin="200" img="/img/Astrazeneca Vaksin.png" />
          <CardStockVaksin2 vaksin="160" img="/img/Moderna Vaksin.png" />
          <CardStockVaksin2 vaksin="100" img="/img/Pfizer Vaksin.png" />
      </v-col>
    </v-row>
    <v-row class="ml-4 mt-10 d-flex justify-start">
      <h1>History Vaksin  </h1>
      <v-spacer></v-spacer>
      <v-text-field
                    prepend-inner-icon="mdi-magnify"
                    rounded
                    background-color="white"
                    placeholder="Search"
                    color="#45C6FC"
                    dense
                    width="250px"
                    large
                    class="shrink mx-6"
                    ></v-text-field>
    </v-row>
    <v-row class="mt-6">
      <v-col>
        <v-card>
          <v-row justify="center">
            <v-col lg="12" md="12" >
              <v-row class="d-flex justify-end">
                <v-col> 
                  <v-btn href="/admin/addstock" class="ml-4 mb-4 mt-3 mr-6" color="blue" dark>
                    <v-icon>mdi-plus</v-icon> Tambah Stock Baru
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">
                    No <v-icon>mdi-arrow-down</v-icon>
                  </th>
                  <th class="text-center">
                    Tanggal <v-icon>mdi-arrow-down</v-icon>
                  </th>
                  <th class="text-center">
                    Nama Vaksin <v-icon>mdi-arrow-down</v-icon>
                  </th>

                  <th class="text-center">
                    History <v-icon>mdi-arrow-down</v-icon>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item,index) in stateVaccines"
                  :key="item.name"

                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.CreatedAt }}</td>
                  <td>{{ item.name }}</td>
                  <td><v-btn :color="item.color" dark>Tambah Stock</v-btn></td>

                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-divider></v-divider>
          <template>
            <div class="text-center">
              <v-container>
                <v-row justify="center">
                  <v-col cols="8">
                    <v-container class="max-width">
                      <v-pagination
                        v-model="page"
                        class="my-4"
                        :length="10"
                      ></v-pagination>
                    </v-container>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions,mapState} from 'vuex'

import CardStockVaksin from '~/components/CardStockVaksin.vue';
export default {
    layout: "adminLayout",
    components: { CardStockVaksin },
    computed: {
      stateVaccines(){
        return this.$store.state.vaccines.vaccines
      }
    },
    mounted(){
        this.token = localStorage.getItem('token')?localStorage.getItem('token'):null
      if(!this.token){
             this.$router.push("/admin/login");


      }
      this.getStock();
    },
    methods: {
      ...mapActions({
        getStock: 'vaccines/handleGetStock'
      })
    },
    data: () => ({
             vaksin: [
          {
            date: '10 Mei 2022',
            vaksin: 'Sinovac',
            jumlah: 50,
            color:'blue',

          },
          {
            date: '10 Mei 2022',
            vaksin: 'Sinovac',
            jumlah: 50,
            color:'blue',

          },
                    {
            date: '10 Mei 2022',
            vaksin: 'Sinovac',
            jumlah: 50,
            color:'blue',

          },
                    {
            date: '10 Mei 2022',
            vaksin: 'Sinovac',
            jumlah: 50,
            color:'blue',

          },
                    {
            date: '10 Mei 2022',
            vaksin: 'Sinovac',
            jumlah: 50,
            color:'blue',

          },
                    {
            date: '10 Mei 2022',
            vaksin: 'Sinovac',
            jumlah: 50,
            color:'blue',

          },
                    {
            date: '10 Mei 2022',
            vaksin: 'Sinovac',
            jumlah: 50,
            color:'blue',          

          },


        ],
          page: 1,

    })
};
</script>

<style>
.grid-vact {
  display: grid;
  grid-template-columns: 420px 420px;
  gap: 10px;
}
table {
  width: 90%;
  border-collapse: separate;
  border-spacing: 0 15px;
}
tr {
  background-color: #fff;
}
th {
  background-color: #fff;
  color: #06152b;
}
th,
td {
  width: 150px;
  text-align: center;
  padding: 10px;
}
</style>