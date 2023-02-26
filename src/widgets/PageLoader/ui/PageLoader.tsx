import { type FC } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'

import styles from './PageLoader.module.scss'

export const PageLoader: FC = () => {
    return (
        <div className={styles.container}>
            <Loader />
        </div>
    )
}
