import { Footer } from "./Footer";

export function Contact() {
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
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <p
            style={{
              letterSpacing: "4px",
              color: "#94a3b8",
            }}
          >
            CONTACT LUXE
          </p>

          <h1
            style={{
              fontSize: "5rem",
              margin: "15px 0",
              lineHeight: "1",
            }}
          >
            Let's Create
            <br />
            Something Great
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#cbd5e1",
              lineHeight: "1.8",
              fontSize: "1.1rem",
            }}
          >
            Have questions, ideas, or feedback? We'd love to hear from you.
            Connect with our team and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Main Contact Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "30px",
            marginBottom: "80px",
          }}
        >
          {/* Left Info Card */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "30px",
              padding: "40px",
            }}
          >
            <h2
              style={{
                marginBottom: "30px",
              }}
            >
              Get In Touch
            </h2>

            <div style={{ marginBottom: "30px" }}>
              <h3>Email</h3>
              <p style={{ color: "#94a3b8" }}>
                support@luxe.com
              </p>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <h3>Phone</h3>
              <p style={{ color: "#94a3b8" }}>
                +91 98765 43210
              </p>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <h3>Location</h3>
              <p style={{ color: "#94a3b8" }}>
                Mumbai, Maharashtra, India
              </p>
            </div>

            <div style={{ marginTop: "50px" }}>
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000"
                alt="Office"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>

          {/* Form Card */}
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "30px",
              padding: "40px",
            }}
          >
            <h2
              style={{
                marginBottom: "30px",
              }}
            >
              Send a Message
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <input
                type="text"
                placeholder="First Name"
                style={inputStyle}
              />

              <input
                type="text"
                placeholder="Last Name"
                style={inputStyle}
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              style={{
                ...inputStyle,
                width: "100%",
                marginBottom: "20px",
              }}
            />

            <input
              type="text"
              placeholder="Subject"
              style={{
                ...inputStyle,
                width: "100%",
                marginBottom: "20px",
              }}
            />

            <textarea
              rows="7"
              placeholder="Write your message..."
              style={{
                ...inputStyle,
                width: "100%",
                resize: "none",
                marginBottom: "25px",
              }}
            />

            <button
              style={{
                width: "100%",
                padding: "18px",
                border: "none",
                borderRadius: "16px",
                background:
                  "linear-gradient(135deg,#8b5cf6,#2dd4bf)",
                color: "white",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Bottom Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
          }}
        >
          {[
            {
              title: "Fast Support",
              text: "Average response time under 24 hours.",
            },
            {
              title: "Global Reach",
              text: "Serving customers worldwide.",
            },
            {
              title: "Customer First",
              text: "Dedicated to exceptional experiences.",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "35px",
              }}
            >
              <h3>{card.title}</h3>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: "1.7",
                }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "16px",
  borderRadius: "16px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  color: "white",
  outline: "none",
  fontSize: "1rem",
};