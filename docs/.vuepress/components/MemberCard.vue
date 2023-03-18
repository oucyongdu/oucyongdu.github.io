<template>
  <div class="member-card" :class="{ 'show-border': !hideBorder}">
    <div v-if="image" class="card-image">
      <img :src="$withBase(image)" alt="">
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'hideBorder']
};
</script>

<style lang="stylus">
@import './styles/config.styl';

.member-card
  background-color $frontColor
  margin-top 1em
  height 130px
  width 270px
  //float left
  display inline-flex
  //display inline
  flex-direction row
  align-items: stretch
  .card-image
    display inline
    align-items center
    padding 0.3rem
    img
      max-width 85px
      max-height 150px
      //height 150px
      //width 100px
      border: 1px solid #eee;
      border-radius 0.2rem
      object-fit cover
  .card-content
    padding 0.5rem
    flex-grow 1
    p
      line-height normal
      -webkit-margin-before 0em
      -webkit-margin-after 0.5em
    blockquote
      font-size 1rem

.member-card.show-border
  border 1px solid #eee
  border-radius 0.5rem
  box-shadow 0 5px 15px -5px rgba(0,0,0,.1)
  padding 0.5rem

@media (max-width: 100px)
  .member-card
    background-color $frontColor
    margin-top 1em
    height 150px
    width 70px
    //float left
    display inline-flex
    //display inline
    flex-direction row
    align-items: stretch
    .card-image
      display inline
      align-items center
      padding 0.5rem
      img
        width 100%
        max-width 400px
    .card-content
      pre
        margin 0
        border-radius 6px

</style>
