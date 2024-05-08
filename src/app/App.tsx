import './styles/index.scss';
import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProviders';
import { Sidebar } from 'widgets/SideBar';
import { Modal } from 'shared/ui/Modal';
import { Navbar } from 'widgets/NavBar';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                {/* <Modal isOpen={isOpen} onClosed={() => { setIsOpen(false); }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, ratione corporis itaque deleniti beatae soluta explicabo in nihil. Nobis culpa officiis obcaecati fugit modi alias dolores harum reprehenderit praesentium vitae?
                </Modal> */}
                <div className="content-page">
                    {/* <button type="button" onClick={() => setIsOpen(true)}>toggle</button> */}
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
