/* ==========================================================================
   1. LOGICA DO SIMULADOR INTERATIVO (O Caminho do Alimento)
   ========================================================================== */
function descobrirOrigem(alimento) {
    // Captura os elementos HTML onde o resultado será exibido
    const painelResultado = document.getElementById('resultado-jornada');
    const textoResultado = document.getElementById('texto-resultado');
    
    // Cria as variáveis que vão guardar os textos dinâmicos
    let mensagem = "";

    // O JavaScript decide o que exibir com base no botão clicado (Estrutura Condicional)
    if (alimento === 'cafe') {
        mensagem = `<strong>☕ A Jornada do Café:</strong><br>
        Os grãos do seu café foram cultivados com carinho por agricultores familiares, colhidos e secados ao sol no campo. 
        Depois, viajaram cerca de 180 km até a indústria na cidade para serem torrados, moídos e embalados. 
        <br><br><em>💡 Conexão: Sem o cuidado do produtor rural, a cidade não começaria o dia com tanta energia!</em>`;
    } 
    else if (alimento === 'pao') {
        mensagem = `<strong>🍞 A Jornada do Pão:</strong><br>
        Tudo começa nas imensas plantações de trigo no campo. Após a colheita, o trigo é transportado para os moinhos urbanos, 
        onde vira farinha. Essa farinha abastece as padarias da cidade para produzir o pão quentinho de cada manhã.
        <br><br><em>💡 Conexão: O trabalho do campo garante o sustento e o alimento básico das padarias urbanas!</em>`;
    } 
    else if (alimento === 'leite') {
        mensagem = `<strong>🥛 A Jornada do Leite:</strong><br>
        Produzido nas fazendas leiteiras com alta tecnologia de ordenha e cuidados com o bem-estar animal. 
        O leite é resfriado imediatamente e levado por caminhões-tanque até as indústrias da cidade, onde passa pela 
        pasteurização e envase antes de chegar ao mercado.
        <br><br><em>💡 Conexão: A tecnologia da cidade ajuda a industrializar e distribuir com segurança o que o campo produz!</em>`;
    }

    // Altera o texto dentro da página de forma dinâmica (Manipulação de DOM)
    textoResultado.innerHTML = mensagem;
    
    // Adiciona as classes CSS para exibir o bloco com animação
    painelResultado.className = "resultado-ativo";
}

/* ==========================================================================
   2. RECURSOS DE ACESSIBILIDADE (Modo Escuro e Zoom)
   ========================================================================== */

// --- MODO ESCURO ---
const btnContraste = document.getElementById('btn-contraste');

btnContraste.addEventListener('click', () => {
    // Liga/Desliga a classe 'modo-escuro' no body (o CSS faz o resto)
    document.body.classList.toggle('modo-escuro');
    
    // Muda o texto do botão para avisar o usuário
    if (document.body.classList.contains('modo-escuro')) {
        btnContraste.innerText = "☀️ Modo Claro";
    } else {
        btnContraste.innerText = "🌓 Modo Escuro";
    }
});

// --- CONTROLE DE FONTE (AUMENTAR/DIMINUIR TEXTO) ---
const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');

// Definimos o tamanho padrão inicial da fonte em 100%
let tamanhoAtualFonte = 1
