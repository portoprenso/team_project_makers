import React, {useContext, useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Link, useHistory} from "react-router-dom";
import {productsContext} from "../../contexts/ProductsContext";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Logo from '../../assets/img/manga-logo.png';
import SearchIcon from '@material-ui/icons/Search';

import './NavBar.css'


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        position: 'fixed',
        zIndex: 100,
        // overflow: 'hidden',
        // backgroundColor: '#333',
        // position: 'fixed', /*Set the navbar to fixed position */
        // top: '0', /* Position the navbar at the top of the page */
        // width: '100%',
        // background: 'orange',
        // marginBottom: '40px',
        top:0
       
    },
    navbar__container: {
        backgroundColor: "white",
        maxWidth: 1296,
        width: "100%",
        margin: "0 auto"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        color: "black",
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        color: "#ff3c20",
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    navbar__logo: {
            height: 45
        }
}));

export default function Navbar() {
    const classes = useStyles();
    let history = useHistory()
    console.log();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [searchValue, setSearchValue] = useState(getSearchValue())
    const { getProductsData, productsData, cartLength } = useContext(productsContext)
    const handleValue = (e) => {
        const search = new URLSearchParams(history.location.search)
        search.set('q', e.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        setSearchValue(e.target.value)
        getProductsData(history)
    }

    function getSearchValue(e) {
        const search = new URLSearchParams(history.location.search)
        return search.get('q')
    }

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <Link exact to="/profile"><MenuItem onClick={handleMenuClose}>Мой профиль</MenuItem></Link>
            <Link exact to="/support"><MenuItem onClick={handleMenuClose}>Поддержка</MenuItem></Link>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Link exact to="/catalogue">Каталог продукции</Link>
            </MenuItem>
            <MenuItem>
                <Link exact to="/support">Поддержка</Link>
            </MenuItem>
            <MenuItem>
                <Link exact to="/cart">Корзина</Link>
            </MenuItem>
            <MenuItem>
                <Link exact to="/profile">Профиль</Link>
            </MenuItem>
            
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" color="text.primary">
                <Toolbar className={classes.navbar__container}>
                    <Link style={{color: "inherit", textDecoration: "none"}} exact to="/homepage">
                        <img src={Logo} className={classes.navbar__logo}/>
                    </Link>
                    <ul className="navbar__ul">
                        <li><Link exact to="/catalogue">КАТАЛОГ МАНГИ</Link></li>
                        <li><Link exact to="/chat">ЧАТ</Link></li>
                        <li><Link exact to="/support">ПОДДЕРЖКА</Link></li>
                        <li><Link exact to="/cart">МОИ ПОКУПКИ</Link></li>
                    </ul>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            value={searchValue}
                            onChange={handleValue}
                            placeholder="Поиск игр..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle className={classes.navbar__AccountCircle} />
                        </IconButton>
                        <Link style={{color: "inherit"}} exact to="/cart" >
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                
                                <Badge badgeContent={cartLength} color="secondary">
                                    <ShoppingCartIcon className={classes.navbar__ShoppingCartIcon} />
                                </Badge>
                            </IconButton>
                        </Link>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
