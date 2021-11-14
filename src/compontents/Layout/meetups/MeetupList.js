
import MeetupItem from './MeetupItem';
import classes  from './MeetupList.module.css';



function MeetupList(props) {

  console.log(props.myName)
  
  return (

 

   <ul className={classes.list}>
     

 {props.myName.map((element) => {

     return <MeetupItem 
     key={element.id} 
     id={element.id}
    image={element.image}
    title={element.title}
    address={element.address}
    description={element.description}
     />
  })}

 
   </ul>
  
  )  
}

export default MeetupList;


/* alternativley we can just pass element={elemenet} and then dextructerin it */