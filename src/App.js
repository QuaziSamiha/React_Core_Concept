import ReactProps from "./components/ReactProps";
import ReactUseState from "./components/ReactUseState";

function App() {

  const dogsName = ['Vondo', 'Sandu', 'Pandu', 'Jojo', 'Vojo'];

  return (
    <div>
      <p className='text-indigo-600 font-bold font-5xl text-center'>Creating Component is a fundamental concept in react</p>

      <div className='bg-indigo-500 p-2 m-3 text-white text-center'>
        <h1>single html element component</h1>
        <SingleHtmlComponent></SingleHtmlComponent>
      </div>

      <p className='text-indigo-600 font-bold font-5xl text-center'>Calling a component multiple times</p>
      <SingleHtmlComponent />
      <SingleHtmlComponent />
      <SingleHtmlComponent />
      <SingleHtmlComponent />

      <MultipleHtmlComponent />
      <MultipleHtmlComponent />
      <MultipleHtmlComponent />
      <MultipleHtmlComponent />
      <MultipleHtmlComponent />

      <p className='text-indigo-600 font-bold font-5xl text-center'>Pass Data (Static or Hard or Fixed Coded data) through Props (Properties)</p>
      <ReactProps dogluName='Vondul' age='11' />
      <ReactProps dogluName='Sandy' />

      <p className='text-indigo-600 font-bold font-5xl text-center'>Pass Data (Dynamic data) through Props (Properties)</p>
      <ReactProps dogluName={dogsName[2]} />

      <p className='text-indigo-700 font-bold font-5xl text-center'>How to write and Destructure useState</p>
      <div className='bg-green-300 p-4 text-center'>
        <ReactUseState />
      </div>
    </div>
  );
}

function SingleHtmlComponent() {
  return <p>Vondul is a vondo</p>
}

function MultipleHtmlComponent() {
  return <div className='text-center m-4 border-2 border-red-600 rounded-md' >
    <h1>This is my component</h1>
    <h3>It can be called multiple times</h3>
  </div>
}

export default App;
