<template>
  <div class="">
    <the-header-index v-if="$route.name == 'index'"/>
    <the-header v-if="$route.name !== 'index'"/>
    <Nuxt />
    <the-footer v-if="$route.name !== 'cart'"/>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheHeaderIndex from '~/components/TheHeaderIndex.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheHeaderIndex,
    TheFooter
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'ECソリューション事業部',
      subTitle: 'いいところ紹介'
    }
  },
  created () {
    this.$store.commit('setFavoriteList')
    this.$store.commit('setSelectedItems')
  }
}
</script>

<style lang="scss" scoped>
body {
  background-color: #FDFAF6;
}
</style>
