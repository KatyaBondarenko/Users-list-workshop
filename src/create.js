

export default function initPage() {

    document.querySelector(".submit_form").addEventListener('submit',

        function(event) {

          event.preventDefault();

          var fieldValue1 = document.querySelector('.Name').value;
          var fieldValue2 = document.querySelector('.password').value;
          var fieldValue3 = document.querySelector('.email').value;
          var fieldValue4 = document.querySelector('.comment').value;

          var payload = {

          fieldValue1: fieldValue1,
          fieldValue2: fieldValue2,
          fieldValue3: fieldValue3,
          fieldValue4: fieldValue4

        };

        var myHeaders = new Headers(); // создаём объект заголовков
        myHeaders.append("Content-Type", "application/json");   /// добавляем заголовок Content-Type чтоб сказать серверу в каком формате данные передаём
        var myInit = {
                       method: 'POST', // указываем метод запроса
                       headers: myHeaders,  // добавляем заголовки
                       mode: 'cors',   // ставим режим кросс доменных запросов
                       cache: 'default', // кеширование по умолчанию
                       body: JSON.stringify({   /// добавляем данные к запросу
                          name: fieldValue1,
                          password: fieldValue2,
                          email: fieldValue3,
                          comment: fieldValue4
                       })
         };

        var myRequest = new Request('http://193.111.63.76:3000/api/v1/Users', myInit); // создаём запрос

        fetch(myRequest)   //говорим запросу выполнится
        .then(function(response) {

          if (response.status >= 200 && response.status < 300) {

            return response.json(); /// парсим ответ от сервера в json

          } else {

               return Promise.reject();
          }

        })
        .then(function(json) {
              /// здесь ответ json от сервера
              alert(JSON.stringify(json))
              window.location = "http://localhost:3000/pages/list-page.html"
        });



        })
}
