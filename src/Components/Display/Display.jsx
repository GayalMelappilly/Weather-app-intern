import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY } from '../../Constants/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'


function Display() {
    const [city, setCity] = useState('')
    const [input, setInput] = useState('')

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`).then((response) => {
            console.log("CITY : " + city)
            console.log(response.data)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [city])

    return (

        <div className='mx-auto h-5/6 bg-black bg-opacity-10 justify-center flex py-10 shadow-2xl shadow-black-400 w-5/6 rounded-lg'>
            <div className='w-5/12'>
                <div className='px-10 flex items-center bg-white bg-opacity-10 h-1/6 rounded-lg shadow-lg shadow-black-400'>
                    <div className='py-4 relative'>
                        <input className='pl-10 pr-4 py-2 rounded-lg outfit-regular rounded-lg h-8 bg-black bg-opacity-10 placeholder-white text-white outline-none' value={input} onChange={(e) => { setInput(e.target.value) }} type="text" id='city' placeholder='Search for location' />
                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                            <FontAwesomeIcon className='text-white' icon={faSearch} />
                        </div>
                        &nbsp;
                        <button onClick={(e) => { setCity(input) }} className='px-6 bg-black absolute bg-opacity-10 rounded-lg h-8 text-white'>Search</button>
                    </div>
                </div>
                <div className="py-2"></div>
                <div className='px-10 bg-white bg-opacity-10 h-5/6 rounded-lg shadow-lg shadow-black-400'>
                    <h1></h1>
                </div>
            </div>

            <div className='px-2'></div>

            <div className="w-6/12">
                <div className='px-10 bg-white bg-opacity-10 h-2/6 rounded-lg shadow-lg shadow-black-400'>
                    <h1></h1>
                </div>
                <div className="py-2"></div>
                <div className='px-10 bg-white bg-opacity-10 h-4/6  rounded-lg shadow-lg shadow-black-400'>
                    <h1></h1>
                </div>
            </div>
        </div>

    )
}

export default Display

//bg-gradient-to-bl from-cyan-400 to-yellow-100