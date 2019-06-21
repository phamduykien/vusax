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
  beforeRouteUpdate(to, from, next) {
    debugger;
    //next();
  },
  // watch: {
  //   $route(to, from) {
  //     debugger;
  //     // Kiểm tra khi route thay đổi để xử lý vì Vue không create lại component
  //   }
  // },
  //Xử lý sau khi render giao diện xong
  //Thực hiện load dữ liệu chi tiết
  //CreatedBy: PDKIEN 12/06/2019
  mounted: function() {
    this.load();
  },
  computed: {},
  methods: {
    //Gọi api lấy dữ liệu danh sách
    //CreatedBy: PDKIEN 12/06/2019
    load() {
      debugger;
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
