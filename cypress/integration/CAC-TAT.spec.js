/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(()=> {
        cy.visit('./src/index.html');
    });
    it('verifica o título da aplicação', function() {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT');
    })
    it('Preenche os campos obrigatórios e envia o formulário', function() {
       const longText = 
        cy.preencherCampo('firstName', 'Elisabete');
        cy.preencherCampo('lastName', 'Torres');
        cy.preencherCampo('email', 'elisabete@example.com');
        cy.preencherCampo('open-text-area', 'Cypress é uma ferramenta de teste de ponta a ponta para aplicações web, amplamente utilizada por desenvolvedores e equipes de QA. Ela é conhecida por sua facilidade de uso e integração perfeita com o JavaScript, o que permite escrever testes automatizados de forma rápida e eficiente. Cypress oferece uma interface interativa onde os testes podem ser visualizados em tempo real, facilitando a depuração e compreensão do comportamento da aplicação. Além disso, seu ecossistema inclui funcionalidades poderosas, como a capacidade de fazer mock de respostas de API e manipular o DOM diretamente. O Cypress executa os testes diretamente no navegador, o que garante uma simulação realista da experiência do usuário. Com suporte para CI/CD, Cypress pode ser integrado em pipelines de desenvolvimento contínuo, permitindo a detecção precoce de problemas. A comunidade ativa e a documentação detalhada fazem do Cypress uma excelente escolha para automação de testes web. É uma ferramenta que não só simplifica o processo de teste, mas também melhora a qualidade geral das aplicações web.');
        cy.get('button[type="submit"]').click();
        cy.get('.success').should('be.visible');
        
        })

        it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
            cy.preencherCampo('firstName', 'Elisabete');
            cy.preencherCampo('lastName', 'Torres');
            cy.preencherCampo('email', 'elisabeteexample,com');
            cy.preencherCampo('open-text-area', 'Cypress é uma ferramenta de teste de ponta a ponta para aplicações web, amplamente utilizada por desenvolvedores e equipes de QA. Ela é conhecida por sua facilidade de uso e integração perfeita com o JavaScript, o que permite escrever testes automatizados de forma rápida e eficiente. Cypress oferece uma interface interativa onde os testes podem ser visualizados em tempo real, facilitando a depuração e compreensão do comportamento da aplicação. Além disso, seu ecossistema inclui funcionalidades poderosas, como a capacidade de fazer mock de respostas de API e manipular o DOM diretamente. O Cypress executa os testes diretamente no navegador, o que garante uma simulação realista da experiência do usuário. Com suporte para CI/CD, Cypress pode ser integrado em pipelines de desenvolvimento contínuo, permitindo a detecção precoce de problemas. A comunidade ativa e a documentação detalhada fazem do Cypress uma excelente escolha para automação de testes web. É uma ferramenta que não só simplifica o processo de teste, mas também melhora a qualidade geral das aplicações web.');
            cy.get('button[type="submit"]').click();
            cy.get('.error').should('be.visible');
        
        });
        it.only('Valida que o campo número de telefone continua vazio mesmo que o usuário digite uma string', function() {
            cy.preencherCampo('phone', 'hg')

            cy.get('#phone')
            .should('have.value', "");
            
        
        });
  
    }


)  

  
