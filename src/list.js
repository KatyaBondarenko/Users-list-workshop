export class ListPage {

}

export default function initPage() {
	fetch('http://193.111.63.76:3000/api/v1/Users')
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        var list = document.querySelector('.Table_header');

        console.log(data);

        var headerTitles = "";

            for (var key in data[0]) {

                headerTitles = headerTitles + "<th>" + key + "</th>";
            }

        var bodyData = "";

        data.forEach(function(item){

            bodyData = bodyData + "<tr>";

            for (var key in item) {

                var node = item[key];

                bodyData = bodyData + "<td><pre>" + node + "</pre></td>";
            }

						bodyData+= "<td><button>Edit</button></td>";

            bodyData+= `<td><button class = 'buttonDelete' id="${item._id}"> Delete </button></td>`;

            bodyData+= "</tr>";

        });

        var bodyList = document.querySelector('.Table_body');

        list.innerHTML = headerTitles;
        bodyList.innerHTML = bodyData;



 			const nodes = document.querySelectorAll('.buttonDelete');
      Array.from(nodes).forEach()
      .addEventListener('click', (event) => {




			}





    });

}
