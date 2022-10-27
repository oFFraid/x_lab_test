import classNames from 'clsx'
import { FC, PropsWithChildren } from 'react'

import css from './SearchAddressPage.module.scss'

const SearchMessage: FC<PropsWithChildren> = (props) => {
    return (
        <div className={classNames(css.messageSearch, css.subtitle)}>
            {props.children}
        </div>
    )
}

export default SearchMessage
