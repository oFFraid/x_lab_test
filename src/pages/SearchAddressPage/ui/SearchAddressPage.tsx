import { useMutation } from '@tanstack/react-query'
import { FC, useState } from 'react'

import { apiSearch } from '../../../api/api'
import { SuggestionInterface } from '../../../api/api.types'
import AddressList from '../../../shared/ui/AddressList/ui/AddressList'
import { Loader } from '../../../shared/ui/Loader'
import PageHeader from '../../../shared/ui/PageHeader/ui/PageHeader'
import css from './SearchAddressPage.module.scss'
import SearchForm from './SearchForm/SearchForm'
import SearchMessage from './SearchMessage'

const SearchAddressPage: FC = () => {
    const mutation = useMutation((search: string) => {
        return apiSearch(search)
    })

    const [suggestions, setSuggestions] = useState<SuggestionInterface[]>([])
    const onSubmit = async (search: string) => {
        try {
            const res = await mutation.mutateAsync(search)
            setSuggestions(res.suggestions)
        } catch (e) {}
    }

    return (
        <div className={css.searchPage}>
            <PageHeader
                title="Поиск адресов"
                subtitle="Введите интересующий вас адрес"
            />
            <SearchForm onSubmit={onSubmit} />
            {mutation.isLoading ? (
                <SearchMessage>
                    <Loader />
                </SearchMessage>
            ) : null}

            {mutation.isError ? (
                <SearchMessage>
                    Произошла ошибка, попытайтесь снова
                </SearchMessage>
            ) : null}
            {suggestions.length && mutation.isSuccess ? (
                <div className={css.addressListWrapper}>
                    <AddressList items={suggestions} />
                </div>
            ) : null}
            {!suggestions.length && mutation.isSuccess ? (
                <SearchMessage>Не найдено</SearchMessage>
            ) : null}
        </div>
    )
}

export default SearchAddressPage
