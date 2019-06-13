<template>
  <div>
    <div>This is CAList</div>
    <button @click="view" style="width:30px; height:20px"/>
    <button @click="showHelp" style="width:30px; height:20px"/>

    <MsGrid/>
  </div>
</template>

<script>
import BaseViewList from "@/views/Base/BaseViewList.vue";
import DataAPI from "../../api/calist";

export default {
  extends: BaseViewList,
  helpId: "help CAList",
  created: function() {},
  mounted: function() {
    DataAPI.get({}).then(function(data) {});
  },
  methods: {},
  components: {}
};
</script>


