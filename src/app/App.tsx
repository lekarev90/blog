import { AppRouter } from 'app/providers/router'
import React, { type FC, Suspense } from 'react'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App: FC = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames({ className: 'app', additional: [theme] })}>
            <Suspense fallback="">
                <Navbar/>
                <div className="main-container">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
