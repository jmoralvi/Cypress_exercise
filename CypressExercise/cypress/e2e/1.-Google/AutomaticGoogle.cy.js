
describe('test_name', function() {
  it("Debe buscar automatización en Google, encontrar la Wikipedia y verificar el año del primer proceso automático", () => {
    // Paso 1: Buscar "automatización" en Google
    cy.visit('/');
    cy.get('#L2AGLb').click()
    cy.get('#APjFqb').type('automatización').click()
    cy.wait(500)
    cy.get('#jZ2SBf > .wM6W7d > span').click()
    cy.intercept('GET', '**/search?*', {
      fixture: 'googleSearchResults.json'
    }).as('getSearchResults');
    //cy.get('body').type('automatización')
    //cy.get('#APjFqb').type('automatización{enter}'); // Hacer la búsqueda
    //cy.get('[name="q"]').type('automatización').click();
    //cy.visit('https://www.google.es/search?q=automatizaci%C3%B3n&sca_esv=49a589d6dad0b3b0&hl=es&sxsrf=AHTn8zq5Ew6zVb1FNnyGKpVe_hXubzaZVg%3A1739224176500&source=hp&ei=cHSqZ9rQG7_P2roPm4THwQ0&iflsig=ACkRmUkAAAAAZ6qCgES0Ki3_wCd1XQtNSuz1-PAqSF_H&ved=0ahUKEwjayOP5irqLAxW_p1YBHRvCMdgQ4dUDCBk&uact=5&oq=automatizaci%C3%B3n&gs_lp=Egdnd3Mtd2l6Ig9hdXRvbWF0aXphY2nDs24yChAjGIAEGCcYigUyCxAAGIAEGLEDGIMBMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgsQLhiABBjHARivATIFEAAYgARI_54BUMBvWL-VAXACeACQAQCYAbEBoAGZDKoBAzYuOLgBA8gBAPgBAZgCEKACig2oAgrCAgcQIxgnGOoCwgIHEC4YJxjqAsICChAjGPAFGCcY6gLCAgQQIxgnwgIREC4YgAQYsQMY0QMYgwEYxwHCAgsQLhiABBixAxiDAcICCBAAGIAEGLEDwgIKEAAYgAQYQxiKBcICDhAuGIAEGMcBGI4FGK8BwgIOEAAYgAQYsQMYgwEYigXCAhAQLhiABBjRAxhDGMcBGIoFwgIREC4YgAQYsQMYxwEYjgUYrwHCAg0QABiABBhDGMkDGIoFwgILEAAYgAQYkgMYigXCAhcQLhiABBixAxiDARjUAhjHARiOBRivAcICChAAGIAEGBQYhwKYAxnxBU9xmn6VasuUkgcDNy45oAfAqAE&sclient=gws-wiz')
    //cy.get('.VelOt > .p3hH8c > .y171A > .IQhcI > .iJ25xd').click()
    cy.get('a[href*="wikipedia.org"]').first().click();
  
    //cy.get('#search').should('be.visible'); // Asegurarse de que los resultados de búsqueda se muestran
  //})
  //it('Encontrar el enlace de Wikipedia', () => {
    // Paso 2: Encontrar el enlace de Wikipedia
    // Esperar a que el primer enlace de Wikipedia aparezca y hacer clic
    //cy.contains('Wikipedia').first().click();
  //cy.get('h3').contains('Wikipedia').parent('a').click();
  // cy.visit('https://es.wikipedia.org/wiki/Automatizaci%C3%B3n')
  //})
 // it('Comprobar en qué año se hizo el primer proceso automático', () => {
    // Paso 3: Comprobar en qué año se hizo el primer proceso automático
    // Buscar el año de la primera automatización en el contenido de la página de Wikipedia
    cy.contains(/1785/).should('be.visible');
    //cy.contains(/siglo XVIII|18\d{2}/).should('be.visible'); // Confirmar que la página cargó correctamente
    //cy.get('body').contains('En 1801').should('exist'); // Confirmar el primer proceso automático
  //})
 // it('Realizar un screenshot de la página de Wikipedia', () => {
    // Paso 4: Realizar un screenshot de la página de Wikipedia
    cy.screenshot(); // Toma una captura de pantalla

    // (Opcional) Esperar un poco para que la imagen se guarde antes de terminar
    //cy.wait(1000);
  })
})

