const { createApp } = Vue;

createApp({
  data() {
    return {
      username: "Carl",
      email: "carl@vue.com",
      membership: "Guest",
    };
  },
}).mount("#app");
