class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        * {
          box-sizing: border-box;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
        }

        nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }

        nav.scrolled {
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 600;
          color: #166534;
          text-decoration: none;
        }

        .links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .link {
          position: relative;
          text-decoration: none;
          color: #374151;
          font-weight: 500;
        }

        .link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: linear-gradient(to right, #22c55e, #16a34a);
          transition: width 0.3s ease;
        }

        .link:hover::after {
          width: 100%;
        }

        .cta {
          padding: 0.6rem 1.5rem;
          border-radius: 999px;
          background: linear-gradient(to right, #22c55e, #16a34a);
          color: white;
          text-decoration: none;
          font-weight: 600;
          box-shadow: 0 8px 20px rgba(34,197,94,0.35);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(34,197,94,0.45);
        }

        .menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .mobile {
          display: none;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1rem;
          background: white;
        }

        .mobile.open {
          display: flex;
        }

        @media (max-width: 768px) {
          .links {
            display: none;
          }

          .menu-btn {
            display: block;
          }
        }
      </style>

      <nav>
        <div class="container">
          <a href="/" class="logo">🌿 Fresh Cut</a>

          <div class="links">
            <a class="link" href="services.html">Services</a>
            <a class="link" href="about.html">About</a>
            <a class="link" href="gallery.html">Gallery</a>
            <a class="cta" href="estimate.html">Free Estimate</a>
          </div>

          <button class="menu-btn">☰</button>
        </div>

        <div class="mobile">
          <a class="link" href="services.html">Services</a>
          <a class="link" href="about.html">About</a>
          <a class="link" href="learn.html">Learn</a>
          <a class="cta" href="estimate.html">Free Estimate</a>
        </div>
      </nav>
    `;

    const nav = this.shadowRoot.querySelector("nav");
    const btn = this.shadowRoot.querySelector(".menu-btn");
    const mobile = this.shadowRoot.querySelector(".mobile");

    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 30);
    });

    btn.addEventListener("click", () => {
      mobile.classList.toggle("open");
      btn.textContent = mobile.classList.contains("open") ? "✕" : "☰";
    });
  }
}

customElements.define("custom-navbar", CustomNavbar);
