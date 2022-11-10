let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider--width').style.width = 
    `${sliderWidth * totalSlides}px`;

document.querySelector('.slider--controls').style.width = 
    `${sliderWidth}px`;
document.querySelector('.slider--controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides-1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = 
        `-${newMargin}px`;
}

setInterval(goNext, 12000);

function sobre(){
var img = document.querySelector("#image");
img.setAttribute('src','assets/images/pc2.png');
}
function fora(){
    var img = document.querySelector("#image");
    img.setAttribute('src','assets/images/pc1.png');
    }
    function sobre1(){
        var img = document.querySelector("#image1");
        img.setAttribute('src','assets/images/maneghover.png');
        }
        function fora1(){
            var img = document.querySelector("#image1");
            img.setAttribute('src','assets/images/maneg.png');
            }
            function sobre2(){
                var img = document.querySelector("#image2");
                img.setAttribute('src','assets/images/resultshover.png');
                }
                function fora2(){
                    var img = document.querySelector("#image2");
                    img.setAttribute('src','assets/images/results.png');
                    }
                    function sobre3(){
                        var img = document.querySelector("#image3");
                        img.setAttribute('src','assets/images/marketinghover.png');
                        }
                        function fora3(){
                            var img = document.querySelector("#image3");
                            img.setAttribute('src','assets/images/marketing.png');
                            }
                            function sobre4(){
                                var img = document.querySelector("#image4");
                                img.setAttribute('src','assets/images/socialhover.png');
                                }
                                function fora4(){
                                    var img = document.querySelector("#image4");
                                    img.setAttribute('src','assets/images/social.png');
                                    }
                                   
                                            

function mudar(){
var img = document.querySelector("#contato1");
img.setAttribute('src','assets/images/contatohover.png');
}
function voltar(){
var img = document.querySelector("#contato1");
img.setAttribute('src','assets/images/contato.png');
}
function mudar1(){
    var img = document.querySelector("#contato2");
    img.setAttribute('src','assets/images/emailcontato.png');
}
    function voltar1(){
    var img = document.querySelector("#contato2");
    img.setAttribute('src','assets/images/emailconta.png');
    }
    function mudar2(){
        var img = document.querySelector("#contato3");
        img.setAttribute('src','assets/images/telhover.png');
        }
        function voltar2(){
        var img = document.querySelector("#contato3");
        img.setAttribute('src','assets/images/tel.png');
        }
        function mudar3(){
            var img = document.querySelector("#contato4");
            img.setAttribute('src','assets/images/mensagemh.png');
            }
            function voltar3(){
            var img = document.querySelector("#contato4");
            img.setAttribute('src','assets/images/mensagem.png');
            }
          function efeitos(){
              document.querySelector("#teste2").classList.add("sumir");
              document.querySelector("#teste3").classList.add("sumir");
          }
          function efeito(){
              document.querySelector('#teste1').classList.add('clienteteste');
          }
          function efeitos1(){
            document.querySelector("#teste5").classList.add("sumir");
            document.querySelector("#teste6").classList.add("sumir");
        }
        function mouseefeito(){
            document.querySelector('#mouse').classList.add('clienteteste2');
        }
        function hover(){
            document.querySelector('#scroll').classList.add('clienteteste3');
        }
        function efeitos3(){
            document.querySelector("#teste7").classList.add("sumir");
            document.querySelector("#teste8").classList.add("sumir");
        }
        function remove(){
            document.querySelector('#teste1').classList.remove("clienteteste");
            document.querySelector('#teste2').classList.remove("sumir");
            document.querySelector('#teste3').classList.remove("sumir");
            document.querySelector('#teste5').classList.remove("sumir");
            document.querySelector('#teste6').classList.remove("sumir");
            document.querySelector('#mouse').classList.remove("clienteteste2");
            document.querySelector('#teste7').classList.remove("sumir");
            document.querySelector('#teste8').classList.remove("sumir")
            document.querySelector('#scroll').classList.remove("clienteteste3")
        }
        let txt = document.querySelector('#text');
       
       
        window.addEventListener('scroll',() =>{
            let scroll= window.pageYOffset;
            txt.style.opacity = (-scroll /480) +1;
         
        });
        
      

        function escrever(elemento){
            let txtarray = elemento.innerHTML.split('');
            elemento.innerHTML= '';
            txtarray.forEach((letra, i)=>{
                setTimeout(() => elemento.innerHTML += letra, 90 * i);

            });
        }

        let textoh1= document.querySelector('#text');
        escrever(textoh1);
      

        const debounce = function(func, wait, immediate) {
            let timeout;
            return function(...args) {
              const context = this;
              const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
              };
              const callNow = immediate && !timeout;
              clearTimeout(timeout);
              timeout = setTimeout(later, wait);
              if (callNow) func.apply(context, args);
            };
          };
          
          const target = document.querySelectorAll('[data-anime]');
          const animationClass = 'animate';
          
          function animeScroll() {
            const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
            target.forEach(function(element) {
              if((windowTop) > element.offsetTop) {
                element.classList.add(animationClass);
              } else {
                element.classList.remove(animationClass);
              }
            })
          }
          
          animeScroll();
          
          if(target.length) {
            window.addEventListener('scroll', debounce(function() {
              animeScroll();
            }, 200));
          }