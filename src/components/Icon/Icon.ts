import { iconPaths } from './iconPaths';

type IconSizeProps = 'sm' | 'md';
type PathProps = 'menu' | 'email' | 'google' | 'fb' | 'ig';

export const IconComponent = (path: PathProps, size: IconSizeProps) => {
    console.log('iconnnn---->')

    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    const iconSizeNum = size === 'sm' ? 24 : 36;
    const viewBoxSize = `0 0 ${iconSizeNum} ${iconSizeNum}`;
    const iconPath = (path: PathProps) => iconPaths[path];

    icon.setAttribute('viewbox', viewBoxSize);
    icon.setAttribute('role', 'graphics-symbol');
    icon.setAttribute('height', `${iconSizeNum}`);
    icon.setAttribute('width', `${iconSizeNum}`);

    
    pathEl.setAttribute('d', iconPath(path));
    pathEl.setAttribute('fill', '#000000');

    icon.appendChild(pathEl);
    return icon;
}