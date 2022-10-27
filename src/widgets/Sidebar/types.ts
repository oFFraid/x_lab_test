import {FC, SVGProps} from "react";

export interface MenuItemInterface {
    icon: FC<SVGProps<SVGSVGElement>>;
    text: string;
    children?: MenuItemInterface[];
    to: string;
}

export interface MenuListInterface {
    items: MenuItemInterface[];
    onLinkClick?: () => void;
}

export interface MenuItemHeaderInterface {
    icon: FC<SVGProps<SVGSVGElement>>;
    text: string;
    onExpandChange: () => void;
    expanded: boolean;
}


export interface SidebarProps {
    className?: string;
}
