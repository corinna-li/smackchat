<template>
  <router-view />
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    ...mapActions("example", ["handleAuthStateChanged"]),
  },
  mounted() {
    this.handleAuthStateChanged();
  },
};
</script>
