<template>
  <q-form @submit="submitForm">
    <q-input
      v-if="tab == 'register'"
      v-model="formData.name"
      class="q-mb-md"
      outlined
      label="Name"
    ></q-input>
    <q-input
      outlined
      v-model="formData.email"
      type="email"
      label="Email"
      class="q-mb-md"
    ></q-input>
    <q-input
      outlined
      v-model="formData.password"
      type="password"
      label="password"
      class="q-mb-md"
    ></q-input>
    <div class="row">
      <q-space></q-space>
      <q-btn color="primary" :label="tab" type="submit"></q-btn>
    </div>
  </q-form>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: ["tab"],
  data() {
    return {
      formData: {
        name: "",
        email: "danny@test.com",
        password: "123456",
      },
    };
  },
  methods: {
    ...mapActions("example", ["registerUser", "loginUser"]),
    submitForm() {
      if (this.tab == "login") {
        // console.log("login");
        this.loginUser(this.formData);
      } else {
        // console.log("register");
        this.registerUser(this.formData);
      }
    },
  },
};
</script>
