<template>
  <div>
    <header class="top-banner">
        <span class="top-banner-tip" v-if="father == 'home'">第一周</span>
        <span class="top-banner-tip" v-if="father == 'item'">题目{{itemNum}}</span>
    </header>
    <div v-if="father == 'home'">
      <img src="/static/images/1-2.png" class="home-back">
      <router-link to="item" class="start button"></router-link>
    </div>
    <div v-if="father == 'item'">
      <div class="item-list-wrapper">
        <div class="item-list">
          <header class="item-title">{{itemDetail[itemNum-1].topic_name}}</header>
          <ul>
              <li class="item" v-for="(item, index) in itemDetail[itemNum-1].topic_answer" :key="item.topic_answer_id" @click="choose(index, item.topic_answer_id)">
                  <span class="item-pre" :class="{ 'hasChoosed': choosedType == index }">{{answerType(index)}}</span>
                  <span class="item-detail">{{item.answer_name}}</span>
              </li>
          </ul>
        </div>
      </div>
      <span class="button next" v-if="itemNum < itemDetail.length" @click="nextQ"></span>
      <span class="button submit" v-else @click="submitAnswer"></span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'commonContainer',
  props: ['father'],
  data () {
    return {
      choosedType: null,
      choosedId: null
    }
  },
  computed: mapState([
    'itemNum',
    'itemDetail'
  ]),
  methods: {
    ...mapActions(['nextItem', 'init']),
    nextQ () {
      if (this.choosedType != null) {
        this.choosedType = null
        this.nextItem(this.choosedId)
      } else {
        alert('请选择答案')
      }
    },
    submitAnswer () {
      if (this.choosedType != null) {
        this.nextItem(this.choosedId)
        this.$router.push('score')
      } else {
        alert('请选择答案')
      }
    },
    choose (answerType, answerid) {
      this.choosedType = answerType
      this.choosedId = answerid
    },
    answerType (index) {
      switch (index) {
        case 0: return 'A'
        case 1: return 'B'
        case 2: return 'C'
        case 3: return 'D'
      }
    }
  },
  created () {
    if (this.father === 'home') {
      this.init()
      document.body.style.backgroundImage = 'url(./static/images/1-1.jpg)'
    }
  }
}
</script>

<style lang="scss">
  body {
    background: url('/static/images/1-1.jpg') no-repeat;
  }
  .top-banner {
    position: absolute;
    right: 1rem;
    width: 1.44rem;
    height: 3rem;
    background: url('/static/images/WechatIMG2.png') no-repeat;
    background-size: 100% 100%;
    .top-banner-tip {
      position: absolute;
      bottom: .45rem;
      left: 0.25rem;
      width: 1rem;
      height: 0.3rem;
      text-align: center;
      color: #a57c50;
      font-weight: 600;
      font-size: .2rem;
    }
  }
  .home-back {
      position: absolute;
      width: 6rem;
      height: 5.2rem;
      top: 2.2rem;
      left: .6rem;
  }
  .button {
      position: absolute;
      width: 2rem;
      height: 1rem;
      top: 7.5rem;
      left: 2.5rem;
      background-size: 100% 100%;
      cursor: pointer;
  }
  .start {
      background-image: url('/static/images/1-4.png')
  }
  .next {
      background-image: url('/static/images/2-2.png')
  }
  .submit {
      background-image: url('/static/images/3-1.png')
  }
  .item-list-wrapper {
      @extend .home-back;
      background-image: url('/static/images/2-1.png');
      background-size: 100% 100%;
      .item-list {
          position: absolute;
          top: 1rem;
          left: 1.3rem;
          font-size: 0.3rem;
          color: #fff;
          ul {
            margin-top: 0.2rem;
            .item {
                margin-top: 0.2rem;
                font-size: 0.25rem;
                cursor: pointer;
                .item-pre {
                    display: inline-block;
                    margin-right: 0.2rem;
                    border: 1px solid #fff;
                    border-radius: 50%;
                    vertical-align: middle;
                    text-align: center;
                    line-height: 0.35rem;
                    width: 0.35rem;
                }
            }
          }
      }
  }
  .hasChoosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
</style>
