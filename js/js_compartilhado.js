// js_compartilhado.js - Funções compartilhadas  e interatividade do site

// Alterna o dropdown no menu mobile
function toggleMobileDropdown(event, element) {
    event.preventDefault();
    event.stopPropagation();
    
    // Só funciona na visualização mobile
    if (window.innerWidth > 768) return;
    
    // Fecha todos os outros dropdowns abertos
    const allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(dropdown => {
        if (dropdown !== element.parentElement) {
            dropdown.classList.remove('active');
        }
    });
    
    // Alterna o dropdown atual
    element.parentElement.classList.toggle('active');
}

// Alterna o dropdown no menu desktop
function toggleDropdown(event, element) {
    event.preventDefault();
    event.stopPropagation();
    
    // Só funciona na visualização desktop
    if (window.innerWidth <= 768) return;
    
    // Fecha todos os outros dropdowns abertos
    const allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(dropdown => {
        if (dropdown !== element.parentElement) {
            dropdown.classList.remove('active');
        }
    });
    
    // Alterna o dropdown atual
    element.parentElement.classList.toggle('active');
}

// Alterna o menu mobile (abre/fecha)
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const mobileToggle = document.querySelector('.mobile-toggle');
    
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
}

// Fecha todos os dropdowns ao clicar fora deles
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
});

// Fecha o menu mobile ao clicar fora da navbar
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navbar = document.querySelector('.navbar');
    
    if (!navbar.contains(event.target)) {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
    }
});

// Efeito de scroll na navbar (muda cor e sombra ao rolar a página)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
    }
});







// Função para o widget do WhatsApp
// Adiciona o widget do WhatsApp na página
  let chatOpen = false;

        function toggleChat() {
            const chatBox = document.getElementById('chatBox');
            chatOpen = !chatOpen;
            
            if (chatOpen) {
                chatBox.classList.add('active');
                document.getElementById('messageInput').focus();
            } else {
                chatBox.classList.remove('active');
            }
        }

        function sendMessage() {
            const input = document.getElementById('messageInput');
            const message = input.value.trim();
            
            if (message) {
                // Aqui você pode adicionar a lógica para enviar a mensagem
                // Por exemplo, abrir o WhatsApp Web com a mensagem
                const phoneNumber = '5511999999999'; // Substitua pelo seu número
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                
                input.value = '';
                toggleChat(); // Fechar o chat após enviar
            }
        }

        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }

        // Fechar chat ao clicar fora dele
        document.addEventListener('click', function(event) {
            const widget = document.querySelector('.whatsapp-widget');
            if (chatOpen && !widget.contains(event.target)) {
                toggleChat();
            }
        });

        // Animação de entrada quando a página carrega
        window.addEventListener('load', function() {
            const button = document.querySelector('.whatsapp-button');
            setTimeout(() => {
                button.style.opacity = '1';
                button.style.transform = 'scale(1)';
            }, 500);
        });