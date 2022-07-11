<template>
    <v-container>
        <v-row class="d-flex flex-row setting-menu">
            <a @click="showSettingAccount()" class="mr-6">Account</a>
            <a @click="showManageAdmin()" class="mr-6">Manage Account Admin</a>
            <a @click="showManageUser()" class="mr-6">Manage Account User</a>
        </v-row>
        <core-setting-account v-if="settingAccount" />
        <core-manage-admin v-if="manageAdmin" />
        <core-manage-user v-if="manageUser" />
    </v-container>
</template>

<style>
.setting-menu a {
  color: #7D7C7C; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}

.setting-menu {
    color: #0DC7B4;
}

.setting-menu a:active {
    color: #0DC7B4;
}
</style>

<script>
import AppBar from '~/components/core/AppBar.vue'
import Vaksinbooking from '../vaksinbooking.vue'
import SettingAccount from '@/components/core/SettingAccount.vue'
import ManageAdmin from '~/components/core/ManageAdmin.vue'
import ManageUser from '~/components/core/ManageUser.vue'
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
    CoreManageAdmin: ManageAdmin,
    CoreManageUser: ManageUser,
  },
  data() {
    return {
      settingAccount: true,
      manageAdmin: false,
      manageUser: false,
    }
  },
  methods: {
    showSettingAccount(){
      this.settingAccount = true,
      this.manageAdmin = false,
      this.manageUser = false
    },
    showManageAdmin(){
      this.settingAccount = false,
      this.manageAdmin = true,
      this.manageUser = false
    },
    showManageUser(){
      this.settingAccount = false,
      this.manageAdmin = false,
      this.manageUser = true
    },
  },
}
</script>