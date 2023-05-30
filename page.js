import Image from 'next/image'

import React from 'react' 
import ReactStars from 'react-stars'

export default function Home() {
  return (
    <>
      <div className='bg-[#020714] flex justify-center w-auto h-[1000px]'>
        <div className='mt-16 border-[1px] h-[600px] w-[550px] flex justify-between items-center  border-white'>
          <div className='flex-row'>
            <div className='flex justify-between m-4'>
              <h1 className='text-white text-xl capitalize'>products</h1>
              <select name="cars" id="cars" className='ml-6 w-[400px]'>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>


            <div className='flex justify-between m-4'>

              <h1 className='text-white capitalize'>employee id</h1>
              <input type="number" id="fname" name="fname" placeholder='emp id' className='ml-6 w-[400px]'></input>
            </div>


            <div className='flex justify-between m-4'>

              <h1 className='text-white capitalize'>suggestions</h1>
              <textarea id="w3review" name="w3review" rows="4" cols="55" className='w-[400px]'>

              </textarea>

            </div>

            <div className='flex justify-between m-4'>

              <h1 className='text-white capitalize'>resolution</h1>
              <textarea id="w3review" name="w3review" rows="4" cols="55" className='w-[400px]'>

              </textarea>

            </div>
            <div className='flex bg-[#ffffff1e] w-[400px] h-[50px] justify-around m-4 ml-[130px]'>
              <h1 className='text-white text-xl capitalize mr-4 mt-2'>product rating</h1>
              <ReactStars
                count={5}
                size={24}
                color2={'#ffd700'} />

            </div>

            <div className='flex justify-between m-4'>
              <h1 className='text-white text-xl capitalize'>rating</h1>
              <select name="cars" id="cars" className='ml-6 w-[400px]'>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
