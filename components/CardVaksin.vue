<template>
  <div class="card-vact">
    <div class="slice">
      <div>
        <img src="/img/product.png" alt="product" class="img-vact" />
      </div>

      <div>
        <div>
          <div class="text-xl">Sesi 1</div>
          <div class="text-sm">Senin, 30 Mei 2020</div>
          <div class="text-sm">08.00 - 12.00</div>
        </div>

        <div style="margin-top: 50px">
          <div class="text-sm">Vaksin Sinovac</div>
          <div class="text-sm">50/60</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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