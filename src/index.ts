function calculateAverage(numbers: number[]): number {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum / numbers.length; 
  }
  
  const numbers = [10, 20, 30, 40, 50];
  
  const average = calculateAverage(numbers);
  console.log(`Average: ${average}`);
  