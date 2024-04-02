import { post } from "./data.js";

const { createApp } = Vue;

createApp({
    data() {
        return {
            list: 'all',
            post: post,
            newPostText: '',
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
        addPost() {
            let maxId = 0;
            this.post.forEach((el) => {
                if (el.id >= maxId) {
                    maxId = el.id + 1;
                }
            });
            const newPost = {
                id: maxId,
                text: this.newPostText,
                done: false
            };
            this.post.push(newPost);
            this.newPostText = '';
            console.log(this.post);
        }
    },

    computed: {
        filteredPost() {
            return this.post.filter(el => {
                if (this.list === 'all') {
                    return true
                } else if (this.list === "completed") {
                    return el.done === true
                } else {
                    return el.done === false
                }
            })
        }


    }

}).mount('#app')



