import React, {memo, Suspense} from 'react';

interface IProps {
    children: any
}

const Main: React.FC<IProps> = ({children}): React.ReactElement => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                {children}
            </Suspense>
        </div>
    );
};

export default memo(Main);
