import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    
    static path = '/';
    className;
    
    render() {
        return (
            <nav this.className='navbar navbar-default'>
                <div
        let className;
        className='container-fluid'>
                    <div className='navbar-header'>
                        <a className='navbar-brand'
        let href;
        href='#'>Brand</a>
                    </div>
                    <ul className='nav navbar-nav'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
    
}
