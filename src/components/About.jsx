import { Footer } from "./Footer";
export function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(139,92,246,0.16), transparent 30%), radial-gradient(circle at top right, rgba(45,212,191,0.12), transparent 28%), linear-gradient(180deg, #0b1020 0%, #0f172a 40%, #111827 100%)",
        color: "white",
        fontFamily: "Inter, sans-serif",
        padding: "120px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Hero */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <p
            style={{
              color: "#94a3b8",
              letterSpacing: "4px",
            }}
          >
            ABOUT LUXE
          </p>

          <h1
            style={{
              fontSize: "5rem",
              margin: "20px 0",
              lineHeight: "1",
            }}
          >
            Crafted For
            <br />
            Modern Living
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#cbd5e1",
              fontSize: "1.1rem",
              lineHeight: "1.8",
            }}
          >
            Luxe is more than a store. We curate premium products,
            timeless designs, and modern essentials that elevate
            everyday experiences.
          </p>
        </div>

        {/* Image Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "20px",
            marginBottom: "80px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200"
            alt=""
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              borderRadius: "25px",
            }}
          />

          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
              alt=""
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                borderRadius: "25px",
              }}
            />

            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800"
              alt=""
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                borderRadius: "25px",
              }}
            />
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
            marginBottom: "80px",
          }}
        >
          {[
            ["50K+", "Customers"],
            ["200+", "Products"],
            ["4.9★", "Rating"],
            ["24/7", "Support"],
          ].map(([value, text]) => (
            <div
              key={text}
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "30px",
                borderRadius: "24px",
                textAlign: "center",
              }}
            >
              <h2>{value}</h2>
              <p style={{ color: "#94a3b8" }}>{text}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "30px",
            padding: "50px",
            marginBottom: "80px",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "20px",
            }}
          >
            Our Story
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "2",
              fontSize: "1.05rem",
            }}
          >
            Founded with a vision to redefine online shopping,
            Luxe combines premium quality with modern aesthetics.
            Every collection is carefully selected to ensure our
            customers experience both style and functionality.
            We believe shopping should be elegant, inspiring,
            and effortless.
          </p>
        </div>

        {/* Values */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
          }}
        >
          {[
            "Premium Quality",
            "Modern Design",
            "Customer First",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "40px",
                borderRadius: "24px",
                textAlign: "center",
              }}
            >
              <h3>{item}</h3>

              <p
                style={{
                  color: "#94a3b8",
                  marginTop: "10px",
                }}
              >
                Delivering excellence through every product and experience.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}