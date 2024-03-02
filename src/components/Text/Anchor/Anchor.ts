import { addTextToElement } from "../../../utils";

export class AnchorElement extends HTMLElement {
  text: string;
  url: string;
  target?: 'blank' | 'self' | 'parent' | 'top';
  noreferrer?: boolean;
  noopener?: boolean;
  
  constructor( 
    text: string,
    url: string,
    target?: 'blank' | 'self' | 'parent' | 'top',
    noreferrer?: boolean,
    noopener?: boolean
  ) {
    super();
    this.text = text || '',
    this.url = url || '/',
    this.target = target,
    this.noreferrer = noreferrer || false,
    this.noopener = noopener || false
  };

  connectedCallback() {
    this.render();
  }

  requiredAttributes() {
    this.setAttribute('role', 'link');
    this.setAttribute('tabindex', '0');
    this.setAttribute('href', this.url);
  }

  optionalLinkAttributes() {
    if (this.target !== undefined) {
      this.setAttribute('target', `_${this.target}`)
    }
      this.setAttribute('rel', 'noreferrer');
      this.setAttribute('rel', 'noopener');
  }

  addText() {
    addTextToElement(this, this.text);
  }

  render() {
    const link = document.createElement('anchor-element');
    this.addText();
    this.requiredAttributes();
    this.optionalLinkAttributes();


    return link;
  }
};

customElements.define('anchor-element', AnchorElement);

