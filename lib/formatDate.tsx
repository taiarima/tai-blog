export default function formatDate(inputDate: string): string {
    const months = [
      "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
      "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];
  
    const [year, month, day] = inputDate.split("-");
    const formattedMonth = months[parseInt(month) - 1];
  
    return `${day} ${formattedMonth} ${year}`;
  }