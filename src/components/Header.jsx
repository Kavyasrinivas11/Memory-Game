import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled, alpha } from '@mui/material/styles';
import { IoLogoGameControllerB } from "react-icons/io";
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';


// 🔹 Styled search bar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

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
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        
      </MenuItem>
    </Menu>
  );


  const navigate = useNavigate();

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#4e4e52ff' }}>
        <Toolbar>
  <IconButton
    size="large"
    edge="start"
    color="inherit"
    aria-label="open drawer"
    sx={{ mr: 2 }}
  >
    <MenuIcon />
  </IconButton>

  {/* Logo */}
  <Typography
    variant="h6"
    noWrap
    component="div"
    sx={{ display: { xs: 'none', sm: 'block' } }}
  >
    <Typography
      variant="h3"
      sx={{
        fontWeight: 600,
        color: '#ffffff',
        letterSpacing: 1.5,
        '& span': {
          color: '#00eaff',
        },
      }}
    >
      <span>P</span>ix<span>P</span>lay
    </Typography>
  </Typography>


  <Box sx={{ flexGrow: 1 }} />

  
  <Search sx={{ mr: 2 }}>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
    />
  </Search>

  {/* Icons */}
  <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
    <Tooltip title="Click to Play Memory Game">
  <Button
  onClick={() => navigate('/game')}
  startIcon={<IoLogoGameControllerB size={28} color="white" />}
  sx={{
    background: 'linear-gradient(90deg, #00c6ff, #0072ff)',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '17px',
    px: 2,
    mr:2,
    py: 1,
    borderRadius: '50px',
    boxShadow: '0 0 15px rgba(0, 200, 255, 0.8)',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'linear-gradient(90deg, #0072ff, #00c6ff)',
      boxShadow: '0 0 25px rgba(0, 200, 255, 1)',
      transform: 'scale(1.05)',
    },
  }}
>
  Play
</Button>

</Tooltip>

    <Tooltip title="Account">
  <IconButton>
    <AccountCircle sx={{ fontSize: 35, color: 'white' }} />
  </IconButton>
</Tooltip>
  </Box>
</Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
