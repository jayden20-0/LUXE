export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
        backdropFilter: "blur(20px)",
        padding: "60px 40px 30px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Brand */}
          <div>
            <h2
              style={{
                marginBottom: "15px",
                fontSize: "2rem",
                background:
                  "linear-gradient(135deg,#8b5cf6,#2dd4bf)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              LUXE
            </h2>

            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.8",
                maxWidth: "350px",
              }}
            >
              Elevating modern lifestyles through premium
              products, timeless aesthetics, and exceptional
              shopping experiences.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3>Shop</h3>

            <p style={footerLink}>New Arrivals</p>
            <p style={footerLink}>Trending</p>
            <p style={footerLink}>Collections</p>
            <p style={footerLink}>Best Sellers</p>
          </div>

          {/* Company */}
          <div>
            <h3>Company</h3>

            <p style={footerLink}>About Us</p>
            <p style={footerLink}>Contact</p>
            <p style={footerLink}>Careers</p>
            <p style={footerLink}>Blog</p>
          </div>

          {/* Support */}
          <div>
            <h3>Support</h3>

            <p style={footerLink}>Help Center</p>
            <p style={footerLink}>Shipping</p>
            <p style={footerLink}>Returns</p>
            <p style={footerLink}>Privacy Policy</p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <p
            style={{
              color: "#94a3b8",
              margin: 0,
            }}
          >
            © 2026 LUXE. All Rights Reserved.
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              color: "#94a3b8",
            }}
          >
            <span>Instagram</span>
            <span>Twitter</span>
            <span>Facebook</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLink = {
  color: "#94a3b8",
  cursor: "pointer",
  marginBottom: "12px",
};