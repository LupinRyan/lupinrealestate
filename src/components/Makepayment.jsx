import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Makepayment = () => {
  // we can use the useLoaction hook to get the details that have been passed from the get products component
  const {houses} = useLocation().state || {};

  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // implement the function that will handle the pay now activity
  const payNow = async (e) =>{
    // prevent the site from reloading
    e.preventDefault()

    //set the loading hook with a message
    setLoading("Please wait as we complete the payment...")

    try{
      // create a new form data object
      const data = new FormData()

      // append the two details into the form data created
      data.append("amount", houses.product_cost)
      data.append("phone", phone)

      // access the post function in axios
      const response = await axios.post("https://lup3n.pythonanywhere.com/api/mpesa_payment", data)

      // set the loading hook back to default
      setLoading("");

      // update the success hook with the response from the API
      setSuccess(response.data.message)

      // clear the the phone number hook
      setPhone("");
    }
    catch(error){
      // set the loading hook back to default
      setLoading("");

      // update the error hook with the error response
      setError(error.message)
    }
  }

  // console.log(houses)
   //specify the image url
   const img_url = "https://lup3n.pythonanywhere.com/static/images/"

  return (
    <div className="row mt-4 p-3">
      <div className="col-md-6">
        <div className="card shadow">
          <div className="card-body">

              <img src={img_url + houses.product_photo} alt="" className="product_img"/>

              <h3 className="text-info">{houses.product_name}</h3>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <h1 className="text-danger"> Kes {houses.product_cost} </h1>
        <p className="text-dark"> {houses.product_description} </p>
        <h5 className="text-success">LIPA NA M-PESA</h5>
        <form className="card shadow p-4" onSubmit={payNow}>

          <b className="text-success">{loading}</b>
          <b className="text-success">{success}</b>
          <b className="text-danger">{error}</b>

          <input
          type="number"
          value={houses.product_cost}
          readOnly
          className="form-control" /> <br />

          <input
          type="number"
          placeholder="Enter the phone number 2547XXXXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-control" /> <br /> <br />

          {/* {phone} */}

          <button className="btn btn-success"><b>Pay Now</b></button>
        </form>
      </div>
    </div>
  )
}

export default Makepayment;
