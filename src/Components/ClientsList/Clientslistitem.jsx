import Clientprofile from "../ClientProfile/clientprofile";
import '../clients.json';
export const Click = (arrayItem, index) =>
{
  console.log(index);
  let general = arrayItem.general;
  console.log(general);
  let contact = arrayItem.contact;
  console.log(contact);
  let job = arrayItem.job;
  console.log(arrayItem.job);
  let address = arrayItem.address;
  console.log(arrayItem.address);
  console.log(arrayItem);
 return(
   <div className="ClientsProfile">
     <listItem>
     <Clientprofile general = {general} index = {index} /> 
     </listItem>
   </div>);
}