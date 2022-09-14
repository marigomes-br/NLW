interface ButtonProps{
  title: string; //pra deixar sem obrigatoriedade: title?: [..] 
}

function Button(props: ButtonProps){
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <>
      <Button title="Send 1"/>
      <Button title="Send 2"/>
      <Button title="Hello World"/>
    </>
  )
}

export default App
