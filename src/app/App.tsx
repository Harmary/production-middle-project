import './styles/index.scss';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProviders';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/SideBar';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
