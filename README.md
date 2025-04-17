# Fatura Pública

Este é um protótipo para visualização de faturas públicas que permite aos clientes acessarem suas faturas sem necessidade de login ou autenticação.

## Descrição

O projeto consiste em uma página web moderna que exibe faturas para clientes, incluindo:

- Dados da empresa (logo, nome, CNPJ, contato, endereço)
- Status da fatura (aguardando pagamento, pago, etc.)
- Detalhes da fatura (ID, vencimento, valor, multa/juros)
- Descrição e itens
- Opções de pagamento (PIX e Boleto)
- Dados do cliente

## Funcionalidades

- Visualização completa da fatura
- Cópia de código PIX
- Cópia de código de barras do boleto
- Alternância entre métodos de pagamento
- Troca de temas/empresas (verde e azul)
- Design responsivo para diferentes dispositivos

## Tecnologias Utilizadas

- HTML5
- CSS3 com variáveis e design system
- JavaScript (vanilla)
- Fontes Google (Comfortaa, Manrope)
- Font Awesome para ícones

## Como Executar

1. Clone o repositório
2. Abra o arquivo `index.html` em qualquer navegador web moderno

## Estrutura de Arquivos

- `index.html` - Estrutura principal da página
- `style.css` - Estilos e design da interface
- `script.js` - Funcionalidades JavaScript
- `img/` - Pasta para armazenar imagens locais
  - `ecofin-logo.png` - Logo da empresa EcoFin (tema verde)
  - `techpay-logo.png` - Logo da empresa TechPay (tema azul)

## Customização

Para customizar para sua empresa:

1. Substitua os logos na pasta `img/`
2. Atualize as informações da empresa no arquivo JavaScript na função `setTheme()`
3. Modifique as cores principais no arquivo CSS (variáveis no início do arquivo)

## Imagens

O projeto utiliza imagens locais armazenadas na pasta `img/`. Certifique-se de que os arquivos de imagem estejam presentes nesta pasta:

- `ecofin-logo.png` - Logo da empresa EcoFin
- `techpay-logo.png` - Logo da empresa TechPay

Caso precise substituir essas imagens, mantenha os mesmos nomes de arquivo ou atualize as referências no HTML e no JavaScript.

## Screenshots

<!-- Adicionar screenshots da aplicação quando disponíveis -->

## Licença

Este projeto é para fins demonstrativos. 