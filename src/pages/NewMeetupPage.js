import NewMeetupForm from "../compontents/Layout/meetups/NewMeetupForm";
import { useNavigate} from 'react-router-dom'; 




function NewMeetup() {
  const  navigate = useNavigate(); 

  function addMeetupHandler(meetupData) {
   fetch(
     'https://react-meetup-app-75a80-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', 

   {
     method: 'POST', 
     body:JSON.stringify(meetupData), 
     headers: {
       'content-Type': 'application/json'
     },
   }
   ).then(()=> {
navigate('/', {replace:true});
   })
  }


  return <section>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </section>

  
}

export default NewMeetup;