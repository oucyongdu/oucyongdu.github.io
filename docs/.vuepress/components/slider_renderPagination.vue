<style>
.sliderButton{
  text-align: center;
}
.sliderButton button{
  display: inline-block;
  background: #fff;
  border-radius: 3px;
  /*width: 100px;*/
  height: 30px;
  border: 1px solid #333;
  line-height: 30px;
  margin-left: 10px;
  padding: 0 15px;
  margin-top: 10px;
}
.small-img {
  width: 180px;
  height: 100px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  display: inline-block;
  border-radius: 4%;
  margin-right: 5px;
  cursor: pointer;
  border-style: solid;
  border-color: transparent;
  border-width: medium;
}
.small-img-active {
  width:180px;
  height: 100px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  display: inline-block;
  border-radius: 4%;
  margin-right: 5px;
  cursor: pointer;
  border-style: solid;
  border-color: cornflowerblue;
  border-width: medium;
}
.card-img{
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-height: 600px;
}
.card-image img{
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-height: 600px;
}
.test
{
  text-align: center;
  height: auto;
}
</style>
<template>
  <div>
    <div style="width:80%;margin:20px auto;height:auto;">
      <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
        <slideritem v-for="(item,index) in someList" :key="index" :style="item.style" v-html="item.html"></slideritem>
        <div slot="loading">
          <div class="loadingDot">
          </div>
        </div>
      </slider>
    </div>
    <div v-html="someList[options.currentPage].html_text" class="test">asdadas</div>
    <!--<div>-->
    <!--<div class="small-img" v-bind:key="index" v-for="(item,index) in someList" @click="turnTo(index)" v-html="item.html"></div>-->
    <!--<div v-bind:key="index" v-for="(item,index) in someList" @click='turnTo(index)' :class="index === options.currentPage? 'small-img-active':'small-img'" :index="index" v-html="item.html+item.html_text"></div>
  </div>-->
    <div class='your-container' >
      <!-- bind your configurations -->
      <vuescroll :ops="ops" style="width:100%;margin:20px auto;height:auto;white-space: nowrap;">
        <div style="position: relative;margin: 0 auto;display: table">
        <div v-bind:key="index" v-for="(item,index) in someList" @click='turnTo(index)' :class="index === options.currentPage? 'small-img-active':'small-img'" :index="index" v-html="item.html"></div>
        </div>
      </vuescroll>
    </div>
    <!--<div class="sliderButton">
      <button @click="slidePre">上一页/pre</button>
      <button @click="slideNext">下一页/next</button>
      <button @click="appendslider">从尾添加一页/append</button>
      <button @click="unShiftSlider">从头添加一页/unshift</button>
      <button @click="turnTo(2)">跳转到第三页/turnTo</button>
      <button @click="autoplayStart">启动自动滚动/autoplayStart</button>
      <button @click="autoplayStop">停止自动滚动/autoplayStop</button>
      <button @click="loadingShow">loading显示/loadingShow</button>
      <button @click="loadingHide">loading关闭/loadingHide</button>
    </div>-->
  </div>
