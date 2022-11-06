<template>
    <div class="h-screen  w-screen bg-primary-black">
      <Nav />
      <div class=" w-2/6 h-2/3 m-auto flex flex-col items-center py-36">
        <h2 class="text-white text-base text-2xl font-medium mb-10">
          Edit Field Details
        </h2>
        <form @submit.prevent="setPost" class="flex flex-col" action="">
          <input class="custom-img w-80 p-1.5 rounded border-yellow-300 border bg-neutral-600 text-white mb-5" id="customImg" type="text" ref="file" placeholder="Select image . . ." v-on:change="field.img">
          <input id="fieldName" class="field-name w-80 p-1.5 rounded border-yellow-300 border bg-neutral-600 text-white mb-5" type="text" placeholder="Enter field name . . ." v-model="field.fieldName">
          <input id="price" class="price w-80 p-1.5 rounded border-yellow-300 border bg-neutral-600 text-white mb-5" type="number" placeholder="Enter price . . ." v-model="field.price">
        </form>
        <button class="submit-btn bg-primary-yellow p-2 rounded font-medium w-80 text-white mb-5" @click="updateField()">Submit</button>
      </div>

    </div>
</template>

<script>
// @ is an alias to /src
import  Nav from '../components/Nav.vue'
import axios from "axios";

export default {
  name: 'EditField',
  components: {
    Nav
  },
  data() {
    return {
      field: {
      }
    }
  },
  methods: {
    updateField() {
      axios.patch(`http://localhost:3000/field/${this.data.id}`,this.data)
        .then(response => {
          console.log(response);
        })
        .catch(error => console.log(error))
    }
  }
}
</script>