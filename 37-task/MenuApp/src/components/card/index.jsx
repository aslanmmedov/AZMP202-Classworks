import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './index.css'


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));
const MenuCard = ({ menuItem, setMenuItem }) => {

    const [expanded, setExpanded] = React.useState(false);

    console.log(menuItem);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleSearch = (e) => {
        const searchParam = e.target.value.trim();
        const filteredPro = menuItem.recipes.filter((item) => item.name.toLowerCase().includes(searchParam))
        console.log(filteredPro);


        // const newMenu = menuItem.recipes.filter((item) => item.name.toLowerCase().includes(e.target.value.trim()));
        // setMenuItem({ ...menuItem, newMenu })
        setMenuItem(filteredPro)
        // console.log(menuItem.recipes);




    }
    return (
        <>
            <input type="text" id="filter" placeholder="enter a keyword" onInput={handleSearch} />
            <div className='cardMenu'>
                {menuItem.recipes && menuItem.recipes.map((item) =>
                    <div key={item.id} className='card'>
                        <Card sx={{ maxWidth: 345, maxHeight: 1200 }}>
                            <Typography sx={{ marginBottom: 2 }}>{item.name}</Typography>
                            <CardMedia
                                component="img"
                                width="345"
                                image={item.image}
                                alt={item.name}
                            />
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>

                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>

                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography sx={{ marginBottom: 2 }}>Ingredients:</Typography>
                                    <Typography sx={{ marginBottom: 2 }}>
                                        {item.ingredients}
                                    </Typography>
                                    <Typography sx={{ marginBottom: 2 }}>Instructions:</Typography>
                                    <Typography sx={{ marginBottom: 2 }}>
                                        {item.instructions}
                                    </Typography>
                                    <Typography sx={{ marginBottom: 2 }}>Preperation minutes:</Typography>
                                    <Typography sx={{ marginBottom: 2 }}>
                                        {item.prepTimeMinutes}
                                    </Typography>
                                    <Typography sx={{ marginBottom: 2 }}>Difficulty:</Typography>
                                    <Typography sx={{ marginBottom: 2 }}>
                                        {item.difficulty}
                                    </Typography>
                                    <Typography sx={{ marginBottom: 2 }}>Calories Per serving:</Typography>
                                    <Typography sx={{ marginBottom: 2 }}>
                                        {item.caloriesPerServing}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>

                )};

            </div>

        </>

    )
}

export default MenuCard