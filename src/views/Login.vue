<template>
    <div class="h-screen  w-screen bg-primary-black">
      <Nav />
      <div class=" w-2/6 h-2/3 m-auto flex flex-col items-center py-36">
        <h2 class="text-white text-base text-2xl font-medium mb-10">
          Login to Your Account
        </h2>
        <form class="flex flex-col" action="">
          <input class="email-input w-80 p-1.5 rounded border-yellow-300 border bg-neutral-600 text-white mb-5" type="text" placeholder="Enter your email . . .">
          <input class="password-input w-80 p-1.5 rounded border-yellow-300 border bg-neutral-600 text-white mb-5" type="text" placeholder="Enter your password . . .">
        </form>
        <button class="login-btn bg-primary-yellow p-2 rounded font-medium w-80 text-white mb-5">Login</button>
        <p class="text-white">Doesn't have account? Register <router-link class="cursor-pointer text-primary-yellow" :to="{ name: 'register' }">here</router-link></p>
      </div>

    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import  Nav from '../components/Nav.vue'
  
  export default {
    name: 'login',
    components: {
      Nav
    }
  }
  </script>
  