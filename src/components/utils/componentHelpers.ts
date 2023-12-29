import ComponentRegistry, {ComponentObjTypes} from "./componentRegistry"
export const appendComponent = (el: HTMLElement, componentObj: object) => {
    console.log('hello')
}

/**
 * 
 * @returns each element in the ComponentRegistry defined
 */
export const registerComponents = () => ComponentRegistry.forEach(component => {
    const el = component.class;
    return customElements.define(`${component.name}`, el)
});