<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="9" md="9">
            <v-card class="elevation-10">
                  <v-row class="fill-height">
                    <v-col cols="12" md="6"  class="accent-3" style="padding-top:100px;">
                      <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" height="600"></v-img>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 --text text--accent-3">Register</h1>
                        <v-form>
                            <p>Nama Lengkap</p>
                          <v-text-field
                            label="Name"
                            name="Name"
                            type="text"
                            color="teal accent-3"
                            outlined
                          />
                          <p>Email</p>
                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            color="teal accent-3"
                            outlined
                          />
                          <p>Nomor telepon</p>
                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            color="teal accent-3"
                            outlined
                          />
                          <p>NIK</p>
                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            color="teal accent-3"
                            outlined
                          />
                          <p>Password</p>
                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            color="teal accent-3"
                            outlined
                          />
                          <v-checkbox
                              v-model="ex4"
                             label="Saya menerima segala is syarat pengguna dan kebijakan privacy"
                            color="primary"
                             value="primary"
                             hide-details
                             style="margin-bottom:20px;"
                        ></v-checkbox>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn color="teal accent-3" dark>Login</v-btn>
                      </div>
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

}
</script>

<style>

</style>