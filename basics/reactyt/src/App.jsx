// // import React from "react"
// // import { useState } from "react"

import { useState } from "react";

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




const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Submitted');
    setUser('')
  }

  const [user , setUser] = useState('')

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className="text-white rounded-3xl p-10">
        <input value={user} onChange={(e) => {
          setUser(e.target.value);
        }} type="text"  placeholder="Enter Your Name" className="m-5 p-4 bg-transparent placeholder-gray-500 border-2 border-green-200 rounded-lg"/>
        <button type="submit" className="p-3 rounded-md bg-green-600" >Submit</button>
      </form>
    </div>
  )
}
export default App