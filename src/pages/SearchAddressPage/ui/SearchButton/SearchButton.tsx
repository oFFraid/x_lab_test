import { FC } from 'react'

import { ReactComponent as SearchIcon } from '../../../../shared/assets/icons/search.svg'
import useBreakpoint from '../../../../shared/hooks/useBreakpoint'
import { Button, ButtonProps } from '../../../../shared/ui/Button/ui/Button'
import css from './SearchButton.module.scss'

const SearchButton: FC<ButtonProps> = (props) => {
    const isSm = useBreakpoint('sm')
    const size = isSm ? 20 : 32
    return (
        <Button className={css.searchButton} theme="filled" {...props}>
            <SearchIcon height={size} width={size} fill={'#FFFF'} />
            Поиск
        </Button>
    )
}

export default SearchButton
