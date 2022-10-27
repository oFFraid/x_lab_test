import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import ClassNameInterface from '../../../types/ClassNameInterface'

interface Props<Item, As extends ElementType> extends ClassNameInterface {
    items: Item[]
    renderItem: (item: Item, i: number) => ReactNode
    as?: As
}

const List = <Item, As extends ElementType>({
    items,
    renderItem,
    as,
    ...rest
}: Props<Item, As> &
    Omit<ComponentPropsWithoutRef<As>, keyof Props<Item, As>>) => {
    const Component = as ?? 'ul'
    return <Component {...rest}>{items.map(renderItem)}</Component>
}

export default List
