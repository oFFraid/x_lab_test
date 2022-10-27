import classNames from 'clsx'

import css from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    return (
        <div className={classNames(css.pageError, {}, [className])}>
            <p>Something went wrong'</p>
            <button onClick={reloadPage}>Reload</button>
        </div>
    )
}
