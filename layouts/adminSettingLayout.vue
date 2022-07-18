<template>
<v-app class="app-bar">
    <core-drawer />
    <core-app-bar />
    
    <core-view />
</v-app>
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
import AppBar from '@/components/core/AppBar.vue';
import Drawer from '@/components/core/Drawer.vue';
import View from '@/components/core/views.vue';

export default {
  props:{
    source: String,
  },
  components: {
    AppBar,
    CoreDrawer: Drawer,
    CoreView: View,
  },
  data() {
    return {

    }
  },
}
</script>