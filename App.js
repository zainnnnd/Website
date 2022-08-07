import Svgimage from './component/Svgimage';
import toast, { Toaster } from 'react-hot-toast';
import Card from './component/Card';
import Header from './component/Header';
//import Shoaib from './component/Shoaib';
//import MyModal from './component/MyModel';
//import NewForm from './component/NewForm';
function App() {
  return (
        <div className="bg-rose-200 h-screen shadow">

       <Header />
     
        <Svgimage />
        <Card />
       
       
       </div>


    
  );
}

export default App;
//className="bg-blue-200 shadow-xl font-semibold rounded-md h-5 "    <button >Click to login</button>
//<ul className='flex'>
/*<li className='px-4'>HOME</li>
<li>SEARCH</li>
</ul>*/