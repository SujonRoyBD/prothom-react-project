import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = ()=>{
    setCount(count + 1)
  }
  return (
    <div>
      <h1 className='text-5xl text-center font-bold text-black py-2'>Counter Apps</h1>
     <div className='w-1/2 mx-auto p-10 border shadow-lg mt-10'>
     <h1 className='text-4xl font-bold text-black text-center mb-6'>Count : {count}</h1>
      <div className='flex justify-center items-center gap-6'>
      <button onClick={handleIncrement} disabled={count >= 10} className={`py-1 px-6 rounded-lg text-white font-bold text-lg ${count >= 10 ? "bg-red-500" : "bg-green-500"}`}>Increment</button>
      <button onClick={()=>setCount(count - 1)} className='py-1 px-6 rounded-lg bg-gray-500 text-white font-bold text-lg '>Decrement</button>
      <button onClick={()=>setCount(0)} className='py-1 px-6 rounded-lg bg-red-500 text-white font-bold text-lg '>Reset</button>
      </div>
     </div>
    </div>
  );
};

export default App;



