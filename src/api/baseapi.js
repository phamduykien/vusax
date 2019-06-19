import axios from 'axios'

export default {
    name: "BaseAPI",
    baseURL: null,
    entityName: null,
    initAPI() {
        axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`
    },
    API: {
        get() {

        },
        post() {

        },
        delete() {

        }
    }
}