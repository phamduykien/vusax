<script>
import router from "../../router";

//Class base cho màn hình danh sách
//CreatedBy: PDKIEN 11/06/2019
export default {
  name: "BaseViewDetail",
  components: {},
  props: {
    id: {
      type: String
    },
    editMode: {
      type: String,
      default: "View"
    }
  },
  data: function() {
    return {
      currentItem: null
    };
  },
  //Xử lý khi route param thay đổi mà không render lại giao diện
  //CreatedBy: PDKIEN
  beforeRouteUpdate(to, from, next) {
    next();
  },
  watch: {
    //Xử lý khi thay đổi editMode
    //CreatedBy: PDKIEN 22/06/2019
    editMode: function(oldVal, newVal) {}
  },
  //Xử lý sau khi render giao diện xong
  //Thực hiện load dữ liệu chi tiết
  //CreatedBy: PDKIEN 12/06/2019
  mounted: function() {
    this.load();
  },
  computed: {
    enableControl: function() {
      return this.editMode != "View";
    }
  },
  methods: {
    changeEditMode(mode) {},
    //Gọi api lấy dữ liệu danh sách
    //CreatedBy: PDKIEN 12/06/2019
    load() {
      if (this.id) {
        this.api.getById(this.id).then(res => {
          this.currentItem = res.data;
        });
      }
    },
    refresh() {},
    //Xóa dữ liệu chi tiết
    //CreatedBy: PDKIEN 21/06/2019
    delete() {},
    //Cất dữ liệu
    //CreatedBy: PDKIEN 21/06/2019
    save() {},
    //Hủy thao tác trên giao diện chi tiết hiện tại
    //CreatedBy: PDKIEN 21/06/2019
    cancel() {},
    //Chuyển sang bản ghi chi tiết tiếp theo
    //CreatedBy: PDKIEN 21/06/2019
    moveNext() {},
    //Chuyển sang bản ghi chi tiết trước đó
    //CreatedBy: PDKIEN 21/06/2019
    moveBack() {},
    //Đóng giao diện chi tiết
    //CreatedBy: PDKIEN 21/06/2019
    close() {}
  }
};
</script>
