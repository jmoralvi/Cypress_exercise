describe('test_name', function() {
  it("Debe buscar automatización en Google, encontrar la Wikipedia y verificar el año del primer proceso automático", () => {
    // Paso 1: Buscar "automatización" en Google
    cy.visit('/');
    cy.get('#L2AGLb').click()
    cy.get('#APjFqb').type('automatización').click()
    cy.wait(500)
    cy.get('#jZ2SBf > .wM6W7d > span').click()

    // Paso 2: Encontrar el enlace de Wikipedia
    // Esperar a que el primer enlace de Wikipedia aparezca y hacer click
    cy.get('a[href*="wikipedia.org"]').first().click();
    //cy.get('.iJ25xd').click()
  
    // Paso 3: Comprobar en qué año se hizo el primer proceso automático
    // Buscar el año de la primera automatización en el contenido de la página de Wikipedia
    cy.contains(/1785/).should('be.visible');
    //cy.contains(/siglo XVIII|18\d{2}/).should('be.visible'); // Confirmar que la página cargó correctamente
    
    // Paso 4: Realizar un screenshot de la página de Wikipedia
    cy.screenshot(); // Toma una captura de pantalla

    // (Opcional) Esperar un poco para que la imagen se guarde antes de terminar
    cy.wait(1000);
  })
})
