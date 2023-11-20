import './style.css'
import './style.scss'
import './tween-max'
import Rellax from 'rellax';

var rellax = new Rellax('.hero-img');


$( document ).ready(function() {
    
    // // parra
    var request = null;
    var mouse = { x: 0, y: 0 };
    var cx = window.innerWidth / 2;
    var cy = window.innerHeight / 2;

    if($( "body" ).hasClass( "portaltype-imio-smartweb-portalpage" )){
        document.querySelector('.portaltype-imio-smartweb-portalpage').addEventListener('mousemove', function(event) {
        mouse.x = event.pageX;
        mouse.y = event.pageY;
        cancelAnimationFrame(request);
        request = requestAnimationFrame(update);
    });
    }

    function update() {
        var dx = mouse.x - cx;
        var dy = mouse.y - cy;
        var tiltx = (dy / cy );
        var tilty = - (dx / cx);
        console.log(tilty)
        // TweenMax.to(".quick-container .hero .hero-1", 1, {x:tilty*10, y:tiltx*10, rotation:0.01, ease:Power1.easeOut});
        // TweenMax.to(".quick-container .hero .hero-2", 1, {x:-tilty*17, y:-tiltx*17, rotation:0.01, ease:Power1.easeOut});
        // TweenMax.to(".quick-container .hero .hero-3", 1, {x:-tilty*4, y:-tiltx*4, rotation:0.01, ease:Power1.easeOut});
        TweenMax.to(".agenda-child .ab-1", 1, {x:tilty*10, y:tiltx*10, rotation:0.01, ease:Power1.easeOut});
        TweenMax.to(".agenda-child .ab-2", 1, {x:-tilty*17, y:-tiltx*17, rotation:0.01, ease:Power1.easeOut});
        TweenMax.to(".agenda-child .ab-3", 1, {x:-tilty*4, y:-tiltx*4, rotation:0.01, ease:Power1.easeOut});

        TweenMax.to(".end-1", 1, {x:tilty*20, y:tiltx*-10, rotation:0.01, ease:Power1.easeOut});
        TweenMax.to(".end-2", 1, {x:-tilty*30, y:-tiltx*17, rotation:0.01, ease:Power1.easeOut});
        TweenMax.to(".end-3", 1, {x:-tilty*40, y:-tiltx*4, rotation:0.01, ease:Power1.easeOut});
        // TweenMax.to(".main-homepage .zoom-sur .circle.crl1", 1, {x:tilty*6, y:tiltx*6, rotation:0.01, ease:Power1.easeOut});
    }

    window.addEventListener('resize', function(event){
    window.innerWidth / 2;
    window.innerHeight / 2;
    });

});