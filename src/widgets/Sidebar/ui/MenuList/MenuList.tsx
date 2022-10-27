import {FC} from "react";
import {MenuListInterface} from "../../types";
import css from "./MenuList.module.scss";
import MenuItem from "../MenuItem/MenuItem";
import MenuItemList from "../MenuItemList/MenuItemList";


const MenuList: FC<MenuListInterface> = props => {
    const {items = [], onLinkClick} = props
    return <div className={css.menuList}>
        {
            items.map((item, i) => {
                if (item.children?.length) {
                    return <MenuItemList
                        onLinkClick={onLinkClick}
                        key={item.text + i}
                        {...item}
                        children={item.children || []}
                    />
                }
                return <MenuItem
                    onLinkClick={onLinkClick}
                    key={item.text + i}
                    {...item}
                />
            })
        }
    </div>
}

export default MenuList

