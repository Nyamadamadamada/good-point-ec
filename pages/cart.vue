<template>
  <div id="cart" class="p-4">
    <h1>まとめ</h1>
    <div class="py-4">
      <p>・ECソリューション事業部にはたくさんいいところがある</p>
      <p>・EC事業は三方良しの事業</p>
      <ul>
        <li><dt>売り手良し</dt><dd>顧客に喜んでもらえて、ごはんが食べられる</dd></li>
        <li><dt>買い手良し</dt><dd>ECを導入することで利益ににつながる</dd></li>
        <li><dt>世間良し</dt><dd>欲しい商品を手軽に購入できる</dd></li>
      </ul>
    </div>
    <h4 class="my-4">やりがい確認</h4>
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
    width: 76vw;
    margin: 50px auto;
    background-color: #fff;
    font-size: 1.3rem;
  }
  table {
    border-bottom: 1px solid #dee2e6;
  }
</style>
