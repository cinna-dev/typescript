import * as _ from 'lodash';

const hello = async () => {
  return 'world';
}

const url = new URL('...');

let lucky: number;

lucky = '23';

// Custom Type

type Style = 'bold' | 'italic';

let font: Style;

font = 'bold';

// Object and Interface

interface Person {
  first: string,
  last:  string,
  [key: string]: any  // allows any additional key:value to the object
}

const person: Person = {
  first: 'Jeff',
  last: 'Delaney'
}

const person2: Person = {
  first: 'Usain',
  last: 'Bolt',
  fast: true,
}


// Functions

function pow(x: number, y: number ): void {
    Math.pow(x, y).toString();
}

pow(23 ,33);


// Array

const arr: number[] = [];

arr.push(1);
arr.push('1');
arr.push(false);


// can also be an array of object each object defined by a Interface

const arr2: Person[] = [];

arr2.push({first:'Jeff',last:23});


// Tulpe

type MyList = [number, string, boolean] // a Tulpe is a Array in which each index has a predefined type
type MyOptList = [number?, string?, boolean?] // optional types 

const arr3: MyList = []  // shows error because the default array has no content

arr3.push(1);
arr3.push('1');
arr3.push(false);



function concat(x:number[], y:number[]): number[] {
  return x.concat(y);
}


// Generics

class Observable<T> {  // you can pass a Generic Type like a parameter // its like a placeholder
  constructor(public value: T ) {}  // the Generic will be passed to the variable
}

let x : Observable<number>;  // later insert an actual type 

let y : Observable<Person>;

let z = new Observable(23); // or the Generic will be replaced automatically by an inference type


// Object
