import { Footer } from "./components/Footer";
export default function Homepage() {
  const categories = [
    {
      title: "Sneakers",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop",
    },
    {
      title: "Watches",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=900&auto=format&fit=crop",
    },
    {
      title: "Streetwear",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=900&auto=format&fit=crop",
    },
  ];

  const products = [
    {
      name: "Air Nova",
      price: "$129",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900&auto=format&fit=crop",
    },
    {
      name: "Midnight Watch",
      price: "$249",
      image:
        "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=900&auto=format&fit=crop",
    },
    {
      name: "Urban Hoodie",
      price: "$89",
      image:
        "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=900&auto=format&fit=crop",
    },
    {
      name: "Pulse Headphones",
      price: "$149",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&auto=format&fit=crop",
    },
  ];

  const cardBase = {
    background: "rgba(15, 23, 42, 0.72)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 20px 50px rgba(0,0,0,0.28)",
    backdropFilter: "blur(18px)",
  };

  const hoverLift = (e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.35)";
  };

  const hoverDown = (e) => {
    e.currentTarget.style.transform = "translateY(0px)";
    e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.28)";
  };

  const imageHoverIn = (e) => {
    e.currentTarget.style.transform = "scale(1.06)";
  };

  const imageHoverOut = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "radial-gradient(circle at top left, rgba(139,92,246,0.16), transparent 30%), radial-gradient(circle at top right, rgba(45,212,191,0.12), transparent 28%), linear-gradient(180deg, #0b1020 0%, #0f172a 40%, #111827 100%)",
        color: "#ffffff",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }
        html, body, #root { margin: 0; padding: 0; width: 100%; min-height: 100%; }
        a { color: inherit; }
        .nav-link {
          position: relative;
          text-decoration: none;
          color: rgba(255,255,255,0.88);
          font-size: 0.98rem;
          letter-spacing: 0.2px;
          transition: 0.25s ease;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, #8b5cf6, #2dd4bf);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-link:hover {
          color: white;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
        }
        .btn {
          border: 0;
          outline: none;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 35px rgba(139,92,246,0.28);
        }
        .soft-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "18px 28px",
          background: "rgba(8, 12, 25, 0.62)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #8b5cf6, #2dd4bf)",
                boxShadow: "0 0 18px rgba(139,92,246,0.55)",
              }}
            />
            <span
              style={{
                fontSize: "1.35rem",
                fontWeight: 800,
                letterSpacing: "0.24em",
              }}
            >
              LUXE
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              padding: "10px 16px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <a className="nav-link" href="#home">
              Home
            </a>
            <a className="nav-link" href="#shop">
              Shop
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main id="home" style={{ width: "100%" }}>
        <section
          style={{
            minHeight: "100vh",
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            alignItems: "center",
            gap: "40px",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "120px 28px 70px",
          }}
        >
          <div style={{ maxWidth: "640px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 16px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                marginBottom: "22px",
                color: "rgba(255,255,255,0.82)",
                fontSize: "0.92rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "999px",
                  background: "#2dd4bf",
                  boxShadow: "0 0 12px rgba(45,212,191,0.7)",
                }}
              />
              New season collection is live
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(3.4rem, 7vw, 6.6rem)",
                lineHeight: "0.95",
                letterSpacing: "-0.05em",
                fontWeight: 800,
              }}
            >
              Minimal design.
              <br />
              Maximum presence.
            </h1>

            <p
              style={{
                marginTop: "22px",
                maxWidth: "560px",
                fontSize: "1.08rem",
                lineHeight: "1.9",
                color: "rgba(226,232,240,0.82)",
              }}
            >
              Discover a clean, premium shopping experience with curated drops,
              elevated essentials, and a modern visual style that feels polished
              from the first screen.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "center",
                marginTop: "32px",
                flexWrap: "wrap",
              }}
            >
              <button
                className="btn"
                style={{
                  padding: "15px 24px",
                  borderRadius: "999px",
                  background: "linear-gradient(135deg, #8b5cf6 0%, #2dd4bf 100%)",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "1rem",
                  boxShadow: "0 16px 35px rgba(139,92,246,0.25)",
                }}
              >
                Shop Now
              </button>

              <button
                className="btn"
                style={{
                  padding: "15px 24px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.05)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "1rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                Explore Collections
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "14px",
                marginTop: "38px",
                maxWidth: "560px",
              }}
            >
              {[
                ["200+", "Premium pieces"],
                ["24h", "Fast dispatch"],
                ["4.9/5", "Customer rating"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  style={{
                    ...cardBase,
                    borderRadius: "18px",
                    padding: "18px",
                  }}
                >
                  <div style={{ fontSize: "1.35rem", fontWeight: 800 }}>
                    {value}
                  </div>
                  <div
                    style={{
                      marginTop: "6px",
                      fontSize: "0.92rem",
                      color: "rgba(226,232,240,0.72)",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-18px -18px auto auto",
                width: "220px",
                height: "220px",
                borderRadius: "999px",
                background: "rgba(139,92,246,0.15)",
                filter: "blur(28px)",
                zIndex: 0,
              }}
            />

            <div
              style={{
                ...cardBase,
                position: "relative",
                zIndex: 1,
                borderRadius: "30px",
                padding: "18px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.1fr 0.9fr",
                  gap: "16px",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&auto=format&fit=crop"
                  alt="hero fashion"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "520px",
                    objectFit: "cover",
                    borderRadius: "24px",
                  }}
                />

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: "1fr 1fr",
                    gap: "16px",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1000&auto=format&fit=crop"
                    alt="collection 1"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "252px",
                      objectFit: "cover",
                      borderRadius: "24px",
                    }}
                  />
                  <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&auto=format&fit=crop"
                    alt="collection 2"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "252px",
                      objectFit: "cover",
                      borderRadius: "24px",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "18px",
                  marginTop: "16px",
                  padding: "14px 4px 2px",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div style={{ color: "rgba(226,232,240,0.68)", fontSize: "0.9rem" }}>
                    Featured drop
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                    Contemporary essentials
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div style={{ color: "rgba(226,232,240,0.68)", fontSize: "0.9rem" }}>
                    Starting from
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                    ₹1,999
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="shop"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "10px 28px 90px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", alignItems: "end", flexWrap: "wrap" }}>
            <div>
              <p
                style={{
                  margin: 0,
                  color: "rgba(226,232,240,0.7)",
                  letterSpacing: "0.24em",
                  fontSize: "0.78rem",
                }}
              >
                CURATED SELECTIONS
              </p>
              <h2 style={{ margin: "10px 0 0", fontSize: "clamp(2rem, 3vw, 3rem)" }}>
                Featured categories
              </h2>
            </div>
            <p style={{ maxWidth: "520px", color: "rgba(226,232,240,0.72)", lineHeight: 1.8, margin: 0 }}>
              A calm layout, generous spacing, and image-led cards make the page
              feel premium and easy to scan.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "18px",
              marginTop: "26px",
            }}
          >
            {categories.map((item) => (
              <div
                key={item.title}
                className="soft-card"
                onMouseEnter={hoverLift}
                onMouseLeave={hoverDown}
                style={{
                  ...cardBase,
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <div style={{ position: "relative", height: "320px" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    onMouseEnter={imageHoverIn}
                    onMouseLeave={imageHoverOut}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.35s ease",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(8,12,25,0.05) 0%, rgba(8,12,25,0.78) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: "18px",
                      right: "18px",
                      bottom: "18px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "end",
                      gap: "12px",
                    }}
                  >
                    <div>
                      <p style={{ margin: 0, color: "rgba(255,255,255,0.72)", fontSize: "0.88rem" }}>
                        Category
                      </p>
                      <h3 style={{ margin: "6px 0 0", fontSize: "1.8rem" }}>
                        {item.title}
                      </h3>
                    </div>
                    <div
                      style={{
                        padding: "10px 14px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        fontSize: "0.9rem",
                      }}
                    >
                      View
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 28px 110px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", alignItems: "end", flexWrap: "wrap" }}>
            <div>
              <p
                style={{
                  margin: 0,
                  color: "rgba(226,232,240,0.7)",
                  letterSpacing: "0.24em",
                  fontSize: "0.78rem",
                }}
              >
                TRENDING NOW
              </p>
              <h2 style={{ margin: "10px 0 0", fontSize: "clamp(2rem, 3vw, 3rem)" }}>
                Selected products
              </h2>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "18px",
              marginTop: "26px",
            }}
          >
            {products.map((item) => (
              <div
                key={item.name}
                className="soft-card"
                onMouseEnter={hoverLift}
                onMouseLeave={hoverDown}
                style={{
                  ...cardBase,
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <div style={{ height: "280px", overflow: "hidden" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    onMouseEnter={imageHoverIn}
                    onMouseLeave={imageHoverOut}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.35s ease",
                    }}
                  />
                </div>

                <div style={{ padding: "18px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      alignItems: "start",
                    }}
                  >
                    <div>
                      <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{item.name}</h3>
                      <p
                        style={{
                          margin: "8px 0 0",
                          color: "rgba(226,232,240,0.72)",
                          fontSize: "0.94rem",
                        }}
                      >
                        Clean design, premium finish
                      </p>
                    </div>
                    <div style={{ fontWeight: 800 }}>{item.price}</div>
                  </div>

                  <button
                    className="btn"
                    style={{
                      marginTop: "16px",
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.06)",
                      color: "white",
                      fontWeight: 700,
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="about"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 28px 100px",
          }}
        >
          <div
            style={{
              ...cardBase,
              borderRadius: "28px",
              padding: "28px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "22px",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  color: "rgba(226,232,240,0.68)",
                  letterSpacing: "0.22em",
                  fontSize: "0.78rem",
                }}
              >
                WHY US
              </p>
              <h2 style={{ margin: "12px 0 0", fontSize: "2.3rem" }}>
                Clean, calm, premium.
              </h2>
              <p
                style={{
                  marginTop: "14px",
                  color: "rgba(226,232,240,0.75)",
                  lineHeight: 1.85,
                  maxWidth: "540px",
                }}
              >
                Designed for a polished assignment look: no clutter, balanced
                spacing, clear hierarchy, and image-first sections that feel
                modern and aesthetic.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "14px",
              }}
            >
              {[
                "Elegant visuals",
                "Hover interactions",
                "Soft glass effects",
                "Responsive layout",
              ].map((x) => (
                <div
                  key={x}
                  style={{
                    padding: "18px",
                    borderRadius: "18px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.9)",
                    fontWeight: 600,
                  }}
                >
                  {x}
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer
          id="contact"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "26px 28px 34px",
            color: "rgba(226,232,240,0.68)",
          }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <div style={{ fontWeight: 800, color: "white", letterSpacing: "0.18em" }}>
                LUXE
              </div>
              <div style={{ marginTop: "6px" }}>Aesthetic ecommerce homepage</div>
            </div>

            <div>Home · Shop · About · Contact</div>
          </div>
        </footer>
      </main>
    </div>
  );
}