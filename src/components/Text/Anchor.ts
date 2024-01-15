import { AnchorElement } from "../../models";
import { addTextToElement } from "../../utils";

export interface LinkProps {
  [key: string]: any;
};

/**
 * 
 * @param data 
 * @returns an anchor element with attributes if needed
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

