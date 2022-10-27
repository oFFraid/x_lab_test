import classNames from 'clsx'
import css from './Navbar.module.scss'
import { ReactComponent as LogoIcon } from './../../../shared/assets/icons/logo.svg'
import UserAvatar from '../../../shared/ui/UserAvatar/ui/UserAvatar'
import { AppLink } from '../../../shared/ui/AppLink'
import { AppRoutes } from '../../../shared/config/routeConfig'
import useBreakpoint from '../../../shared/hooks/useBreakpoint'
import { ReactComponent as BurgerIcon } from './../../../shared/assets/icons/menu_burger.svg'
import { Button } from '../../../shared/ui/Button/ui/Button'
import { useSideBar } from '../../../app/providers/SideBarProvider'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { toggle } = useSideBar()
    const isMd = useBreakpoint('md')
    const isSm = useBreakpoint('sm')
    return (
        <div className={classNames(css.navbar, {}, [className])}>
            {isMd ? (
                <Button theme="clear">
                    <BurgerIcon
                        onClick={toggle}
                        width={32}
                        height={32}
                        fill={'white'}
                    />
                </Button>
            ) : null}
            <AppLink to={AppRoutes.MAIN} className={css.logoWrapper}>
                {' '}
                {!isSm ? (
                    <LogoIcon
                        width={!isMd ? 48 : 32}
                        height={!isMd ? 48 : 32}
                    />
                ) : null}
                <div>Wrench CRM</div>
            </AppLink>

            <div className={css.userActions}>
                <AppLink to={AppRoutes.MAIN}>
                    {isMd ? <UserAvatar size={40} /> : <UserAvatar />}
                </AppLink>
                {!isMd ? <div>Имя Фамилия</div> : null}
            </div>
        </div>
    )
}
