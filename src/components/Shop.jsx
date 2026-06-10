import { Footer } from "./Footer";
export function Shop() {
  const products = [
    {
      name: "Air Nova Sneakers",
      price: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000",
      badge: "BESTSELLER",
    },
    {
      name: "Midnight Watch",
      price: "₹7,499",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1000",
      badge: "NEW",
    },
    {
      name: "Urban Hoodie",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1000",
      badge: "TRENDING",
    },
    {
      name: "Pulse Headphones",
      price: "₹3,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000",
      badge: "POPULAR",
    },
    {
      name: "Luxury Backpack",
      price: "₹2,999",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1000",
      badge: "HOT",
    },
    {
      name: "Designer Sunglasses",
      price: "₹1,999",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1000",
      badge: "SALE",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(139,92,246,0.16), transparent 30%), radial-gradient(circle at top right, rgba(45,212,191,0.12), transparent 28%), linear-gradient(180deg, #0b1020 0%, #0f172a 40%, #111827 100%)",
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          padding: "140px 60px 80px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            letterSpacing: "4px",
            color: "#94a3b8",
          }}
        >
          PREMIUM COLLECTION
        </p>

        <h1
          style={{
            fontSize: "5rem",
            lineHeight: "1",
            margin: "15px 0",
          }}
        >
          Discover
          <br />
          Luxury Essentials
        </h1>

        <p
          style={{
            maxWidth: "650px",
            color: "#cbd5e1",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          Explore curated products designed for modern lifestyles.
          Minimal design, premium quality, and timeless style.
        </p>
      </section>

      {/* FEATURED COLLECTION */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 60px 80px",
        }}
      >
        <div
          style={{
            position: "relative",
            borderRadius: "30px",
            overflow: "hidden",
            height: "450px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1600"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.1))",
              display: "flex",
              alignItems: "center",
              padding: "60px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "3rem",
                  marginBottom: "20px",
                }}
              >
                New Summer Collection
              </h2>

              <button
                style={{
                  padding: "15px 35px",
                  border: "none",
                  borderRadius: "40px",
                  background:
                    "linear-gradient(135deg,#8b5cf6,#2dd4bf)",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Shop Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 60px 50px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {[
            "All",
            "Sneakers",
            "Fashion",
            "Watches",
            "Accessories",
            "Tech",
          ].map((item) => (
            <button
              key={item}
              style={{
                padding: "12px 24px",
                borderRadius: "50px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 60px 100px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "28px",
                overflow: "hidden",
                transition: "0.3s",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  position: "relative",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    left: "15px",
                    background:
                      "linear-gradient(135deg,#8b5cf6,#2dd4bf)",
                    padding: "8px 15px",
                    borderRadius: "30px",
                    fontSize: ".8rem",
                    fontWeight: "600",
                  }}
                >
                  {product.badge}
                </div>
              </div>

              <div
                style={{
                  padding: "25px",
                }}
              >
                <h3>{product.name}</h3>

                <p
                  style={{
                    color: "#94a3b8",
                    marginBottom: "20px",
                  }}
                >
                  Premium quality • Limited edition
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems: "center",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "1.2rem",
                    }}
                  >
                    {product.price}
                  </strong>

                  <button
                    style={{
                      border: "none",
                      padding: "10px 20px",
                      borderRadius: "20px",
                      background:
                        "linear-gradient(135deg,#8b5cf6,#2dd4bf)",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 60px 100px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
          }}
        >
          {[
            "Free Shipping",
            "Secure Payments",
            "Premium Quality",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "35px",
                textAlign: "center",
              }}
            >
              <h3>{item}</h3>

              <p
                style={{
                  color: "#94a3b8",
                }}
              >
                Excellence in every order.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}