</template>
<script>
// eslint-disable-next-line import/no-duplicates
// import slider from 'vue-concise-slider'
// eslint-disable-next-line import/no-duplicates
// import slideritem from 'vue-concise-slider'
// import slider from '../components/slider'
// import slideritem from '../components/slider_item'
import { slider, slideritem } from 'vue-concise-slider'
import vuescroll from 'vuescroll'
//import vuescrollCarousel from 'vuescroll-carousel';
export default {
  el: '#sliderRenderPagination',
  data () {
    return {
      someList: [],
      options: {
        currentPage: 0,
        pagination: false,
        /* renderPagination: (h, index) => {
          return h('div', {
            class: 'swiper-pagination-bullet'
          }, [index])
        }, */
        // tracking: false,
        // thresholdDistance: 100, // 滑动距离阈值判定
        // thresholdTime: 300, // 滑动时间阈值判定
        loop: true // 无限循环
        // loopedSlides: 1
        // autoplay:1000,//自动播放:时间[ms]
      },
      ops: {
        vuescroll: {},
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: true,
          scrollingY: false,
          speed: 300,
          easing: 'easeInOutQuad',
          verticalNativeBarPos: 'right',
          maxHeight: undefined,
          maxWidth: undefined
        },
        rail: {
          background: '#01a99a',
          opacity: 0,
          size: '10px',
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: '0',
          keepShow: false,
          border: 'none'
        },
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: '#c1c1c1',
          opacity: 1,
          hoverStyle: false,
          specifyBorderRadius: false,
          minSize: false,
          size: '6px',
          disable: true
        }
      }
    }
  },
  components: {
    slider,
    slideritem,
    vuescroll
  },
  mounted () {
    let that = this
    this.$watch(
        () => {
          return this.$refs.slider.data.currentPage
        },
        (val) => {
            options.currentPage = val
        }
    )
    //that.currentImage()
    //that.$refs.slider.$on('slide', function(pagenum){options.currentPage=pagenum})
    //this.$refs.slider.$on('slide', this.options.currentPage)
    setTimeout(function () {
      that.someList = [
       {
          html: '<img class="card-img" @click=\'slideNext\' src="../photos/20240618.jpg">',
          html_text: '<div>2024.06.17, Graduation 2024</div>',
          style: {}
        },
       {
          html: '<img class="card-img" @click=\'slideNext\' src="../photos/20240617.jpg">',
          html_text: '<div>2024.06.17, Graduation 2024</div>',
          style: {}
        },       
       {
          html: '<img class="card-img" @click=\'slideNext\' src="../photos/20240612.jpg">',
          html_text: '<div>2024.06.12, Outdoor Barbecue for Graduation</div>',
          style: {}
        },    
       {
          html: '<img class="card-img" @click=\'slideNext\' src="../photos/20220621.jpg">',
          html_text: '<div>2022.06.21, One Last Team Building Event at Laoshan Campus</div>',
          style: {}
        },
        {
          html: '<img class="card-img" src="../photos/20220601.jpg">',
          html_text: '<div>2022.06.01, Children\'s Day</div>',
          style: {}
        }, 
        {
          html: '<img class="card-img" src="../photos/20220421.jpg">',
          html_text: '<div>2022.04.21, Spring Outing, Sakura Avenue at Laoshan Campus</div>',
          style: {}
        },
        {
          html: '<img class="card-img" src="../photos/20211129.jpg">',
          html_text: '<div>2021.11.29, Welcome Dinner</div>',
          style: {}
        }       
      ]
    }, 100)
  },
  methods: {
    turnTo (num) {
      // 传递事件 vue 2.0 传递事件修改了，好的写法应该直接写在空vue类中
      this.$refs.slider.$emit('slideTo', num)
      this.options.currentPage = num
    },
    slideNext () {
      this.$refs.slider.$emit('slideNext')
      // slider.$emit('slideNext')
    },
    slidePre () {
      this.$refs.slider.$emit('slidePre')
      // slider.$emit('slidePre')
    },
    autoplayStart () {
      this.$refs.slider.$emit('autoplayStart')
      // slider.$emit('slidePre')
    },
    autoplayStop () {
      this.$refs.slider.$emit('autoplayStop')
      // slider.$emit('slidePre')
    },
    appendslider () {
      this.someList.push({
        html: 'slidernew',
        style: {
          background: '#333',
          color: '#fff'
        }
      })
    },
    unShiftSlider () {
      this.someList.unshift({
        html: 'slidernew',
        style: {
          background: '#333',
          color: '#fff'
        }
      })
    },
    loadingShow () {
      this.$refs.slider.$emit('loadingShow')
      // slider.$emit('slidePre')
    },
    loadingHide () {
      this.$refs.slider.$emit('loadingHide')
      // slider.$emit('slidePre')
    },
    // 监听事件发生了变化,需要指向一个子组件实例
    slide (data) {
 //options.currentPage = data.currentPage
      //this.$refs.slider.$on('slide', function(pagenum){this.options.currentPage = pagenum})
      this.options.currentPage = data.currentPage
      console.log(data)
    },
    onTap (data) {
      console.log(data)
    },
    onInit (data) {
      console.log(data)
    }
  }
}
</script>
