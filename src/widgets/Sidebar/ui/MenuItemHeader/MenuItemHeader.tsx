import {FC} from "react";
import {MenuItemHeaderInterface} from "../../types";
import ClassNameInterface from "../../../../shared/types/ClassNameInterface";
import {Button} from "../../../../shared/ui/Button/ui/Button";
import classNames from "clsx";
import css from "./MenuItemHeader.module.scss";
import {ReactComponent as ArrowIcon} from "../../../../shared/assets/icons/arrow.svg";

const MenuItemHeader: FC<MenuItemHeaderInterface & ClassNameInterface> = props => {
    const {
        icon: Icon, text, onExpandChange, className, expanded
    } = props

    return <Button
        theme={'clear'}
        onClick={onExpandChange}
        className={classNames(css.item, className)}
    >
        <div>
            <Icon
                width={32}
                height={32}
                fill={'#1C1C1E'}
            />
        </div>
        <div>
            {text}
        </div>

        <ArrowIcon
            className={classNames(css.itemButton, {
                [css.itemButtonDown]: !expanded
            })}
        />

    </Button>
}

export default MenuItemHeader
