class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .footer {
          background-color: #0f172a;
          color: #e5e7eb;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 3rem 1.5rem 2rem;
        }

        .brand {
          font-size: 1.25rem;
          font-weight: 600;
          color: white;
        }

        .muted {
          color: #9ca3af;
          font-size: 0.85rem;
          line-height: 1.6;
        }

        .section-title {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #9ca3af;
          margin-bottom: 0.75rem;
        }

        .links {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.85rem;
        }

        .links a {
          color: #d1d5db;
          transition: color 0.2s ease;
        }

        .links a:hover {
          color: #4ade80;
        }

        .social {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }

        .social a {
          width: 32px;
          height: 32px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .social a:hover {
          background: rgba(255,255,255,0.14);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 2rem;
        }

        .bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          margin-top: 2rem;
          padding-top: 1rem;
          text-align: center;
          font-size: 0.75rem;
          color: #9ca3af;
        }
      </style>

      <footer class="footer">
        <div class="container">

          <div class="grid">

            <!-- Brand -->
            <div>
              <div class="brand">Fresh Cut Lawn Care</div>
              <p class="muted">
                Reliable lawn care services focused on consistency, precision, and long-term property health.
              </p>

              <div class="social">
                <a href="#"><i data-feather="facebook" class="w-4 h-4"></i></a>
                <a href="#"><i data-feather="instagram" class="w-4 h-4"></i></a>
                <a href="#"><i data-feather="twitter" class="w-4 h-4"></i></a>
              </div>
            </div>

            <!-- Services -->
            <div>
              <div class="section-title">Services</div>
              <div class="links">
                <a href="#">Lawn Maintenance</a>
                <a href="#">Weed Control</a>
                <a href="#">Fertilization</a>
                <a href="#">Aeration</a>
              </div>
            </div>

            <!-- Contact -->
            <div>
              <div class="section-title">Contact</div>
              <div class="links muted">
                <span>(514) 555-1234</span>
                <span>info@freshcutlawncare.com</span>
                <span>Mon–Fri · 8am–5pm</span>
              </div>
            </div>

          </div>

          <div class="bottom">
            © ${new Date().getFullYear()} Fresh Cut Lawn Care. All rights reserved.
          </div>

        </div>
      </footer>
    `;

    if (window.feather) {
      window.feather.replace();
    }
  }
}

customElements.define("custom-footer", CustomFooter);
