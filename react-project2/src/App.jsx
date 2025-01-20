
// import './App.css'

// const element1 = <h2>Hello</h2>
// const element2 = (<ul>
//   <li>A</li>
//   <li>B</li>
//   <li>C</li>
// </ul>)
// const language = "LAN"

// function BasicExpressions () {
//   const name = "john";
//   const age = 25;
//   const isAdmin = true;

//   return (
//     <div>
//       <p>Name : {name}</p>
//       <p>Age Next Year : {age+1}</p>
//       <p>{name + "'s profile"}</p>
//       <p>{`${name} is ${age} years old`}</p>
//       <p>Admin status : {String(isAdmin)}</p>
//     </div>
//   )
// }

// function App() {
//   return (
//     <>
//       <h1>JSX</h1>

//       {element1}
      
//       {element2}
      
//       {language}

//       <BasicExpressions/>
//     </>
//   )
// }

// export default App

////----------------------------------------------------

// import './App.css'

// function ObjectArrayExpressions() {
//   const user = {
//     name: "Jane",
//     email: "jane@example.com"
//   };
//   const colors = ["red", "blue", "green"];
//   const numbers = [1, 2, 3, 4, 5];
  
//   return (
//     <div>
//       <p>User: {user.name} ({user.email})</p>
//       <p>First color: {colors[0]}</p>
//       <p>Color count: {colors.length}</p>
      
//       <p>Doubleds: {
//         numbers.map(n => n * 2).join(", ")
//       }</p>
      
//       <p>Evens: {
//         numbers.filter(n => n % 2 === 0).join(", ")
//       }</p>
//     </div>
//   );
// }

// function App() {
//  return <ObjectArrayExpressions />
// }

// export default App

////----------------------------------------------------

import './App.css'

function FunctionExpressions() {
  const getGreeting = (name) => `Hello, ${name}!`;
  
  const formatDate = (date) => {
    return date.toLocaleDateString();
  };
  
  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + item.price, 0);
  };

  const items = [
    { id: 1, price: 10 },
    { id: 2, price: 20 }
  ];
  
  const Hi = (date) => {return date.getHours < 12 ? "morning~" : "afternoon~"} 

  return (
    <div>
      <p>{getGreeting("Alice")}</p>
      <p>Today: {formatDate(new Date())}</p>     
      <p>Total: ${calculateTotal(items)}</p>      
      <p>Good {(() => {
        const hours = new Date().getHours();
        return hours < 12 ? "morning!" : "afternoon!";
      })()}</p>
      <p>Good {Hi(new Date())}</p>

    </div>
  );
}


function App() {
 return <FunctionExpressions />
}

export default App