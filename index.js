const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})


/****/

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

const productsList = document.querySelector('.container-items');


let allProducts = [];



let valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-produtos');





productsList.addEventListener('click', e => {
    if(e.target.classList.contains('btn-add-cart')){
        const product = e.target.parentElement;
        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        }
        
        const exits = allProducts.some(product => product.title === infoProduct.title);
        
        

        if(exits){
            const products = allProducts.map(product => {
                if(product.title===infoProduct.title){
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            
            allProducts = [...allProducts, infoProduct];
        }


        showHTML();
    }
});


rowProduct.addEventListener('click',(e) => {
    if(e.target.classList.contains('icon-close')){
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title);
    };

    console.log(allProducts);
    showHTML();
})



const showHTML = () => {
    
    if(!allProducts.length){
        containerCartProducts.innerHTML = `
        <p class = "cart-empty">El carrrito está vacio<p>
        `
    }

    rowProduct.innerHTML="";
    let total = 0;
    let totalOfProducts = 0;


    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
        <div class="info-cart-product">
                            <span class="cantidad-producto-carrito">${product.quantity}</span>
                            <p class="titulo-producto-carrito">${product.title}</p>
                            <span class="precio-producto-carrito">${product.price}</span>
                        </div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="icon-close"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
        `;

        rowProduct.append(containerProduct);

        total = total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    });

    valorTotal.innerHTML = `Q${total}`;
    countProducts.innerText = totalOfProducts;
};



function mostrarDesayunos(){
    productsList.innerHTML=`
    <div class="contenedor-desayunos">
    <div class="item">
        <figure>
            <img
                src="/imagenes/desayuno1.jpg"
                alt="desayuno1"
            />
        </figure>
        <div class="info-product">
            <h2>Desayuno 1</h2>
            <p class="price">Q25</p>
            <button class="btn-add-cart">Añadir al carrito</button>
        </div>
    </div>
    <div class="item">
        <figure>
            <img
                src="/imagenes/desayuno2.jfif"
                alt="producto"
            />
        </figure>
        <div class="info-product">
            <h2>Desayuno 2</h2>
            <p class="price">Q20</p>
            <button class="btn-add-cart">Añadir al carrito</button>
        </div>
    </div>
    <div class="item">
        <figure>
            <img
                src="/imagenes/desayuno3.jpg"
                alt="producto"
            />
        </figure>
        <div class="info-product">
            <h2>Desayuno 3</h2>
            <p class="price">Q40</p>
            <button class="btn-add-cart">Añadir al carrito</button>
        </div>
    </div>
    <div class="item">
        <figure>
            <img
                src="/imagenes/desayuno4.jfif"
                alt="producto"
            />
        </figure>
        <div class="info-product">
            <h2>Desayuno 4</h2>
            <p class="price">Q35</p>
            <button class="btn-add-cart">Añadir al carrito</button>
        </div>
    </div>
    <div class="item">
        <figure>
            <img
                src="/imagenes/desayuno5.jfif"
                alt="producto"
            />
        </figure>
        <div class="info-product">
            <h2>Desayuno 5</h2>
            <p class="price">Q50</p>
            <button class="btn-add-cart">Añadir al carrito</button>
        </div>
    </div>

    <div class="item">
        <figure>
            <img
                src="/imagenes/desayuno6.jfif"
                alt="producto"
            />
        </figure>
        <div class="info-product">
            <h2>Desayuno 6</h2>
            <p class="price">Q35</p>
            <button class="btn-add-cart">Añadir al carrito</button>
        </div>
    </div>
</div>

    `
}


function mostrarAlmuerzos(){
    productsList.innerHTML=`
    <div class="contenedor-almuerzos">
				<div class="item">
					<figure>
						<img
							src="/imagenes/almuerzo1.jfif"
							alt="producto"
						/>
					</figure>
					<div class="info-product">
						<h2>Almuerzo 1</h2>
						<p class="price">Q40</p>
						<button class="btn-add-cart">Añadir al carrito</button>
					</div>
				</div>
				<div class="item">
					<figure>
						<img
							src="/imagenes/almuerzo2.jfif"
							alt="producto"
						/>
					</figure>
					<div class="info-product">
						<h2>Almuerzo 2</h2>
						<p class="price">Q30</p>
						<button class="btn-add-cart">Añadir al carrito</button>
					</div>
				</div>
				<div class="item">
					<figure>
						<img
							src="/imagenes/almuerzo3.jfif"
							alt="producto"
						/>
					</figure>
					<div class="info-product">
						<h2>Almuerzo 3</h2>
						<p class="price">Q40</p>
						<button class="btn-add-cart">Añadir al carrito</button>
					</div>
				</div>
				<div class="item">
					<figure>
						<img
							src="/imagenes/almuerzo4.jfif"
							alt="producto"
						/>
					</figure>
					<div class="info-product">
						<h2>Almuerzo 4</h2>
						<p class="price">Q40</p>
						<button class="btn-add-cart">Añadir al carrito</button>
					</div>
				</div>
				<div class="item">
					<figure>
						<img
							src="/imagenes/almuerzo5.jpg"
							alt="producto"
						/>
					</figure>
					<div class="info-product">
						<h2>Almuerzo 5</h2>
						<p class="price">Q30</p>
						<button class="btn-add-cart">Añadir al carrito</button>
					</div>
				</div>


                <div class="item">
					<figure>
						<img
							src="/imagenes/almuerzo6.jpg"
							alt="producto"
						/>
					</figure>
					<div class="info-product">
						<h2>Almuerzo 6</h2>
						<p class="price">Q20</p>
						<button class="btn-add-cart">Añadir al carrito</button>
					</div>
				</div>

			</div>
    `
}


function mostrarCenas(){
    productsList.innerHTML=`
    <div class="contenedor-cenas">
				<div class="item">
					<figure>
						<img
							src="/imagenes/cena1.jfif"
							alt="producto"
						/>
					</figure>
					<div class="info-product">
						<h2>Cena 1</h2>
						<p class="price">Q25</p>
						<button class="btn-add-cart">Añadir al carrito</button>
					</div>
				</div>
				<div class="item">
					<figure>
						<img
							src="/imagenes/cena2.jfif"
							alt="producto"
						/>
					</figure>
					<div class="info-product">
						<h2>Cena 2</h2>
						<p class="price">Q28</p>
						<button class="btn-add-cart">Añadir al carrito</button>
					</div>
				</div>
				<div class="item">
					<figure>
						<img
							src="/imagenes/cena3.jfif"
							alt="producto"
						/>
					</figure>
					<div class="info-product">
						<h2>Cena 3</h2>
						<p class="price">Q30</p>
						<button class="btn-add-cart">Añadir al carrito</button>
					</div>
				</div>
				<div class="item">
					<figure>
						<img
							src="/imagenes/cena4.jfif"
							alt="producto"
						/>
					</figure>
					<div class="info-product">
						<h2>Cena 4</h2>
						<p class="price">Q40</p>
						<button class="btn-add-cart">Añadir al carrito</button>
					</div>
				</div>
				<div class="item">
					<figure>
						<img
							src="/imagenes/cena5.jfif"
							alt="producto"
						/>
					</figure>
					<div class="info-product">
						<h2>Cena 5</h2>
						<p class="price">Q50</p>
						<button class="btn-add-cart">Añadir al carrito</button>
					</div>
				</div>


                <div class="item">
                <figure>
                    <img
                        src="/imagenes/cena6.jfif"
                        alt="producto"
                    />
                </figure>
                <div class="info-product">
                    <h2>Cena 6</h2>
                    <p class="price">Q50</p>
                    <button class="btn-add-cart">Añadir al carrito</button>
                </div>
            </div>

			</div>
    `
}
