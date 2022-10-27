import {FC} from 'react';
import css from './Sidebar.module.scss';
import classNames from 'clsx';
import {menuList} from "../menu.config";
import {SidebarProps} from "../types";
import {useSideBar} from "../../../app/providers/SideBarProvider";
import useBreakpoint from "../../../shared/hooks/useBreakpoint";
import {Modal} from "../../../shared/ui/Modal";
import MenuList from "./MenuList/MenuList";

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const {isOpen, setOpen} = useSideBar();
    const isMd = useBreakpoint('md')
    if (isMd) {
        return <Modal
            isOpen={isOpen}
            onClose={() => setOpen(false)}
        >
            <div
                className={classNames(css.sidebar, className)}
            >
                <div className={css.title}>Меню</div>
                <MenuList
                    items={menuList}
                    onLinkClick={() => setOpen(false)}
                />
            </div>
        </Modal>
    }
    return (
        <div
            className={classNames(css.sidebar, className)}
        >
            <div className={css.title}>Меню</div>
            <MenuList
                items={menuList}
            />
        </div>
    );
};
