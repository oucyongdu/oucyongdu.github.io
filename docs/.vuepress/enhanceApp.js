/*import { slider, slideritem } from 'vue-concise-slider'
import vuescroll from 'vuescroll'
import vuescrollCarousel from 'vuescroll-carousel';





export default async({Vue,options,isServer})=>{
    Vue.use(vuescroll);
    //Vue.use(vuescrollCarousel)
    Vue.use(slider)
    Vue.use(slideritem)
    if (!isServer) {
        await import('vue-concise-slider').then(slider,slideritem=> {
            Vue.use(slider)
            Vue.use(slideritem)
        })
        await import('vuescroll').then(vuescroll=> {
            Vue.use(vuescroll);
        })
    }
}
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
    //申请地址 https://lbs.amap.com/ 选择web端jsAPI
    key: '3ec8807237e421f67d0617579c6a85b8',
    // 插件集合，用到什么插件就使用什么插件
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    v: '1.4.4', // 高德sdk版本，最新的sdk已经出到了2.0
    //官网解释：JSAPI 2.0 提供的开发接口与 1.4 版本达到 99%的兼容度，但是为了保证插件的稳定性我们还是选择1.4.4。
})
*/

import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'


Vue.use(BaiduMap, {
    /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
    ak: 'BI3mkVnhbiuMG9Z2vjDas16am8401p80'
})


