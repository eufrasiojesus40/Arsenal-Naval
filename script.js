/**
 * Script de Interação e Validação do Arsenal Naval
 * Controla o comportamento do formulário de alistamento técnico.
 */

document.addEventListener("DOMContentLoaded", function () {
    // Captura o elemento do formulário pelo ID definido no HTML
    const formulario = document.getElementById("formAlistamento");

    // Verifica se o formulário existe na página atual antes de aplicar o evento
    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            // Impede o comportamento padrão de recarregar a página imediatamente
            evento.preventDefault();

            // Captura os valores digitados pelo usuário para validação e exibição
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const patenteElement = document.getElementById("patente");
            const patenteTexto = patenteElement.options[patenteElement.selectedIndex].text;

            // Validação de segurança complementar em JavaScript
            if (nome === "" || email === "") {
                alert("Por favor, preencha todos os campos obrigatórios identificados.");
                return;
            }

            // Captura as especialidades selecionadas (Checkboxes)
            const checkboxes = document.querySelectorAll('input[name="especialidade"]:checked');
            let especialidades = [];
            checkboxes.forEach(function (checkbox) {
                especialidades.push(checkbox.parentNode.textContent.trim());
            });

            // Monta uma mensagem detalhada e imersiva para o usuário
            let mensagemSucesso = `⚓ ALISTAMENTO REGISTRADO COM SUCESSO! ⚓\n\n`;
            mensagemSucesso += `Recruta: ${nome}\n`;
            mensagemSucesso += `Canal de Contato: ${email}\n`;
            mensagemSucesso += `Posto Atribuído: ${patenteTexto}\n`;
            
            if (especialidades.length > 0) {
                mensagemSucesso += `Especialidades: ${especialidades.join(", ")}\n`;
            }

            mensagemSucesso += `\nSuas credenciais foram enviadas ao Almirantado. Aguarde ordens!`;

            // Exibe o alerta oficial requisitado
            alert(mensagemSucesso);

            // Limpa o formulário após o sucesso do alistamento
            formulario.reset();
        });
    }
});
