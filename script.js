// Função para abrir o modal com informações personalizadas
function openModal(button) {
    const modal = document.getElementById('modal');
    
    // Obtém os atributos data-title e data-content do botão clicado
    const title = button.getAttribute('data-title');
    const content = button.getAttribute('data-content');

    // Define o título e o conteúdo no modal
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-content').textContent = content;

    // Exibe o modal
    modal.style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Fecha o modal se o usuário clicar fora do conteúdo
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};

// Função de rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
});
