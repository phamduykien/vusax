import { String } from "core-js";

export default {    
    helpId: "",
    methods: {
        help: function () {
            alert("Show help " + this.$options.helpId);
        }
    }
};