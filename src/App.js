import React, {useRef, useEffect, useState} from 'react';
import Input from 'components/Input';
import { AiFillFacebook } from 'react-icons/ai';


function App() {
  const ref= useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const enabled = username && password;

  useEffect(() => {
    let images = ref.current.querySelectorAll('img'),
      total = images.length,
      current = 0;
    const imageSlider = () => {
      if(current > 0){
        images[current - 1].classList.add('opacity-0');
      } else{
        images[total - 1].classList.add('opacity-0');
      }
      images[current].classList.remove('opacity-0');
      if(current === total - 1){
        current = 0;
      } else {
        current += 1;
      }
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);

    return() => {
      clearInterval(interval);
    }

  }, [ref]);


  return (
    <div className='w-full h-full flex flex-wrap overflow-auto justify-center items-center gap-x-8'>
      <div className='hidden lg:block w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]'>
        <div className='w-[250px] h-[538px] absolute top-[27px] right-[18px]' ref={ref}>
          <img className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png" alt="" />
          <img className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png" alt="" />
          <img className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png" alt="" />
          <img className='w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear' src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png" alt="" />
        </div>

        
      </div>

      <div className='w-[350px] grip gap-y-3'>
        <div className='bg-white border px-[40px] pb-6 pt-10'>
          <a href="#" className='flex justify-center pb-6'>
            <img className='h-[51px]' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
          </a>
          <form className='grid gap-y-1.5'>

            <Input type='text' value={username} label='Phone number, username or email' onChange={e => setUsername(e.target.value)}/>

            <Input type='password' value={password} label='Password' onChange={e => setPassword(e.target.value)}/>


            <button type='submit' disabled={!enabled} className='h-[30px] mt-1 rounded bg-brand text-white text-sm font-semibold disabled:opacity-50'>Log In</button>

            <div className='flex items-center mb-3.5 mt-2.5'>
              <div className='h-px bg-gray-300 flex-1' />
              <span className='px-4 text-[13px] font-semibold text-gray-500'>OR</span>
              <div className='h-px bg-gray-300 flex-1' />
            </div>

            <a href='#' className='mb-2.5 flex justify-center items-center gap-x-2 text-sm font-semibold text-facebook'>
              <AiFillFacebook size={20} />
              Log in with Facebook
            </a>

            <a href="#" className='text-xs flex items-center justify-center font-semibold text-link'>
              Forgot password?
            </a>

          </form>
        </div>

        <div className='bg-white border p-4 text-sm text-center '>
          Don't have an account? <a href="#" className='font-semibold text-brand'>Sign up</a>
        </div>
      </div>


      
    </div>
  );
}

export default App;
