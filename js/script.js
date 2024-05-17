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
            
            if (this.immagineAttiva == this.slides.length - 1) {
                this.immagineAttiva = 0
            }
            this.immagineAttiva++
        },

        precedenteImmagine() {
            
            if (this.immagineAttiva == 0) {
                this.immagineAttiva = this.slides.length - 1
            }
            this.immagineAttiva--
        },

        thumbActive(i) {
            if (this.immagineAttiva == i) {
                return "active"
            }
            else {
                return ""
            }
        }

    },
    mounted() {
    },
}).mount(`#app`)


