import UserList from "./UserList.js";
import UserCreate from "./UserCreate.js";
import TheWatcher from "./TheWatcher.js";

const { createApp } = Vue;

createApp({
  components: { UserList, UserCreate, TheWatcher },
  data() {
    return {
        users: [],
    };
  },
  methods: {
    // This method in the parent component is executed when the add event is emitted from the child component. It takes the user data passed from the child and adds it to the users array
    add(user) {
        this.users.push({
            id: user.id++,
            username: user.username,
            email: user.email,
            membership: user.membership
        });        
    }
  },
}).mount("#app");
