<template>
<v-app>
        <core-drawer />
    <core-app-bar />
        <core-view />
</v-app>

</template>

<script>
import AppBar from '@/components/core/AppBar.vue';
import Drawer from '@/components/core/Drawer.vue';
import View from '@/components/core/views.vue';
export default {
props:{
    source: String,
  },
  components: {
    CoreAppBar: AppBar,
    CoreDrawer: Drawer,
    CoreView: View,


  },
}
</script>

<style>

</style>