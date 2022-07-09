<template>
  <v-container>
    <v-row>

      <v-col cols="3">
          <CardStockVaksin />
      </v-col>
      
      <v-col cols="3">
          <CardStockVaksin2 vaksin="240" img="/img/Sinovac Vaksin.png" />
      </v-col>
      
      <v-col cols="3">
          <CardStockVaksin2 vaksin="200" img="/img/Astrazeneca Vaksin.png" />
      </v-col>
      
      <v-col cols="3">
          <CardStockVaksin2 vaksin="160" img="/img/Moderna Vaksin.png" />
      </v-col>

      <v-col cols="9">
        <v-card>
          <v-row justify="center">
            <v-col lg="12" md="12" >
              <v-row class="d-flex justify-end">
                <v-col cols="3"> 
              <v-btn class="ml-4 mb-4 mt-3 mr-6" color="blue" @click="openFormVaksin" dark>
                <v-icon>mdi-plus</v-icon> Tambah Stock Baru
              </v-btn>
                </v-col>
                <v-col cols="4">
                <v-text-field class="mt-2 mr-10" solo label="search"></v-text-field>

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
            Status <v-icon>mdi-arrow-down</v-icon>
          </th>
          <th class="text-center">
            Tanggal <v-icon>mdi-arrow-down</v-icon>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item,index) in vaksin"
          :key="item.name"

        >
          <td>{{ index +1 }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.vaksin }}</td>
          <td>{{ item.jumlah }}</td>
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
      
      <v-col cols="3">
          <CardStockVaksin2 vaksin="100" img="/img/Pfizer Vaksin.png" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardStockVaksin from '~/components/CardStockVaksin.vue';
export default {
    layout: "adminLayout",
    components: { CardStockVaksin },
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
          dialog: false,


    }),
    methods: {
      openFormVaksin(){
        this.$router.push('/admin/addStock')
      }
    }
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
h2 {
  color: #4287f5;
}
</style>