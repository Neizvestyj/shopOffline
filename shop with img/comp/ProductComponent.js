//alert("product")
const product = {
      props: ["product", "img"],
      template: `<div class="product-item">
<img :src="img" alt="imgs">
<div class="desc">
<h3>{{product.product_name}}</h3>
<p>{{product.price}}</p>
<button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
</div>
</div>`
}

const products = {
      components: { product },
      data() {
            return {
                  catalogUrl: '/catalogData.json',
                  filtered: [],
                  products: [],
                  //imgCatalog: "item.imgPath"
                  error1: false,
                  status: ''
            };
      },

      mounted() {
            this.$parent.getJson(`${API + this.catalogUrl}`)
                  .then(data => {
                        for (let item of data) {
                              item.imgPath = `img/${item.id_product}.jpg`;
                              this.products.push(item); this.filtered.push(item);
                        }
                  });
            this.$parent.getJson('getProducts.json')
                  .then(data => {
                        for (let item of data) {
                              item.imgPath = `img/${item.id_product}.jpg`;
                              this.products.push(item); this.filtered.push(item);
                        }
                  });
      },

      methods: {
            filter(val) {
                  const regexp = new RegExp(val, "i");
                  this.filtered = this.products.filter(product => regexp.test(product.product_name));
            }
      },
      template: `<div class="products">
<product v-for="product of filtered"
:key="product.id_product"
:img="product.imgPath"
:product="product"></product>
         </div>`
}
