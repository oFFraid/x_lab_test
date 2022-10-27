import classNames from 'clsx';
import css from './PageLoader.module.scss';
import {Loader} from "../../../shared/ui/Loader";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({className}: PageLoaderProps) => {
    return (
        <div className={classNames(css.pageLoader, {}, [className])}>
            <Loader/>
        </div>
    );
};
