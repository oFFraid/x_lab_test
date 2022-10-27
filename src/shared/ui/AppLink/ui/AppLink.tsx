import classNames from 'clsx'
import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import css from './AppLink.module.scss'

export enum AppLinkTheme {
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.SECONDARY,
        ...rest
    } = props

    return (
        <Link
            to={to}
            className={classNames(css.appLink, {}, [className, css[theme]])}
            {...rest}
        >
            {children}
        </Link>
    )
}
