import './AcceptedCard.css'
import { Avatar } from "flowbite-react";
import { Contact } from '../../models/Contact'
import { firstLetter, formatCurrency, formatDate } from '../../util/formatter'
import { EnvelopeSimple, MapPin, Phone, Suitcase } from '@phosphor-icons/react';


function AcceptedCard(contact: Contact) {

  return (
    <>
      <div className='m-4 bg-white text-gray-700 box-border shadow-md p-4'>
        <div className='border-0 border-b-2 flex flex-1 flex-row py-2'>
            <div className='mr-2 '>
                <Avatar placeholderInitials={firstLetter(contact.name)} rounded  />
            </div>
            <div className='text-left'>
                <div className='font-bold'>{contact.name}</div>
                <div className='text-sm text-gray-500'>{ formatDate(contact.createdDate) }</div>
            </div>
        </div>
        <div className='py-2 flex flex-1 flex-row border-b-2 text-gray-500'>
            <div className='mr-2 text-gray-700'><MapPin size={24} /></div>
            <div className='mr-4'> {contact.suburb} </div>
            <div className='mr-2 text-gray-700'><Suitcase size={24} weight="regular"/></div>
            <div className='mr-4'> {contact.category.name} </div>
            <div className='mr-1'> Job ID: </div>
            <div className='mr-4'> {contact.id} </div>
            <div className='mr-1'> {formatCurrency(contact.price)} </div>
            <div className='mr-4'> Lead Invitation </div>
        </div>
        <div className='py-2 flex flex-1 flex-row font-bold'>
            <div className='mr-2'><Phone size={24} /></div>
            <div className='mr-4 text-orange-500'> {contact.phone} </div>
            <div className='mr-2'><EnvelopeSimple size={24} /></div>
            <div className='mr-4 text-orange-500'> {contact.email} </div>
        </div>
        <div className='pb-2 flex flex-1 flex-row text-gray-500 text-sm'>
            <div className='mr-4'> {contact.description} </div>
        </div>
      </div>
    </>
  )
}

export default AcceptedCard
