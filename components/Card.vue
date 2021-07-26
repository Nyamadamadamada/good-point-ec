<template>
  <div class="col-sm-4">
    <div class="card">
      <div class="img_wrap">
        <img @click="openModal" :src="thumbnailUrl">
      </div>
      <div class="card-body">
        <h5 @click="openModal" class="card-title">
          {{ title }}
        </h5>
        <div class="card-tag-wrap">
        <ul class="card-tag">
          <li v-for="(tag, index) in cardTags" :key="index">
            ＃{{ tag }}
          </li>
        </ul>
        <span
            class="heart"
            :class="[ isFavorite ? 'heartAnimation' : '']"
            @click="changeFavorite(index)"
          />
        </div>
      </div>
    </div>
    <div class="modal-window">
      <!-- コンポーネント MyModal -->
      <the-modal @close="closeModal" v-if="isModalShow">
        <!-- default スロットコンテンツ -->
        <div class="slot px-2">
          <div class="slot-img">
            <img :src="[ mainUrl ? mainUrl : thumbnailUrl ]">
          </div>
          <div class="slot-contents px-2">
            <ul class="card-tag">
              <li v-for="(tag, index) in cardTags" :key="index">
                ＃{{ tag }}
              </li>
            </ul>
            <h3 class="my-3">{{ title }}
              <span
                class="mx-1 btn-favorite"
                :class="[ isFavorite ? 'headernav-favorite-red' : 'headernav-favorite']"
                @click="changeFavorite(index)"
              />
            </h3>
            <div v-html="contents" class="modal-contents"></div>
          </div>
        </div>
        <!-- /default -->
        <template v-slot:footer>
          <button class="btn btn-outline-secondary" @click="closeModal()">閉じる</button>
          <p v-if="isCart" class="">
            追加済み
          </p>
          <button v-else class="btn btn-primary" @click="addCartItem()">
            <span
              class="headernav-flame-white mr-1"
            />
            やりがいに追加
          </button>
        </template>
      </the-modal>
    </div>
  </div>
</template>

<script>
import TheModal from '~/components/TheModal.vue'

export default {
  components: {
    TheModal
  },
  props: {
    title: String,
    isFavorite: Boolean,
    isCart: Boolean,
    index: Number,
    contents: String,
    cardTags: [],
    thumbnailUrl: String,
    mainUrl: String

  },
  data () {
    return {
      isModalShow: false,
      message: ''
    }
  },
  methods: {
    changeFavorite (index) {
      this.$store.commit('changeFavorite', index)
    },
    openModal () {
      this.isModalShow = true
    },
    closeModal () {
      this.isModalShow = false
    },
    addCartItem () {
      this.$store.commit('addCart', { itemTitle: this.title, i: this.index })
    }
  }
}

</script>

<style lang="scss" scoped>
.card {
  margin: 10px;
  img,h5 {
    cursor: pointer;
  }
}
.card-tag-wrap {
  display: relative;
}

.img_wrap{
  overflow: hidden;
}

.img_wrap img{
  width: 100%;
  transition-duration: 0.5s;
}

.img_wrap:hover img{
  transform: scale(1.15);
  transition-duration: 0.5s;
}

.card-tag {
  font-weight: bold;
  ul{
    width: 50%;
    li {
      display: block;
      padding: 4px 10px;
      margin-left: 4px;
      background: #E4EFE7;
      color: #2D2D2D;
      text-align: center;
      line-height: 1.84;
      font-size: 0.8rem;
      border-radius: 50px;
    }
  }
}
.slot {
  display: flex;
  height: 100%;
  &-img {
    width: 50%;
    margin: auto;
    img {
      width: 100%;
    }
  }
  &-contents {
    width: 50%;
  }
}

.modal-contents {
  font-size: 1.1rem;
}

</style>
