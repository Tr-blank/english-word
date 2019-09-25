<template lang="pug">
  #app
    ul
      li
        span 單字
        span 解釋
        span 接觸緣由
        span 標籤
      li(v-for="(item, index) in words" :key="index")
        span {{item.word}}
        span {{item.translation}}
        span {{item.motive}}
        span {{item.tag}}
  </div>
</template>

<script>
import { wordCollection } from './db'

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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
