type TargetTypes = 'blank' | 'self' | 'parent' | 'top';

export interface AnchorElement {
    text: string;
    url: string;
    target?: TargetTypes;
    noreferrer?: boolean;
    noopener?: boolean;
};

export interface ParagraphElement {
    data: string | AnchorElement;
};

export interface HeaderElement {
    data: string;
    el: string;
};

export type TextElement = AnchorElement | ParagraphElement | HeaderElement;