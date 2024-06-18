<template>
    <tr style="height: 17px;">
      <td style="width: 0.1%; text-align: center; padding: 1px; border-width: 1px;">
        <div style="line-height: 17px;">
          <span style="font-size: 15px;">{{Index}}</span>
        </div>
      </td>
      <td style="width: 1.01%; text-align: center; padding: 1px; border-width: 1px;">
        <div style="line-height: 17px;">
                <span style="font-size: 15px;">
                    <img data-fr-image-pasted="true" :src=Image style="height: 70px; width: 100px;object-fit: cover">
                </span>
        </div>
      </td>
      <td style="width: 2%; text-align: center; padding: 1px; border-width: 1px;">
        <div style="line-height: 17px;">
          <span style="font-size: 15px;">{{Ename}} <br>{{Name}}</span>
        </div>
      </td>
      <td style="width: 0.1%; text-align: center; padding: 1px; border-width: 1px;">
        <div style="line-height: 17px;">
          <span style="font-size: 15px;">{{Graduation}}</span>
        </div>
      </td>
      <td style="width: 2%; text-align: center; padding: 1px; border-width: 1px;">
        <div style="line-height: 17px;">
          <span style="font-size: 15px;">{{Program}}</span>
        </div>
      </td>
      <td style="width: 4%;text-align: center; padding: 1px; border-width: 1px;">
        <div style="line-height: 17px;">
          <span style="font-size: 15px;">{{Award}}<br></span>
        </div>
      </td>
      <td style="width: 8%; text-align: center; padding: 1px; border-width: 1px;">
        <div style="line-height: 17px;">
          <span style="font-size: 15px;">{{Currently}}</span>
        </div>
      </td>     
    </tr>
</template>

<script>
export default {
  props: ['Index','Image', 'Name', 'Ename', 'Graduation', 'Program', 'Award', 'Currently']
};
</script>

<style lang="stylus">
@import './styles/config.styl';

</style>
