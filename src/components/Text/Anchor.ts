import { addTextToElement } from "../../utils";

interface AnchorProps {
    text: string;
    url: string;
  }

/**
 * class that creates an anchor tag
 */
class AnchorElement extends HTMLElement {
    static observedAttributes = ["url", "text"];
    text: string;
    url: string;s

    constructor() {
        super();
        this.text = '';
        this.url = '';
    }
   

    connectedCallback() {
        console.log('AnchorElement has mounted to the page', this as Node);
        const link = document.createElement('a');
        link.setAttribute('href', this.url);
        addTextToElement(link, this.text);
    }
  }

customElements.define('anchor-element', AnchorElement)

/**
 * 
 * @param data 
 * @returns a paragraph element and also functionality for paragraph elements with links
 */
export const createLinkElement = (data: { text: string, url: string}) => {
    const link = document.createElement('anchor-element');
    link.setAttribute('href', data.url);
    addTextToElement(link, data.text);

    return link;
};

