<script>
import router from "../../router";

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
  computed: {
    selectedItem: function() {
      return this.selected.length > 0
        ? this.selected[this.selected.length - 1]
        : null;
    }
  },
  methods: {
    //Gọi api lấy dữ liệu danh sách
    //CreatedBy: PDKIEN 12/06/2019
    load: function() {},
    refresh: function() {},
    //Gọi màn hình chi tiết ở chế độ sửa , nếu có nhiều dòng đang chọn thì sửa dòng cuối cùng
    //CreatedBy PDKIEN 14/06/2019
    edit: function() {
      if (this.selectedItem) {
        var itemId = this.selectedItem.id.toString();
        debugger;
        router.push({ name: "caDetail", params: { id: itemId } });
      }
    },
    view: function() {
      debugger;
      alert("x");
    },
    delete: function() {}
  }
};
</script>
