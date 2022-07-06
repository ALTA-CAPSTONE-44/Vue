<template>
  <v-container>
    <CardStockVaksin />
    

    <div style="margin-top: 40px" class="grid-vact">
      <CardStockVaksin2 />
      <CardStockVaksin2 />
      <CardStockVaksin2 />
      <CardStockVaksin2 />
    </div>

    <div>
      <div class="text-xl my-6">Laporan pengambilan vaksin</div>
      <table>
        <tr>
          <th style="border-radius: 8px">No.</th>
          <th>Tanggal</th>
          <th>Nama Vaksin</th>
          <th style="border-radius: 8px">Jumlah</th>
        </tr>
        <tr>
          <td class="td" style="border-radius: 8px">01</td>
          <td>10 Mei 2022</td>
          <td>Sinovac</td>
          <td style="border-radius: 8px">50</td>
        </tr>
        <tr>
          <td class="td" style="border-radius: 8px">02</td>
          <td>10 Mei 2022</td>
          <td>Sinovac</td>
          <td style="border-radius: 8px">50</td>
        </tr>
        <tr>
          <td class="td" style="border-radius: 8px">03</td>
          <td>10 Mei 2022</td>
          <td>Sinovac</td>
          <td style="border-radius: 8px">50</td>
        </tr>
         <tr>
          <td class="td" style="border-radius: 8px">04</td>
          <td>10 Mei 2022</td>
          <td>Sinovac</td>
          <td style="border-radius: 8px">50</td>
        </tr>
         <tr>
          <td class="td" style="border-radius: 8px">05</td>
          <td>10 Mei 2022</td>
          <td>Sinovac</td>
          <td style="border-radius: 8px">50</td>
        </tr>
         <tr>
          <td class="td" style="border-radius: 8px">06</td>
          <td>10 Mei 2022</td>
          <td>Sinovac</td>
          <td style="border-radius: 8px">50</td>
        </tr>
         <tr>
          <td class="td" style="border-radius: 8px">07</td>
          <td>10 Mei 2022</td>
          <td>Sinovac</td>
          <td style="border-radius: 8px">50</td>
        </tr>
      </table>
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
table {
  width: 90%;
  border-collapse: separate;
  border-spacing: 0 15px;
}
tr {
  background-color: #fff;
}
th {
  background-color: #fff;
  color: #06152b;
}
th,
td {
  width: 150px;
  text-align: center;
  padding: 10px;
}
h2 {
  color: #4287f5;
}
</style>