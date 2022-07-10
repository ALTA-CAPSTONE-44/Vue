<template>
    <v-container>
        <v-row class="d-flex flex-row setting-menu">
            <h3 class="mr-6">Account</h3>
            <h3 class="mr-6">Manage Account Admin</h3>
            <h3 class="mr-6">Manage Account User</h3>
        </v-row>
        <core-setting-account />
    </v-container>
</template>

<style>
.setting-menu {
    color: #A6A6A6;
}

.setting-menu:active {
    color: #0DC7B4;
}
</style>

<script>
import AppBar from '~/components/core/AppBar.vue'
import Vaksinbooking from '../vaksinbooking.vue'
import SettingAccount from '@/components/core/SettingAccount.vue'
export default {
  name: 'SettingPage',
  layout: 'adminLayout',
  props:{
    source: String,
  },
  components: {
    AppBar,
    Vaksinbooking,
    CoreSettingAccount: SettingAccount,
  },
}
</script>