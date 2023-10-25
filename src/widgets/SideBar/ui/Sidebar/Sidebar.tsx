import { classNames } from 'shared/lib/classNames';
import cls from './Sidebar.module.scss'
import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';

type SidebarProps = {
    className?: string;
}


export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(true);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
        <Button onClick={onToggle}>Toggle</Button>
        <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher className={cls.lang} />
        </div>
    </div>;
}