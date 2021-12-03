import LoginPage from '../pageobjects/login/login.page';
import SecurePage from '../pageobjects/login/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
    });

    it('should not login with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('tomith', 'SuperSecretPaaaassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('Your username is invalid!');
    })
});


