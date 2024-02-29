import {Fragment} from 'react';
import classes from './Header.module.css'
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';


const Header = props => {
    return (
    <Fragment>
       
    <header id="navbarr">
        <div className={classes.navbar} id="navbar">
            <div id="logo" className={classes.logo}>
                CipherGuard
            </div>
            <MobileNavigation />
            <Navigation />

        </div>
    </header>
    </Fragment>
    );
};



export default Header;
