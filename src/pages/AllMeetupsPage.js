/* Goal is heare geht a list of meetups and output it. Later we will get the data from a server by sending a htttp request 

how we can render a list of JSX elements dynamically ? 

*/

import { useState , useEffect } from 'react'
import Card from "../compontents/Layout/meetups/ui/Card.js";
import MeetupList from "../compontents/Layout/meetups/MeetupList";
import { useNavigate} from 'react-router-dom'; 




function AllMeetups() { 

  /*register some state, name the constant isloading, add a setIslOading updateing function. cause you have learn that use State always return an array with exactly two elements, when we got the data this function should run an change the state to true. */
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=>{
    setIsLoading(true);
    fetch(
      'https://react-meetup-app-75a80-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    )
    .then(( response) => {
     return response.json(); 
    }).then((data) => {

      const meetups = []; 

      for( const key in data) {
        const meetup = {
       id: key, 
       ...data[key]
        };
        meetups.push(meetup)
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  },[]);

 

  /* when state is false this code will run*/
 
 if(isLoading ) {
   return <section>
     <p>loading...</p>
   </section>
 }

 /*when we have the data this piece of code should run */

  return (
    <section>
    <Card>
    <h1>All Meetups</h1>
    <MeetupList meetups={loadedMeetups} />
    </Card>
    </section>
    
  ) 
  
}

export default AllMeetups;


/* cause this is JSX code we can write Map inside an expression 

with mapping we can mapping an array of objects ainto an array of jsx elements */ 



/*


const dummydata =  [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

*/