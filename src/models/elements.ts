export interface ListElement {
    [key: string]: object | object[] | string
};

export type Measurements = 'px' | 'percent' | 'rem' | 'em' | 'vh' | 'vw';

export interface SizeProps {
    'xs': 'xs',
    'sm': 'sm',
    'md': 'md',
    'lg': 'lg',
    'xl': 'xl'
};