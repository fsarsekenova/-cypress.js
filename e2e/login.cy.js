describe('Автотесты на авторизацию', function () {

     it('Правильный пароль и правильный логин', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru');// ввела логин правильный
        cy.get('#pass').type('iLoveqastudio1');// ввела пароль верный
        cy.get('#loginButton').click();//нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');// проверка нужного текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// наличие крестика и видим
        }) 
        
     it('Забыли пароль', function () {
        cy.visit('https://login.qa.studio/');

       cy.get('#form').trigger('mouseover');// наведение на экран
       cy.get('#forgotEmailButton').click();//наведение на кнопку "Забыли пароль" и кликнуть правой кнопкой
       cy.get('#mailForgot').type('german@dolnikov.ru');//ввела валидный маил в поле маил
       cy.get('#restoreEmailButton').trigger('mouseover');//на кнопку "Отправить код" навела мышкой
       cy.get('#restoreEmailButton').click();//на кнопку "Отправить код" кликнула правой кнопкой
       cy.get('#messageHeader').contains('Успешно отправили пароль');//надпись с текстом "Успешно отправили пароль на e-mail"
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');// наличие крестика и видим
        })

   
     it('Правильный логин и не правильный пароль', function () {
        cy.visit('https://login.qa.studio/');

         cy.get('#form').trigger('mouseover');// наведение на экран
         cy.get('#mail').type('german@dolnikov.ru');//ввела валидный маил в поле маил
         cy.get('#pass').type('iLoveqastudio12');//в инпут поле пароля ввели не верный пароль
         cy.get('#loginButton').trigger('mouseover');// навели мышкой на кнопку "Войти"
         cy.get('#loginButton').click();//кликнули по кнопке "Войти"
         cy.get('#message').trigger('mouseover');//всплывает окошко
         cy.get('#messageHeader').contains('Такого логина или пароля нет');//надпись с текстом "Такого логина или пароля нет"
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');// наличие крестика и видим
        })


     it('Не правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#form').trigger('mouseover');// наведение на экран
        cy.get('#mail').type('german@dolnikovv.ru');//ввела невалидный маил в поле маил
        cy.get('#pass').type('iLoveqastudio1');// ввела пароль верный
        cy.get('#loginButton').trigger('mouseover');// навели мышкой на кнопку "Войти"
        cy.get('#loginButton').click();//кликнули по кнопке "Войти"
        cy.get('#message').trigger('mouseover');//всплывает окошко
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//надпись с текстом "Такого логина или пароля нет"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// наличие крестика и видим
         })

     it('Ввести логин без @', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#form').trigger('mouseover');// наведение на экран
        cy.get('#mail').type('germandolnikovv.ru');//ввести логин без @
        cy.get('#pass').type('iLoveqastudio1');// ввела пароль верный
        cy.get('#loginButton').trigger('mouseover');// навели мышкой на кнопку "Войти"
        cy.get('#loginButton').click();//кликнули по кнопке "Войти"
        cy.get('#message').trigger('mouseover');//всплывает окошко
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');//надпись с текстом "Нужно исправить проблему валидации"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// наличие крестика и видим
        })

     it('логин GerMan@Dolnikov.ru', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#form').trigger('mouseover');// наведение на экран
        cy.get('#mail').type('GerMan@Dolnikov.ru');//ввести логин без @
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').trigger('mouseover');// навели мышкой на кнопку "Войти"
        cy.get('#loginButton').click();//кликнули по кнопке "Войти"
        cy.get('#message').trigger('mouseover');//всплывает окошко
        cy.get('#messageHeader').contains('Такого логина или пароля нет');//надпись с текстом "Такого логина или пароля нет"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// наличие крестика и видим





     })
})


// Ввести правильный логин
// Ввести правильный пароль
// Нажать войти
// Проверить нужный текст и наличие кнопки крестик


// Нажать «Забыли пароль»
// Ввести любой имейл
// Проверка, что получили нужный текст и есть кнопка крестика


// Ввести правильный логин
// Ввести НЕ правильный пароль
// Нажать войти
// Проверить нужный текст и наличие кнопки крестик


// Ввести НЕ правильный логин
// Ввести правильный пароль
// Нажать войти
// Проверить нужный текст и наличие кнопки крестик


 // Ввести логин без @
 // Ввести правильный пароль
 // Нажать войти
 // Проверить, что получаем текст с ошибкой


// Ввести логин GerMan@Dolnikov.ru
// Ввести правильный пароль
// Нажать войти
// Проверить, что авторизация успешна (нужный текст и наличие кнопки крестик)
// Разработчик допустил баг и это не реализовал. Тест должен упасть — и это ок (то есть мы поймали баг, который допустил разработчик)