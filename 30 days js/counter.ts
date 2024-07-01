function counter(n:number):()=>number {
    let count:number = n;
    return function():number {
      return count++;
    };
  }

let count:()=>number = counter(10);
console.log(count());
console.log(count());
console.log(count());
console.log(count());
