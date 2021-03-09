function main() {
  for(let i = 1;i <= 100; i++) {
    if(Number((i / 3)) === (i / 3) && (i / 3) % 1 === 0 && Number((i / 5)) === (i / 5) && (i / 5) % 1 === 0) {
      console.log("FizzBuzz")
    }else if (Number((i / 3)) === (i / 3) && (i / 3) % 1 === 0) {
      console.log("Fizz")
    }else if (Number((i / 5)) === (i / 5) && (i / 5) % 1 === 0) {
      console.log("Buzz")
    }else {
      console.log(i)
    };
  };
};

main()