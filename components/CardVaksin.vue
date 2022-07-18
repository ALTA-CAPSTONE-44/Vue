<template>
  <div class="card-vact">
    <div class="slice">
      <div>
        <img :src="img" alt="product" class="img-vact" />
      </div>

      <div>
        <div>
          <div class="text-xl">{{title}}</div>
          <div class="text-sm">{{date}}</div>
          <div class="text-sm">{{time}}</div>
        </div>

        <div style="margin-top: 50px">
          <div class="text-sm">{{vaksin}}</div>
          <div class="text-sm"><v-icon color="#45C6FC">mdi-needle</v-icon>{{number}}</div>
        </div>
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
        default: 200,
    }
  }
};
</script>

<style>
.card-vact {
  background-color: #fff;
  width: 345px;
  height: 210;
  border-radius: 10px;
}
.slice {
  gap: 20px;
  padding: 10px 0px 10px 0px;
  display: flex;
  width: 90%;
  margin: 0 auto;
}
.img-vact {
  width: 160px;
  height: 160px;
}
.text-xl {
  font-size: 24px;
  font-weight: bold;
}
.text-sm {
  font-size: 11px;
  font-weight: 500;
  color: rgb(97, 97, 97);
}
</style>