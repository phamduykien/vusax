import { String } from "core-js";

export default {    
    helpId: "",
    methods: {
        showHelp: function () {
            alert("Show help " + this.$options.helpId);
        }
    }
};