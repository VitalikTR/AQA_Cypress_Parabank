import basePageSwagLabsTS from "./basePageSwagLabsTS";
import { shoppingCartSwagLabs } from "./shoppingCartSwagLabsTS";

export class ProductPageSwagLabsTS extends basePageSwagLabsTS {
    private addToCartButtons() { return cy.get("[id*='add-to-cart']"); }
    private deleteFromCartButtons() { return cy.get("[id*='remove']"); }
    private inventoryItemsNames() { return cy.get(".inventory_item_name"); }
    private selectedProductsNumber() { return cy.get("#shopping_cart_container .shopping_cart_badge"); }
    private menu() { return cy.get("#react-burger-menu-btn"); }
    private logoutButton() { return cy.get("#logout_sidebar_link"); }
    public productsLabel() { return cy.get("#header_container .title"); }
    public shoppingCartLink() { return cy.get(".shopping_cart_link"); }
    public urlProductsPage() { return cy.url(); }   
    public selectSortProductsLabel() {return cy.xpath("//select[@data-test='product_sort_container']")}
    
    public openShoppingCart(){
        this.shoppingCartLink().click();
            return new shoppingCartSwagLabs()
    }

    public logAllProducts(){
        this.inventoryItemsNames().each(item => {
            cy.log(item.text())
        });

        super.waitForSeconds(1)
            return this
    }

    public addToCartAllproducts(){
        this.addToCartButtons().each(item => {
            item.click()
        });
        this.waitForSeconds(1)
            return this
    }

    public deleteFromCartAllproducts(){
        this.deleteFromCartButtons().each(item => {
            item.click()
        });
        this.waitForSeconds(1)
            return this
    }

    public selectedProductsNumberVerify(number){
        this.selectedProductsNumber().then( element => {
            expect(element.text()).to.be.equal(number);
        }); 
            return this
    }

    public selectedProductsNumberHiddenVerify(number){
        this.shoppingCartLink().then( element => {
            expect(element.text()).to.be.equal(number);
        }); 
            return this
    }

    public openMenu() {
        this.menu().then(item => {
            item.click()
            this.waitForSeconds(1)
        })
            return this
    };

    public logoutApp() {
        this.logoutButton().click();
            return this
    } 

    public urlPageVerify(link){
        this.urlProductsPage().should('eq', link.url);
            return this
    }

    public productsLabelVerify(){
        this.productsLabel().should('be.visible').then((element) => {
            expect(element.text()).to.be.equal('Products')
        })
            return this
    }

    public shoppingCartLabelVerify(){
        this.shoppingCartLink().should('be.visible');
            return this
    }

    public selectSortLabelVerify(){
        this.selectSortProductsLabel().should('be.visible')
        this.selectSortProductsLabel().select('Price (low to high)')
            return this
    }
}

