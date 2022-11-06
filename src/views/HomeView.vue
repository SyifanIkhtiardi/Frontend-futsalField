<template>
  <div class="h-screen  w-screen bg-primary-black">
    <Nav />
    <div class="relative items-center p-20">
      <img class="w-5/12 mx-auto" src="../assets/home-img.png" />
      <h1 class="text-white absolute text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">BOX2BOX</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import  Nav from '../components/Nav.vue'

export default {
  name: 'HomeView',
  components: {
    Nav
  }
}
</script>
