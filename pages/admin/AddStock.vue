<template>
  <v-container>
    <section>
      <div class="text-xl" style="margin-bottom: 10px">
        <p>Tambahkan Stock Vaksin</p>
        <v-row>
          <v-col cols="12" md="6">
            <v-card>
              <CardStockVaksin2 vaksin="240" img="/img/Sinovac Vaksin.png" />
              <v-text-field 
              v-model="foo" 
              type="number" 
              append-outer-icon="mdi-plus" 
              @click:append-outer="increment"
              prepend-icon="mdi-minus" 
              @click:prepend="decrement"
              outlined
              hide-spin-button
              ></v-text-field>
            </v-card>   
          </v-col>
          <v-col cols="12" md="6">
            <v-card>
              <CardStockVaksin2 vaksin="200" img="/img/Astrazeneca Vaksin.png" />
              <v-text-field 
              v-model="foo" 
              type="number" 
              append-outer-icon="mdi-plus" 
              @click:append-outer="increment"
              prepend-icon="mdi-minus" 
              @click:prepend="decrement"
              outlined
              hide-spin-button
              ></v-text-field>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-card>
              <CardStockVaksin2 vaksin="160" img="/img/Moderna Vaksin.png" />
              <v-text-field 
               v-model="foo" 
               type="number" 
               append-outer-icon="mdi-plus" 
               @click:append-outer="increment"
               prepend-icon="mdi-minus" 
               @click:prepend="decrement"
               outlined
               hide-spin-buttons
               ></v-text-field>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card>
              <CardStockVaksin2 vaksin="100" img="/img/Pfizer Vaksin.png" />
              <v-text-field 
               v-model="foo" 
               type="number" 
               append-outer-icon="mdi-plus" 
               @click:append-outer="increment"
               prepend-icon="mdi-minus" 
               @click:prepend="decrement"
               outlined
               hide-spin-buttons
               ></v-text-field>
            </v-card>
          </v-col>
        </v-row>
        <v-btn class="mt-8">Simpan Stock</v-btn>
      </div>
    </section>
  </v-container>
</template>

<script>
import AppBar from '~/components/core/AppBar.vue'
import Vaksinbooking from '../vaksinbooking.vue'
export default {
  components: { AppBar, Vaksinbooking },
  name: 'IndexPage',
  layout: "adminLayout",
  data() {
    return {
      foo: 0,
    }
  },
  methods: {
    increment () {
      this.foo = parseInt(this.foo,10) + 1
    },
    decrement () {
      this.foo = parseInt(this.foo,10) - 1
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

<style scoped>
.v-text-field {
  width: 120px;
}
</style>