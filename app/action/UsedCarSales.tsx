


export function formatDateToMonthAndDay(date: Date) {

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const monthAbbreviation = monthNames[date.getMonth()];
    return `${monthAbbreviation} ${date.getDate()}`;
  }
  
  
  export function formatDateWithoutToLocaleString(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so we add 1.
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  
  
  export function formatDateToMMDDYYHHMMSS(date: Date) {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }
  
  export function formatDateToHHMMSSMMDDYY(date: Date) {
    return date.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  }