import classNames from 'clsx'
import { FC, memo } from 'react'
import { useMatch } from 'react-router-dom'

import { AppLink } from '../../../../shared/ui/AppLink'
import { MenuItemProps } from '../../types'
import css from './MenuItem.module.css'

const MenuItem: FC<MenuItemProps> = memo((props) => {
    const { icon: Icon, text, to, className, onLinkClick = () => {} } = props
    const isActiveLink = useMatch(to)
    return (
        <AppLink
            onClick={onLinkClick}
            className={classNames(css.item, className, {
                [css.activeNavLink]: isActiveLink?.pathname,
            })}
            to={to}
        >
            <div>
                <Icon width={32} height={32} fill={'#1C1C1E'} />
            </div>
            <div>{text}</div>
        </AppLink>
    )
})

export default MenuItem
