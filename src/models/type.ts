type TargetTypes = 'blank' | 'self' | 'parent' | 'top';

export type AnchorElementProps = {
    text: string;
    url: string;
    target?: TargetTypes;
    noreferrer?: boolean;
    noopener?: boolean;
};
