<template>
<v-container>
  <v-row>
    <v-col cols="12" class="mb-10 pl-5 pr-5">
    <v-app-bar
      absolute
      color="transparent"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      class="ml-3 mr-3"
    >

     <v-btn text :style="`font-size:20px; color: ${this.registerd};`" to="/admin/action/Registerd" >
        Registerd
      </v-btn>
      <v-btn text :style="`font-size:20px; color: ${this.waiting};`" to="/admin/action/Waiting" >
        Waiting
      </v-btn>
      <v-btn text :style="`font-size:20px; ${this.complate}`" to="/admin/action/Completed" >
        Completed
      </v-btn>

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



    </v-app-bar>
    </v-col>
    <v-col cols="12">
        <v-card>
                  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            No <v-icon>mdi-arrow-down</v-icon>
          </th>
          <th class="text-center">
            No Tiket <v-icon>mdi-arrow-down</v-icon>
          </th>
          <th class="text-center">
            Nama  <v-icon>mdi-arrow-down</v-icon>
          </th>
          <th class="text-center">
            Tanggal Pendaftaran <v-icon>mdi-arrow-down</v-icon>
          </th>

          <th class="text-center">
            Dosis <v-icon>mdi-arrow-down</v-icon>
          </th>
        <th class="text-center">
            Status    
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item,index) in vaksin"
          :key="item.name"

        >
          <td class="text-center">{{ index +1 }}</td>
          <td class="text-center">{{ item.date }}</td>
          <td class="text-center">{{ item.vaksin }}</td>
          <td class="text-center">{{ item.jumlah }}</td>
          <td class="text-center">{{item.dosis}}</td>
          <td class="text-center"><v-btn :color="item.color" dark>Waiting</v-btn></td>

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
export default {
  layout: "adminLayout",
      data: () => ({
        registered: 'black',
        waiting: 'black' ,
        session: [],
        complated: 'black',
             vaksin: [
          {
            date: 'P-GZ7TBCM1',
            vaksin: 'Oriel',
            jumlah: '17 Mei 2022',
            color:'yellow',
            dosis: 'Pertama'

          },
          {
            date: 'P-GZ7TBCM2',
            vaksin: 'Oriel',
            jumlah: '17 Mei 2022',
            color:'yellow',
            dosis: 'Pertama'

          },
                    {
            date: 'P-GZ7TBCM3',
            vaksin: 'Oriel',
            jumlah: '17 Mei 2022',
            color:'yellow',
            dosis: 'Pertama'

          },
                    {
            date: 'P-GZ7TBCM4',
            vaksin: 'Oriel',
            jumlah: '17 Mei 2022',
            color:'yellow',
            dosis: 'Pertama'

          },
                    {
            date: 'P-GZ7TBCM5',
            vaksin: 'Oriel',
            jumlah: '17 Mei 2022',
            color:'yellow',
            dosis: 'Pertama'

          },
                    {
            date: 'P-GZ7TBCM6',
            vaksin: 'Oriel',
            jumlah: '17 Mei 2022',
            color:'yellow',
            dosis: 'Pertama'

          },
                    {
            date: 'P-GZ7TBCM7',
            vaksin: 'Oriel',
            jumlah: '17 Mei 2022',
            color:'yellow',
            dosis: 'Pertama'         

          },


        ],
          page: 1,

    }),
    methods: {
      changeColorRegister(){
        this.registerd = 'black';
        this.waiting = 'black';
        this.complated = 'black';
      },
    async getAllsession() {
    const session = await this.$store.dispatch("auth/getAllsession");
    console.log("session dari method: ", session)
    this.session = session
  }  
 },
}
</script>

<style>

</style>