<template>
<v-card>
    <div class="card-vact">
    <div class="slice">
      <div>
        <img :src="img" alt="product" class="img-vact" />
      </div>

      <div>
        <div>
          <div class="text-xl">{{title}} </div>
          <div class="text-sm">{{date}}</div>
          <div class="text-sm">{{time}}</div>
        </div>

        <div style="margin-top: 50px">
          <div class="text-sm">{{vaksin}}</div>
          <div class="text-sm">{{value}}</div>
        </div>
      </div>
    </div>
  </div>
</v-card>

</template>

<script>
export default {
  props: {
    id: {
      default: 1,
      type: Number,
    },
    img: {
      type: String,
      default: '/static/img/Sinovac Vaksin.png',
    },
    title: {
      default: 'Sesi 1',
      type: String,
    },
    date: {
      default: '10-januari-2022',
      type: String
    },
    time: {
      default: '10:11'
    },
    vaksin: {
      default: 'Sinovac',
      type: String
    },
    value: {
      default: 110,
      type: Number,
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
  cursor: pointer !important;
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