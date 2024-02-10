import { HeaderElement } from "../../../models";
import { addTextToElement } from "../../../utils";

//todo: define custom elements that render to appropriate H tags
/**
 * class that creates a H1 tag
 */
class Header1 extends HTMLElement {
    props: HeaderElement;

    constructor(props: HeaderElement) {
        super();
        this.props = props;

        console.log('Header 1 --->')
    }

    connectedCallback() {
        this.render(this.props);
    }

    render(props: HeaderElement) {
        const h1Tag = document.createElement('header1-element');
        h1Tag.setAttribute('role', 'header');
        h1Tag.setAttribute('ariaLevel', '1');

        addTextToElement(h1Tag, props.data);
    }
};

/**
 * class that creates a H2 tag
 */
class Header2 extends HTMLElement {
    props: HeaderElement;

    constructor(props: HeaderElement) {
        super();
        this.props = props;

        console.log('Header 2 --->')
    }

    connectedCallback() {
        this.render(this.props);
    }

    render(props: HeaderElement) {
        const h2Tag = document.createElement('header2-element');
        h2Tag.setAttribute('role', 'header');
        h2Tag.setAttribute('ariaLevel', '2');

        addTextToElement(h2Tag, props.data);
    }
};

/**
 * class that creates a H3 tag
 */
class Header3 extends HTMLElement {
    props: HeaderElement;

    constructor(props: HeaderElement) {
        super();
        this.props = props;

        console.log('Header 3 --->')
    }

    connectedCallback() {
        this.render(this.props);
    }

    render(props: HeaderElement) {
        const h3Tag = document.createElement('header3-element');
        h3Tag.setAttribute('role', 'header');
        h3Tag.setAttribute('ariaLevel', '3');

        addTextToElement(h3Tag, props.data);
    }
};

/**
 * class that creates a H4 tag
 */
class Header4 extends HTMLElement {
    props: HeaderElement;

    constructor(props: HeaderElement) {
        super();
        this.props = props;

        console.log('Header 4 --->')
    }

    connectedCallback() {
        this.render(this.props);
    }

    render(props: HeaderElement) {
        const h4Tag = document.createElement('header4-element');
        h4Tag.setAttribute('role', 'header');
        h4Tag.setAttribute('ariaLevel', '4');

        addTextToElement(h4Tag, props.data);
    }
};

/**
 * class that creates a H5 tag
 */
class Header5 extends HTMLElement {
    props: HeaderElement;

    constructor(props: HeaderElement) {
        super();
        this.props = props;

        console.log('Header 5 --->')
    }

    connectedCallback() {
        this.render(this.props);
    }

    render(props: HeaderElement) {
        const h5Tag = document.createElement('header5-element');
        h5Tag.setAttribute('role', 'header');
        h5Tag.setAttribute('ariaLevel', '5');

        addTextToElement(h5Tag, props.data);
    }
};

/**
 * class that creates a H6 tag
 */
class Header6 extends HTMLElement {
    props: HeaderElement;

    constructor(props: HeaderElement) {
        super();
        this.props = props;

        console.log('Header 6 --->')
    }

    connectedCallback() {
        this.render(this.props);
    }

    render(props: HeaderElement) {
        const h6Tag = document.createElement('header6-element');
        h6Tag.setAttribute('role', 'header');
        h6Tag.setAttribute('ariaLevel', '6');

        addTextToElement(h6Tag, props.data);
    }
};

customElements.define('header1-element', Header1);
customElements.define('header2-element', Header2);
customElements.define('header3-element', Header3);
customElements.define('header4-element', Header4);
customElements.define('header5-element', Header5);
customElements.define('header6-element', Header6);

export default {
    Header1,
    Header2,
    Header3,
    Header4,
    Header5,
    Header6
};




  