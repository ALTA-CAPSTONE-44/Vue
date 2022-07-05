<template>
  <div>
    <v-container>
    <div class="ma-10 pa-12" style="float:left">
    <v-card style="margin-right:150px; padding-right: 0px;">
      <v-navigation-drawer
        permanent
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Zahra pariska
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item href="/account">    
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Akun saya</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Kotak Masuk</v-list-item-title>
          </v-list-item>
          <v-list-item href="/riwayattiketvaksin">
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Riwayat dan Tiket Vaksin</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>

  <div style="float:left;">
    <v-card
    width="500px"
  >
  <v-btn depressed outlined style="float:right; margin-top: 10px; margin-right: 5px;">
      <nuxt-link to="/pembaruanprofil">Simpan</nuxt-link>
    </v-btn>
    <v-btn depressed outlined style="float:right; margin-top: 10px; margin-right: 5px;">
      <nuxt-link to="/pembaruanprofil">Batal</nuxt-link>
    </v-btn>
    <v-card-title>Profil</v-card-title>
    <div style="border-top:1px solid black; margin-bottom: 20px;">
      </div>
    <v-card-text style="color: black;">
       <v-form>
                            <p>identitas User</p>
                          <v-select
                            v-model="select"
                            :items="items"
                             :rules="[v => !!v || 'Item is required']"
                             label="identitas User"
                            required
                            outlined
                            ></v-select>
                          <p>Nama Lengkap</p>
                          <v-text-field
                            id="password"
                            label="Nama Lengkap"
                            name="Nama Lengkap"
                            type="text"
                            color="teal accent-3"
                            outlined
                          />
                          <p>NIK</p>
                          <v-text-field
                            id="NIK"
                            label="NIK"
                            name="NIK"
                            type="password"
                            color="teal accent-3"
                            outlined
                          />
                          <p>Nomor Paspor</p>
                          <v-text-field
                            id="nomorpaspor"
                            label="Masukan Nomor paspor"
                            name="nomor paspor"
                            type="password"
                            color="teal accent-3"
                            outlined
                          />
                          <p>Tanggal Lahir</p>
        <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
        outlined
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            outlined
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
                          <div style="margin-bottom:20px;">
                          <nuxt-link to="#" style="float:right;"> lupa sandi ?</nuxt-link>
                          </div>
                          <div style="margin-bottom:20px; text-align:center; margin-left: 70px;" >
                          <nuxt-link to="#" class="text-center"> Belum punya akun ? Register</nuxt-link>
                          </div>
                        </v-form>
    </v-card-text>
  </v-card>
  </div>
  </v-container>
  </div>
</template>

<script>
  export default {
    name: 'PembaruanProfile',
    layout: 'userLayout',
    data: () => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    }),
  }
</script>

<style>

</style>