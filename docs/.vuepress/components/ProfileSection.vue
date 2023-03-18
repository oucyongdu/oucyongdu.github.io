<template>
  <div class="profile">
    <div v-if="data.profile" class="image">
      <img :src="$withBase(data.profile)" alt="">
    </div>
    <div class="info">
      <div style="line-height:80px" class="name">
        {{ data.name }}
      </div>
      <p></p>
      <div class="bio">
        <p style="line-height:20px">{{ data.bio1 }}</p>
      </div>
      <div class="bio">
        <p style="line-height:20px">{{ data.bio2 }}</p>
      </div>
      <div class="bio">
        <p style="line-height:20px">{{ data.bio3 }}</p>
      </div>
      <div class="socials">
        <div v-for="item in data.socials">
            <a :href="item.link" target="_blank">
              <img :src="item.icon" :alt="item.title"
              :title="item.title" />
            </a>
        </div>
      </div>
      <div class="contact">
        <div style="line-height:80px" class="email" title="Contact me">{{ data.email }}</div>
      </div>
      <div v-if="data.cv">
        <a target="_blank" :href="data.cv" title="Download my CV in PDF">
          <font size="2em" color=""><b>[CV]</b></font>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'cv', 'frontmatter'],

  computed: {
    data() {
      return this.frontmatter;
    }
  }
};
</script>

<style lang="stylus">
@import './styles/config.styl'

.profile
  display flex
  flex-direction row
  align-items stretch
  .image
    max-width 150px /*150px能居中，120不行，下同，可能跟图片大小有关*/
    width 150px !important
    img
      border-radius 0%
      padding 2px
      border 1px solid #f2f3f3
  .info
    display flex
    flex 1 1
    flex-direction column
    padding-left 10rem
    .name
      font-size 1.5rem
      font-weight 600
    .bio
      font-size 0.95rem      
    .socials
      display flex
      flex-direction row
      img 
        width 1.3rem
        margin 0 0.6rem 0 0
        cursor pointer
      b
        margin-left 1rem
    .contact
      .title
        font-size 1.2rem
        font-weight 400
      .email
        font-size 1rem
        font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif

/*@media (max-width: $MQMobileNarrow)
  .profile
    .image
      max-width 100px
*/

@media (max-width: $MQNarrow)
  .profile
    .info
      padding-left 1rem !important

@media (max-width: $MQMobile)
  .profile
    .info
      padding-left 1rem !important

@media (max-width: $MQMobileNarrow)

  .profile
      position relative !important
      margin 0 auto !important
      display inline !important
   .info
      padding-left 1rem !important   
    .image     
      max-width 100%
      position relative
      margin 0 auto
   </style>