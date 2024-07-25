import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/SideBar/model/items';
import React from 'react';
import { classNames } from 'shared/lib';
import cls from './SidebarItem.module.scss';

type SidebarItemProps = {
  item: SidebarItemType;
  collapsed: boolean;
};

export const SidebarItem: React.FC<SidebarItemProps> = React.memo(
    ({ item, collapsed }: SidebarItemProps) => {
        const { t } = useTranslation();

        return (
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to={item.path}
                className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        );
    },
);
