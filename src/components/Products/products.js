import Product from "../product/Product";
import "./products.css";
const Products = ({ productList }) => (
  <section className="products">
    {productList.map((product) => (
      <Product
        key={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
      />
    ))}
  </section>
);
export default Products;
