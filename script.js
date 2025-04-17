// Script para funcionalidade de cópia do código PIX
document.addEventListener('DOMContentLoaded', function() {
    // Cópia do código PIX
    document.querySelector('.copy-button').addEventListener('click', function() {
        const pixCode = document.querySelector('.pix-code').textContent.trim();
        navigator.clipboard.writeText(pixCode).then(function() {
            alert('Código PIX copiado com sucesso!');
        });
    });

    // Alternar entre as abas de pagamento
    const tabs = document.querySelectorAll('.payment-tab');
    const pixContent = document.querySelector('.pix-content');
    const boletoContent = document.querySelector('.boleto-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove a classe active de todas as abas
            tabs.forEach(t => t.classList.remove('active'));
            
            // Adiciona a classe active na aba clicada
            this.classList.add('active');
            
            // Mostra o conteúdo correspondente à aba clicada
            if (this.textContent.trim() === 'Pix') {
                pixContent.style.display = 'block';
                boletoContent.style.display = 'none';
            } else if (this.textContent.trim() === 'Boleto') {
                pixContent.style.display = 'none';
                boletoContent.style.display = 'block';
            }
        });
    });
    
    // Funcionalidade para copiar código de barras do boleto
    const boletoCopyButton = document.querySelector('.boleto-copy-button');
    if (boletoCopyButton) {
        boletoCopyButton.addEventListener('click', function() {
            const boletoCode = document.querySelector('.boleto-code').textContent.trim();
            navigator.clipboard.writeText(boletoCode).then(function() {
                alert('Código de barras do boleto copiado com sucesso!');
            });
        });
    }
}); 