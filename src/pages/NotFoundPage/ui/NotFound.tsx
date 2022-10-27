import classNames from 'clsx'

import css from './NotFound.module.scss'

interface NotFoundProps {
    className?: string
}

const NotFound = ({ className }: NotFoundProps) => {
    return (
        <div className={classNames(css.notFound, {}, [className])}>
            <p className={classNames(css.title)}>404</p>
            <p className={classNames(css.message)}>
                Oops!
                <br />
                Looks like you are lost
                <br />
                There is nothing here
            </p>
        </div>
    )
}

// eslint-disable-next-line import/no-default-export
export default NotFound
