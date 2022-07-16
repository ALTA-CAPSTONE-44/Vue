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
                          <h1 class="text-center">Silakan Register Akun Admin Anda</h1>
                        </div>
                        <v-form>
                            <p>Email</p>
                          <v-text-field
                            name="Email"
                            type="email"
                            placeholder="Masukkan Email Anda"
                            outlined
                            required
                            v-model="email"
                          />
                          <p>Password</p>
                          <v-text-field
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Masukkan Password"
                            outlined
                            required
                            v-model="password"
                            :rules="passwordRules"   
                          />
                          <v-btn color="#0FE0CB" @click="register"  style="margin-left:200px;">register</v-btn>
                        </v-form>
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
  name: 'LoginRegister',
  data() {
    return {
      email: '',
      password: '',
      passwordRules: [
        v => !!v || 'Password required',
      ]
    }
  },
  methods: {
    async register() {
      const param = {
        email: this.email,
        password: this.password,
      };

      const response = this.$store.dispatch("auth/register", param);

      if (response) {
        this.$router.push("/admin/login");
      } else {
        this.$router.push("/admin/register");
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