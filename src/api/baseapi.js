import axios from 'axios'


export default {
    name: "BaseAPI",
    created: function () {
        // axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`
    },
    computed: {
        api: function () {
            return {
                getList: function () {
                    return axios.get("http://5d00c165d021760014b752f5.mockapi.io/api/v1/careceipts")
                        .then((res) => {

                            return res.data;
                        })
                },
                deleteList: function (entities) {

                },
                getById: function (id) {

                }
            }
        },

    },
    privateMethods: {

    }
}