import React, { useContext, useEffect, useState } from 'react'
import "../header/navbar.css"
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { Logincontext } from '../context/Contextprovider';
import { ToastContainer, toast } from 'react-toastify';
import LogoutIcon from '@mui/icons-material/Logout';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';  // Updated import
import { makeStyles } from '@material-ui/core';
import { Drawer, IconButton, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Rightheader from './Rightheader';
import { getProducts } from '../redux/actions/action';
import { useSelector, useDispatch } from "react-redux";
import { url } from '../url';

const usestyle = makeStyles({
    component: {
        marginTop: 10,
        marginRight: "-50px",
        width: "300px",
        padding: 50,
        height: "300px"
    },
})


const Navbaar = () => {

    const classes = usestyle();

    const navigate = useNavigate();  // Use useNavigate instead of useHistory

    const [text, setText] = useState();
    const { products } = useSelector(state => state.getproductsdata);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])


    const [open, setOpen] = useState(false);
    const [liopen, setLiopen] = useState(true);

    const [dropen, setDropen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(false)
    };

    const { account, setAccount } = useContext(Logincontext);

    const getdetailsvaliduser = async () => {
        try {
            const res = await fetch(`${url}/validuser`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include" // Ensure cookies are sent
            });
           console.log(res);
            // Check if response is okay and handle accordingly
            if (!res.ok) {
                const contentType = res.headers.get("content-type");
                let errorMessage = "Unauthorized access";
    
                // Try to extract the error message from the response
                if (contentType && contentType.includes("application/json")) {
                    const errorData = await res.json();
                    errorMessage = errorData.message || "Unauthorized access";
                } else {
                    errorMessage = await res.text();
                }
    
                throw new Error(errorMessage); // Explicit error throw
            }
    
            // Parse JSON response
            const data = await res.json();
    
            if (res.status === 201) {
                setAccount(data); // Set account info in state
            } else {
                console.log("Unauthorized: Please login.");
            }
    
        } catch (error) {
            console.error("Error fetching valid user:", error.message);
    
            // Handle unauthorized access or other errors
            if (error.message.includes("Unauthorized")) {
                // Optionally redirect to login or show a specific error message
                console.log("Redirecting to login...");
            }
        }
    };
    

    useEffect(() => {
        getdetailsvaliduser();
    }, []);


    // for logout
    const logoutuser = async () => {
        try {
            const res2 = await fetch(`${url}/logout`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
    
            const data2 = await res2.json();
    
            if (res2.status != 201) {
                throw new Error(res2.error || "Logout failed");
            } else {
                setAccount(false);
                setAnchorEl(null);  // Close the menu after logout
                toast.success("User logged out 😃!", {
                    position: "top-center"
                });
                navigate("/");  // Navigate to home after logout
            }
        } catch (error) {
            console.error("Error logging out:", error.message);
            // Handle logout failure
        }
    };

    // for drawer
    const handelopen = () => {
        setDropen(true);
    }

    const handleClosedr = () => {
        setDropen(false)
    }

    const getText = (text) => {
        setText(text)
        setLiopen(false)
    }


    return (
        <header>
            <nav>
                <div className="left">
                    <IconButton className="hamburgur" onClick={handelopen}>
                        <MenuIcon style={{ color: "#fff" }} />
                    </IconButton>
                    <Drawer open={dropen} onClose={handleClosedr} >
                        <Rightheader userlog={logoutuser} logclose={handleClosedr} />
                    </Drawer>
                    <div className="navlogo">
                        <NavLink to="/"> <img src="./amazon_PNG25.png" alt="logo" /> </NavLink>
                    </div>
                    <div className="nav_searchbaar">
                        <input type="text" 
                            onChange={(e) => getText(e.target.value)}
                            placeholder="Search Your Products" />
                        <div className="search_icon">
                            <i className="fas fa-search" id="search"></i>
                        </div>
                        {
                            text &&
                            <List className="extrasearch" hidden={liopen}>
                                {
                                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                        <ListItem key={product.id}>
                                            <NavLink to={`/getproductsone/${product.id}`} onClick={() => setLiopen(true)}>
                                                {product.title.longTitle}
                                            </NavLink>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        }
                    </div>
                </div>
                <div className="right">
                    <div className="nav_btn">
                        <NavLink to="/login">Sign in</NavLink>
                    </div>
                    {
                        account ? <NavLink to="/buynow">
                            <div className="cart_btn">
                                <Badge badgeContent={account.carts.length} color="secondary">
                                    <i className="fas fa-shopping-cart" id="icon"></i>
                                </Badge>

                                <p>Cart</p>
                            </div>
                        </NavLink> : <NavLink to="/login">
                            <div className="cart_btn">
                                <Badge badgeContent={0} color="secondary">
                                    <i className="fas fa-shopping-cart" id="icon"></i>
                                </Badge>
                                <p>Cart</p>
                            </div>
                        </NavLink>
                    }

                    {
                        account ?
                            <Avatar className="avtar2"
                                onClick={handleClick} title={account.fname.toUpperCase()}>{account.fname[0].toUpperCase()}</Avatar> :
                            <Avatar className="avtar"
                                onClick={handleClick} />
                    }

                    <div className="menu_div">
                        <Menu
                            anchorEl={open}
                            open={Boolean(open)}
                            onClose={handleClose}
                            className={classes.component}
                        >
                            <MenuItem onClick={handleClose} style={{ margin: 10 }}>My account</MenuItem>
                            {account ? <MenuItem onClick={logoutuser} style={{ margin: 10 }}><LogoutIcon style={{ fontSize: 16, marginRight: 3 }} /> Logout</MenuItem> : ""}
                        </Menu>
                    </div>
                    <ToastContainer />
                </div>
            </nav>
        </header>
    )
}

export default Navbaar;
