// // import React from "react"
// // import { useState } from "react"

import Card from "./components/card";

// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";

// import { useState } from "react";

// const App = () => {

//   // const [user, setUser] = useState('Riss');

//   // const changeUser = () => {
//   //   setUser("Admin")
//   // }

//   // const PrevUser = () => {
//   //   setUser('Risss')
//   // }

//   // const [num , setNum] = useState(0)

//   return (
//     // Without using tailwind

//     // <div>
//     //   <h1>My name is {user}</h1>
//     //   <button onClick={changeUser} >Change User</button>
//     //   <button onClick={PrevUser} >Previous User</button>
//     //   <br />
//     //   <h1>My number is {num}</h1>
//     //   <button onClick={() => setNum(num + 1)} >Increment</button>
//     //   <button onClick={() => {
//     //     if (num > 0) {
//     //       setNum(num - 1)
//     //     }
//     //   }} >Decrement</button>
//     // </div>

//     // using Tailwind
//     <div>
//       <h1 className="text-5xl bg-[crimson] text-">Hello Guys</h1>
//     </div>

//   )
// }

// export default App

// two way Binding

// const App = () => {

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log('Submitted');
//     setUser('')
//   }

//   const [user , setUser] = useState('')

//   return (
//     <div>
//       <form onSubmit={(e) => {
//         submitHandler(e)
//       }} className="text-white rounded-3xl p-10">
//         <input value={user} onChange={(e) => {
//           setUser(e.target.value);
//         }} type="text"  placeholder="Enter Your Name" className="m-5 p-4 bg-transparent placeholder-gray-500 border-2 border-green-200 rounded-lg"/>
//         <button type="submit" className="p-3 rounded-md bg-green-600" >Submit</button>
//       </form>
//     </div>
//   )
// }
// export default App

// components

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Footer/>
//     </>
//   )
// }

// export default App;

// props dealing

const App = () => {
  const users = [
    {
      username: "johndoe",
      surname: "Doe",
      city: "New York",
      profileImage:
        "https://imgs.search.brave.com/35K0yTkoTucii-1GWUmT-9dlRBj-tO61Zpwucv9k2VA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8x/MC8wNS8xMC81MS9j/YXQtNTYyODk1M182/NDAuanBn",
    },
    {
      username: "janesmith",
      surname: "Smith",
      city: "Los Angeles",
      profileImage:
        "https://imgs.search.brave.com/deIHwItTnT7-l_Ge0g3nb0MGX6UakwDGSZKyMNrt03s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/NC8yMS8yMi8yOS9n/aXJsLTEzNDQ2NDZf/NjQwLmpwZw",
    },
    {
      username: "michaelbrown",
      surname: "Brown",
      city: "Chicago",
      profileImage:
        "https://imgs.search.brave.com/EXbCI70C34_jrZtTcxYNprNaKD5a493ynO-Md54LBzE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aS1qdXN0LW1hZGUt/bXktcHJvZmlsZS11/c2luZy1teS1kYXJr/LXR3aXN0ZWQtZmFu/dGFzeS1hcy1hLXYw/LXJxNjhsMnRxMW81/ZTEucG5nP3dpZHRo/PTY0MCZjcm9wPXNt/YXJ0JmF1dG89d2Vi/cCZzPWE1NmNhNzZj/MTBjNjE4MzUzOWFm/NDE5MzE5ZTJlNTA1/OTdiMDA4NTQ",
    },
    {
      username: "emilydavis",
      surname: "Davis",
      city: "Houston",
      profileImage:
        "https://imgs.search.brave.com/qwpmigulmS26EBtcxnWPzxBhS3y6ZruxXkyr8GInbZc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMnFw/MHNpb3RsYTc0Ni5j/bG91ZGZyb250Lm5l/dC9pbWcvdXNlLWNh/c2VzL3Byb2ZpbGUt/cGljdHVyZS90ZW1w/bGF0ZV8wLmpwZw",
    },
    {
      username: "davidwilson",
      surname: "Wilson",
      city: "Phoenix",
      profileImage:
        "https://imgs.search.brave.com/AWgFU-g5LzdoLwSwzGCP8bs8q9-YXpEI-MAP7hh9DyI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Y29vbC1mb3ItYS1w/cm9maWxlLXBpYy1v/ci1zb21ldGhpbmct/djAtOG01ZHQzOTR1/cDZlMS5qcGVnP2F1/dG89d2VicCZzPTFj/NDBkNjU4NmFkYWMx/ZjAxOTc0NTEwODNl/MTYwMzEwODgxN2Q3/ZjQ",
    },
  ];

  // var user = 'Rishav'
  // let surname = 'Kumar'
  // var city = 'Jharkhand'

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {users.map((ele, idx) => {
          return (
            <Card
              key={idx}
              username={ele.username}
              city={ele.city}
              surname={ele.surname}
              profileImage={ele.profileImage}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
