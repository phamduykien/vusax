<template>
  <div>
    <div>This is CAList</div>
    <button @click="view" style="width:30px; height:20px"/>
    <button @click="showHelp" style="width:30px; height:20px"/>
    <button @click="test" style="width:30px; height:20px"/>
    <MISAGrid/>
  </div>
</template>

<script>
import BaseViewList from "@/views/Base/BaseViewList.vue";

export default {
  props: {
    helpId: String
  },
  extends: BaseViewList,
  created: function() {
    this.helpId = "112233";
  },
  methods: {
    test: function() {
      debugger;
      alert("Test " + this.helpId);
    }
  },
  components: {}
};
</script>


