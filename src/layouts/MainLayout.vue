<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
          dense
          icon="arrow_back"
          flat
          label="Back"
          @click="$route.go(-1)"
        />

        <q-toolbar-title class="absolute-center"> {{ title }}</q-toolbar-title>

        <q-btn
          v-if="!userDetails.userId"
          to="/auth"
          dense
          icon="account_circle"
          class="absolute-right q-pr-sm"
          no-caps
          flat
          label="Login"
        />
        <q-btn
          v-else
          @click="logoutUser"
          dense
          icon="account_circle"
          class="absolute-right q-pr-sm"
          no-caps
          flat
        >
          Logout<br />{{ userDetails.name }}
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import { openURL } from "quasar";
// import { useRouter } from "vue-router";
import { mapState, mapActions } from "vuex";

export default {
  name: "MainLayout",

  computed: {
    ...mapState("example", ["userDetails"]),
    title() {
      console.log(this.$route);
      let currentPath = this.$route.fullPath;
      if (currentPath == "/") return "SmackChat";
      else if (currentPath == "/chat") return "Chat";
      else if (currentPath == "/auth") return "Login";
    },
  },
  methods: {
    ...mapActions("example", ["logoutUser"]),
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.q-toolbar {
  .q-btn {
    line-height: 1.2;
  }
}
</style>
