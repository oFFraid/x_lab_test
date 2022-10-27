import {Link, LinkProps} from 'react-router-dom';
import {FC} from 'react';
import css from './AppLink.module.scss';
import classNames from "clsx";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.SECONDARY,
        ...rest
    } = props;

    return (
        <Link
            to={to}
            className={classNames(css.applink, {}, [className, css[theme]])}
            {...rest}
        >
            {children}
        </Link>
    );
};
