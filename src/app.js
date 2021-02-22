import Vue from 'vue';

new Vue({
    el: '#app',
    data: {
        tab: '',
        scrollPosition: '',
        cards: [
            {
                title: 'Boolflix',
                tags: ['HTML', 'CSS', 'JS', 'VUE'],
                webUrl: '',
                codeUrl: 'https://github.com/gabbobazinga/vue-boolflix',
                pathImg: '../images/projects/boolflix.png',
                info: 'Riproduzione di un sito simil Netflix con utilizzo di Vue, chiamate delle API del sito "The Movie DB" tramite Axios. Homepage che mostra i film più popolari suddivisi per categoria, possibilità di visione serie tv e film più popolari, implementazione dell "Infinite Scroll" ed al passaggio del mouse sulla card vista nel dettaglio di tutte le informazioni',
            },
            {
                title: 'Spotify',
                tags: ['HTML', 'CSS', 'JS', 'JQuery'],
                webUrl: '',
                codeUrl: 'https://github.com/gabbobazinga/html-css-spotifyweb',
                pathImg: '../images/projects/spotify-web.png',
                info: 'Riproduzione dell interfaccia del sito di Spotify Web, compreso il lato responsive.',
            },
            {
                title: 'Boolzapp',
                tags: ['HTML', 'CSS', 'JS', 'JQuery'],
                webUrl: '',
                codeUrl: 'https://github.com/gabbobazinga/vue-boolzapp',
                pathImg: '../images/projects/bollzap.png',
                info: 'Web app realizzata con HTML, CSS e JQuery ispirata al sito web di Whatsapp. Simulazione di invio di messaggi con risposta automatica programmata, ricerca dei contatti dinamica e cancellazione messaggi.',
            },
            {
                title: 'Boolpress',
                tags: ['HTML', 'CSS', 'Laravel', 'MySql'],
                webUrl: '',
                codeUrl: 'https://github.com/gabbobazinga/laravel-boolpress',
                pathImg: '../images/projects/boolpress.png',
                info: 'Progetto basato sull uso di Laravel, del pattern MVC e MySql.',
            },
            {
                title: 'CampoMinato',
                tags: ['HTML', 'CSS', 'JS', 'JQuery'],
                webUrl: '',
                codeUrl: 'https://github.com/gabbobazinga/campominato',
                pathImg: '../images/projects/campominato.png',
                info: 'Riproduzione del famoso gioco Campo Minato con l uso di HTML/CSS e JavaScript.',
            },
            {
                title: 'DigitalOcean',
                tags: ['HTML', 'CSS'],
                webUrl: '',
                codeUrl: 'https://github.com/gabbobazinga/html-css-digitalocean',
                pathImg: '../images/projects/digital-ocean.png',
                info: 'Riproduzione della Homepage del sito di DigitalOcean con HTML e CSS.',
            },
            {
                title: 'HubSpot',
                tags: ['HTML', 'CSS'],
                webUrl: '',
                codeUrl: 'https://github.com/gabbobazinga/htmlcss-hubspot',
                pathImg: '../images/projects/hubspot.png',
                info: 'Riproduzione della Homepage del sito di Hubspot con HTML e CSS',
            },
            {
                title: 'To-Do List',
                tags: ['HTML', 'CSS', 'JS', 'JQuery'],
                webUrl: '',
                codeUrl: 'https://github.com/gabbobazinga/to-do-list',
                pathImg: '../images/projects/to-do-list.png',
                info: 'Creazione di una To Do List con l uso di HTML/CSS e JQuery che ti permette di aggiungere e rimuovere elementi potendoli evidenziare una volta completati con un click.',
            },
            {
                title: 'Portfolio',
                tags: ['HTML', 'CSS', 'Vue', 'LaravelMix', 'Sass'],
                webUrl: '',
                codeUrl: 'https://github.com/gabbobazinga/Portfolio',
                pathImg: '../images/projects/portfolio.png',
                info: '',
            }
        ]
    },
    methods: {
        scroll(){
            var offset = 100;
            var el = document.getElementById(this.tab);
            window.scroll({ top: (el.offsetTop - offset), left: 0, behavior: 'smooth' });
        },
        handleScroll(){
            this.scrollPosition = window.scrollY;
            console.log(this.scrollPosition);
        }
    },
    mounted() {    
        window.addEventListener('scroll', this.handleScroll);
    }
});

// handleSCroll (event) {
//     let header = document.querySelector(".v-toolbar");
//     if (window.scrollY > 100 && !header.className.includes('v-toolbar--bgchange')) {
//     header.classList.add('v-toolbar--bgchange'); 
//     } else if (window.scrollY < 100) {
//       header.classList.remove('v-toolbar--bgchange');
//     }
//   }
// },
// created () {
//   window.addEventListener('scroll', this.handleSCroll);

// },
// destroyed () {
//   window.removeEventListener('scroll', this.handleSCroll);
// } 


