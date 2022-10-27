import classNames from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

import ClassNameInterface from '../../../types/ClassNameInterface'
import css from './Button.module.scss'

export type ButtonTheme = 'clear' | 'outline' | 'filled' | 'shadow'

export type ButtonSize = 'size_m' | 'size_l' | 'size_xl'

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        ClassNameInterface {
    theme?: ButtonTheme
    isSquare?: boolean
    isRound?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        isSquare,
        isRound,
        size,
        disabled,
        ...rest
    } = props

    const mods: Record<string, boolean | undefined> = {
        [css[theme || '']]: true,
        [css.square]: isSquare,
        [css.round]: isRound,
        [css[size || '']]: true,
        [css.disabled]: disabled,
    }

    return (
        <button
            className={classNames(css.button, mods, [className])}
            {...rest}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
