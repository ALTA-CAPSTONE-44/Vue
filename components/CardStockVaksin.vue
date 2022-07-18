<template>
  <div>
    <div class="card-total-stock">
      <div class="text-xl">Total Stock Vaksin</div>
      <div class="slice">
        <img src="/img/iconvact.png" alt="iconvact" style="height: 120px"  />
        <div class="text-2xl">700</div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  props:{
    img: {
        type: String,

        default: '/img/product.png',
    },
    date: {
        type: String,
        default: 'Senin 30 Mei 2020',
    },
    time: {
        type: String,
        default: '08:00-12.00',
    },
    vaksin: {
       type: String,
        default: 'Sinovac',
    },
    title: {
       type: String,
        default: 'Sesi 1',
    },
    number: {
        type: Number,
        default: 'Sesi 1',
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