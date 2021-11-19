
import classes  from './MeetupItem.module.css';
import {useContext} from 'react'; 
import FavoritesContext from '../../../store/favorites-context';





function MeetupItem(props) {


      // this allow us use the context object 
      const favoritesCtx = useContext(FavoritesContext);
  
      const itemIsFavorite = favoritesCtx.itemsIsFavorite(props.id)


//data from the context 
  function toggleFavoriteStatusHandler(){
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else{
        favoritesCtx.addFavorite({
          id: props.id, 
          image:props.image, 
          title: props.title, 
          address:props.address, 
          description: props.description
        });
    }
  }
  


  return (
   <li className= {classes.item}>

     <div className= {classes.image}>
       <img src={props.image} alt={props.title} />
     </div>
     <div className= {classes.content}>
       <h3>{props.title} </h3> 
       <address>{props.address} </address>
       <p>{props.description} </p>
     </div>
     <div className= {classes.actions}>
     <button onClick={toggleFavoriteStatusHandler}> 
     {itemIsFavorite ? 'Remove from Favorites' : 'add to Favorites'}
     </button>
     </div>
 
   </li>

  )  
}


export default MeetupItem;