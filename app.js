import UserList from "./UserList.js";

const { createApp } = Vue;

createApp({
  components: { UserList },
  data() {
    return {
        users: [],
        user: {
            id: 1,
            username: "",
            email: "",
            membership: "",
        },      
    };
  },
  computed: { // methods that returns something
    isFormInvalid() {
        return this.user.username === '' || this.user.email === '' || this.user.membership === '';
    }
  },
  methods: {
    addUser() {
        this.users.push({ // add to users array
            id: this.user.id++,
            username: this.user.username,
            email: this.user.email,
            membership: this.user.membership
        });

        // reset form
        this.user.username = '';
        this.user.email = '';
        this.user.membership = '';
      
        this.users.forEach(user => { // log the user
            console.log(user.id);        
            console.log(user.username);        
            console.log(user.email);        
            console.log(user.membership);        
        });      
    }
  }
}).mount("#app");
