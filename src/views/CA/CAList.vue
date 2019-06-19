<template>
  <div>
    <div>Danh sách thu chi</div>
    <button @click="view" style="width:50px; height:20px; margin-right:8px;">View</button>
    <button @click="edit" style="width:50px; height:20px; margin-right:8px;">Edit</button>
    <button @click="help" style="width:50px; height:20px">Help</button>
    <vs-table multiple v-model="selectedItems" :data="entities">
      <template slot="thead">
        <vs-th>FullName</vs-th>
        <vs-th>Amount</vs-th>
        <vs-th>Address</vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
          <vs-td :data="data[indextr].FullName">{{ data[indextr].FullName }}</vs-td>

          <vs-td :data="data[indextr].Amount">{{ data[indextr].Amount }}</vs-td>

          <vs-td :data="data[indextr].Address">{{ data[indextr].Address }}</vs-td>

          <vs-td :data="data[indextr].id">{{ data[indextr].id }}</vs-td>
        </vs-tr>
      </template>
    </vs-table>

    <br>

    <pre>{{ selectedItems }}</pre>
  </div>
</template>

<script>
import BaseViewList from "@/views/Base/BaseViewList.vue";
import DataAPI from "@/api/careceipt";

export default {
  extends: BaseViewList,
  mixins: [DataAPI],
  created: function() {},
  mounted: function() {},
  methods: {
    load: function() {
     // API.get();
      DataAPI.get({}).then(res => {
        this.entities = res.data;
      });
    }
  },
  components: {}
};
</script>


