import * as hype from "./hypeUtility.js";
import { post } from "./data.js";

const { createApp } = Vue;

createApp({
    data() {
        return {
            list: '',
            post: post,
        }
    },
    methods: {
        selectPost(id) {
            let element;
            this.post.forEach(el => {
                if (el.id === id) {
                    element = el
                }
            })
            element.done = !element.done
        },
        removePost(id) {
            const index = this.post.findIndex((el) => {
                return el.id === id;
            })
            if (index !== -1) {
                this.post.splice(index, 1)
            }
        },
    },

    computed: {

    }

}).mount('#app')



