<template>
    <header class="bg-primary-yellow text-primary-black font-bold">
        <nav class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
            <div class="flex items-center gap-x-4">
                <h1 class="text-lg">Box2Box</h1>
            </div>
            <ul class="flex flex-1 justify-end gap-x-10">
                <router-link class="cursor-pointer hover:border-transparent hover:text-gray-500 active:text-gray-600 " :to="{ name: 'home' }">Home</router-link>
                <router-link class="cursor-pointer hover:border-transparent hover:text-gray-500 active:text-gray-600" :to="{ name: 'field' }">Field</router-link>
                <router-link class="cursor-pointer hover:border-transparent hover:text-gray-500 active:text-gray-600" :to="{ name: 'transaction' }">Transaction</router-link>
                <router-link class="cursor-pointer hover:border-transparent hover:text-gray-500 active:text-gray-600" :to="{ name: 'login' }">Login</router-link>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Nav',
    }
</script>

<style>
.router-link-active{
    color: gray;
}
</style>