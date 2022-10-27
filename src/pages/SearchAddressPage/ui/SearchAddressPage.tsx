import {Input} from "../../../shared/ui/Input";
import {Button, ButtonProps} from "../../../shared/ui/Button/ui/Button";
import {ReactComponent as SearchIcon} from "./../../../shared/assets/icons/search.svg";
import css from './SearchAddressPage.module.scss'
import {
    FC,
    FormEvent, PropsWithChildren, useMemo,
    useState
} from "react";
import List from "../../../shared/ui/List/ui/List";
import classNames from "clsx";
import ClassNameInterface from "../../../shared/types/ClassNameInterface";
import {AddressDataInterface, SuggestionInterface, apiSearch} from "../../../api/api";
import {useMutation} from "@tanstack/react-query";
import {Loader} from "../../../shared/ui/Loader";
import PageHeader from "../../../shared/ui/PageHeader/ui/PageHeader";
import useBreakpoint from "../../../shared/hooks/useBreakpoint";

interface SearchFormInterface {
    onSubmit: (search: string) => void
}

const SearchButton: FC<ButtonProps> = (props) => {
    const isSm = useBreakpoint('sm')
    const size = isSm ? 20 : 32;
    return <Button
        className={css.searchButton}
        theme="filled"
        {...props}
    >
        <SearchIcon
            height={size}
            width={size}
            fill={"#FFFF"}
        />
        Поиск
    </Button>;
}

const SearchMessage: FC<PropsWithChildren> = props => {
    return <div className={classNames(css.messageSearch, css.subtitle)}>
        {props.children}
    </div>
}

const SearchForm: FC<SearchFormInterface> = props => {
    const {onSubmit} = props
    const [search, setSearch] = useState('');

    const isEmpty = useMemo<boolean>(() => {
        return search.trim() === '';
    }, [search])

    const validError = useMemo<string | undefined>(() => {
        if (search.trim().length < 3) {
            return "Минимальная длина ввода пароля 3 символа"
        }
        return undefined
    }, [search])

    const onSubmitOverride = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(search);
    }

    return <>
        <form
            className={css.searchForm}
            onSubmit={onSubmitOverride}
        >
            <Input
                fullWidth
                fullHeight
                className={css.searchField}
                placeholder={'Введите интересующий вас адрес'}
                value={search}
                onChange={setSearch}
            />
            <SearchButton
                disabled={!!validError || isEmpty}
            />
        </form>
        {
            validError && !isEmpty ? <SearchMessage>
                {validError}
            </SearchMessage> : null
        }
    </>
}


interface AddressListInterface {
    items: SuggestionInterface[]
}

const AddressItem: FC<AddressDataInterface & ClassNameInterface> = props => {
    const {city, city_type_full, street_type_full, street, house_type_full, house, className} = props
    if (!city && !street && !house) {
        return null
    }
    return <div className={classNames(css.addressItem, className)}>
        {city_type_full} {city}
        {street && ','} {street_type_full} {street}
        {house && ','} {house_type_full} {house}
    </div>
}

const AddressList: FC<AddressListInterface> = props => {
    return <>
        <div className={css.addressListTitle}>
            Адреса
        </div>
        <List
            as='div'
            className={css.addressList}
            items={props.items}
            renderItem={({data}, i) => (
                <AddressItem {...data} key={`address_list_${i}`}/>
            )}
        />
    </>
}

const SearchAddressPage: FC = () => {
    const mutation = useMutation((search: string) => {
        return apiSearch(search)
    })

    const [suggestions, setSuggestions] = useState<SuggestionInterface[]>([])
    const onSubmit = async (search: string) => {
        try {
            const res = await mutation.mutateAsync(search)
            console.log(res)
            setSuggestions(res.suggestions)
        } catch (e) {

        }
    }


    return <div className={css.searchPage}>
        <PageHeader
            title="Поиск адресов"
            subtitle="Введите интересующий вас адрес"
        />
        <SearchForm onSubmit={onSubmit}/>
        {
            mutation.isLoading ? <SearchMessage>
                <Loader/>
            </SearchMessage> : null
        }

        {
            mutation.isError ? <SearchMessage>
                Произошла ошибка, попытайтесь снова
            </SearchMessage> : null
        }
        {
            suggestions.length && mutation.isSuccess ? <div className={css.addressListWrapper}>
                <AddressList
                    items={suggestions}
                />
            </div> : null
        }
        {
            !suggestions.length && mutation.isSuccess ? <SearchMessage>
                Не было найдено
            </SearchMessage> : null
        }
    </div>;
};

export default SearchAddressPage;
