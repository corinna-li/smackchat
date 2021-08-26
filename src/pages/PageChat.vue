<template>
  <q-page class="flex column">
    <q-banner class="text-center bg-grey-2"> User is offline 2次測試push </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form class="full-width" @submit="sendMessage">
          <q-input
            v-model="newMessage"
            bg-color="white"
            rounded
            outlined
            label="Message"
            dense
          >
            <template v-slot:after>
              <q-btn color="white" round dense flat icon="send" type="submit" />
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      newMessage: "",
      messages: [
        {
          text: "hey how are you",
          from: "me",
        },
        {
          text: "good thank how about you",
          from: "them",
        },
        {
          text: "pretty good",
          from: "me",
        },
      ],
    };
  },
  methods: {
    sendMessage() {
      this.messages.push({
        text: this.newMessage,
        from: "me",
      });
    },
  },
};
</script>
