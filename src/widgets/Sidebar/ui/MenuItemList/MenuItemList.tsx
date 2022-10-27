import { FC, useState } from 'react'

import { MenuItemListProps } from '../../types'
import MenuItem from '../MenuItem/MenuItem'
import MenuItemHeader from '../MenuItemHeader/MenuItemHeader'
import css from './MenuItemList.module.scss'

const resolveLinkPath = (childTo: string, parentTo: string) =>
    `${parentTo}${childTo}`

const MenuItemList: FC<MenuItemListProps> = (props) => {
    const {
        to: headerToPath,
        text,
        icon: Icon,
        children,
        onLinkClick = () => {},
    } = props
    const [expanded, setExpand] = useState<boolean>(
        window.location.pathname.includes(headerToPath)
    )
    const onExpandChange = () => {
        setExpand((expanded) => !expanded)
    }

    return (
        <div className={css.itemNestedWrapper}>
            <MenuItemHeader
                onExpandChange={onExpandChange}
                expanded={expanded}
                text={text}
                icon={Icon}
            />

            {expanded &&
                children.map((item, index) => {
                    const key = `${item.text}-${index}`

                    return (
                        <MenuItem
                            onLinkClick={onLinkClick}
                            icon={item.icon}
                            text={item.text}
                            key={key}
                            className={css.itemNested}
                            to={resolveLinkPath(item.to, headerToPath)}
                        />
                    )
                })}
        </div>
    )
}

export default MenuItemList
