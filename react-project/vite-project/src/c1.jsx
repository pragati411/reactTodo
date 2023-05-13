function App() {
  const [display, setDisplay] = useState("users");
  return (
    <div className="App">
      <button
        onClick={() => {
          setDisplay("users");
        }}
      >
        display users
      </button>
      <button
        onClick={() => {
          setDisplay("posts");
        }}
      >
        display hello message
      </button>
      <>{display === "users" ? <Users /> : <Hello />}</>
    </div>
  );
}
