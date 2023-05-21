import React, { useState } from 'react'

const Temparature = () => {
  const [city, setCity] = useState('')
  const [result, setResult] = useState('')
  const submithandler = (e) => {
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
      .then(res => res.json())
      // .then(json=>console.log(json))
      .then(data => {
        const kelvin = data.main.temp;
        const celsius = kelvin - 273.5;
        setResult("Temperature at " + city + "\n" + Math.round(celsius) + "°C" + "and wind speed is" + "\n" + data.wind.speed);
        //setResult("winds at"+city+"\n"+data.wind.speed)
      }).catch(err => console.log(err))
  }
  return (
    <>
      {/* <pre>{JSON.stringify(result)}</pre> */}
      <div className='card'>
        <div className='card-header'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ShFSqx_ixqXXTFxQXNk_je6Ua0wh9rwMYA&usqp=CAU"
            alt='weatherimage' height="150px" width="200px" data-testid='avatar' />
          <h3 data-testid='html-element'>Check your city weather</h3>
          <h5>{result}</h5>
        </div>
        <div className='card-body'>
          <form onSubmit={submithandler} data-testid="invalid-form">
            <input type='search' value={city} onChange={(e) => setCity(e.target.value)} className='form-control' placeholder='Enter your city' required data-testid="required-input"  /><br />
            <button data-testid='button' className='btn btn-secondary'>search</button>
          </form>
        </div>
        </div>

    </>
  )
}

export default Temparature