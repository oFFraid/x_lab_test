import { FC } from 'react'

import { MenuListProps } from '../../types'
import MenuItem from '../MenuItem/MenuItem'
import MenuItemList from '../MenuItemList/MenuItemList'
import css from './MenuList.module.scss'

const MenuList: FC<MenuListProps> = (props) => {
    const { items = [], onLinkClick } = props
    return (
        <div className={css.menuList}>
            {items.map((item, i) => {
                if (item.children?.length) {
                    return (
                        <MenuItemList
                            onLinkClick={onLinkClick}
                            key={item.text + i}
                            {...item}
                            children={item.children || []}
                        />
                    )
                }
                return (
                    <MenuItem
                        onLinkClick={onLinkClick}
                        key={item.text + i}
                        {...item}
                    />
                )
            })}
        </div>
    )
}

export default MenuList
