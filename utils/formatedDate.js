const formatDate = (time) => {
    // Ensure time is a Date object
    if (!(time instanceof Date)) {
      time = new Date(time);
    }
  
    // Define the months and suffixes for day numbers
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const daySuffixes = ['st', 'nd', 'rd', 'th'];
  
    // Extract date components
    const month = months[time.getMonth()];
    const day = time.getDate();
    const year = time.getFullYear();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
  
    // Determine the day suffix (st, nd, rd, or th)
    const daySuffix = day < 4 ? daySuffixes[day - 1] : daySuffixes[3];
  
    // Format the date
    const formattedDate = `${month} ${day}${daySuffix}, ${year} at ${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    
    return formattedDate;
  };

module.exports = formatDate