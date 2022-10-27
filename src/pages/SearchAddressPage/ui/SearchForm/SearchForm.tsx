import { FC, FormEvent, useMemo, useState } from 'react'

import { Input } from '../../../../shared/ui/Input'
import SearchButton from '../SearchButton/SearchButton'
import SearchMessage from '../SearchMessage'
import css from './SearchForm.module.scss'

interface SearchFormInterface {
    onSubmit: (search: string) => void
}

const SearchForm: FC<SearchFormInterface> = (props) => {
    const { onSubmit } = props
    const [search, setSearch] = useState('')

    const isEmpty = useMemo<boolean>(() => {
        return search.trim() === ''
    }, [search])

    const validError = useMemo<string | undefined>(() => {
        if (search.trim().length < 3) {
            return 'Минимальная длина ввода пароля 3 символа'
        }
        return undefined
    }, [search])

    const onSubmitOverride = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(search)
    }

    return (
        <>
            <form className={css.searchForm} onSubmit={onSubmitOverride}>
                <Input
                    fullWidth
                    fullHeight
                    className={css.searchField}
                    placeholder={'Введите интересующий вас адрес'}
                    value={search}
                    onChange={setSearch}
                />
                <SearchButton disabled={!!validError || isEmpty} />
            </form>
            {validError && !isEmpty ? (
                <SearchMessage>{validError}</SearchMessage>
            ) : null}
        </>
    )
}

export default SearchForm
