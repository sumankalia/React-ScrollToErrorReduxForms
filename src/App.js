import ScrollForm from "./Pages/ScrollForm";

const App = () => {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="App">
      <ScrollForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
