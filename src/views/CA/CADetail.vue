<template>
  <div>
    <div>This is CADetail</div>
    <button @click="save" style="width:50px; height:20px; margin-right:8px;">Save</button>
    <button @click="cancel" style="width:50px; height:20px; margin-right:8px;">Cancel</button>
    <button @click="help" style="width:50px; height:20px">Help</button>
    <button @click="moveBack" style="width:50px; height:20px">Prev</button>
    <button @click="moveNext" style="width:50px; height:20px">Next</button>
  </div>
</template>
<script>
import BaseViewDetail from "@/views/Base/BaseViewDetail.vue";
import DataAPI from "../../api/caapi";
import router from "../../router";

export default {
  extends: BaseViewDetail,
  props: {
    
  },
  methods: {
    moveNext: function() {
      debugger;
      var p = this.id;
      router.push({ name: "caDetail", params: { id: Number.parseInt(p) + 1 } });
    }
  }
};
</script>