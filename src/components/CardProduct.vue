<template>
<div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-secondary-black  max-w-xs">
      <img class="field-img rounded-t-lg" :src="require(`../assets/image/${f.img}`)" alt=""/>
      <div class="flex w-full px-6 justify-end mt-1">
        <router-link class="text-gray-400" :to="{ name: 'edit', params: {id : f.id-1}}">Edit</router-link>
      </div>
    <div class="px-6 py-4">
      <h5 class="field-name text-white text-xl font-medium mb-1">{{f.field_name}}</h5>
      <p class="price text-white text-base mb-2">Price: IDR. 
        {{f.price}}
      </p>
      <router-link :to="{ name: 'booking' }">
        <button type="button" class="book-btn w-full inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">Book Now</button>
      </router-link >
    </div>
  </div>
</div>
</template>
<script>
    export default {
        name: 'Card',
        props: ["f"],
    }
</script>