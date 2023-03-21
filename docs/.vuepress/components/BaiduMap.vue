<template>
  <div class="mapdiv">
  <baidu-map id="allmap" @ready="mapReady" :scroll-wheel-zoom="true" >
    <bm-scale anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-scale>
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    <!--<bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>-->
    <!--<bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_LEFT" :isOpen="true"></bm-overview-map>-->
    <!--<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>-->

    <bm-marker :position="{lng: 120.038636, lat: 35.779944}" :dragging="true" animation="" :icon="{url:'/icons/map.svg',size: {width: 30, height: 45}}" >
      
    </bm-marker>
    <bm-control anchor="BMAP_ANCHOR_TOP_LEFT">
      
      <div class="gm-style">
      <div style="position: absolute; left: 0px; top: 0px;">
      <div style="background-color: white; margin: 10px; padding: 1px; box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px; border-radius: 2px;">
      <div jstcache="0" style="">
        <div jstcache="51" class="place-card place-card-large">
          <div class="place-desc-large">
            <div jstcache="24" class="place-name" jsan="7.place-name">Ocean University of China</div>
            <div jstcache="25" class="address" jsan="7.address">1299 Sansha Road, Qingdao, China 266100</div>
          </div>
         
          <div class="review-box">
            <div jstcache="27" class="" style="display:none"></div>
            <div role="img" jstcache="28" class="rating-stars" style="display:none">
              <div jstcache="29" class="icon rating-star rating-full-star rating-half-star rating-empty-star" style="display:none" jsan="7.icon,7.rating-star,7.rating-full-star,7.rating-half-star,7.rating-empty-star"></div>
            </div>
            <a jstcache="30" class="" style="display:none"></a>
          </div>
          <div class="bottom-actions">
            <div class="google-maps-link">
              <a aria-label="查看大图" target="_blank" jstcache="31" href="//api.map.baidu.com/place/detail?uid=278b70f17292728febe582cd&output=html&source=jsapi" jsaction="mouseup:placeCard.largerMap">查看大图</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </bm-control>
    <!--<bm-local-search :keyword="keyword" :auto-viewport="false" :location="location" :panel="false"></bm-local-search>-->
  </baidu-map>
  </div>
</template>

<script>
import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'BI3mkVnhbiuMG9Z2vjDas16am8401p80'
})

export default {
  methods: {
    //地图初始化
    mapReady({ BMap, map }) {
      this.point = new BMap.Point(120.038636,35.779944); // 选择一个经纬度作为中心点
      map.centerAndZoom(this.point, 16); //设置地图中心点和缩放级别
      this.BMap=BMap
      this.map=map
    }
  },
  data () {
    return {
      location: '青岛',
      keyword: '中国海洋大学(西海岸校区)'
    }
  }
}
</script>

<style>
#allmap{
  height: 100%;
  width: 100%;
  position: relative;
  margin: 0 auto;
}
.mapdiv{
  width: 1000px;
  height: 500px;
  position: relative;
  margin: 0 auto;
}
.gm-style .place-card-large {
  padding: 9px 4px 9px 11px;
}
.gm-style .place-card, .gm-style .default-card, .gm-style .directions-card {
  cursor: default;
}
.gm-style .place-card div, .gm-style .place-card a, .gm-style .default-card div, .gm-style .default-card a {
  color: #5b5b5b;
  font-family: Roboto,Arial;
  font-size: 12px;
  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
  user-select: text;
}
.gm-style .place-desc-large {
  width: 200px;
  display: inline-block;
}
.gm-style .place-card .place-name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 500;
  font-size: 14px;
  color: black;
}
.gm-style .place-card .address {
  margin-top: 6px;
}
.gm-style .review-box {
  padding-top: 5px;
}
.gm-style .bottom-actions {
  padding-top: 10px;
}
.gm-style .bottom-actions .google-maps-link {
  display: inline-block;
}
.gm-style .place-card a:visited, .gm-style .default-card a:visited, .gm-style .directions-card a:visited {
  color: #1a73e8;
}

</style>