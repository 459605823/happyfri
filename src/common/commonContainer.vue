<template>
  <div>
    <header class="top-banner">
        <span class="top-banner-tip" v-if="father == 'home'">第一周</span>
        <span class="top-banner-tip" v-if="father == 'item'">题目一</span>
    </header>
    <div v-if="father == 'home'">
      <img src="../images/1-2.png" class="home-back">
      <router-link to="item" class="start button"></router-link>
    </div>
    <div v-if="father == 'item'">
      <div class="item-list-wrapper">
        <div class="item-list">
          <header class="item-title">题目一</header>
          <ul>
              <li class="item">
                  <span class="item-pre">A</span>
                  <span class="item-detail">答案A</span>
              </li>
              <li class="item">
                  <span class="item-pre">B</span>
                  <span class="item-detail">答案B</span>
              </li>
              <li class="item">
                  <span class="item-pre">C</span>
                  <span class="item-detail">正确答案</span>
              </li>
              <li class="item">
                  <span class="item-pre">D</span>
                  <span class="item-detail">答案D</span>
              </li>
          </ul>
        </div>
      </div>
      <span class="button next"></span>
      <!-- <span class="button submit"></span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonContainer',
  props: ['father']
}
</script>

<style lang="scss">
  .top-banner {
    position: absolute;
    right: 1rem;
    width: 1.44rem;
    height: 3rem;
    background: url('../images/WechatIMG2.png') no-repeat;
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
  }
  .start {
      background-image: url(../images/1-4.png)
  }
  .next {
      background-image: url(../images/2-2.png)
  }
  .submit {
      background-image: url(../images/3-1.png)
  }
  .item-list-wrapper {
      @extend .home-back;
      background-image: url(../images/2-1.png);
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
</style>
