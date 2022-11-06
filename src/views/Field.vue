<template>
  <div class="field h-screen  w-screen bg-primary-black">
    <Nav />
    <div class="field-data container flex py-5 px-4 mt-10 gap-10">
      <div v-for="f in field" :key="f.id">
        <Card :f="f"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import  Nav from '../components/Nav.vue';
import Card from '../components/CardProduct.vue';
import axios from "axios";

export default {
  name: 'Field',
  components: {
    Nav,
    Card
  },
  data() {
    return {
      field: [],
    };
  },
  methods: {
    setField(data) {
      this.field = data;
    },
  },
  mounted() {
    axios
     .get("http://localhost:3000/field")
     .then((response) => this.setField(response.data))
     .catch((error) => console.log(error))
  },
};
</script>

