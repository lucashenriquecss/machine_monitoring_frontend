export class Months {
    static months({ count }: { count: number }): string[] {
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
      ];
      
      const today = new Date();
      const result = [];
  
      for (let i = 0; i < count; i++) {
        const newMonthIndex = (today.getMonth() + i) % 12;
        result.push(months[newMonthIndex]);
      }
  
      return result;
    }
  }
  