import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
} from 'react';
import css from './Input.module.scss';
import classNames from "clsx";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'>;

export interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    fullWidth?: boolean;
    fullHeight?: boolean;
}

export const Input = memo((props: InputProps) => {
    Input.displayName = 'Input';

    const {className, value, fullHeight = false, fullWidth = false, onChange, autoFocus, ...otherProps} =
        props;

    const ref = useRef<HTMLInputElement>(null);

    const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div
            className={classNames(css.inputWrapper, {}, [className])}
        >

            <input
                ref={ref}
                className={classNames(css.input, {
                    [css.fullWidth]: fullWidth,
                    [css.fullHeight]: fullHeight
                })}
                value={value}
                onChange={onChangeEvent}
                {...otherProps}
            />
        </div>
    );
});
