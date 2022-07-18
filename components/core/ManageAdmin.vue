<template>
    <div>
        <v-card class="mt-8 pa-4">
            <v-row>
                <v-col class="d-flex justify-start">
                    <h3 class="mt-2">Account Admin</h3>
                    <v-spacer></v-spacer>
                    <v-text-field
                    prepend-inner-icon="mdi-magnify"
                    outlined
                    rounded
                    placeholder="Search"
                    color="#45C6FC"
                    dense
                    width="250px"
                    class="shrink mx-6"
                    ></v-text-field>
                    <v-btn
                    style="color: white"
                    color="#45C6FC"><v-icon>mdi-plus</v-icon>
                    Tambah Admin</v-btn>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="d-flex justify-start">
                <v-col cols="12" md="3">
                    <v-checkbox
                    label="Nama"
                    color="#44444"></v-checkbox>
                </v-col>
                <v-col cols="12" md="2" class="mt-5">
                   <p>Status</p> 
                </v-col>
                <v-col cols="12" md="4" class="mt-5">
                    <p>Tempat Kesehatan</p>
                </v-col>
                <v-col cols="12" md="3" class="mt-5">
                    <p>Team</p>
                </v-col>
            </v-row>
        </v-card>
        <v-card class="mt-3 pa-4">
            <v-row class="d-flex justify-start">
                <v-col cols="12" md="3">
                    <v-checkbox
                    label="Ronald Richard"
                    color="#44444"></v-checkbox>
                </v-col>
                <v-col cols="12" md="2" class="mt-5">
                   <v-btn color="success">Aktif</v-btn> 
                </v-col>
                <v-col cols="12" md="4" class="mt-5">
                    <p>Rumah Sakit Sultan Haldirin</p>
                </v-col>
                <v-col cols="12" md="2" class="mt-5">
                    <p>Admin Nakes</p>
                </v-col>
                <v-col cols="12" md="1" class="d-flex">
                    <v-icon large>mdi-delete-outline</v-icon>
                    <v-icon large>mdi-pencil-outline</v-icon>
                </v-col>
            </v-row>
        </v-card>
        <v-card class="mt-3 pa-4">
            <v-row class="d-flex justify-start">
                <v-col cols="12" md="3">
                    <v-checkbox
                    label="Ester Howard"
                    color="#44444"></v-checkbox>
                </v-col>
                <v-col cols="12" md="2" class="mt-5">
                   <v-btn color="success">Aktif</v-btn> 
                </v-col>
                <v-col cols="12" md="4" class="mt-5">
                    <p>Rumah Sakit Sultan Haldirin</p>
                </v-col>
                <v-col cols="12" md="2" class="mt-5">
                    <p>Admin Nakes</p>
                </v-col>
                <v-col cols="12" md="1" class="d-flex">
                    <v-icon large>mdi-delete-outline</v-icon>
                    <v-icon large>mdi-pencil-outline</v-icon>
                </v-col>
            </v-row>
        </v-card>
        <div class="mt-6 float-right">
            <v-pagination
            v-model="page"
            :length="10"
            :total-visible="5"
            ></v-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        page: 1,
      }
    },
}
</script>