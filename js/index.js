 // javascript para pagina inicial do site do Grupo Politécnico



 // Este script implementa um carrossel de imagens com navegação por setas, indicadores
 // Função para alternar entre slides do carrossel
 let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.indicator');
        const carouselSlides = document.getElementById('carouselSlides');

        function showSlide(index) {
            // Remove classe active de todos os slides
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            // Adiciona classe active ao slide atual
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
            
            currentSlideIndex = index;
        }

        function changeSlide(direction) {
            let newIndex = currentSlideIndex + direction;
            
            if (newIndex >= slides.length) {
                newIndex = 0;
            } else if (newIndex < 0) {
                newIndex = slides.length - 1;
            }
            
            showSlide(newIndex);
        }

        function currentSlide(index) {
            showSlide(index - 1);
        }

        // Auto-slide com pausa no hover
        let autoSlideInterval = setInterval(() => {
            changeSlide(1);
        }, 6000);

        // Pausa auto-slide no hover
        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });

        carouselContainer.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(() => {
                changeSlide(1);
            }, 6000);
        });

        // Navegação por teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                changeSlide(-1);
            } else if (e.key === 'ArrowRight') {
                changeSlide(1);
            }
        });

        // Touch gestures para mobile com melhor responsividade
        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0;
        let touchEndY = 0;

        carouselContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        });

        carouselContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleGesture();
        });

        function handleGesture() {
            const xDiff = touchEndX - touchStartX;
            const yDiff = Math.abs(touchEndY - touchStartY);
            
            // Só processa swipe horizontal se o movimento vertical for pequeno
            if (Math.abs(xDiff) > 50 && yDiff < 100) {
                if (xDiff < 0) {
                    changeSlide(1); // Swipe left - próximo slide
                } else {
                    changeSlide(-1); // Swipe right - slide anterior
                }
            }
        }

        // Inicialização
        showSlide(0);




// Transcom(grupo politécnico) Carousel Script
// Este script implementa um carrossel de imagens com navegação por setas, indicadores

let transcomSlideIndex = 0;
const transcomSlideElements = document.querySelectorAll('.transcom-carousel-slide');
const transcomIndicators = document.querySelectorAll('.transcom-indicator');
const transcomSlideCount = transcomSlideElements.length;
let transcomInterval;

function displayTranscomSlide(index) {
    transcomSlideElements.forEach(slide => {
        slide.classList.remove('active');
    });
    transcomIndicators.forEach(indicator => {
        indicator.classList.remove('active');
    });
    transcomSlideElements[index].classList.add('active');
    transcomIndicators[index].classList.add('active');
    updateTranscomProgressBar();
}

function transcomChangeSlide(direction) {
    transcomSlideIndex += direction;
    if (transcomSlideIndex >= transcomSlideCount) {
        transcomSlideIndex = 0;
    } else if (transcomSlideIndex < 0) {
        transcomSlideIndex = transcomSlideCount - 1;
    }
    displayTranscomSlide(transcomSlideIndex);
    resetTranscomInterval();
}

function transcomGoToSlide(index) {
    transcomSlideIndex = index;
    displayTranscomSlide(transcomSlideIndex);
    resetTranscomInterval();
}

function updateTranscomProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progress = ((transcomSlideIndex + 1) / transcomSlideCount) * 100;
    progressBar.style.width = progress + '%';
}

function startTranscomInterval() {
    transcomInterval = setInterval(() => {
        transcomChangeSlide(1);
    }, 5000);
}

function resetTranscomInterval() {
    clearInterval(transcomInterval);
    startTranscomInterval();
}

// Inicializar
displayTranscomSlide(0);
startTranscomInterval();

// Pausar auto-slide quando mouse estiver sobre o carrossel
const transcomContainer = document.querySelector('.transcom-carousel-container');
if (transcomContainer) {
    transcomContainer.addEventListener('mouseenter', () => {
        clearInterval(transcomInterval);
    });
    transcomContainer.addEventListener('mouseleave', () => {
        startTranscomInterval();
    });
}



// Função galeria de imagens
      // Função para abrir o modal com a imagem
        function showImage(src) {
            const modal = document.getElementById('galleryModal');
            const modalImage = document.getElementById('modalImage');
            
            modalImage.src = src;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }

        // Função para fechar o modal
        function closeModal() {
            const modal = document.getElementById('galleryModal');
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }

        // Adicionar event listeners às imagens da galeria
        document.addEventListener('DOMContentLoaded', function() {
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach(item => {
                item.addEventListener('click', function() {
                    showImage(this.src);
                });
            });

            // Fechar modal clicando fora da imagem
            document.getElementById('galleryModal').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeModal();
                }
            });

            // Fechar modal com tecla ESC
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeModal();
                }
            });
        });

        // Smooth animations on scroll (opcional)
        window.addEventListener('scroll', function() {
            const elements = document.querySelectorAll('.fade-up');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        });






        //Função para seção de parceiros
         // Script para facilitar a adição de imagens
        document.addEventListener('DOMContentLoaded', function() {
            const logoImages = document.querySelectorAll('.logo-image img');
            
            logoImages.forEach(img => {
                img.addEventListener('error', function() {
                    this.style.display = 'none';
                    this.nextElementSibling.style.display = 'block';
                });
            });
        });



         //Função para seção do Footer
        // Script para facilitar a adição do logo no footer
         document.addEventListener('DOMContentLoaded', function() {
            const logoImg = document.querySelector('.footer-logo img');
            
            logoImg.addEventListener('error', function() {
                this.style.display = 'none';
                this.nextElementSibling.style.display = 'block';
                this.nextElementSibling.innerHTML = 'Insira seu logo aqui';
            });
        });