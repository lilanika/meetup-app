import NewMeetupForm from "../compontents/Layout/meetups/NewMeetupForm";


function NewMeetup() {

  function addMeetupHandler(meetupData) {
   fetch(
     'https://react-meetup-app-75a80-default-rtdb.europe-west1.firebasedatabase.app/meetups.json', 

   {
     method: 'POST', 
     body:JSON.stringify(meetupData), 
     headers: {
       'content-Type': 'application/json'
     }
   }
   );
  }


  return <section>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </section>

  
}

export default NewMeetup;