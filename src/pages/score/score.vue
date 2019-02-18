<template>
  <div>
    <div class="score-wrapper">
      <div class="score"><span class="score-num">{{score}}</span><span class="fenshu">分！</span></div>
      <div class="result-tip">{{scoreTip}}</div>
    </div>
    <div class="share-btn" @click="showCover"><img src="/static/images/4-3.png" alt=""></div>
    <div class="qrcode">
      <div class="qr-title">关注葡萄之家，获取答案</div>
      <img src="/static/images/4-4.png" alt="">
    </div>
    <div class="share-cover" v-show="isShow" @click="showCover">
      <img src="/static/images/5-2.png" alt="">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Score',
  data () {
    return {
      isShow: false,
      score: 0,
      scoreTip: null,
      tureAnswers: [2, 7, 12, 13, 18],
      tips: ['你说，是不是把知识都还给小学老师了？', '还不错，但还需要继续加油哦！', '不要嘚瑟还有进步的空间！', '智商离爆表只差一步了！', '你也太聪明啦，葡萄之家欢迎你！']
    }
  },
  computed: {
    ...mapState(['answerid'])
  },
  methods: {
    showCover: function () {
      this.isShow = !this.isShow
    },
    computedScore: function () {
      // this.answerid.forEach((item, index) => {
      //   if (item === this.tureAnswers[index]) {
      //     this.score += 20
      //   }
      // })
      for (var i = 0; i < this.answerid.length; i++) {
        if (this.answerid[i] === this.tureAnswers[i]) {
          this.score += 20
        }
      }
    },
    showScoreTip () {
      var tipIndex = (this.score / 20) - 1 < 0 ? 0 : (this.score / 20) - 1
      this.scoreTip = this.tips[tipIndex]
    }
  },
  created () {
    this.computedScore()
    this.showScoreTip()
    // document.body.style.backgroundImage = 'url(./static/img/4-1.jpg)'
  }
}
</script>

<style lang="scss">
  body {
    background-image: url('/static/images/4-1.jpg');
    padding-top: 1rem;
  }
  .score-wrapper {
    width: 4.3rem;
    height: 4rem;
    background-image: url('/static/images/4-2.png');
    background-size: 100% 100%;
    margin: 0 auto;
    .score {
      width: 4.3rem;
      text-align: center;
      position: absolute;
      top: 3rem;
      left: 2rem;
      font-size: .8rem;
      font-weight: bold;
      .score-num {
        font-family: Tahoma,Helvetica,Arial;
        color: #a51d31;
      }
      .fenshu {
        @extend .score-num;
      }
    }
    .result-tip {
      position: absolute;
      color: #3e2415;
      font-size: 0.3rem;
      top: 4.1rem;
      left: 1.9rem;
      text-align: center;
      width: 4rem;
    }
  }
  .share-btn {
    text-align: center;
    margin-top: .5rem;
    img {
      width: 2.68rem;
      height: 1.06rem;
    }
  }
  .qrcode {
    text-align: center;
    font-size: 0.25rem;
    margin-top: 0.3rem;
    img {
      margin-top: 0.2rem;
      height: 2.36rem;
      width: 2.36rem;
    }
  }
  .share-cover {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/static/images/5-1.png');
    background-size: 100% 100%;
    opacity: .92;
    img {
      width: 5.34rem;
      height: 4.9rem;
      position: fixed;
      top: 0.2rem;
      left: 50%;
      margin-left: -2.67rem;
    }
  }
</style>
