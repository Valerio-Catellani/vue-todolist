import * as hype from "./hypeUtility.js";
import {post} from "./data.js";

const {createApp} = Vue;

createApp({
    data() {
        return {
                post:post,
        }
    }

}).mount('#app')