import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

const Shoaib = () => {
  return (
    <div>
      <button onClick={notify} className="bg-black hover:bg-red-300 text-blue-500">Make me a toast</button>
      
    </div>
  );
};
export default Shoaib;