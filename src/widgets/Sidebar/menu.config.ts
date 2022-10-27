import { ReactComponent as CalendarIcon } from '../../shared/assets/icons/calendar.svg'
import { ReactComponent as HomeIcon } from '../../shared/assets/icons/home.svg'
import { ReactComponent as LocationIcon } from '../../shared/assets/icons/location.svg'
import { ReactComponent as OutDoorIcon } from '../../shared/assets/icons/out_door.svg'
import { ReactComponent as ProfileIcon } from '../../shared/assets/icons/profile.svg'
import { ReactComponent as SearchIcon } from '../../shared/assets/icons/search.svg'
import { ReactComponent as SettingsIcon } from '../../shared/assets/icons/settings.svg'
import { ReactComponent as TablesIcon } from '../../shared/assets/icons/tables.svg'
import { ReactComponent as TelephoneIcon } from '../../shared/assets/icons/telephone.svg'
import { ReactComponent as TvIcon } from '../../shared/assets/icons/tv.svg'
import { AppRoutes } from '../../shared/config/routeConfig'
import { MenuItemInterface } from './types'

export const menuList: MenuItemInterface[] = [
    {
        icon: HomeIcon,
        text: 'Главная',
        to: AppRoutes.MAIN,
    },
    {
        icon: SearchIcon,
        text: 'Поиск адресов',
        to: AppRoutes.ADDRESS,
    },
    {
        icon: TablesIcon,
        text: 'Таблицы',
        to: '/tables',
    },
    {
        icon: CalendarIcon,
        text: 'Календарь',
        to: '/calendar',
    },
    {
        icon: LocationIcon,
        text: 'Карты',
        to: '/maps',
    },
    {
        icon: TvIcon,
        text: 'Виджеты',
        to: '/widgets',
    },
    {
        icon: SettingsIcon,
        text: 'Настройки',
        to: '/settings',
        children: [
            {
                icon: ProfileIcon,
                text: 'Настройки профиля',
                to: '/profile',
            },
            {
                icon: TelephoneIcon,
                text: 'Управление финансами',
                to: '/finance',
            },
        ],
    },
    {
        icon: OutDoorIcon,
        text: 'Выход',
        to: '/out',
    },
]
