describe("Order Form Input Validation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza"); // Replace 'your-order-form-url' with the actual URL of your order form
  });

  it('Should disable the "SİPARİŞ VER" button if Adınız input has less than 2 characters', () => {
    cy.get("#isim").type("A");
    cy.get("#order-button").should("be.disabled");
  });
});
