import { AnchorElementProps } from "../../../models";
import { addTextToElement } from "../../../utils";

export class AnchorElement extends HTMLElement {

  text: string;
  url: string;
  target: string | undefined;
  noreferrer?: boolean | undefined;
  noopener?: boolean | undefined;
  
  constructor({text, url, target, noreferrer, noopener}: AnchorElementProps) {
    super();
    this.text = text,
    this.url = url,
    this.target = target,
    this.noreferrer = noreferrer,
    this.noopener = noopener
  };

  connectedCallback() {
    this.render();
  }

  optionalLinkAttributes() {
    if (this.target) {
      if(this.target === 'blank' && !this.noreferrer) {
        console.log('If you are using target blank, we recommend adding noreferrer: true to the data object for security purposes')
      }
      this.setAttribute('target', `_${this.target}`)
    }

    if(this.noreferrer) {
      this.setAttribute('rel', 'noreferrer');
    }

    if(this.noopener) {
      this.setAttribute('rel', 'noopener');
    }
  }

  addText() {
    addTextToElement(this, this.text);
  }

  render() {
    const link = document.createElement('anchor-element');
    link.setAttribute('role', 'link');
    link.setAttribute('tabindex', '0');
    link.setAttribute('href', this.url);
    this.optionalLinkAttributes();
    this.addText();

    return link;
  }
};

customElements.define('anchor-element', AnchorElement);

