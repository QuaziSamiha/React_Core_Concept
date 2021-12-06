import MapArray from "./components/MapArray";
import ReactProps from "./components/ReactProps";
import ReactUseEffect from "./components/ReactUseEffect";
import ReactUseState from "./components/ReactUseState";

function App() {

  const dogsName = ['Vondo', 'Sandu', 'Pandu', 'Jojo', 'Vojo'];
  const cats = ['titu', 'pipu', 'juju', 'ukku', 'vukku'];
  const friends = [
    { name: 'Jarin', age: 12 },
    { name: 'Era', age: 22 },
    { name: 'Turna', age: 24 },
    { name: 'Bushra', age: 22 },
  ];

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

      <p className='text-indigo-700 font-bold font-5xl text-center'>Render Multiple Component from an Array Recap</p>
      <div className='bg-gray-300 p-4 text-center my-4'>
        {
          cats.map(cat => <li>{cat}</li>)
        }

        {
          // passing hard coded and dynamic data
          // cats.map(cat => <MapArray catName={cat} detailInfo="My lovelu doglu is Vondul" />)
        }

        {
          friends.map(friend => <MapArray friendName={friend.name} friendAge={friend.age} />)
        }
      </div>

      <p className='text-indigo-700 font-bold font-5xl text-center'>Load Data from API Using useEffect</p>
      <div className='bg-pink-300 p-4 text-center my-4'>
        <ReactUseEffect />
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
