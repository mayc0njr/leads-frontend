import './Leads.css'
import { Tabs } from "flowbite-react";
import { Contact } from '../../models/Contact';
import InvitedCard from '../InvitedCard/InvitedCard';


function Leads() {
    
  const contact: Contact = {
    id: 'id',
    name: 'name',
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
                This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
                {waitingContacts.map((contact) => <InvitedCard {...contact}/>)}
            </Tabs.Item>
            <Tabs.Item title="Accepted">
                This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                control the content visibility and styling.
            {acceptedContacts.map((contact) => <InvitedCard {...contact}/>)}
            </Tabs.Item>
        </Tabs></div>
    </>
  )
}

export default Leads
