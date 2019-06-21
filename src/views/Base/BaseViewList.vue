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
      detailRouterName: null,
      entityName: null,
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
        ? this.selectedItems[this.selectedItems.length - 1]
        : null;
    },
    api: function() {
      return BaseAPI;
    }
  },
  methods: {
    //Gọi api lấy dữ liệu danh sách
    //CreatedBy: PDKIEN 12/06/2019
    load() {
      this.api.getList().then(res => {
        this.entities = res.data;
      });
    },
    //Refresh dữ liệu với bộ tham số hiện tại
    //CreatedBy: PDKIEN 21/06/2019
    refresh() {
      this.load();
    },
    //Gọi màn hình chi tiết ở chế độ sửa , nếu có nhiều dòng đang chọn thì sửa dòng cuối cùng
    //CreatedBy PDKIEN 14/06/2019
    edit() {
      if (this.currentItem) {
        var itemId = this.currentItem.id.toString();
        router.push({
          name: this.detailRouterName,
          params: {
            editMode: "Edit",
            id: itemId
          }
        });
      }
    },
    view() {
      if (this.currentItem) {
        var itemId = this.currentItem.id.toString();
        router.push({
          name: this.detailRouterName,
          params: {
            editMode: "View",
            id: itemId
          }
        });
      }
    },
    delete() {
      if (this.selectedItems.length>0){
        this.api.deleteEntities(this.selectedItems);
      }
    }
  }
};
</script>
