import axios from 'axios'

//Gọi API thực hiện lấy dữ liệu
//CreatedBy: PDKIEN 12/06/2019
export default {
    baseURL: "http://5d00c165d021760014b752f5.mockapi.io/api/v1/",
    api: "careceipts",
    get(option) {
        return axios.get(this.baseURL + this.api);
    },
    delete(option) {

    }
}