import basePageSwagLabsTS from "./basePageSwagLabsTS";
import { checkoutStepOnePageSwagLabsTS } from './checkoutStepOnePageSwagLabsTS';

export class shoppingCartSwagLabs extends basePageSwagLabsTS{

    private inventoryItemsNamesInCart() { return cy.get(".inventory_item_name"); }
    private selectedProductQuantityInCart() { return cy.get(".cart_quantity"); }
    private urlCart() { return cy.url(); }
    public shoppingCartLabel() { return cy.get("#header_container .title"); }
    public inventoryItemsPrice() {return cy.get(".inventory_item_price") }
    private checkoutButton() { return cy.get("#checkout"); }

    public logAllProductsInCart() {
        this.inventoryItemsNamesInCart().each(item => {
            cy.log(item.text())
        });

        super.waitForSeconds(1)
            return this
    }

    public quantityOfSelectedProductsInCart() {
        this.selectedProductQuantityInCart().each(element => {
            expect(element.text()).to.be.equal("1");
        });

        super.waitForSeconds(1)
         return this
    }

    public verifyUrlCart() {
        this.urlCart().should('eq', 'https://www.saucedemo.com/cart.html')
            return this
    }

    public verifyShoppingCartLabel(){
        this.shoppingCartLabel().should('be.visible').then((element) => {
            expect(element.text()).to.be.equal('Your Cart')
        })
        return this
    }

    public inventoryItemsPriceInCart(){
        this.inventoryItemsPrice().each(item => {
            expect(item.text()).contains('$')
        })
        return this
    }

    public verifyCheckoutButton(){
        this.checkoutButton().should('be.visible').should('contain', 'Checkout')
        return this
    }

    public openCheckoutStepOnePage(){
        this.checkoutButton().click()
        return new checkoutStepOnePageSwagLabsTS()
    }
}