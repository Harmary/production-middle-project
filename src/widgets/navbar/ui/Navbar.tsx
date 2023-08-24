import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import cls from "./Navbar.module.scss"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

type NavbarProps = {
    className?: string;
}

export function Navbar({className}: NavbarProps) {

    return <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={cls.mainLink}>About</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Main</AppLink>
        </div>
    </div>
    
}