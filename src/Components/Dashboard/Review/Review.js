import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Review= () => {

    const [info, setInfo]= useState({})
    const [file, setFile]=useState('')
    console.log( info)
    const handleBlur=e=>{
      const newInfo={...info}
      newInfo[e.target.name]=e.target.value
      setInfo(newInfo)
    }
  
    const handleFileChange=e=>{
      const newFile=e.target.files[0]
      setFile(newFile)
    }
  
    const handleSubmit=()=>{
  
      const formData = new FormData()
      formData.append('file', file)
      formData.append('name', info.name)
      formData.append('coname', info.coname)
      formData.append('description', info.description)
    
      fetch('http://localhost:4000/reviews', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
    }
  
    return (
      <section>
              <div  className="row">
                  <div className="col-md-2 col-sm-6 col-12">
                      <Sidebar/>
                  </div>
                  
                  <div className="col-md-8 p-4 pr-5">
          <h5 className="text-brand">Add Services</h5>
          {/* form */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="exampleInputName">Name</label>
              <input onBlur={handleBlur} type="text" className="form-control" name="name" aria-describedby="emailHelp" placeholder="Enter title"/>
              
            </div>
            <div className="form-group">
              <label for="exampleInputCom">Company name</label>
              <input onBlur={handleBlur} type="text" className="form-control" name="coname" aria-describedby="emailHelp" placeholder="Enter title"/>
              
            </div>
            <div className="form-group">
              <label for="exampleInputDes">Service Description</label>
              <input onBlur={handleBlur} type="text" className="form-control" name="description"  placeholder="Enter description"/>
            </div>
            <div className="form-group">
              <label for="exampleInputFile">Upload Image</label>
              <input onChange={handleFileChange} type="file" className="form-control" 
              />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
                  
              </div>
          </section>
    );
  };

export default Review;