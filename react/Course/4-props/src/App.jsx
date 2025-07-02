import Student from "./Student"

function App() {


  return (
    <>
      <Student name='Bob' age={30} isStudent={true}></Student>
      <Student name='Patrick'age={40} isStudent={false}></Student>
      <Student name='Sqidward' age={50} isStudent={false}></Student>
      <Student name='Sandy' age={27} isStudent={true}></Student>
      <Student></Student>
    </>
  )
}

export default App
