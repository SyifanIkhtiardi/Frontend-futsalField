<template>
    <div class="h-screen  w-screen bg-primary-black">
      <Nav />
      <div class=" w-2/6 h-2/3 m-auto flex flex-col items-center py-36">
        <h2 class="text-white text-base text-2xl font-medium mb-10">
          Input Your Booking Details
        </h2>
        <form class="flex flex-col" action="">
          <input class="booking-name w-80 p-1.5 rounded border-yellow-300 border bg-neutral-600 text-white mb-5" type="text" placeholder="Enter your name . . .">
          <input class="booking-date w-80 p-1.5 rounded border-yellow-300 border bg-neutral-600 text-white mb-5" type="datetime-local" placeholder="Enter your booking date . . .">
          <input class="booking-duration w-80 p-1.5 rounded border-yellow-300 border bg-neutral-600 text-white mb-5" type="number" placeholder="Enter your booking duration . . .">
        </form>
        <button class="submit-btn bg-primary-yellow p-2 rounded font-medium w-80 text-white mb-5">Submit</button>
      </div>

    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import  Nav from '../components/Nav.vue'
  
  export default {
    name: 'Booking',
    components: {
      Nav
    }
  }
  </script>
  