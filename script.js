$(document).ready(function () {
    // Inicializa��es
    AOS.init();

    particlesJS.load('particles-js', 'assets/src/particlesjs-config.json');
    updateParticlesHeight();

    // Manipuladores de eventos
    $('.toggleModoEscuro').on('click', function () {
        $('body').toggleClass('modo-claro');

        if ($('body').hasClass('modo-claro')) {

            particlesJS('particles-js', particlesConfigClaro);
            $('.iconeModo').removeClass('fa-moon').addClass('fa-sun');
        } else {
            particlesJS('particles-js', particlesConfigEscuro);
            $('.iconeModo').removeClass('fa-sun').addClass('fa-moon');

        }
    });

    $('.tracker-item[href="#inicio"]').on('click', function (e) {
        $('html, body').animate({
            scrollTop: 0
        }, 100);
    });

    tippy('[data-tippy-content]', {
        placement: 'bottom',
        arrow: true,
        animation: 'fade',
    });

    // Sequ�ncia de anima��o inicial
    setTimeout(() => {
        new Typed("#nome", {
            strings: ["Henrique Freitas"],
            typeSpeed: 20,
            showCursor: false,
            onComplete: function () {
                new Typed("#trabalho", {
                    strings: ["Desenvolvedor Full Stack"],
                    typeSpeed: 20,
                    showCursor: false,
                    onComplete: function () {
                        animarIcones();
                    }
                });
            }
        });
    }, 500);

    // Configura��es das part�culas para modo claro e escuro
    const particlesConfigClaro = {
        "particles": {
            "number": { "value": 35, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#000000" },
            "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } },
            "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
            "size": { "value": 5, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
            "line_linked": { "enable": true, "distance": 150, "color": "#000000", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
        },
        "interactivity": {
            "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": {
                "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
                "bubble": { "distance": 107.88521013641481, "size": 7.99149704714184, "duration": 2, "opacity": 0.5114558110170777, "speed": 3 },
                "repulse": { "distance": 71.92347342427655, "duration": 0.4 },
                "push": { "particles_nb": 4 },
                "remove": { "particles_nb": 2 }
            }
        },
        "retina_detect": true
    };

    const particlesConfigEscuro = {
        "particles": {
            "number": { "value": 35, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#E0E0E0" },
            "shape": { "type": "circle", "stroke": { "width": 0, "color": "#E0E0E0" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } },
            "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
            "size": { "value": 5, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
            "line_linked": { "enable": true, "distance": 150, "color": "#E0E0E0", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
        },
        "interactivity": {
            "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": {
                "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
                "bubble": { "distance": 107.88521013641481, "size": 7.99149704714184, "duration": 2, "opacity": 0.5114558110170777, "speed": 3 },
                "repulse": { "distance": 71.92347342427655, "duration": 0.4 },
                "push": { "particles_nb": 4 },
                "remove": { "particles_nb": 2 }
            }
        },
        "retina_detect": true
    };

    // Fun��es auxiliares
    function animarIcones() {
        const $icones = $('#links a');
        let atraso = 0;

        $icones.each(function () {
            const $this = $(this);
            setTimeout(() => {
                $this.css('visibility', 'visible').addClass('animate__animated animate__zoomIn animate__faster');
            }, atraso);
            atraso += 500;
        });

        setTimeout(() => {
            $("#hrResumo").css('visibility', 'visible').addClass('animate__animated animate__zoomIn animate__faster');
            $(".imgResumo").css('visibility', 'visible').addClass('animate__animated animate__zoomIn animate__faster');
            digitarDescricao();
        }, atraso);
    }

    function digitarDescricao() {
        new Typed("#descricao", {
            strings: [
                "Olá! Sou o Henrique, formado em Ciência da Computação pela USJT, sou um desenvolvedor full stack focado na criação de soluções eficientes para problemas reais. Tenho experiência no desenvolvimento de sistemas internos, automação de processos e reestruturação de interfaces utilizando PHP, MySQL, JavaScript, jQuery, AJAX e Bootstrap. Atuo tanto em projetos corporativos quanto pessoais, desenvolvendo aplicações funcionais, responsivas e voltadas para otimização de processos. Sou movido por desafios técnicos, aprendizado contínuo e pela transformação de ideias em soluções."
            ],
            typeSpeed: 25,
            showCursor: false
        });
    }

    function updateParticlesHeight() {
        $('#particles-js').height($(document).height() - 100);
    }
});