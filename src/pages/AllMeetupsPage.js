/* Goal is heare geht a list of meetups and output it. Later we will get the data from a server by sending a htttp request 

how we can render a list of JSX elements dynamically ? 

*/

import MeetupList from "../compontents/Layout/meetups/MeetupList";

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






function AllMeetups() {

  return (
    <section>
    <h1>All Meetups</h1>
 
    <MeetupList myName={dummydata} />
    
    </section>
    
  ) 
  
}

export default AllMeetups;


/* cause this is JSX code we can write Map inside an expression 

with mapping we can mapping an array of objects ainto an array of jsx elements */ 