<template>
  <div id="cart" class="mx-4 p-4">
    <h2 class="my-4">やりがい確認</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">いいところ</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cartItem, index) in cart" :key="index">
          <td scope="col">{{ cartItem }}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-right">
      <button type="button" class="btn btn-outline-primary" @click="toComplete()">仕事する</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cart: this.$store.state.cart

    }
  },
  methods: {
    toComplete () {
      this.$store.commit('clearCart')
      this.$router.push('complete')
    }
  }
}
</script>

<style scoped>
  #cart {
    margin-top: 50px;
    margin-bottom: 300px;
    background-color: #fff;
  }
  table {
    border-bottom: 1px solid #dee2e6;
  }
</style>
