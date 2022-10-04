import * as React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [count,setCount]=useState(0);
  // var count = 0;
  const hotel = {
    name: 'Park',
    rooms: 120,
    booked: 0,
    checkAvailability: function () {
      return this.rooms - this.booked;
    },
  };
  const [num, setNum] = useState(hotel.checkAvailability());
  // const Roomcheck = () => {
  //     setCount(hotel.rooms-1)
  // };
  const booking=()=>{
    if(hotel.checkAvailability()>0){
      setNum(n=>n-1)
      setCount(a=>a+1)
     return (<p>1 room booked</p>)
    }
    else{
      return (<p>Booking Error</p>)
    }
    // const nBookRoom=document.getElementById('booking');
    
 
    
  }
  return (
    <div>
      <div className="hotel">
        <div className="hotelId">
          {/* Hotel Name */}
          <p id="hotel_name">{hotel.name}</p>
          {/* Total rooms */}
          <h2 id="hotel_room">
            Total Rooms:
            <span style={{ color: '#fff' }}>{hotel.rooms}</span>
          </h2>
          {/* Check room */}
          <h2 id="check_room">
            Available Room:
            <span style={{ color: '#fff' }}>{num}</span>
          </h2>
          {/* Book room */}
          <h2 id="booking_room">
            Booked Room: <span style={{ color: '#fff' }}>{count}</span>
          </h2>
        
          <h2> Enter to Book room:</h2><input type="number" id="booking"/>
          {/* Button section */}
          <section id="book" className="booked">
            {/* <button id="btn" className="Btn" onClick={Roomcheck}>
              Check Room
            </button> */}
            <button id="book_room" className="Btn" onClick={booking}>
              Book Room
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
