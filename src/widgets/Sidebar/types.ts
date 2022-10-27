import { FC, SVGProps } from 'react'

import ClassNameInterface from '../../shared/types/ClassNameInterface'

interface MenuListInterface {
    items: MenuItemInterface[]
    onLinkClick?: () => void
}

interface MenuItemHeaderInterface {
    icon: FC<SVGProps<SVGSVGElement>>
    text: string
    onExpandChange: () => void
    expanded: boolean
}

interface onLinkClickInterface {
    onLinkClick?: () => void
}

export interface MenuItemInterface {
    icon: FC<SVGProps<SVGSVGElement>>
    text: string
    children?: MenuItemInterface[]
    to: string
}

export type SidebarProps = ClassNameInterface

export type MenuItemListProps = Required<MenuItemInterface> &
    onLinkClickInterface

export type MenuItemHeaderProps = MenuItemHeaderInterface & ClassNameInterface

export type MenuItemProps = MenuItemInterface &
    ClassNameInterface &
    onLinkClickInterface

export type MenuListProps = MenuListInterface
