import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import elf from '../../assets/img/389.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
     
       
        
       
      
      <CardMedia
        className={classes.media}
        image={elf}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        "Эльф не может сидеть на диете." Берет перерыв для смены издателя .
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph></Typography>
          <Typography paragraph>
           
          </Typography>
          <Typography paragraph>
          Синекдоха объявил в своем твиттере, что Wani Books больше не будут издавать его мангу "Эльф не может сидеть на диете." Синекдоха выкладывает 46 и 47 главы в Twitter, а когда он закончит, манга перейдет в хиатус на полгода. Она вернется осенью с новым издателем. Больше информации об издателе и точной дате продолжения мангака сообщит позже, с выходом восьмого тома.
          </Typography>
          <Typography paragraph>
          Также Синекдоха заметил, что манге осталось "совсем немного" до завершения.
          </Typography>
          <Typography>
          Манга рассказывает о массажисте, к которому однажды заявилась странная пациентка. Очаровательная внешность, изумрудные глаза и острые уши просто кричат, что она - эльф, вот только ее фигура далека от стереотипов об эльфийской стройности. Оказывается, она пристрастилась к фаст-фуду, и последствия не заставили себя долго ждать. Удастся ли герою помочь ей избавиться от лишнего веса?
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
