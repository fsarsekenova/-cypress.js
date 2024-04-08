describe('Автотесты Покемоны', function () {

     it('Авторизация', function () {
        cy.visit('https://pokemonbattle.me/login');

        cy.get(':nth-child(1) > .auth__input').type('fsarsekenova@yandex.ru');//ввели валидный маил
        cy.get('#password').type('Guljan2010!');//ввели валидный пароль
        cy.get('.auth__button').trigger('mouseover');//навели на кнопку "Войти"
        cy.get('.auth__button').click();//кликнуть кнопку "Войти"
        cy.get('.header__btns > [href="/shop"]').click();//раздел магазин и кликнуть на кнопку "Магазин"
        cy.visit('https://pokemonbattle.me/shop');
        cy.get('.shop__list > :nth-child(2)').trigger('mouseover');//навести мышкой на аватар
        cy.get(':nth-child(2) > .shop__button').trigger('mouseover');//навести на кнопку "Купить"
        cy.get(':nth-child(2) > .shop__button').click();//кликнуть на кнопку "Купить"
        cy.get('.pay__main-v2').trigger('mouseover');//окошко для оплаты
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4003547988012489');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('03/30');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('714');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Фатима');
        cy.get('.pay-btn').click();
        
        
      

        

         })
})