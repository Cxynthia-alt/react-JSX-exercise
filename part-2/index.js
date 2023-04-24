const Tweet = (props) => {
  return (
    <div>
      <span>username:{props.userName}</span>
      <span>name:{props.name}</span>
      <span>date:{props.date}</span>
      <p>message:{props.msg}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Tweet userName="Joy" name="Joy Ron" date={new Date().toDateString()} msg="Hi!" />
      <Tweet
        name="Elie Schoppik"
        userName="eschoppik"
        date={new Date().toDateString()}
        msg="#Ilovehashtags"
      />
      <Tweet
        name="Tim Garcia"
        userName="TimGarcia0"
        date={new Date().toDateString()}
        msg="Follow me on Twitter!"
      />
    </div>
  )
}
const root = document.getElementById("root")
ReactDOM.createRoot(root).render(<App />)
