<script>
//Class base cho màn hình danh sách
//CreatedBy: PDKIEN 11/06/2019
export default {
  name: "BaseViewList",
  components: {},
  props: {},
  data: function() {
    return {
      selected: [],
      entities: []
    };
  },
  //Xử lý sau khi render giao diện xong
  //Thực hiện load dữ liệu danh sách
  //CreatedBy: PDKIEN 12/06/2019
  mounted: function() {
    this.load();
  },
  computed: {},
  methods: {
    //Gọi api lấy dữ liệu danh sách
    //CreatedBy: PDKIEN 12/06/2019
    load: function() {},
    refresh: function() {},
    edit: function() {},
    view: function() {
      debugger;
      alert("x");
    },
    delete: function() {}
  }
};
</script>
