import {FC} from "react";
import css from './PageHeader.module.scss'
import ClassNameInterface from "../../../types/ClassNameInterface";
import classNames from "clsx";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

const PageHeader: FC<PageHeaderProps & ClassNameInterface> = props => {
    const {title, subtitle, className} = props
    return <div className={classNames(css.pageHeader, className)}>
        <div className={css.title}>{title}</div>
        {
            subtitle ? <div className={css.subtitle}>{subtitle}</div> : null
        }
    </div>
}

export default PageHeader
