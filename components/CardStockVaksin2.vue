<template>
  <div class="card-stock-vact2">
    <div>
      <img :src="img" alt="p" style="height: 160px" />
    </div>
    <div>
      <div class="text-xl">
        Vaksin <br />
        Sinovac
      </div>
      <div class="text-2xl">{{vaksin}}</div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      img: {
        type: String,
        default: '/img/vact1.png',
      },
      vaksin : {
        type: Number,
        default: 250
      }
  }
};
</script>

<style>
.card-stock-vact2 {
  background-color: #fff;
  display: flex;
  width: 319px;
  height: 210px;
  padding: 30px;
  gap: 10px;
  border-radius: 10px;
}
</style>