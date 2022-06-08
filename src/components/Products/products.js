import Product from "../product/Product";
import "./Products.css";
const Products = ({ productList }) => (
  <section className="products">
    {productList.map((product) => (
      <Product
        key={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
        category={product.category}
      />
    ))}
  </section>
);
export default Products;
