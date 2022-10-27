import css from './UserAvatar.module.scss'
import classNames from "clsx";
import ClassNameInterface from "../../../types/ClassNameInterface";
import {FC, PropsWithChildren, ReactNode} from "react";
import {ReactComponent as UserIcon} from "./../../../../shared/assets/icons/profile.svg";

interface UserAvatarInterface {
    size?: number
}

const UserAvatar: FC<PropsWithChildren<UserAvatarInterface & ClassNameInterface>> = props => {
    const {children, className, size = 48} = props

    return <div
        className={classNames(css.userAvatar, className)}
        style={{
            width: `${size}px`,
            height: `${size}px`
        }}
    >
        {children ? children : <UserIcon
            stroke={'#FFFF'}
        />}
    </div>
}

export default UserAvatar;
