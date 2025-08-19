---
pageClass: home-page
# some data for the components

name: Yong Du (都勇)
profile: /yongdu.jpg



bio1: Associate Professor
bio2: Faculty of Information Science and Engineering
bio3: Ocean University of China

email: csyongdu@ouc.edu.cn
---
<div>                </div>
<ProfileSection :frontmatter="$page.frontmatter" />

## Bio
<p style="text-align:justify;text-align-last:justify"></p>

I am an associate professor in [the Faculty of Information Science and Engineering](http://it.ouc.edu.cn/), at [Ocean University of China](http://www.ouc.edu.cn/). I received my Ph.D. degree from [South China University of Technology](https://www.scut.edu.cn/new/) under the supervision of [Prof. Guoqiang Han](http://www2.scut.edu.cn/cs/2017/0629/c22284a328110/page.htm) and [Prof. Shengfeng He](http://www.shengfenghe.com/) in December 2019. I received the B.Sc. degree and M.Eng. degree in computer science and technology from [Jiangnan University](https://www.jiangnan.edu.cn/) under the supervision of [Prof. Xiaojun Wu](https://scholar.google.co.uk/citations?user=5IST34sAAAAJ&hl=en), in 2011 and 2014 respectively. 

My research interests encompass the realms of visual understanding, cross-modal generation, and deep learning. Currently, I am the leader of the [Visual Understanding and Generation (VUG) group](http://127.0.0.1:8080/group/) at the [Institute of Artificial Intelligence](http://ai-ouc.cn/), Ocean University of China. I am a Senior Member of both IEEE and CCF. I have received several honors, including the Excellent Young Scholar Award from the Shandong Artificial Intelligence Science and Technology Awards and the ACM Rising Star Award (regional level).

<font color='chocolate'>**I am actively seeking outstanding and motivated M.S. candidates to undertake exciting and innovative projects in computer vision and image processing. If you possess a keen interest in these areas and are driven to succeed, I invite you to submit your curriculum vitae and academic transcripts for consideration by emailing them to me at [csyongdu@ouc.edu.cn].**</font>


## News
-  07/2025, 1 paper has been accepted by [ACM MM2025](https://acmmm2025.org/). 
-  06/2025, 3 paper has been accepted by [ICCV2025](https://iccv.thecvf.com/Conferences/2025).  
-  01/2025, 1 paper has been accepted by [CVPR2025](https://cvpr.thecvf.com/Conferences/2025).  
-  01/2025, 1 paper has been accepted by IEEE TPAMI. 
-  12/2024, 1 paper has been accepted by [AAAI2025](https://aaai.org/conference/aaai/aaai-25/). 
-  12/2024, 1 paper has been accepted by IEEE TVCG. 









<!--
## Education & Experiences

- **Ocean University of China** <br/>
Assistant Professor, 2020.01-present.
- **South China University of Technology** <br/>
Ph.D. in Computer Science and Technology, 2019.
- **Jiangnan University** <br/>
M.Sc. in Computer Technology, 2014.
- **Jiangnan University** <br/>
B.Sc in Computer Science and Technology, 2011.

## Funding

-  PI, National Natural Science Foundation of China.
-  PI, National Natural Science Foundation of Shandong Province.
-  PI, China Postdoctoral Science Foundation (Special Support) .
-  PI, China Postdoctoral Science Foundation.
-  PI, the Fundamental Research Funds for the Central Universities.  
-->
<!--
## Projects


[→ Full list](/publications/)


<ProjectCard image="/projects/CVPR2021.jpg">  

**Learning from the Master: Distilling Cross-modal Advanced Knowledge for Lip Reading**

*Sucheng Ren<sup>#</sup>, **Yong Du<sup>#</sup>**, Jianming Lv, Guoqiang Han,  and Shengfeng He*
  
IEEE/CVF Conference on Computer Vision and Pattern Recognition (**CVPR**), 2021
  
  [[PDF](https://openaccess.thecvf.com/content/CVPR2021/papers/Ren_Learning_From_the_Master_Distilling_Cross-Modal_Advanced_Knowledge_for_Lip_CVPR_2021_paper.pdf)] [Code]

</ProjectCard>


<ProjectCard image="/projects/TMM2020.jpg">  

**Blind Image Denoising via Dynamic Dual Learning**

***Yong Du**, Guoqiang Han, Yinjie Tan, Chufeng Xiao, and Shengfeng He*
  
IEEE Transactions on Multimedia (**TMM**)
  
  [[PDF](https://ieeexplore.ieee.org/document/9136787)] 

</ProjectCard>
-->



<!-- Custom style for this page -->

<style lang="stylus">
.profile .image img
   max-width 200px /*改变照片大小*/
.profile .info
    //padding-left 10rem !important
  

.theme-container.home-page .page
  width 1000px
  margin: 0 auto
  font-size 16px
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  p
    text-align: justify
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em



@media (max-width: $MQMobile)
  .theme-container.home-page .page
    width 96%
    p, ul, ol
      line-height 1.5
      
    .md-card
      .card-image
        img 
          width 100%
          max-width 400px      

@media (max-width: $MQMobileNarrow)
    .profile .image img
        max-width 100%

      

</style>
