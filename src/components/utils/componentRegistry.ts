import ListComponent from "../List/List";
import ListItem from "../List/ListItem";

export interface ComponentObjTypes {
    class: HTMLElement;
    name: string;
}

const ComponentRegistry = [
    {
        class: ListComponent,
        name: 'list-component',
    },
    {
        class: ListItem,
        name: 'list-item-component',
    },
];

export default ComponentRegistry;