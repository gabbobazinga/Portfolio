import Vue from 'vue';

new Vue({
    el: '#app',
    data: {
        tab: '',
        hover: false,
        show: true,
        scrollPosition: '',
        cards: [
            {
                title: 'Boolflix',
                tags: ['HTML', 'CSS', 'JS', 'VUE'],
                webUrl: 'https://gabbobazinga.github.io/Boolflix/',
                codeUrl: 'https://github.com/gabbobazinga/Boolflix',
                pathImg: 'https://i.ibb.co/Mp8xkDN/boolflix.png',
                info: 'Riproduzione di un sito simil Netflix con utilizzo di Vue, chiamate delle API del sito "The Movie DB" tramite Axios. Homepage che mostra i film più popolari suddivisi per categoria, possibilità di visione serie tv e film più popolari, implementazione dell "Infinite Scroll" ed al passaggio del mouse sulla card vista nel dettaglio di tutte le informazioni',
            },
            {
                title: 'Spotify',
                tags: ['HTML', 'CSS', 'JS', 'JQuery'],
                webUrl: 'https://gabbobazinga.github.io/Spotifyweb/',
                codeUrl: 'https://github.com/gabbobazinga/Spotifyweb',
                pathImg: 'https://i.ibb.co/hmDw0z9/spotify-web.png',
                info: 'Riproduzione dell interfaccia del sito di Spotify Web, compreso il lato responsive.',
            },
            {
                title: 'Boolzapp',
                tags: ['HTML', 'CSS', 'JS', 'JQuery'],
                webUrl: '',
                codeUrl: 'https://github.com/gabbobazinga/vue-boolzapp',
                pathImg: 'https://i.ibb.co/5Wb9SZY/bollzap.png',
                info: 'Web app realizzata con HTML, CSS e JQuery ispirata al sito web di Whatsapp. Simulazione di invio di messaggi con risposta automatica programmata, ricerca dei contatti dinamica e cancellazione messaggi.',
            },
            {
                title: 'Boolpress',
                tags: ['HTML', 'CSS', 'Laravel', 'MySql'],
                webUrl: '',
                codeUrl: 'https://github.com/gabbobazinga/laravel-boolpress',
                pathImg: 'https://i.ibb.co/BZPZfgt/boolpress.png',
                info: 'Progetto basato sull uso di Laravel, del pattern MVC e MySql.',
            },
            {
                title: 'CampoMinato',
                tags: ['HTML', 'CSS', 'JS', 'JQuery'],
                webUrl: 'https://gabbobazinga.github.io/campominato/',
                codeUrl: 'https://github.com/gabbobazinga/campominato',
                pathImg: 'https://i.ibb.co/rHgpN8q/campominato.png',
                info: 'Riproduzione del famoso gioco Campo Minato con l uso di HTML/CSS e JavaScript.',
            },
            {
                title: 'DigitalOcean',
                tags: ['HTML', 'CSS'],
                webUrl: 'https://gabbobazinga.github.io/DigitalOcean/',
                codeUrl: 'https://github.com/gabbobazinga/DigitalOcean',
                pathImg: 'https://i.ibb.co/WG47Td4/digital-ocean.png',
                info: 'Riproduzione della Homepage del sito di DigitalOcean con HTML e CSS.',
            },
            {
                title: 'HubSpot',
                tags: ['HTML', 'CSS'],
                webUrl: 'https://gabbobazinga.github.io/HubSpot/',
                codeUrl: 'https://github.com/gabbobazinga/HubSpot',
                pathImg: 'https://i.ibb.co/zFP0P1q/hubspot.png',
                info: 'Riproduzione della Homepage del sito di Hubspot con HTML e CSS',
            },
            {
                title: 'To-Do List',
                tags: ['HTML', 'CSS', 'JS', 'JQuery'],
                webUrl: 'https://gabbobazinga.github.io/to-do-list/',
                codeUrl: 'https://github.com/gabbobazinga/to-do-list',
                pathImg: 'https://i.ibb.co/kyTFKkW/to-do-list.png',
                info: 'Creazione di una To Do List con l uso di HTML/CSS e JQuery che ti permette di aggiungere e rimuovere elementi potendoli evidenziare una volta completati con un click.',
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
        }
    },
    mounted() {    
        window.addEventListener('scroll', this.handleScroll);
    }
});