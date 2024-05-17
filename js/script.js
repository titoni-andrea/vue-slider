const { createApp } = Vue

createApp({
    data() {
        return {
            slides: [
                'img/01.webp',
                'img/02.webp',
                'img/03.webp',
                'img/04.webp',
                'img/05.webp'
                ],
            immagineAttiva: 0,
        }
    },
    methods: {

        checkImage(i) {
            if (this.immagineAttiva == i) {
                return "attiva"
            }
            else {
                return ""
            }
        },

        prossimaImmagine() {
            this.immagineAttiva++
        },

        precedenteImmagine() {
            this.immagineAttiva--
        },

    },
    mounted() {
        
    },
}).mount(`#app`)

console.log(slides);

