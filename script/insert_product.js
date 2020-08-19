const url = axios.get(`http://localhost:3000/categorias`)

function addProduct (url){
        url.then(res => {
            const products = res.data
            for (let i = 0; i < products.length ; i++){
                let insert = document.createElement('div');
                insert.className = "col-xs-12 col-sm-6 col-md-4 col-lg-3";
                insert.innerHTML = `<div class=" card">
                                    <img class="card-img-top" src="${products[i].photo}" alt= "${products[i].nome}" >
                                     <div class="card-body">
                                    <h5 class="card-title">${products[i].name}</h5>
                                    <p class="card-text">Preço R$ ${products[i].price}</p>
                                    <input type="number" id="quantity" class="input-text qty text col-xs-12 col-sm-6 col-md-6 col-lg-6" step="1" min="1" max=""
                                    name="quantity" value="1" title="Qtd" size="4" placeholder="" inputmode="numeric">
                                    <a id="clienteComprou${i}" class="btn btn-light">Comprar</a>`   
                document.getElementById("insertCardHere").appendChild(insert)

                document.getElementById(`clienteComprou${i}`).addEventListener("click",function () {
                    
                     axios.post(`http://localhost:3000/carrinho`, {
                             name: "Cabaré",
                             description: "CACHAÇA CABARÉ OURO - 700ml",
                             price: 26.99,
                             photo: "./img/produtos/cachaca/cachaca_cabare.webp",
                             category: 1
                     }
                     )}

                })
    }
            }
        })
        }
 window.onload = function () {
     addProduct(url)
 }