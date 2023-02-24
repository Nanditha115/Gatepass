import React from 'react'
import { useState } from 'react'
import axios from 'axios';


const VisitorForm = () => {

    const [visitorData, setVisitorData] = useState({
        "name":"",
        "email":"",
        "vehicleNumber":"",
        "roomNo":"",
        "purpose":""
    })

    const handleChange = (e) => {
        let name = e.target.name;
        setVisitorData({...visitorData, [name] : e.target.value})
    }

    const handleSubmit = () => {
        console.log(visitorData)
        try {
            let result = axios.post(          
              "http://localhost:3000/visitorDataDB",                                           
                visitorData
            );
          } catch (error) {
            console.error(error.response.visitorData);   
          }
    }

  return (
    <div>
        <h1>Form</h1>

        <form>

            <label htmlFor='name'>NAME: </label>
            <input type="text" name="name" onChange={(e) => handleChange(e)}/> <br/> <br/>

            <label htmlFor='email'>EMAIL: </label>
            <input type="text" name="email" onChange={(e) => handleChange(e)}/> <br/> <br/>

            <label htmlFor='vehicleNumber'>VEHICLE NUMBER: </label>
            <input type="text" name="vehicleNumber" onChange={(e) => handleChange(e)}/> <br/> <br/>

            <label htmlFor='roomNo'>ROOM NUMBER: </label>
            <input type="text" name="roomNo" onChange={(e) => handleChange(e)}/> <br/> <br/>

            <label htmlFor='purpose'>PURPOSE OF VISIT: </label>
            <input type="text" name="purpose" onChange={(e) => handleChange(e)}/> <br/> <br/>

            <button type="button" onClick={handleSubmit}>SUBMIT</button>

        </form>
    </div>
  )
}

export default VisitorForm