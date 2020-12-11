import logo from './bootstrap-logo.svg';
import React from 'react';

function HeaderHOCFunc(BodyComponent, title) {
    return () => {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="" width="30" height="24" />
                        </a>
                    </div>
                </nav>
                <BodyComponent txt={title} />
            </div>
        );
    }
}

export default HeaderHOCFunc;
