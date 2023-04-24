

const FirstComponent = () => {

  return < h1 > My very first component</h1>
}

const NamedComponent = (props) => {
  return <p>My name is {props.name}</p>
}


const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="Joy" />
  </div>
)
const root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App />)
