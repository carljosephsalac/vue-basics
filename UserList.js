export default {
    props: {
        users: Array,
    },
    template: `
        <div class="m-5 bg-gray-200 p-4 flex flex-col mx-auto max-w-sm rounded-lg">
            <h1 class="text-3xl mb-2">User list:</h1>
            <div v-if="users.length" class="overflow-x-auto">
                <table class="table table-xs">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Membership</th>                
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <th>{{ user.id }}</th>
                            <td>{{ user.username }}</td>                
                            <td>{{ user.email }}</td>                
                            <td :class="[
                                {'text-purple-500' : user.membership === 'Premium'},
                                {'text-orange-500' : user.membership === 'VIP'}
                            ]"
                            class="text-green-500">
                            {{ user.membership }}
                            </td>                
                        </tr>              
                    </tbody>            
                </table>
            </div>
            <h1 v-else class="text-xl mb-2">Please add user</h1>
        </div>
    `,
};