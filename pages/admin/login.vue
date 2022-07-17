<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="9" md="9">
            <v-card class="elevation-10">
                  <v-row class="fill-height">
                    <v-col cols="12" md="6"  class="accent-3">
                      <v-img 
                      :src="require('~/assets/login-admin.png')"
                      height="500"></v-img>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <div class="pa-4">
                          <h1 class="text-center">Silakan Masuk ke Akun Anda</h1>
                        </div>
                        <v-form>
                            <p>Email</p>
                          <v-text-field
                            name="Email"
                            type="text"
                            placeholder="Masukkan Email Anda"
                            outlined
                            v-model="email"
                          />
                          <a class="grey--text" @click="snackbar = true" style="float:right;">Lupa Password?</a>
                          <v-snackbar
                            v-model="snackbar"
                            color="#45C6FC"
                          >
                            {{ text }}

                            <template v-slot:action="{ attrs }">
                              <v-btn
                                color="white"
                                text
                                v-bind="attrs"
                                @click="snackbar = false"
                              >
                                OKE
                              </v-btn>
                            </template>
                          </v-snackbar>
                          <p>Password</p>
                          <v-text-field
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Masukkan Password"
                            outlined
                            v-model="password"
                          />
                           <div style="margin-bottom:20px; text-align:center;" >
                          <nuxt-link to="/admin/register" class="text-center"> Belum punya akun ? Register</nuxt-link>
                          </div>
                        </v-form>
                        <v-btn color="#0FE0CB" @click="login" style="margin-left:200px;" >Masuk</v-btn>
                      </v-card-text>
                    </v-col>
                  </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      snackbar: false,
      text: 'Silahkan menghubungi administrator utama',
    }
  },
  methods: {
    async login() {
      const param = {
        email: this.email,
        password: this.password,
      };

      const response = this.$store.dispatch("auth/login", param);

      if (response) {
        this.$router.push("/admin/");
      } 
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-size: 3rem;
    line-height: normal;
    color: #0FE0CB;
  }
</style>