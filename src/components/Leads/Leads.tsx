import './Leads.css'
import { Tabs } from "flowbite-react";
import { Contact } from '../../models/Contact';
import AcceptedCard from '../AcceptedCard/AcceptedCard';
import InvitedCard from '../InvitedCard/InvitedCard';


function Leads() {
    
  const contact: Contact = {
    id: '123456',
    name: 'Name Mister',
    createdDate: '2021-01-22T17:14:24Z',
    suburb: 'suburb',
    category: {
      id: 2,
      name: "Photographer"
    },
    description: 'description air national ride wheel congress salmon skin compass research powerful image another clothes cap experience molecular plus wonder why slabs see torn shirt near',
    price: 50,
    phone: '235572905',
    email: 'edihu@lo.sg',
    status: 1
  }
    const waitingContacts: Contact[] = [contact, contact, contact];
    const acceptedContacts: Contact[] = [contact, contact];
    // const [waitingContacts, setWaitingContacts] = useState([]);
    // const api = ContactApi;
    // setWaitingContacts(await api.getAllWaiting());

  return (
    <>
    <div className='h-full'>
        <Tabs aria-label='Leads' variant='fullWidth'>
            <Tabs.Item active title="Invited">
                {waitingContacts.map((contact) => <InvitedCard {...contact}/>)}
            </Tabs.Item>
            <Tabs.Item title="Accepted">
            {acceptedContacts.map((contact) => <AcceptedCard {...contact}/>)}
            </Tabs.Item>
        </Tabs></div>
    </>
  )
}

export default Leads
