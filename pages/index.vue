<template>
  <div id="index">
    <slider />
    <div class="tag row align-items-center py-4">
      <div class="col-2">注目のタグ</div>
      <div class="col-10">
        <ul class="nav">
          <li v-for="(tag,index) in tags" :key="index" class="" @click="clickTag(tag)">
            ＃{{ tag }}
          </li>
        </ul>
      </div>
    </div>
    <h2 class="text-center my-3">
      <span class="headding">Eソルいいところ</span>
      <span v-show="itemFliter">
        {{ itemFliter }}
      </span>
    </h2>
    <div
      v-if="selectedItems.length > 0"
      class="list row"
    >
      <card
        v-for="(item, index) in selectedItems"
        :key="index"
        :title="item.title"
        :contents="item.contents"
        :is-favorite="item.isFavorite"
        :is-cart="item.isCart"
        :index="index"
        :card-tags="item.cardTags"
        :thumbnail-url="item.thumbnailUrl"
        :main-url="item.mainUrl"
      />
    </div>
    <div
      v-else-if="itemFliter.match('お気に入り')"
      class="no-list"
    >
      <p class="text-center py-4">お気に入りは現在ありません</p>
    </div>
    <div
      v-else
      class="no-list"
    >
      <p class="text-center py-4">条件に一致するいいところは現在募集中です。<br>新しく追加する場合は山田に連絡してください。</p>
    </div>
  </div>
</template>

<script>
import Slider from '~/components/Slider.vue'
import Card from '~/components/Card.vue'

export default {
  components: {
    Slider,
    Card
  },
  data () {
    return {
      tags: this.$store.state.recommendTags
    }
  },
  computed: {
    selectedItems () {
      return this.$store.state.selectedItems
    },
    itemFliter () {
      return this.$store.state.itemFilter
    }
  },
  methods: {
    clickTag (selectedTag) {
      this.$store.commit('serchItemforTag', selectedTag)
    }
  }
}
</script>

<style lang="scss" scoped>
#index {
  margin: auto;
}

.tag {
  padding: 0 15%;
  font-weight: bold;
  background-color:#fff;
  ul{
    li {
      display: block;
      padding: 4px 10px;
      margin-left: 4px;
      background: #E4EFE7;
      color: #2D2D2D;
      text-align: center;
      line-height: 1.84;
      font-size: 0.85rem;
      border-radius: 50px;
      cursor: pointer;
    }
  }
}
.headding {
  border-bottom: 3px solid #006b35;
}

.list {
  max-width: 1200px;
  margin: auto;
}
</style>
