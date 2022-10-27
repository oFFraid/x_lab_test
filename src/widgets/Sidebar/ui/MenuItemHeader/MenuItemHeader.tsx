import classNames from 'clsx'
import { FC } from 'react'

import { ReactComponent as ArrowIcon } from '../../../../shared/assets/icons/arrow.svg'
import { Button } from '../../../../shared/ui/Button/ui/Button'
import { MenuItemHeaderProps } from '../../types'
import css from './MenuItemHeader.module.scss'

const MenuItemHeader: FC<MenuItemHeaderProps> = (props) => {
    const { icon: Icon, text, onExpandChange, className, expanded } = props

    return (
        <Button
            theme={'clear'}
            onClick={onExpandChange}
            className={classNames(css.item, className)}
        >
            <div>
                <Icon width={32} height={32} fill={'#1C1C1E'} />
            </div>
            <div>{text}</div>

            <ArrowIcon
                className={classNames(css.itemButton, {
                    [css.itemButtonDown]: !expanded,
                })}
            />
        </Button>
    )
}

export default MenuItemHeader
