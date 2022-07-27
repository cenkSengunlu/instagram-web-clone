import React, { useState, useEffect, useRef } from 'react';

export default function Input({label, type = 'text', ...props}){
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);

  const inputRef = useRef();

  useEffect(() => {
    if(show){
      setInputType('text');
      inputRef.current.focus();
    } else if(type === 'password'){
      inputRef.current.focus();
      setInputType('password');
    }
  }, [show]);

  return(
  <label className='block relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400'>
    <input ref={inputRef} required={true} type={inputType} className=' px-2 text-xs w-full h-[38px] outline-none valid:pt-[10px] peer' {...props} />
    <small className='absolute top-1/2 left-[9px] text-xs text-gray-400 cursor-text pointer-events-none  -translate-y-1/2 peer-valid:text-[10px] peer-valid:top-2.5 transition-all'>{label}</small>
    {type === 'password' &&  props?.value &&
      <button type='button' className='px-2 h-full flex items-center text-sm font-semibold' onClick={() => setShow(show => !show)}>
        {show ? 'Hide' : 'Show'}
      </button>
    }
  </label>
  )
  
}