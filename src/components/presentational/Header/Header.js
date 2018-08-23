import React, {Component} from 'react'
import headerIMG from './header.jpg';
import './Header.css';

class Header extends Component{

    render(){
        return (
            <header className = "header">
                <img src = {headerIMG} alt = "Argentina" className = "header-img"/>
                <div className = "header-title">Trip Planning</div>
            </header>
        );
    }
}

export default Header;