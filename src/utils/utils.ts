import { Measurements } from '../models';

/**
 * 
 * @param el: HTMLElement
 * @param content: string 
 * @returns a text node to append to a H or P tag
 */
export const addTextToElement = (el: HTMLElement, content: string) => el.innerHTML += content;

/**
 * 
 * @param num: number
 * @param unit: Measurements
 * @returns a string version of the numerical unit of measure
 */
export const unitOfMeasure = (num: number, unit: Measurements) => unit === 'percent' ? `${num}%` : `${num}${unit}`;


 