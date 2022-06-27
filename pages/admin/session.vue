<template>
  <v-container>
    <section>
      <div class="text-xl" style="margin-bottom: 10px">
        Sesi yang sedang berjalan
      </div>
      <div class="gap">
        <CardVaksin />
        <CardVaksin />
      </div>
    </section>
  </v-container>
</template>

<script>
export default {
  layout: "adminLayout",
};
</script>

<style>
.gap {
  display: flex;
  gap: 15px;
}
</style>