
<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light p-0">
      <div class="block-header-logo col-3">
        <a class="" href="#">
          <img class="lazyload block-header-logo--img" alt="sitelogo" src="/title.png" height="54">
        </a>
      </div>
      <div class="block-global-search col-5">
        <div class="form-inline my-2">
          <input v-model="searchWord" class="form-control mr-sm-2" type="text" placeholder="気になるワード" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" @click="clickSearchWord()">検索</button>
        </div>
      </div>
      <div class="col-4">
        <div class="nav-right">
          <button
            v-show="$store.state.itemFilter"
            class="btn btn-outline-secondary"
            @click="filterReset()"
          >
            絞込みリセット
          </button>
          <ul class="navbar-nav mr-5 flex-row-reverse">
            <li class="nav-item navCart nav-link">
              <span @click="toCart()" class="headernav-flame"></span>
              <span v-show="cartCount > 0" class="navCartIcon">{{ cartCount }}</span>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="serchFavorite()">お気に入り<span class="headernav-favorite"></span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar-expand-lg py-1" :class="[ isScrollPoint ? 'isHiddenNav' : '']">
      <ul class="navbar-nav">
        <li
          v-for="category in category"
          :key="category.id"
          class="nav-item"
          @click="clickCategory(category)"
        >
          {{ category.name }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      category: this.$store.state.category,
      scrollY: 0,
      appBarHeight: 10,
      searchWord: ''
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    serchFavorite () {
      this.$store.commit('serchFavorite')
    },
    onScroll () {
      this.scrollY = window.scrollY
    },
    clickSearchWord () {
      this.$store.commit('serchItemforWord', this.searchWord)
    },
    clickCategory (selectedCategory) {
      this.$store.commit('serchItemforCategory', selectedCategory)
    },
    filterReset () {
      this.$store.commit('filterReset')
    },
    toCart () {
      if (this.cartCount > 0) {
        this.$router.push('cart')
      }
    }
  },
  computed: {
    isScrollPoint () {
      return this.appBarHeight < this.scrollY
    },
    cartCount () {
      return this.$store.getters.getCartCount
    }
  }
}

</script>
<style lang="scss" scoped>
header {
  background-color: #fff;
  height: 80px;
  z-index: 10;
}

.block-header-logo {
    width: 100px;
    font-size: 0;
    padding: 12px 0 11px;
}

.block-global-search {
    align-items: center;
}
.isHiddenNav{
  opacity: 0;
  transform: translateY(-5px);
  transition: .5s;
}
.nav-right {
  display: flex;
  justify-content: flex-end;
}

nav:last-of-type {
  background-color: #006b35;
  ul {
      width: 70vw;
      justify-content: space-around;
      margin: 0 auto;
    li {
      color: #fff;
      font-weight: bold;
      font-size: 1.2rem;
      cursor: pointer;
    }
    li:hover {
      text-decoration: underline;
    }
  }
}

li.navCart{
 position: relative;
  .navCartIcon{
    position: absolute;
    right: -16px;
    top: -3px;
    width: 23px;
    height: 23px;
    font-size: 0.8rem;
    border-radius: 50%;
    background: #c7004c;
    box-shadow: 0px 1px 2px #ccc;
    line-height: 25px;
    color: #fff;
    text-align: center;
  }
}

/* 検索窓 */
  #form2{
    background:#eee;
  }

  #sbtn5:hover{
  color:#7fbfff;
  }

</style>
