<template>
    <div class="h-screen  w-screen bg-primary-black">
      <Nav />
      <div class=" w-2/6 h-2/3 m-auto flex flex-col items-center py-32">
        <h2 class="text-white text-base text-2xl font-medium mb-10">
          Register Your Account
        </h2>
        <form class="flex flex-col" action="">
          <input class="name-input w-80 p-1.5 rounded border-yellow-300 border bg-neutral-600 text-white mb-5" type="text" placeholder="Enter your name . . .">
          <input class="email-input w-80 p-1.5 rounded border-yellow-300 border bg-neutral-600 text-white mb-5" type="text" placeholder="Enter your email . . .">
          <input class="password-input w-80 p-1.5 rounded border-yellow-300 border bg-neutral-600 text-white mb-5" type="text" placeholder="Enter your password . . .">
        </form>
        <button class="register-btn bg-primary-yellow p-2 rounded font-medium w-80 text-white mb-5">Register</button>
        <p class="text-white">Already have an account? Login <router-link class="cursor-pointer text-primary-yellow" :to="{ name: 'login' }">here</router-link></p>
      </div>

    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import  Nav from '../components/Nav.vue'
  
  export default {
    name: 'register',
    components: {
      Nav
    }
  }
  </script>
  