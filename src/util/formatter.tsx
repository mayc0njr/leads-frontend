import * as Icon from '@phosphor-icons/react';
import dateFormat from 'dateformat';

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol',

});

export function formatCurrency(value: number) {
    return currencyFormatter.format(value);
}
export function formatDateInvited(date: string): string {
    return dateFormat(date, 'mmmm d @ h:MM tt');
}

export function formatDate(date: string): string {
    return dateFormat(date, 'mmmm d yyyy @ h:MM tt');
}
    
export function firstName(name: string) : string {
    if(name)
        return name.split(' ')[0];
    return '';
}


export function firstLetter(name: string) : string {
    if(name)
        return name[0];
    return '?';
}
export function getCategoryIcon(category: number, size = 24, weight: Icon.IconWeight = "regular") {
    switch (category) {
        case 1:
            return (
                <>
                <Icon.Suitcase size={size} weight={weight}/>
                </>
            )
        case 2:
            return (
                <>
                <Icon.Camera size={size} weight={weight}/>
                </>
            )
        case 3:
            return (
                <>
                <Icon.Shield size={size} weight={weight}/>
                </>
            )
        case 4:
            return (
                <>
                <Icon.Wrench size={size} weight={weight}/>
                </>
            )
        case 5:
            return (
                <>
                <Icon.Gavel size={size} weight={weight}/>
                </>
            )
        default:
            return (
                <>
                <Icon.QuestionMark size={size} weight={weight}/>
                </>
            )
    }
}