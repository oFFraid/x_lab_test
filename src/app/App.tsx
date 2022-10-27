import classNames from 'clsx';
import {AppRouter} from './providers/Router';
import {Navbar} from "../widgets/Navbar";
import {Sidebar} from "../widgets/Sidebar";

export const App = () => {

    return (
        <div className={classNames('app')}>
            <Navbar/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    );
};
