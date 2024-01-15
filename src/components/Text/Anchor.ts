import { AnchorElement } from "../../models";
import { addTextToElement } from "../../utils";

/**
 * 
 * @param {string} text 
 * @param {string} url
 * @param {string} target
 * @param {boolean} noreferrer
 * @param {boolean} noopener 
 * @returns  an anchor element with optional target, no referrer and noopener props
 */
export const createAnchorElement = ({
  text,
  url,
  target,
  noreferrer,
  noopener
}: AnchorElement) => {
    const link = document.createElement('a');
    //base settings
    link.setAttribute('href', url);
    addTextToElement(link, text);

    //optionalSettings
    if (target) {
      if(target === 'blank' && !noreferrer) {
        console.log('If you are using target blank, we recommend adding noreferrer: true to the data object for security purposes')
      }
      link.setAttribute('target', `_${target}`)
    }

    if(noreferrer) {
      link.setAttribute('rel', 'noreferrer');
    }

    if(noopener) {
      link.setAttribute('rel', 'noopener');
    }

    return link;
};

