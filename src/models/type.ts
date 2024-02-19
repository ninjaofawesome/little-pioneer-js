type TargetTypes = 'blank' | 'self' | 'parent' | 'top';

export interface AnchorElement {
    text: string;
    url: string;
    target?: TargetTypes;
    noreferrer?: boolean;
    noopener?: boolean;
};


export interface HeaderElement {
    data: string;
    el: string;
};

// if multiple types may be necessary
export type TextElement = AnchorElement | HeaderElement;