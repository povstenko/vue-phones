<template>
  <div id="app">
    <router-link tag="button" class="btn btn-primary" :to='"/add"'>Create new phone</router-link>

    <div class="col-6 offset-3">
      <table class="table table-hover">
        <tr>
          <th>#</th>
          <th>name</th>
          <th>model</th>
          <th>price</th>
          <th></th>
        </tr>
        <tr v-for="item in phones" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.model}}</td>
          <td>{{item.price}}</td>
          <td>
            <button class="btn-sm btn-warning" @click='editPhone(item.id)'>Edit</button>
            <button class="btn-sm btn-danger" @click="deletePhone(item.id)">Delete</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      url: "http://localhost:3000/phones",
      phones: []
    };
  },
  methods: {
    getPhones() {
      // Створення запиту для отримання елементів
      this.$http
        .get(this.url)
        .then(data => data.json())
        .then(val => (this.phones = val));
    },
    // Видалення елемента із таблиці
    deletePhone(id) {
      let ask = confirm("Are you sure?");
      if (ask) {
        this.$http
          .delete(this.url + "/" + id)
          .then(data => data.json())
          .then(val => this.getPhones());
      }
    },
    // Перенаправлення на маршрут редагування
    editPhone(id) {
      this.$router.push('/edit/'+id);
    }
  },
  // Ініціалізація списку автомобілів при створенні компонента
  created() {
    this.getPhones();
  }
};
</script>

<style>
</style>