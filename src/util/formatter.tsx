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