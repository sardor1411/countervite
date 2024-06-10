import { useState } from 'react';
import './App.css';
import { AiOutlineClear } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='mt-[12%]'>
      <p className='text-center font-bold text-[25px] mb-[20px]'>Counter App</p>
      <div className='flex m-auto w-[20%] border-none justify-between '>
        <button className='bg-green-700 text-white border-none w-[25%] text-center rounded-[50px] text-[22px] flex justify-center h-[40px] items-center' onClick={() => setCount(count + 1)}>
          <FaPlus />
        </button>
        <p className='bg-pink-600 text-white border-none w-[25%] text-center rounded-[50px] flex justify-center h-[40px] items-center'>{count}</p>

        <button className='bg-green-700 text-white border-none w-[25%] text-center rounded-[50px] text-[22px] flex justify-center h-[40px] items-center' onClick={() => setCount(count > 0 ? count - 1 : 0)}>
          <FaMinus />
        </button>
      </div>

      <button className='w-[5%] m-auto flex bg-green-700 text-white border-none  text-center rounded-[50px] mt-[25px] text-[22px] justify-center h-[40px] items-center' onClick={() => setCount(0)}>
        <AiOutlineClear />
      </button>
    </div>
  );
}

export default App;
