<template lang="pug">
  #app
    .word__list
      .word__item
        span.word__english 單字
        span.word__chinese 解釋
        span.word__motive 接觸緣由
        span.word__tag 標籤
      from.word__item
        label.word__english
          input.word__text(type="text")
        label.word__chinese
          input.word__text(type="text")
        label.word__motive
          input.word__text(type="text")
        label.word__tag
          input.word__text(type="text")
      .word__item(v-for="(item, index) in words" :key="index")
        .word__english  {{item.word}}
        .word__chinese {{item.translation}}
        .word__motive {{item.motive}}
        .word__tag {{item.tag}}
  </div>
</template>

<script>
import { wordCollection } from './db'

import '@/assets/styles/normalize.css'
import '@/assets/styles/reset.css'

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      resultData: []
    }
  },
  computed: {
    words () {
      this.resultData.map((item) => {
        item.translation = item.translation.join(',')
        item.tag = item.tag.join(',')
      })
      return this.resultData.length ? this.resultData : []
    }
  },
  mounted () {
    this.getWordsData()
  },
  methods: {
    getWordsData () {
      this.$bind('resultData', wordCollection)
    },
    addMessage: function () {
      // Add message to firestore
      wordCollection.add({
        'motive': '同事英文名',
        'word': 'crystal',
        'translation':
        [
          '水晶',
          '结晶'
        ],
        'similar': [],
        'tag': [
          '人名'
        ]
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

.word
  &__list
    margin: 0 auto;
    padding: 0;
    max-width: 1440px;
  &__item
    display: flex;
    border: 1px solid #eee;
    border-radius: 3px;
    padding: 10px;
  &__text
    width: 100%;
  &__text,
  &__english,
  &__chinese,
  &__motive,
  &__tag
    padding: 5px;
  &__english
    width: 50%;
    font-size 3rem
    text-align: right;
  &__chinese
    width: 50%;
    font-size 2rem
  &__motive
    width: 100%;
  &__tag
    width: 100%;
    font-size 0.6rem

</style>
