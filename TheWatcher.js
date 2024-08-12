export default {
    data() {
        return {
            password: '',
            isPasswordValid: false,
        };
    },
    watch: { // monitor changes to the password: '',
        password(newPass, oldPass) {
            this.isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]+$/.test(newPass);
        },
    },
    template: `
        <div class="m-5 bg-gray-200 p-4 flex flex-col justify-center items-center mx-auto max-w-sm rounded-lg">
            <div class="mb-5 w-full">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">
                    Password
                </label>
                <input type="password" id="password" placeholder="Type here" class="input input-bordered w-full" required
                    v-model="password" :class="isPasswordValid ? 'focus:outline-green-500' : 'focus:outline-red-500'"/>
                <span class="label-text-alt">Password must contain one number and a symbol</span>            
            </div>
        </div>
    `,
};