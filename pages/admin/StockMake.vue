<template>
  <v-container>
    <section class="d-flex">
      <div class="mr-14">
        <div>Pilih Sesi</div>

        <div class="mt-8">
          <div class="gap">
            <label class="custom-checkbox mr-3">
              <input type="hidden" name="alarm" value="False" />
              <input
                class="custom-checkbox-input"
                name="alarm"
                value="True"
                type="checkbox"
              />
              <span class="custom-checkbox-text">Sesi 1</span>
            </label>
            <label class="custom-checkbox">
              <input type="hidden" name="alarm" value="False" />
              <input
                class="custom-checkbox-input"
                name="alarm"
                value="True"
                type="checkbox"
              />
              <span class="custom-checkbox-text">Sesi 2</span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <div>Waktu</div>

        <div class="mt-8">
          <div class="gap">
            <label class="custom-checkbox mr-3">
              <input type="hidden" name="alarm" value="False" />
              <input
                class="custom-checkbox-input"
                name="alarm"
                value="True"
                type="checkbox"
              />
              <span class="custom-checkbox-text">Sesi 1</span>
            </label>
            <label class="custom-checkbox">
              <input type="hidden" name="alarm" value="False" />
              <input
                class="custom-checkbox-input"
                name="alarm"
                value="True"
                type="checkbox"
              />
              <span class="custom-checkbox-text">Sesi 2</span>
            </label>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="mt-10">
        <div>Pembukaan Pendaftaran</div>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Senin, 1 Januari 2022" class="py-lg-3" Senin, 1 Januari 2022></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Solo" class="py-lg-3" solo></v-text-field>
          </v-col>
        </v-row>
      </div>
    </section>

    <section class="d-flex">
      <div class="mr-14">
        <div>Jenis Vaksin</div>

        <div class="mt-8">
          <div class="gap">
            <label class="custom-checkbox mr-3">
              <input type="hidden" name="alarm" value="False" />
              <input
                class="custom-checkbox-input"
                name="alarm"
                value="True"
                type="checkbox"
              />
              <span class="custom-checkbox-text">Vaksin Sinovac</span>
            </label>
            <label class="custom-checkbox mr-3">
              <input type="hidden" name="alarm" value="False" />
              <input
                class="custom-checkbox-input"
                name="alarm"
                value="True"
                type="checkbox"
              />
              <span class="custom-checkbox-text">Vaksin Astrazeneca</span>
            </label>
            <label class="custom-checkbox mr-3">
              <input type="hidden" name="alarm" value="False" />
              <input
                class="custom-checkbox-input"
                name="alarm"
                value="True"
                type="checkbox"
              />
              <span class="custom-checkbox-text">Vaksin Moderna</span>
            </label>
            <label class="custom-checkbox">
              <input type="hidden" name="alarm" value="False" />
              <input
                class="custom-checkbox-input"
                name="alarm"
                value="True"
                type="checkbox"
              />
              <span class="custom-checkbox-text">Vaksin Pfizer</span>
            </label>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-11">
      <div class="mr-14">
        <div>Stock Vaksin</div>

        <div>
          <v-row cols="3">
            <v-col>
              <v-text-field
                label="Isi Stock"
                placeholder="Placeholder"
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <div class="text-sm">Stock Vaksin Tersedia</div>
              <div class="text-xl">Sinovac 240</div>
            </v-col>
            <v-col cols="6"></v-col>
          </v-row>
        </div>

        <div class="my-2">
          <v-btn x-large style="background-color: #0fe0cb" dark>
            Tambahkan Sesi
          </v-btn>
        </div>
      </div>
    </section>
  </v-container>
</template>

<script>
export default {
  layout: "adminLayout",
};
</script>

<style >
.input-cus {
  background-color: #fff;
}
.custom-checkbox-input {
  display: none;
  margin-top: 30px;
}

.custom-checkbox-text {
  border-radius: 10px;
  padding: 20px 40px;
  background-color: white;
  color: #555;
  cursor: pointer;
  user-select: none;
}

.custom-checkbox-input:checked ~ .custom-checkbox-text {
  background-color: #0fe0cb;
  color: white;
}
</style>