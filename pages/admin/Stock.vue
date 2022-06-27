<template>
  <v-container>
    <CardStockVaksin />

    <div style="margin-top: 40px" class="grid-vact">
      <CardStockVaksin2 />
      <CardStockVaksin2 />
      <CardStockVaksin2 />
      <CardStockVaksin2 />
    </div>
  </v-container>
</template>

<script>
export default {
  layout: "adminLayout",
};
</script>

<style>
.grid-vact {
  display: grid;
  grid-template-columns: 420px 420px;
  gap: 10px;
}
</style>