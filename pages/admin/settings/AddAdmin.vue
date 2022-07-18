<template>
    <div class="ma-8">
        <v-card class="mt-8 pa-4">
            <v-row>
                <v-col class="d-flex justify-start">
                    <v-btn @click="$router.go(-1)"><v-icon large>mdi-chevron-left</v-icon></v-btn>
                    <h3 class="mt-1 ml-3">Add Account Admin</h3>
                </v-col>
            </v-row>
        </v-card>
        <v-card class="pa-8 mt-4">
            <v-row class="d-flex justify-start">
                <v-col cols="12" md="4">
                    <p>Nama Lengkap</p>
                    <v-text-field
                    name="username"
                    type="text"
                    placeholder="Masukkan Nama Lengkap"
                    outlined
                    hide-details="auto"
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <p>Alamat/Rumah Sakit</p>
                    <v-text-field
                    name="address"
                    type="text"
                    placeholder="Masukkan Alamat/Rumah Sakit"
                    outlined
                    hide-details="auto"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row class="">
                <v-col>
                    <p>Status</p>
                    <div class="gap">
                        <label class="custom-checkbox mr-3">
                            <input type="hidden" name="alarm" value="False">
                            <input
                                class="custom-checkbox-input"
                                name="alarm"
                                value="True"
                                type="checkbox"
                            >
                            <span class="custom-checkbox-text">Super Admin</span>
                        </label>
                        <label class="custom-checkbox mr-3">
                            <input type="hidden" name="alarm" value="False">
                            <input
                                class="custom-checkbox-input"
                                name="alarm"
                                value="True"
                                type="checkbox"
                            >
                            <span class="custom-checkbox-text">Admin Nakes</span>
                        </label>
                    </div>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-start">
                 <v-col cols="12" md="4">
                    <p>Nomor ID</p>
                    <v-text-field
                    name="noid"
                    type="text"
                    placeholder="Nomor ID"
                    outlined
                    hide-details="auto"
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <p>Password</p>
                    <v-text-field
                    name="password"
                    type="text"
                    placeholder="Password"
                    outlined
                    hide-details="auto"
                    >
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                    outlined
                    color="#0DC7B4"
                    class="mr-4">Generate ID & Password</v-btn>
                    <v-btn color="#0FE0CB">Simpan Akun</v-btn>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'AddAdmin',
    layout: 'adminLayout',
}
</script>

<style scoped>
.custom-checkbox-input {
  display: none;
  margin-top: 30px;
}

.custom-checkbox-text {
  border-radius: 10px;
  padding: 20px 40px;
  background-color: white;
  color: #45C6FC;
  cursor: pointer;
  user-select: none;
}

.custom-checkbox-input:checked ~ .custom-checkbox-text {
  background-color: #0fe0cb;
  color: white;
}
</style>