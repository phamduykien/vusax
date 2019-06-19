
//Test chưa dùng thật
import axios from 'axios'
import BaseAPI from '../api/baseapi'

export default {
    install(Vue) {
        Vue.prototype.$api = BaseAPI;

        Vue.mixin({
            created() {

            },

            destroyed() {

            }
        });
    }
};