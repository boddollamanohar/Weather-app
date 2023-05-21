import React, { useState } from 'react'
import Temparature from './Temparature'
import axios from 'axios';

const Weatherapp = () => {
 const [country, setCountry] = useState('')
  const [updatedata, setUpdatedata] = useState({})
  //const [flag,setFlag]=useState()
  //console.log(flag)
  const submithandler = (e) => {
    e.preventDefault()
    axios.get(`https://restcountries.com/v3.1/name/${country}`)
       //.then(respone=>respone.data)
      // .then(data=>console.log(data.data))
      .then(data => setUpdatedata(data.data[0]))
  }
  return (
    <div className='container mt-5'>

      <div className='row'>
        <div className='col'>
          <pre>{JSON.stringify(updatedata)}</pre>
           <div className='card'>
            <div className='card-header bg-primary text-white'>
              <h1 className='text-center'>Weather App</h1>
            </div>
            <div className='card-body'>
              <form onSubmit={submithandler}>
                <input type='text' placeholder='Enter Country....' className='form-control' value={country} onChange={(e) => setCountry(e.target.value)} /><br />
                {country ? <button className='btn btn-info'>Submit</button> : <button className='btn btn-info' disabled>Submit</button>}
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* showing data */}
      <div className='row mt-5'>
        <div className='col col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <img src={updatedata.flags} alt='' />
              <h3>Flag :{updatedata.flag}</h3>
              <h3>Capital : {updatedata.capital}</h3>
              <h4>Population :{updatedata.population}</h4>
              <h4>Region :{updatedata.region}</h4>
              <button className='btn btn-success'>Capital Weather</button>
            </div>
          </div>
        </div>
        <div className='col col-md-6'>
          <Temparature />
        </div>
      </div>
    </div>
  )
}

export default Weatherapp