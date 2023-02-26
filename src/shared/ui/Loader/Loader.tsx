import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

import './Loader.scss'

export const Loader: FC = () => {
    return (
        <span className={classNames({ className: 'loader' })}></span>
    )
}
