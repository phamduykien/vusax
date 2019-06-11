<template>
  <div>
    <span>This is MISAGrid</span>
    <table>
      <thead>
        <tr>
          <th
            :class="{ active: sortKey == key }"
            v-for="(key,index) in columns"
            :key="index"
            @click="sortBy(key)"
          >
            {{ key | capitalize }}
            <span class="arrow" 
            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(e,i) in entities" :key="i">
          <td v-for="(key,j) in columns" :key="j">{{e[key]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "MISAGrid",
  props: {
    entities: Array,
    columns: Array,
    filterKey: String
  },
  data() {
    var sortOrders = {};
    this.columns.forEach(function(key) {
      sortOrders[key] = 1;
    });
    return {
      sortKey: "",
      sortOrders: sortOrders
    };
  },
  computed: {
    filteredeEntities: function() {
      var sortKey = this.sortKey;
      var filterKey = this.filterKey && this.filterKey.toLowerCase();
      var order = this.sortOrders[sortKey] || 1;
      var entities = this.entities;
      if (filterKey) {
        entities = entities.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            );
          });
        });
      }
      if (sortKey) {
        entities = entities.slice().sort(function(a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return entities;
    }
  },
  methods: {
    sortBy: function(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/components/Grid/MISAGrid.scss";
</style>