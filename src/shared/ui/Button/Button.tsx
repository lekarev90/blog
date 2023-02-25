import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Button.module.scss'

export enum ButtonVariants {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariants

}

export const Button: FC<ButtonProps> = ({ className, children, variant = ButtonVariants.CLEAR, ...props }) => {
    return (
        <button className={classNames({ className: styles.container, mods: { [styles[variant]]: variant }, additional: [className] })} {...props}>
            {children}
        </button>
    )
}
