import { Link, Route, Routes } from "react-router-dom";
import './styles/index.scss';
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProviders";
import { AppRouter } from "./providers/router";



const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <AppRouter/>
        </div>
    )
}

export default App;