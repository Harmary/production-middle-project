import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

type NavbarProps = {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                /
            </div>
        </div>
    );
}
