

  const numbers: number[] = [1.111111, 2.2222222, 3.33333333, 4.444444444];

  const names: string[] = ['Alice', 'Bob', 'Charlie'];


  numbers.forEach((num) => {
    console.log(num.toFixed(2));
  });


  const numberReturnNumber: number[] = numbers.map((num) => num * 2); //-> return nuber
  const numberStrins: string[] = numbers.map((num) => num.toFixed(2));

  console.log(numberStrins);