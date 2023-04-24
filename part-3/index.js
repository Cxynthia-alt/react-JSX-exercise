const Person = (props) => {

  const displayName = props.name.length > 8 ? props.name.slice(0, 6) : props.name
  const reply = props.age > 18 ? "You can vote!" : "You must be 18."
  return (
    <div>
      <h2>{displayName}</h2>
      <h3>{reply}</h3>
      <p>Your hobbies are </p>
      <ul>
        {props.hobbies.map((h, idx) => <li key={idx}>{h}</li>)}
      </ul>
    </div>

  )
}


const App = () => (
  <div>
    <p>Learn some information about this person</p>
    <Person name="Joy" age={20} hobbies={["surfing", "camping", "bungee-jumping"]} />
    <Person name="Aleksandra" age={16} hobbies={["reading", "swimming", "hiking"]} />
    <Person name="Lisa" age={21} hobbies={["dancing", "traveling", "singing"]} />
  </div>
)
const root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App />)
