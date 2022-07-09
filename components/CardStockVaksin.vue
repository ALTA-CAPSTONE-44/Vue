<template>
  <div>
    <div class="card-total-stock">
      <div class="text-xl">Total Stock Vaksin</div>
      <div class="slice">
        <img :src="img" alt="iconvact" style="height: 120px"  />
        <div class="text-2xl">{{number}}</div>
      </div>
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
.text-2xl {
  font-weight: bold;
  font-size: 48px;
}
.card-total-stock {
  background-color: #fff;
  border-radius: 5px;
  width: 319px;
  height: 210px;
  padding: 30px;
}
</style>