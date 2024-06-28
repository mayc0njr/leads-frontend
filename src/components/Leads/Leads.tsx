import './Leads.css';
import {Button, Spinner, Tabs} from 'flowbite-react';
import {Contact} from '../../models/Contact';
import InvitedCard from '../InvitedCard/InvitedCard';
import {ContactApi} from '../../api/ContactApi';
import useSWR, { mutate } from 'swr';
import AcceptedCard from '../AcceptedCard/AcceptedCard';

function Leads() {
    const waitingFetcher = () =>
        ContactApi.getAllWaiting().then((res) => res);
    const acceptedFetcher = () =>
        ContactApi.getAllAccepted().then((res) => res);
    const {data: waitingData, error: waitingError, isLoading: waitingLoading} = useSWR(
        '/api/waiting',
        waitingFetcher
    );
    const {data: acceptedData, error: acceptedError, isLoading: acceptedLoading} = useSWR(
        '/api/accepted',
        acceptedFetcher
    );
    

    // const contact: Contact = {
    //     id: '123456',
    //     name: 'Name Mister',
    //     createdDate: '2021-01-22T17:14:24Z',
    //     suburb: 'suburb',
    //     category: {
    //         id: 2,
    //         name: 'Photographer',
    //     },
    //     description:
    //         'description air national ride wheel congress salmon skin compass research powerful image another clothes cap experience molecular plus wonder why slabs see torn shirt near',
    //     price: 50,
    //     phone: '235572905',
    //     email: 'edihu@lo.sg',
    //     status: 1,
    // };
    // const waitingContacts: Contact[] = [contact, contact, contact];
    // const acceptedContacts: Contact[] = [contact, contact];
    // const [waitingContacts, setWaitingContacts] = useState([]);
    // const api = ContactApi;
    // setWaitingContacts(await api.getAllWaiting());

    return (
        <>
            <div className="h-full">
                <Tabs aria-label="Leads" variant="fullWidth">
                    <Tabs.Item active title="Invited">
                        {
                            waitingError ? (
                                <div className='flex flex-wrap gap-2' >
                                    <div className='text-center'>An Error occurred, click the button below to try to reload the content.</div>
                                    <Button onClick={() => mutate("/api/waiting")}>Reload</Button>
                                </div>
                            ) : (
                                waitingLoading && (
                                    <div className="flex flex-wrap gap-2">
                                        <div className="text-center">
                                            <Spinner size="xl" color="warning" />
                                        </div>
                                    </div>
                                ) ||
                                waitingData && (waitingData.map((contact: Contact) => (
                                    <InvitedCard key={`invited${contact.id}`} contact={contact} />
                                )))
                            )

                        }
                    </Tabs.Item>
                    <Tabs.Item title="Accepted">
                        {
                            acceptedError ? (
                                <div className='flex flex-wrap gap-2' >
                                    <div className='text-center'>An Error occurred, click the button below to try to reload the content.</div>
                                    <Button onClick={() => mutate("/api/accepted")}>Reload</Button>
                                </div>
                            ) : (
                                acceptedLoading && (
                                    <div className="flex flex-wrap gap-2">
                                        <div className="text-center">
                                            <Spinner size="xl" color="warning" />
                                        </div>
                                    </div>
                                ) ||
                                acceptedData && (acceptedData.map((contact: Contact) => (
                                    <AcceptedCard key={`accepted${contact.id}`} {...contact} />
                                )))
                            )

                        }
                    </Tabs.Item>
                </Tabs>
            </div>
        </>
    );
}

export default Leads;
