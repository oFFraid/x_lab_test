import classNames from 'clsx'
import { FC } from 'react'

import { useSideBar } from '../../../app/providers/SideBarProvider'
import useBreakpoint from '../../../shared/hooks/useBreakpoint'
import { Modal } from '../../../shared/ui/Modal'
import { menuList } from '../menu.config'
import { SidebarProps } from '../types'
import MenuList from './MenuList/MenuList'
import css from './Sidebar.module.scss'

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const { isOpen, setOpen } = useSideBar()
    const isMd = useBreakpoint('md')
    if (isMd) {
        return (
            <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
                <div className={classNames(css.sidebar, className)}>
                    <div className={css.title}>Меню</div>
                    <MenuList
                        items={menuList}
                        onLinkClick={() => setOpen(false)}
                    />
                </div>
            </Modal>
        )
    }
    return (
        <div className={classNames(css.sidebar, className)}>
            <div className={css.title}>Меню</div>
            <MenuList items={menuList} />
        </div>
    )
}
