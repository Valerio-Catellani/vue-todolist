

const { createApp } = Vue;

createApp({
    data() {
        return {
            list: 'all',
            post: [],
            newPostText: '',
            apiUrl: 'server.php'
        }
    },
    methods: {
        getPost() {
            axios.get(this.apiUrl).then((response) => {
                this.post = response.data
            })
        },
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
            //torviamo l'elelemento da rimuovere
            const elementToDelete = this.post.find((el) => {
                return el.id === id;
            })
            //rimuoviamo l'elemento dopo aver ottenuti il suo indice:
            const index = this.post.indexOf(elementToDelete);
            if (index !== -1) {
                this.post.splice(index, 1)
            };
            axios.delete(this.apiUrl, { elementToDelete }).then((response) => {
                console.log(response.data);
            })

        },
        addPost() {
            //controllo che il testo non sia vuoto
            if (this.newPostText !== '') {
                //creo un nuovo oggetto task
                const addTask = {
                    //id: viene passato lato server
                    text: this.newPostText,
                    done: false
                };
                const newTask = { ...addTask }
                this.newPostText = '';
                //creo un FormData necessario per passare i dati attraverso axios, e ci aasegno i vari valori
                const data = new FormData();
                for (let key in newTask) {
                    data.append(key, newTask[key]);
                };
                //console.log(data.get('text'));
                //sono pronto per passare i dati:
                axios.post(this.apiUrl, data).then((response) => {
                    console.log(response.data[response.data.length - 1]);
                    const lastElement = response.data[response.data.length - 1];
                    //aggiorno la lista locale (quella remota ci ha già pensato php) in base ai nuovi dati aggiunti
                    this.post.push(lastElement);
                })
            }
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
    },
    created() {
        this.getPost()
    },

}).mount('#app')



