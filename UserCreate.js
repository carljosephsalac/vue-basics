export default {
    data() {
        return {            
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
            this.$emit('add', this.user); // custom event listener
    
            // reset form
            this.user.username = '';
            this.user.email = '';
            this.user.membership = '';            
        }
    },
    template: `
        <div class="m-5 bg-gray-200 p-4 flex flex-col justify-center items-center mx-auto max-w-sm rounded-lg">
            <form @submit.prevent="addUser" class="w-full">
                <div class="mb-5">
                    <label for="username" class="block mb-2 text-sm font-medium text-gray-900">
                        Username
                    </label>
                    <input type="text" id="username" placeholder="Type here" class="input input-bordered w-full" required 
                    v-model="user.username"/>            
                </div>

                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
                        Your email
                    </label>
                    <input type="email" id="email" placeholder="Type here" class="input input-bordered w-full" required 
                    v-model="user.email"/>            
                </div>

                <p class="mb-2">Membership status</p>
                <div class="flex w-full justify-between">
                    <div class="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" name="default-radio" class="radio"
                        value="Guest" v-model="user.membership" />
                        <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900">
                            Guest
                        </label>
                    </div>

                    <div class="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" name="default-radio" class="radio"
                        value="Premium" v-model="user.membership" />
                        <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900">
                            Premium
                        </label>
                    </div>            

                    <div class="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" name="default-radio" class="radio"
                        value="VIP" v-model="user.membership" />
                        <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900">
                            VIP
                        </label>
                    </div>            
                </div>

                <button class="btn btn-neutral btn-sm" type="submit" :disabled="isFormInvalid">
                    Submit
                </button>
            </form>
        </div>
    `,
};