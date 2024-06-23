import './InvitedCard.css'
import { Avatar, Button } from "flowbite-react";
import { Contact } from '../../models/Contact'
import { firstLetter, firstName, formatCurrency, formatDateInvited, getCategoryIcon } from '../../util/formatter'
import { MapPin } from '@phosphor-icons/react';


function InvitedCard(contact: Contact) {
    // const [isProcessing, setProcessing] = useState(false);

  return (
    <>
      <div className='m-4 bg-white text-gray-700 box-border shadow-md p-4'>
        <div className='py-2 border-0 border-b-2 flex flex-1 flex-row'>
            <div className='mr-2 '>
                <Avatar placeholderInitials={firstLetter(contact.name)} rounded  />
            </div>
            <div className='text-left'>
                <div className='font-bold'>{firstName(contact.name)}</div>
                <div className='text-sm text-gray-500'>{ formatDateInvited(contact.createdDate) }</div>
            </div>
        </div>
        <div className='py-4 flex flex-1 flex-row border-b-2 text-gray-500'>
            <div className='mr-2 text-gray-700'><MapPin size={24} /></div>
            <div className='mr-4'> {contact.suburb} </div>
            <div className='mr-2 text-gray-700'>{getCategoryIcon(contact.category.id)}</div>
            <div className='mr-4'> {contact.category.name} </div>
            <div className='mr-1'> Job ID: </div>
            <div className='mr-4'> {contact.id} </div>
        </div>
        <div className='py-4 flex flex-1 flex-row text-gray-500 text-sm border-b-2'>
            <div className='mr-4'> {contact.description} </div>
        </div>
        <div className='pt-4 flex flex-row text-gray-500'>
            <Button className='mr-2 shadow font-semibold'>Accept</Button>
            <Button color='gray' className='mr-6 shadow font-semibold'>Decline</Button>
            <div className='flex flex-row text-gray-500 align-middle'>
                <div className='pt-2 mr-1 font-bold'> {formatCurrency(contact.price)}</div>
                <div className='pt-2'> Lead Invitation</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default InvitedCard
