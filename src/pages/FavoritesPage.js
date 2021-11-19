import {useContext} from 'react'; 
import FavoritesContext from '../store/favorites-context';



import FavoriteContext from '../store/favorites-context';
import MeetupList from '../compontents/Layout/meetups/MeetupList';


function Favorites() {
  const favoritesCtx = useContext(FavoritesContext); 

// render fallback msg

let content; 

if (favoritesCtx.totalFavorites === 0) {
  content = <p>Start edding some Favorites</p>
}else{
  content = <p><MeetupList meetups={favoritesCtx.favorites}/></p>
}


  return <section>
    <h1>My Favorites</h1> 
{content}
  </section>
  
}

export default Favorites;