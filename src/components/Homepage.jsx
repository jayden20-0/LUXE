import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";

function Homepage() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*");

    if (error) {
      console.log(error);
      return;
    }

    setProducts(data);
  }

  async function deleteProduct(id) {
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      console.log(error);
      return;
    }

    fetchProducts();
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="homepage">

      <section className="hero">
        <div className="hero-content">

          <span className="hero-tag">
  Premium Footwear Reseller
</span>

<h1>
  Open platform for buying and selling premium footwear.
</h1>

<p>
  Add your product Below.
</p>


          <Link to="/add-product">
            <button className="add-btn">
              Add Product
            </button>
          </Link>

        </div>
      </section>

      <section className="products-section">

        <h2 className="section-title">
          Featured Products
        </h2>

        {products.length === 0 ? (
          <div className="empty-state">
            <h3>No Products Found</h3>
            <p>
              Add your first product to get started.
            </p>
          </div>
        ) : (
          <div className="products-grid">

            {products.map((product) => (
              <div
                className="card"
                key={product.id}
              >
                <img
                  src={product.image_url}
                  alt={product.title}
                />

                <div className="card-content">

                  <h2>
                    {product.title}
                  </h2>

                  <p>
                    {product.description}
                  </p>

                  <h3>
                    ₹{product.price}
                  </h3>

                  <div className="actions">

                    <Link
                      to={`/edit-product/${product.id}`}
                    >
                      <button className="edit-btn">
                        Edit
                      </button>
                    </Link>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteProduct(product.id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

      </section>

    </div>
  );
}

export default Homepage;