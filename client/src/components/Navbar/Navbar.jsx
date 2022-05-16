import React from 'react';
import "./navbar.css"
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase-config';
import { signOut } from "firebase/auth";

const Navbar = ({ user }) => {
    const { amount } = useSelector((state) => state.cartData);
    return (
        <header>
            <nav>
                <div className='left'>
                    <div className='navlogo'>
                        <Link to="/">
                            <img src="./amazon_PNG25.png" alt="logo" />
                        </Link>
                    </div>
                    <div className='nav_searchbaar'>
                        <input type="text" name="" id="" />
                        <div className='search_icon'>
                            <SearchIcon id="search" />
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div className='nav_btn'>
                        <Link to="/login">
                            {user ? <span
                                onClick={async () => {
                                    await signOut(auth);
                                }}
                                style={{ color: "white" }}>(Signout)</span> : <span style={{ color: "white", marginLeft: "5px" }} >Sign In</span>}
                        </Link>

                    </div>
                    <Link to="/cart">
                        <div className='cart_btn'>
                            <Badge badgeContent={amount} color="primary">
                                <ShoppingCartIcon id="icon" />
                            </Badge>
                            <p>Cart</p>
                        </div>
                    </Link>
                    <Avatar className="avtar" alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                </div>
            </nav>
        </header>
    )
}

export default Navbar