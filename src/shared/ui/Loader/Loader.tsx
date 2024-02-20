import React from 'react';
import './Loader.scss';

type LoaderProps = {
    className?: string;
}

export function Loader() {
    return (
        <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
        </div>
    );
}
