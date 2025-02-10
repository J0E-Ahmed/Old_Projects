import '../CoreConcept.css'
export default function CoreConcept({image,title,description}){
    return <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  }
  
// function CoreConcept(prop){
//   return <li>
//     <img src={prop.image} alt={prop.title} />
//     <h3>{prop.title}</h3>
//     <p>{prop.description}</p>
//   </li>
// }
