import { Link, Route, Routes } from "react-router-dom";
import './styles/index.scss';
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProviders";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";



const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />}></Route>
                    <Route path={'/'} element={<MainPage />}></Route>

                </Routes>
            </Suspense>
        </div>
    )
}

export default App;