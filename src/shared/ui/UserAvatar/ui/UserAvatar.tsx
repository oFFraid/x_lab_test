import classNames from 'clsx'
import { FC, PropsWithChildren } from 'react'

import ClassNameInterface from '../../../types/ClassNameInterface'
import { ReactComponent as UserIcon } from './../../../../shared/assets/icons/profile.svg'
import css from './UserAvatar.module.scss'

interface UserAvatarInterface {
    size?: number
}

const UserAvatar: FC<
    PropsWithChildren<UserAvatarInterface & ClassNameInterface>
> = (props) => {
    const { children, className, size = 48 } = props

    return (
        <div
            className={classNames(css.userAvatar, className)}
            style={{
                width: `${size}px`,
                height: `${size}px`,
            }}
        >
            {children ? children : <UserIcon stroke={'#FFFF'} />}
        </div>
    )
}

export default UserAvatar
