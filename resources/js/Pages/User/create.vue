<template>
<Head title="Add Staff" />
<div class="max-w-7xl mx-auto px-2">
    <div class="flex justify-between gap-4 mb-4 place-items-center">
        <h2>ADD A STAFF</h2>
        <Link :href="route('users.index')" class="rounded bg-primary-500 text-white hover:bg-primary-600 transition border border-primary-500 px-4 py-2">
            <i class="fa-solid fa-plus"></i>
            <span>Back to Staff</span>
        </Link>
    </div>

    <!-- create user form -->
    <form @submit.prevent="submit" action="#" method="post" class="grid md:grid-cols-2 gap-4 bg-white rounded-md p-4">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" v-model="form.name" class="block border border-primary-400 rounded placeholder-gray-400 w-full" placeholder="James Phiri">
            <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="form.email" name="email" class="block border border-primary-400 rounded placeholder-gray-400 w-full" placeholder="james@email.com">
            <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
        </div>

        <div class="form-group">
            <label for="phone">Phone</label>
            <input type="tel" v-model="form.phone" class="block border border-primary-400 rounded placeholder-gray-400 w-full" placeholder="0971234567">
            <span v-if="errors.phone" class="text-red-500">{{ errors.phone }}</span>
        </div>

        <div class="form-group">
            <label for="role">Role</label>
            <select name="role"  v-model="form.role" id="role" class="block border border-primary-400 rounded placeholder-gray-400 w-full" placeholder="select user role">
                <option value="" disabled>select user role</option>
                <option value="admin">Admin</option>
                <option value="staff" selected>Staff</option>
                <option value="user">User</option>
            </select>
            <span v-if="errors.role" class="text-red-500">{{ errors.role }}</span>
        </div>

        <div class="form-group">
            <label for="status">Status</label>
            <select name="status"  v-model="form.status" id="role" class="block border border-primary-400 rounded placeholder-gray-400 w-full">
                <option value="" disabled>select user status</option>
                <option value="active" selected>Active</option>
                <option value="inactive" >Inactive</option>
                <option value="suspended">Suspended</option>
            </select>
            <span v-if="errors.status" class="text-red-500">{{ errors.status }}</span>
        </div>

        <div class="form-group md:col-span-2">
            <label for="address">Address</label>
            <textarea v-model="form.address" name="address" id="address" rows="5" class="block border border-primary-400 rounded placeholder-gray-400 w-full" placeholder="Kabulonga, Lusaka"></textarea>
            <span v-if="errors.address" class="text-red-500">{{ errors.address }}</span>
        </div>
        <button class="block border border-primary-400 rounded placeholder-gray-400 w-full bg-primary-500 text-white px-4 py-2 shadow-md hover:bg-primary-600 transition">Submit</button>
    </form>
</div>
<Loader :loader="form.processing" />
</template>

<script>
import DashboardLaout from '@/Layouts/DashboardLayout.vue';
import { Link, Head, useForm } from '@inertiajs/vue3';

export default {
    components: {
        DashboardLaout, Link, Head
    },
    props: {
        errors: Object,
    },
    layout: DashboardLaout,

    setup() {
        const form = useForm({
            name: '',
            email: '',
            phone: '',
            role: 'user',
            status: 'active',
            address: '',
        });

        const submit = () => {
            form.post(route('users.store'), {
                onSuccess: () => {
                    form.reset();
                },
            });
        };

        return {
            form,
            submit,
        };
    },
};
</script>
