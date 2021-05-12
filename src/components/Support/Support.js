import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../Support/Support.css'
import Logo from '../../assets/img/manga-logo.png'

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

export default function Support() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  return (
    <div>
        <div className="top">
            
            <div className="logo"> 
                <div className="logo_img">
                    <img src={Logo}/>  
                </div>
                 
                <div className="navbar">
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                        }}
                    >
                        {options.map((option) => (
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                            {option}
                        </MenuItem>
                        ))}
                    </Menu>
                </div>  
            </div>
            <div className="top_text">
                <h2>Добро пожаловать в службу поддержки MangaLib!</h2>
                <h1>Как мы можем вам помочь?</h1>
            </div>
        </div>
        <div className="main">
           <div className="icon">
           <div className="wrapper">
               
             <SportsEsportsIcon />
               </div>
               <p>Продукты</p>
           </div>
           <div className="icon">
           <div className="wrapper">
               
               <MonetizationOnIcon/>
               </div>
               <p>Платежи</p>
           </div>
           <div className="icon">
           <div className="wrapper">
               
               <ErrorOutlineIcon/>
           </div>
               <p>Проблема</p>
           </div>
           <div className="icon">
               <div className="wrapper">
                   <MoreHorizIcon/>
               </div>
               <p>Подержка</p>
           </div>
        </div>
        <div className="question">
            <h2>Популярные вопросы</h2>
            <div id="drop_menu" className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Если книга мне не понравится, могу ли я вернуть свои деньги?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
            <div className="otzyv">
                <p>Это было полезно?</p>
                <button id="green">Да</button>
                <button id="red">Нет</button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="qwerty">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Какими способами я могу оплатить товар?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
            <div className="otzyv">
                <p>Это было полезно?</p>
                <button id="green">Да</button>
                <button id="red">Нет</button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="qwerty">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Как купить книгу?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
            <div className="otzyv">
                <p>Это было полезно?</p>
                <button id="green">Да</button>
                <button id="red">Нет</button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="qwerty">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>Где посмотреть свои покупки?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
            <div className="otzyv">
                <p>Это было полезно?</p>
                <button id="green">Да</button>
                <button id="red">Нет</button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
        </div>
    </div>
  );
}

