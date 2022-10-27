import classNames from 'clsx'

import { Navbar } from '../widgets/Navbar'
import { Sidebar } from '../widgets/Sidebar'
import { AppRouter } from './providers/Router'

export const App = () => {
    return (
        <div className={classNames('app')}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}
