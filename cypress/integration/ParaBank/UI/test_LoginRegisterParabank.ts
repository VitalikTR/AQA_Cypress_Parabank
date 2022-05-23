import urlsPagesParabank from "../../../data/urlsPagesParabank";
import usersParabank from "../../../data/usersParabank";
import { LoginPageParabank } from "../../../support/pagesParaBank/loginPageParabank";

const loginPageParabank = new LoginPageParabank();


describe('Test suite a user can login/register/forgot login on the main page', () => {
    before('Opened the Main page', () => {
        loginPageParabank.open();
    });
    it('Test register new user', () => {
        loginPageParabank
            .urlPageVerify(urlsPagesParabank.loginPageUrl)
            .logo()
            .openRegisterForm()
            .registerLabelVerify()
            .registerToTheApp(usersParabank.newUser)
            .confirmSuccessRegistration()
    });

    it('Test log out of the App', () => {
        loginPageParabank
            .logOutOfTheApp()
            .checkLoginButton()
    });

    it('Test login to the App', () => {
        loginPageParabank
            .loginToTheApp(usersParabank.newUser)
            .AccountServicesLabelVerify()
    });

    it('Test forgot login info to the App', () => {
        loginPageParabank
            .logOutOfTheApp()
            .forgotLogin()
            .customerLookup(usersParabank.newUser)
            .customerLookupVerify()
            .customerLookupCredentialsVerify(usersParabank.newUser)
        loginPageParabank
            .logOutOfTheApp()
    });
});