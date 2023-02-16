import {AppRouter} from "app/providers/router";
import React from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames({className: 'app', additional: [theme]})}>

         <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;
