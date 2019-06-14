<script>
import router from "../../router";

//Class base cho màn hình danh sách
//CreatedBy: PDKIEN 11/06/2019
export default {
  name: "BaseViewDetail",
  components: {},
  props: {
    id: String
  },
  data: function() {
    return {
      currentItem: null
    };
  },
  //Xử lý khi route param thay đổi mà không render lại giao diện
  beforeRouteUpdate(to, from, next) {
    // react to route changes...
    debugger;
    next();
  },
  watch: {
    $route(to, from) {
      debugger;
      // Kiểm tra khi route thay đổi để xử lý vì Vue không create lại component
    }
  },
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
    load: function() {},
    refresh: function() {},
    delete: function() {},
    save: function() {
      debugger;
    },
    cancel: function() {},
    moveNext: function() {},
    moveBack: function() {}
  }
};
</script>
