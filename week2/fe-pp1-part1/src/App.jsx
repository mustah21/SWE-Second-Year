import React from 'react';
import './idcard.css';
import IdCard from './idcard';
import Random from "./Random"

function App() {
  return (
    <>
      <h1>Id Cards</h1>

      <IdCard
        name='John'
        lastname='Doe'
        gender='male'
        height={1.76}       // make height in meters like in your IdCard component
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        name='Delores'
        lastname='Obrien'
        gender='female'
        height={1.74}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </>
  );

}


export default App;
