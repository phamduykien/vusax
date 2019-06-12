import { String } from "core-js";

export default {
    props: {
        helpId: String,
    },
    methods: {
        showHelp: function () {
            alert("Show help " + this.helpId);
        }
    }
};