//alert('Cart')
const cartItem = {
      props: ['cart-item', "img"],
      template: `<div class="cart-item">
<div class="product-bio">
<img :src="img" alt="Some image">
<div class="product-desc">
<div class="product-title">{{cartItem.product_name}}</div>
<div class="product-quantity">Quantity:{{cartItem.quantity}}</div>
<div class="product-single-price">{{cartItem.price}} each</div>
</div>
</div>
<div class="right-block">
<div class="product-price">{{cartItem.quantity*cartItem.price}}</div>
<button class="del-btn" @click="$parent.removeProduct(cartItem)">&times</button>
</div>
</div>`
}
const cart = {
components: { "cart-item": cartItem },
data() {
return {
cartUrl: `/getBasket.json`,
//imgCatalog: "img/imgPath",
visibility: false,
cartItems: []
            }
      },
methods: {
addProduct(product) {
const find = this.cartItems.find(item => item.id_product === product.id_product);
if(find){
find.quantity++
}else{
this.cartItems.push({ ...product,quantity:1})
}
},

removeProduct(product) {
if (product.quantity > 1){product.quantity--;
} else {
this.cartItems=this.cartItems.filter(itemCart => itemCart.id_product !== product.id_product)}
                  /*this.cartItems.splice(this.cartItems.indexOf(product),1)*/
            
      },
sumPrice(){
return this.cartItems.reduce((prev,curr) =>{
return prev+(curr.quantity*curr.price);
},0);
}
},
mounted() {
this.$parent.getJson(`${API + this.cartUrl}`)
.then(data => {
for(let item of data.contents){  
item.imgPath=`img/${item.id_product}.jpg`;
this.cartItems.push(item)
                              //this.products.push(item);
                              //this.filtered.push(item);
                        }
                  });
      },
template: `<div>
<button @click="visibility=!visibility" class="btn-cart" type="button">Корзина</button>
<div class="cart-block" v-if="visibility" :class="{open:visibility}">
<template v-if="cartItems.length===0">
<p class="empty-cart-message">Корзина пуста</p>
</template>
<cart-item v-for="product of cartItems" :key="product.id_product"    :img="product.imgPath" 
:cart-item="product"
></cart-item>
<div class="sumPrice">
{{sumPrice()}} $
</div>
</div>
</div>
`
}
