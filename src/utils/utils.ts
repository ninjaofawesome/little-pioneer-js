/**
 * 
 * @param el 
 * @param content 
 * @returns a text node to append to a H or P tag
 */
export const addTextToElement = (el: HTMLElement, content: string) => el.innerHTML += content;

 