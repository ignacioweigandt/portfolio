/* ------ BARRA DE NAVEGACION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu")

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += "responsive"
    } else {
        menuBtn.className = "nav-menu"
    }
}

/* ----- AGREGAR SOMBRA EN LA BARRA DE NAVEGACIÓN MIENTRAS SE DESPLAZA ----- */
window.onscroll = function() {headerShadow()}

function headerShadow(){
    const navHeader = document.getElementById("header")

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)"
        navHeader.style.height = "70px"
        navHeader.style.lineHeight = "70px"
    }else{
        navHeader.style.boxShadow = "none"
        navHeader.style.height = "90px"
        navHeader.style.lineHeight = "90px"
    }
}

/* ----- EFECTO DE ESCRITURA ----- */
var typingEffect = new Typed(".typedText",{
    strings : ["Diseñador","Desarollador"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
})

/* ----- ## -- DESPLAZAMIENTO DE LA ANIMACIÓN DE REVELACIÓN -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

 /* -- ENCABEZADOS -- */
 sr.reveal('.top-header',{})


/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ACERCA DE INFO E INFORMACIÓN DE CONTACTO -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})
  
srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ACERCA DE LAS HABILIDADES Y EL CUADRO DE FORMULARIOS -- */

const srRight = ScrollReveal({
   origin: 'right',
   distance: '80px',
   duration: 2000,
   reset: true
})
      
srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----- CAMBIAR ----- DE ENLACE ACTIVO */

const sections = document.querySelectorAll('section[id]')
      function scrollActive() {
      const scrollY = window.scrollY;
      sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }  else {
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
      })
    }
    window.addEventListener('scroll', scrollActive)

        /* -- Links de los botones de aolicaciones -- */

        document.getElementById('github-icon').addEventListener('click', function() {
            window.open('https://github.com/ignacioweigandt', '_blank');
        });

        document.getElementById('instagram-icon').addEventListener('click', function() {
            window.open('https://www.instagram.com/nachoweigandt/', '_blank');
        });

        document.getElementById('github-icon-2').addEventListener('click', function() {
            window.open('https://github.com/ignacioweigandt', '_blank');
        });

        document.getElementById('instagram-icon-2').addEventListener('click', function() {
            window.open('https://www.instagram.com/nachoweigandt/', '_blank');
        });

        /* -- Enviar a tu email automaticamente -- */

        const btn = document.getElementById('send-button');

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
        
            btn.innerHTML = 'Sending...';
        
            const serviceID = 'default_service';
            const templateID = 'template_89mg15p';
        
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.innerHTML = 'Enviar <i class="uil uil-message"></i>';
                    alert('Sent!');
                }, (err) => {
                    btn.innerHTML = 'Enviar <i class="uil uil-message"></i>';
                    alert(JSON.stringify(err));
                });
        });
        

        /* --------------- Descargar cv ------------------- */

        document.querySelectorAll('.downloadBtn').forEach(button => {
            button.addEventListener('click', function() {
                const url = this.getAttribute('data-url');
                window.open(url, '_blank');
            });
        });

    
    
            /* --------------- Abrir Proyectos ------------------- */


            document.addEventListener('DOMContentLoaded', function() {
                const projectBoxes = document.querySelectorAll('.project-box');
            
                projectBoxes.forEach(function(box) {
                    box.addEventListener('click', function() {
                        const url = box.getAttribute('data-url');
                        if (url) {
                            window.open(url, '_blank');
                        }
                    });
                });
            });
            

