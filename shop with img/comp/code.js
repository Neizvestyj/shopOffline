

const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";


const app = new Vue({
  el: `#app`,
  data: {
    catalogUrl: `/catalogData.json`,
    products: [],
    filtered: [],
    //imgCatalog: "item.imgPath",
    show: false,
    error1:false,
    status:''
  },
  components: { cart, products, search },

methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())

        .catch(error => {
          this.error1 = true;
          this.status = "Нет связи";
          alert("error");
        })
    }
  }
})


/*
addProduct(product){

const find=this.cartItems.find(item=>item.id_product===product.id_product);
if(find){
alert(1)
find.quantity++}
else{
this.cartItems.push({...product,quantity:1})
}
},

removeProduct(item){
if(item.quantity>1){
item.quantity--;
}else{ this.cartItems=this.cartItems.filter(itemCart=>itemCart.id_product!==item.id_product)}
},
//this.cartItems.splice(this.cartItems.index0f(item), 1) )}

filter(){
const regexp=new RegExp(this.userSearch,"i");

this.filtered=this.products.filter(product=>regexp.test(product.product_name));
}
},

mounted(){
this.getJson(`${API+this.cartUrl}`) 
      .then(data=>{
  for(let item of data.contents){
      this.$data.cartItems.push(item)
    //this.products.push(item);
    //this.filtered.push(item);
             }
});
this.getJson(`${API+this.catalogUrl}`)
      .then(data=>{
  for(let item of data){
    this.products.push(item);
    this.filtered.push(item);
             }
});
this.getJson(`getProducts.json`)
      .then(data=>{
  for(let item of data){
    this.products.push(item);
    this.filtered.push(item); 
}
             
})
}
})
*/
