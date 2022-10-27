import classNames from 'clsx'
import { FC } from 'react'

import ClassNameInterface from '../../../types/ClassNameInterface'
import css from './PageHeader.module.scss'

interface PageHeaderProps {
    title: string
    subtitle?: string
}

const PageHeader: FC<PageHeaderProps & ClassNameInterface> = (props) => {
    const { title, subtitle, className } = props
    return (
        <div className={classNames(css.pageHeader, className)}>
            <div className={css.title}>{title}</div>
            {subtitle ? <div className={css.subtitle}>{subtitle}</div> : null}
        </div>
    )
}

export default PageHeader
