// Efeito interativo: Mostrar dica extra na página de dicas
document.addEventListener('DOMContentLoaded', function() {
    // Dica extra
    const dicaBtn = document.getElementById('dica-extra-btn');
    const dicaExtra = document.getElementById('dica-extra');
    if (dicaBtn && dicaExtra) {
        dicaBtn.addEventListener('click', function() {
            dicaExtra.classList.toggle('hidden');
            dicaExtra.classList.add('fade-in');
            dicaBtn.textContent = dicaExtra.classList.contains('hidden') ? 'Mostrar dica extra' : 'Ocultar dica extra';
        });
    }

    // Galeria de imagens na página tipos
    const galeriaBtn = document.getElementById('galeria-btn');
    const galeria = document.getElementById('galeria');
    if (galeriaBtn && galeria) {
        galeriaBtn.addEventListener('click', function() {
            galeria.classList.toggle('hidden');
            Array.from(galeria.children).forEach(img => {
                img.classList.remove('fade-in');
                setTimeout(() => img.classList.add('fade-in'), 50);
            });
            galeriaBtn.textContent = galeria.classList.contains('hidden') ? 'Mostrar galeria' : 'Ocultar galeria';
        });
    }

    // Validação de formulário de contato
    const form = document.getElementById('contato-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let valid = true;

            // Nome
            const nome = document.getElementById('nome');
            const erroNome = document.getElementById('erro-nome');
            if (!nome.value.trim() || nome.value.length < 2) {
                erroNome.textContent = "Digite seu nome completo.";
                valid = false;
            } else {
                erroNome.textContent = "";
            }

            // Email
            const email = document.getElementById('email');
            const erroEmail = document.getElementById('erro-email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value)) {
                erroEmail.textContent = "Digite um e-mail válido.";
                valid = false;
            } else {
                erroEmail.textContent = "";
            }

            // Mensagem
            const mensagem = document.getElementById('mensagem');
            const erroMensagem = document.getElementById('erro-mensagem');
            if (!mensagem.value.trim() || mensagem.value.length < 10) {
                erroMensagem.textContent = "Digite uma mensagem (mínimo 10 caracteres).";
                valid = false;
            } else {
                erroMensagem.textContent = "";
            }

            // Mensagem final
            const formMsg = document.getElementById('form-msg');
            if (valid) {
                formMsg.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
                form.reset();
            } else {
                formMsg.textContent = "";
            }
        });
    }
});