import axios from 'axios'
import BaseAPI from './baseapi'

//Gọi API thực hiện lấy dữ liệu
//CreatedBy: PDKIEN 12/06/2019
export default {
    created: function () {
        //alert("Created");
    },
    extends: BaseAPI,
    computed: {
        api: function () {
            return {
                getList: function (data) {
                    return axios.get("http://5d00c165d021760014b752f5.mockapi.io/api/v1/careceipts")
                        
                }
            }
        }
    },
}