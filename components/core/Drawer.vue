<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    :src="image"
    app
    color="white"
    mobile-breakpoint="911"
    persistent
    width="260"
  >
    <v-list-item class="py-8">
      <v-img src="/img/logo.png" style="width: 100px" />
    </v-list-item>

    <v-list nav>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        active-class="primary white--text"
      >
        <v-list-item-action>
          <v-icon>
            {{ link.icon }}
          </v-icon>
        </v-list-item-action>
        <v-list-item-title v-text="link.text" />
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-8">
        <img src="/img/profile.png" >
        <div>Ahmad Alfian</div>
        <div class="text-sm">Admin RS Sultan Haldirin</div>
        <v-btn class="mt-8 align-items-center" rounded outlined color="#0FE0CB">
          <v-icon>mdi-logout</v-icon>
          <div>Keluar</div>
        </v-btn>
      </div>
     </template>

  </v-navigation-drawer>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  props: {
    opened: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    links: [
      {
        to: "/admin/",
        icon: "mdi-view-dashboard",
        text: "Dashboard",
      },
      {
        to: "/admin/session",
        icon: "mdi-note-text",
        text: "Session",
      },
      {
        to: "/admin/Stock",
        icon: "mdi-archive",
        text: "Stock",
      },

      {
        to: "/admin/setting",
        icon: "mdi-cog",
        text: "Settings",
      },
    ],
  }),
  computed: {
    ...mapState("app", ["image", "color"]),
    inputValue: {
      get() {
        return this.$store.state.app.drawer;
      },
      set(val) {
        this.setDrawer(val);
      },
    },
  },
  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"]),
  },
};
</script>

<style>
</style>