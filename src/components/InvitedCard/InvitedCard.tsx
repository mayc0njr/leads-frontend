import './InvitedCard.css'
import { Avatar, Button } from "flowbite-react";
import { Contact } from '../../models/Contact'
import { firstLetter, firstName, formatCurrency, formatDateInvited, getCategoryIcon } from '../../util/formatter'
import { MapPin } from '@phosphor-icons/react';
import { ContactApi } from '../../api/ContactApi';
import { STATUS } from '../../util/constant';
import { useState } from 'react';
import { mutate } from 'swr';

function InvitedCard(data: {contact: Contact}) {
  const [isAccepting, setAccepting] = useState(false);
  const [isDenying, setDenying] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

    const contact = data.contact;
    const acceptLead = () => {
      setAccepting(true);
      setDisabled(true);
      const data = new Contact(contact, STATUS.ACCEPTED);
      ContactApi.updateContact(data).then(() => { mutate((key: string) => key.startsWith('/api/')); setAccepting(false); })
    }
    
    const denyLead = () => {
      setDenying(true);
      setDisabled(true);
      const data = new Contact(contact, STATUS.DENIED);
      ContactApi.updateContact(data).then(() => { mutate((key: string) => key.startsWith('/api/')); setDenying(false); })
    }
    

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
            <Button disabled={isDisabled} isProcessing={isAccepting} onClick={acceptLead} className='mr-2 shadow font-semibold bg-orange-500'>Accept</Button>
            <Button disabled={isDisabled} isProcessing={isDenying} onClick={denyLead} color='gray' className='mr-6 shadow font-semibold bg-gray-200'>Decline</Button>
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
