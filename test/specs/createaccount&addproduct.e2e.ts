import { internet } from "faker";
import myAccountPage from "../pageobjects/signup/myAccount.page";
import signInPage from "../pageobjects/signIn.page";
import signUpPage from "../pageobjects/signup/siginUp.page";
import signup from "../pageobjects/testdata/signUp.json";
import womenPage from "../pageobjects/menu/women.page";
import summaryPage from "../pageobjects/cart/cartsummary.page";
import addressPage from "../pageobjects/cart/address.page";
import shippingPage from "../pageobjects/cart/shipping.page";
import paymentPage from "../pageobjects/cart/payment.page";
import orderPage from "../pageobjects/cart/order.page";
import siginUpPage from "../pageobjects/signup/siginUp.page";

describe('This is for Creating Account and adding the Product Items to Cart', () => {

    it('This is the Home Page of MyStore', async () => {
        await signInPage.homePageLink()
    });
    it('I Click on Sign in', async () => {
        await signInPage.clickOnSIgnIn.click();
    });
    it('I should see the Text as {CREATE AN ACCOUNT}', async () => {
        await expect(signInPage.createAccountText).toHaveText("CREATE AN ACCOUNT");
    });
    it('I enter email address it should create account', async () => {
        await signInPage.enteringEmailAddress.setValue(internet.email())
    });
    it('I click on create an account button', async () => {
        await signInPage.ClickOnCreateAccountButton.click();
    });
    it('I should navigate and see the heading as {YOUR PERSONAL INFORMATION}', async () => {
        await expect(signUpPage.pageHeading).toHaveText("YOUR PERSONAL INFORMATION");
    });
    it('I enter the data in all fields as', async () => {

        await signUpPage.radioButton.isSelected();
        await signUpPage.setFirstAndLastName(signup.name);
        await signUpPage.password.setValue(internet.password(8));
        await signUpPage.selectDateOfBirth(signup.dob)
        await siginUpPage.setAddress(signup.address)
    });
    it('I click on the Register Button', async () => {
        await signUpPage.clickregisterbutton()
    });
    it('I should be navigated to another page and can see the text as {MY ACCOUNT}', async () => {
        await expect(myAccountPage.myAccountText).toHaveText("MY ACCOUNT");
    });
    it('I click the women section button', async () => {
        await womenPage.womenbutton.click();
    });
    it('it should navigate to the women section page i see {WOMEN}', async () => {
        await expect(womenPage.womenvalidate).toHaveText("WOMEN");
    });
    it('I perform some actions in women section page', async () => {
        await womenPage.hover.scrollIntoView();
        await womenPage.clkaddtocartbtn.click();
    });
    it('I should validate the path of message {Product successfully added to your shopping cart}', async () => {
        await expect(womenPage.addtocartmsg).toHaveText("Product successfully added to your shopping cart");
    });
    it('I click on proceed to checkout button', async () => {
        await womenPage.checkout.click();
    });
    it('it should show title heading {SHOPPING-CART SUMMARY}', async () => {
        await expect(summaryPage.heading).toHaveTextContaining("SHOPPING-CART SUMMARY");
    });
    it('I click on proceed to checkout in the summary page', async () => {
        await summaryPage.chkout.click();
    });
    it('I navigate and validate to the address page and I see {ADDRESSES}', async () => {
        await expect(addressPage.heading).toHaveText("ADDRESSES");
    });
    it('I will click on proceed button', async () => {
        await addressPage.proceed.click();
    });
    it('I will validate the navigated shipping page {SHIPPING}', async () => {
        await expect(shippingPage.shippingHeading).toHaveText("SHIPPING");
    });
    it('I perform action select check box and click on proceed to checkout button', async () => {
        await shippingPage.checkbox.click();
        await shippingPage.shippingCheckout.click();
    });
    it('I will get navigate and validate to payment page {PLEASE CHOOSE YOUR PAYMENT METHOD}', async () => {
        await expect(paymentPage.paymentHeading).toHaveText("PLEASE CHOOSE YOUR PAYMENT METHOD");
    });
    it('I click on payment option', async () => {
        await paymentPage.paymentOption.click();
    });
    it('I see the Message {ORDER SUMMARY}', async () => {
        await expect(orderPage.orderSummary).toHaveText("ORDER SUMMARY");
    });
    it('I click I confirm my order', async () => {
        await orderPage.confrimOrder.click();
    });
    it('I navigate and validate the order confirmation page {ORDER CONFIRMATION}', async () => {
        await expect(orderPage.ConfirmationMsg).toHaveText("ORDER CONFIRMATION");
    });
});