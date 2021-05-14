<template>
  <div id="app">
    <form class="col-4">
      <legend v-if="adding">Phone adding</legend>
      <legend v-else>Phone edit</legend>
      <div class="form-group">
        <label for="name">Phone name</label>
        <input
          type="text"
          id="name"
          class="form-control"
          placeholder="enter phone name"
          v-model="phoneName"
        >
      </div>
      <div class="form-group">
        <label for="price">Phone price</label>
        <input
          type="number"
          id="price"
          class="form-control"
          placeholder="enter phone price"
          v-model="phonePrice"
        >
      </div>
      <div class="form-group">
        <label for="model">Phone model</label>
        <input
          type="text"
          id="model"
          class="form-control"
          placeholder="enter phone model"
          v-model="phoneModel"
        >
      </div>
      <button v-if="adding" type="button" class="btn btn-success" @click="addPhone">Add new phone</button>
      <button v-if="!adding" type="button" class="btn btn-primary" @click="editPhone(phoneId)">Edit phone</button>
      <button type="button" class="btn btn-secondary" @click="goBack">Return</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      phoneId: 0,
      phoneName: "",
      phoneModel: "",
      phonePrice: 0,
      url: "http://localhost:3000/phones",
      adding: true
    };
  },
  methods: {
    addPhone() {
      let newObj = {
        name: this.phoneName,
        price: this.phonePrice,
        model: this.phoneModel
      };
      this.$http
        .post(this.url, newObj)
        .then(data => data.json())
        .then(val => {
          console.log(val);
          this.goBack();
        });
    },
    getPhone(id) {
      this.$http
        .get(this.url + "/" + id)
        .then(data => data.json())
        .then(val => {
          this.phoneName = val.name;
          this.phonePrice = val.price;
          this.phoneModel = val.model;
          this.phoneId = val.id;
        });
    },
    goBack() {
      this.$router.push("/home");
    },
    editPhone(id) {
      let phoneObj = {
        name: this.phoneName,
        price: this.phonePrice,
        model: this.phoneModel
      };
      this.$http
        .put(this.url + "/" + id, phoneObj)
        .then(val => val.json())
        .then(data => this.goBack());
    }
  },
  created() {
    let params = this.$route.params;
    if (params.id) {
      this.adding = false;
      this.getPhone(params.id);
    }
  }
};
</script>

<style>
</style>