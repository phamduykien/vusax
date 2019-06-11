<template>
  <div>
    <div>This is CAList</div>
    <button @click="view" 
    style="width:30px; height:20px"/>
    <MISAGrid/>
  </div>
</template>

<script>
import BaseViewList from "@/views/Base/BaseViewList.vue";
export default {
  extends: BaseViewList,
  methods: {
    // view: function() {
    //   alert("Extend");
    // }
  },
  components: {}
};
</script>


