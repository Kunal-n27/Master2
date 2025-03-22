// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
//import AddForm from './components1/AddForm';
import Rest from './components/Rest';


// let name = "Kolhapur"
function App() {
  return (
    <>
    <Navbar/>
    <Rest></Rest>
    <div className='container'>
     
    {/* <TextForm></TextForm> */}
    </div>

   
  
      {/* <Navbar title="Textutils"/>
      <TextForm></TextForm> */}
      {/* <div className="row justify-content-center mt-3">
          <AddForm />
      </div> */}
    </>
    
  );
}

export default App;
