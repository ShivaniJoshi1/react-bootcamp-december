import logo from './bootstrap-logo.svg';
import React from 'react';

function HeaderHOC(BodyComponent, title) {
    return class extends React.PureComponent {
        constructor(props) {
            super(props);
        }

        render() {
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
}

export default HeaderHOC;
