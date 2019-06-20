<script>
import router from "../../router";
import BaseAPI from "../../api/baseapi";

//Class base cho màn hình danh sách
//CreatedBy: PDKIEN 11/06/2019
export default {
  name: "BaseViewList",
  mixins: [BaseAPI],
  components: {},
  props: {},
  data: function() {
    return {
      refType: null,
      entity: "",
      selectedItems: [],
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
    //Item đang select hiện tại
    //CreatedBy PDKIEN 19/06/2019
    currentItem: function() {
      return this.selectedItems.length > 0
        ? this.selected[this.selected.length - 1]
        : null;
    },
    api: function() {
      return BaseAPI;
    }
  },
  methods: {
    //Gọi api lấy dữ liệu danh sách
    //CreatedBy: PDKIEN 12/06/2019
    load: function() {
      this.entities = this.api.getList();
    },
    refresh: function() {},
    //Gọi màn hình chi tiết ở chế độ sửa , nếu có nhiều dòng đang chọn thì sửa dòng cuối cùng
    //CreatedBy PDKIEN 14/06/2019
    edit: function() {
      if (this.currentItem) {
        var itemId = this.currentItem.id.toString();

        router.push({ name: "caDetail", params: { id: itemId } });
      }
    },
    view: function() {},
    delete: function() {}
  }
};
</script>
