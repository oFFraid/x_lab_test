import {useEffect, useState} from 'react';


export const BugButton = () => {
    const [error, setError] = useState(false);

    const throwError = () => setError((error) => !error);
    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <button
            onClick={throwError}
        >
            bug
        </button>
    );
};
