class FooterBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
        background: #2d3436;
        color: white;
        padding: 32px 0;
        margin-top: auto;
      }

      :host > div {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .footer-bottom {
        padding-top: 24px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        gap: 16px;
      }

    .footer-copyright {
        font-size: 13px;
        color: #b2bec3;
    }

    .footer-links {
        display: flex;
        gap: 16px;
    }

    .footer-links a {
        color: #b2bec3;
        text-decoration: none;
        font-size: 13px;
        transition: color 0.3s ease;
    }

    .footer-links a:hover {
        color: #74b9ff;
    }
      
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `      
        <div>
            <div class="footer-bottom">
                <div class="footer-copyright">
                    © 2025 My Notes App. Made by Ahmad Mishbah Khumainy
                </div>
                <div class="footer-links">
                    <a href="#" id="privacyLink">Privacy Policy</a>
                    <a href="#" id="termsLink">Terms of Service</a>
                    <a href="#" id="contactLink">Contact</a>
                </div>
            </div>
        </div>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
