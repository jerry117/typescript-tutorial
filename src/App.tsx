import { type } from 'os';
import React from 'react';
import './App.css';
import InputFeild from './components/InputFeild'

let name: string;
let age:number;
let isStudent:boolean;
let hobbies:string[];
let role:[number, string];


// let printName:(name:string) => void;





// function printName(name:string){
//   console.log(name);
// }

// printName('piyush');

// type Person = {
//   name:string,
//   age?:number,
// }

// let person: Person = {
//   name:'piyush',
// };

// let lotsOfPeople:Person[] ;


type X = {
  a:string;
  b:number;
}

interface Person extends X {
  name:string,
  age?:number,
}


interface Guy extends Person {
  profession:string,
}

// class name extends Person {}

// type X = {
//   a:string;
//   b:number;
// }

type Y = {
  c:string;
  d:number;
}

let y: Y = {
  c : 'asddf',
  d: 42,
}

const App:React.FC = () => {
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputFeild/>
    </div>
  );
}

export default App;
