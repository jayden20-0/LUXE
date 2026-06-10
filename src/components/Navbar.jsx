export default function Navbar() {
  const products = [
    {
      name: "Premium Sneakers",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    },
    {
      name: "Luxury Watch",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600",
    },
    {
      name: "Streetwear Hoodie",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    },
    {
      name: "Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    },
  ];

  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 80px",
          backdropFilter: "blur(20px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "2rem",
            background: "linear-gradient(90deg,#7f5af0,#2cb67d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          LUXE
        </h1>

        <div style={{ display: "flex", gap: "35px" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Shop
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "60px 80px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: "500px" }}>
          <h1
            style={{
              fontSize: "4.5rem",
              marginBottom: "15px",
              lineHeight: "1.1",
            }}
          >
            Elevate Your Style
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "1.1rem",
              lineHeight: "1.8",
            }}
          >
            Discover premium fashion, luxury accessories and trending products
            crafted for modern lifestyles.
          </p>

          <button
            style={{
              marginTop: "25px",
              padding: "15px 35px",
              border: "none",
              borderRadius: "30px",
              background: "linear-gradient(90deg,#7f5af0,#2cb67d)",
              color: "white",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Shop Now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200"
          alt="fashion"
          style={{
            width: "500px",
            borderRadius: "25px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        />
      </div>

      {/* CATEGORIES */}
      <div style={{ padding: "40px 80px" }}>
        <h2 style={{ marginBottom: "30px" }}>Shop By Category</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          {[
            "Shoes",
            "Watches",
            "Fashion",
            "Accessories",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#1e293b",
                padding: "40px",
                borderRadius: "20px",
                textAlign: "center",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <div style={{ padding: "40px 80px" }}>
        <h2 style={{ marginBottom: "30px" }}>Featured Products</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              style={{
                background: "#1e293b",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3>{product.name}</h3>

                <button
                  style={{
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "20px",
                    background: "#7f5af0",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: "60px",
          padding: "30px",
          textAlign: "center",
          borderTop: "1px solid #334155",
          color: "#94a3b8",
        }}
      >
        © 2026 LUXE. All Rights Reserved.
      </footer>
    </div>
  );
}