<template>
    <v-card class="mt-8 mb-10 pa-4">
        <v-row>
            <v-col class="d-flex justify-start">
                <h3>Account Admin</h3>
                <v-spacer></v-spacer>
                <v-text-field
                prepend-inner-icon="mdi-magnify"
                outlined
                rounded
                placeholder="Search"
                color="#45C6FC"
                height="30px"
                ></v-text-field>
                <v-btn
                style="color: white"
                color="#45C6FC"><v-icon>mdi-plus</v-icon>
                Tambah Admin</v-btn>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
            <v-col class="d-flex justify-space-between">
                <p>Nama</p>
                <p>Status</p>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    
}
</script>