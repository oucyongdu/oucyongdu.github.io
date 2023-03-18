<template>
  <div id="container"></div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";
window._AMapSecurityConfig = {
  // 设置安全密钥
  securityJsCode: 'f80444b16c101edd69a0fe0691a948c3',
}
export default {
  props : ["iptId"],
  data() {
    return {
      map : null,
      mouseTool : null,
      overlays : [],
      auto : null,
      placeSearch : null,
    }
  },
  methods : {
    initMap() {
      AMapLoader.load({
        "key": "3ec8807237e421f67d0617579c6a85b8", // 申请好的Web端开发者Key，首次调用 load 时必填
        "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        "plugins": ["AMap.AutoComplete","AMap.PlaceSearch"],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        // "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap)=>{
        this.map = new AMap.Map('container',{
          viewMode : "2D",  //  是否为3D地图模式
          zoom : 13,   // 初始化地图级别
          center : [113.65553,34.748764], //中心点坐标  郑州
          resizeEnable: true
        });

        this.auto = new AMap.AutoComplete({
          input : this.iptId  // 搜索框的id
        });
        this.placeSearch = new AMap.PlaceSearch({
          map: this.map,
          panel: "panel", // 结果列表将在此容器中进行展示。
          // city: "010", // 兴趣点城市
          autoFitView: true, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
          extensions: 'base' //返回基本地址信息
        });
        this.auto.on("select", this.select);//注册监听，当选中某条记录时会触发
      }).catch(e => {
        console.log(e);
      });
    },

    select(e) {
      this.placeSearch.setCity(e.poi.adcode);
      this.placeSearch.search(e.poi.name);  //关键字查询查询
    }
  },
  mounted() {
    this.initMap();
  },
};
</script>

<style scoped>
#bai-du-map {
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "微软雅黑";
}
</style>
<style>
/* 隐藏高德logo  */
.amap-logo {
  display: none !important;
}
/* 隐藏高德版权  */
.amap-copyright {
  display: none !important;
}
</style>