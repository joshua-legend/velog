import React, {Component} from 'react';
import './header_search.css';


class Header_search extends Component {

    render() {
        return (
            <div className="container">
                <i className="fas fa-futbol fa-2x"></i>
                <span className="logo">GIMPO-FC</span>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder=""/>
                        <span className="icon is-small is-left">
                          <i className="fas fa-search fa-2x"></i>
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Header_search;