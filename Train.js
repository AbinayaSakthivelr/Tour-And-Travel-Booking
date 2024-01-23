import React, { useState } from 'react';

const Train = () => {
    const [formData, setFormData] = useState({
      reservationQuota: '',
      journeyFrom: '',
      journeyTo: '',
      phoneNumber: '',
      email: '',
      agreeTerms: false,
      trainNameOrNumber: '',
     date:'',
     month:'',
     year:'',
     name:'',
     age:'',
     gender:'',
     berthchoice:'',
     name1:'',
     age1:'',
     gender1:'',
     berthchoice1:'',
     phoneNumber1: '',
     email1: '',
     name2:'',
     age2:'',
     gender2:'',
     berthchoice2:'',
     phoneNumber2: '',
     email2: '',
     name3:'',
     age3:'',
     gender3:'',
     berthchoice3:'',
     phoneNumber3: '',
     email3: '',
    });


  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith('passengerDetails')) {
      const [fieldName, index] = name.split('-');
      setFormData((prevData) => ({
        ...prevData,
        passengerDetails: prevData.passengerDetails.map((passenger, i) =>
          i === parseInt(index, 10)
            ? { ...passenger, [fieldName]: value }
            : passenger
        ),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
    // Update the state to indicate submission
    setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <>
          <img src={"https://www.jotform.com/uploads/ugurg/form_files/train-3%20(1).650073d93f61d6.36908051.png"} alt="Train" style={{ width: '100%', height: 'auto' }} />
          <h2 style={{ textAlign: 'center',color:'lime',fontsize:'40px' }}>Train Ticket Booking Form</h2>
          <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto',marginLeft:'600px' }}>
            <label>
              Reservation Quota:
              <select
                name="reservationQuota"
                value={formData.reservationQuota}
                onChange={handleChange}
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px', borderRadius: '11px', border: '3px solid black' }}
              >
                <option value="">Select Reservation Quota</option>
                <option value="FirstClass">First Class</option>
                <option value="SecondClass">Second Class</option>
                <option value="ThirdClass">Third Class</option>
                <option value="FourthClass">Fourth Class</option>
              </select>
            </label>
            <label>
              Train Name or Number:
              <input
                type="text"
                name="trainNameOrNumber"
                value={formData.trainNameOrNumber}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px', border: '3px solid black' }}
              />
            </label>
           
           
            <label>
              Journey From
              <input
                type="text"
                name="journeyFrom"
                value={formData.journeyFrom}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px', border: '3px solid black' }}
              />
            </label>
            <label>
              Journery To
              <input
                type="text"
                name="journeyTo"
                value={formData.journeyTo}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px', border: '3px solid black' }}
              />
            </label>
    
            <h3>Departure/Journey Date</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label style={{ width: '30%' }}>
                Date:
                <input
                  type="number"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  style={{ width: '100%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px', border: '3px solid black' }}
                />
                  
              </label>
           
              <label style={{ width: '30%' }}>
                Month:
                <input
                  type="text"
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  required
                  style={{ width: '100%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px', border: '3px solid black' }}
                />
              </label>
              <label style={{ width: '30%' }}>
                Year:
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  style={{ width: '100%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px' , border: '3px solid black'}}
                />
              </label>
            </div>
            
            <div>
                <h3>Passengers Detail 1</h3>
            <label>
               Name :
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px' ,display:'flex',borderRadius:'11px', border: '3px solid black'}}
              />
            </label>
            <label>
               Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px', border: '3px solid black' }}
              />
            </label>
            <label>
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px', border: '3px solid black'}}
              >
                <option value=""> Please Select </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
               
              </select>
            </label>
            <label>
              Berth Choice:
              <select
                name="berthchoice"
                value={formData.berthchoice}
                onChange={handleChange}
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px' ,borderRadius:'11px', border: '3px solid black'}}
              >
                <option value="">Please Select</option>
                <option value="male">Lower</option>
                <option value="female">Upper</option>
                <option value="female">Middle</option>
                <option value="female">Side Lower</option>
                <option value="female">Side Upper</option>
               
               
              </select>
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px' , border: '3px solid black'}}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px', border: '3px solid black' }}
              />
            </label>
            </div>
            <div>
                <h3>Passengers Detail 2</h3>
            <label>
               Name :
              <input
                type="text"
                name="name1"
                value={formData.name1}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px' ,display:'flex',borderRadius:'11px', border: '3px solid black'}}
              />
            </label>
            <label>
               Age:
              <input
                type="number"
                name="age1"
                value={formData.age1}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px' , border: '3px solid black'}}
              />
            </label>
            <label>
              Gender:
              <select
                name="gender1"
                value={formData.gender1}
                onChange={handleChange}
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px', border: '3px solid black'}}
              >
                <option value=""> Please Select </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
               
              </select>
            </label>
            <label>
              Berth Choice:
              <select
                name="berthchoice1"
                value={formData.berthchoice1}
                onChange={handleChange}
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px' ,borderRadius:'20px', border: '3px solid black'}}
              >
                <option value="">Please Select</option>
                <option value="male">Lower</option>
                <option value="female">Upper</option>
                <option value="female">Middle</option>
                <option value="female">Side Lower</option>
                <option value="female">Side Upper</option>
               
               
              </select>
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber1"
                value={formData.phoneNumber1}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px' ,borderRadius:'11px', border: '3px solid black'}}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email1"
                value={formData.email1}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px' , border: '3px solid black'}}
              />
            </label>
            </div>
            <div>
                <h3>Passengers Detail 3</h3>
            <label>
               Name :
              <input
                type="text"
                name="name2"
                value={formData.name2}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px' ,display:'flex',borderRadius:'11px', border: '3px solid black'}}
              />
            </label>
            <label>
               Age:
              <input
                type="number"
                name="age2"
                value={formData.age2}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px', border: '3px solid black' }}
              />
            </label>
            <label>
              Gender:
              <select
                name="gender2"
                value={formData.gender2}
                onChange={handleChange}
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px', border: '3px solid black'}}
              >
                <option value=""> Please Select </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
               
              </select>
            </label>
            <label>
              Berth Choice:
              <select
                name="berthchoice2"
                value={formData.berthchoice2}
                onChange={handleChange}
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px' ,borderRadius:'11px', border: '3px solid black'}}
              >
                <option value="">Please Select</option>
                <option value="male">Lower</option>
                <option value="female">Upper</option>
                <option value="female">Middle</option>
                <option value="female">Side Lower</option>
                <option value="female">Side Upper</option>
               
               
              </select>
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber2"
                value={formData.phoneNumber2}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px' ,borderRadius:'11px', border: '3px solid black'}}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email2"
                value={formData.email2}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px' ,borderRadius:'11px', border: '3px solid black'}}
              />
            </label>
            </div>
            <div>
                <h3>Passengers Detail 4</h3>
            <label>
               Name :
              <input
                type="text"
                name="name3"
                value={formData.name3}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px' ,display:'flex',borderRadius:'11px', border: '3px solid black'}}
              />
            </label>
            <label>
               Age:
              <input
                type="number"
                name="age3"
                value={formData.age3}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px', border: '3px solid black' }}
              />
            </label>
            <label>
              Gender:
              <select
                name="gender3"
                value={formData.gender3}
                onChange={handleChange}
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'20px', border: '3px solid black'}}
              >
                <option value=""> Please Select </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
               
              </select>
            </label>
            <label>
              Berth Choice:
              <select
                name="berthchoice3"
                value={formData.berthchoice3}
                onChange={handleChange}
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px' ,borderRadius:'11px', border: '3px solid black'}}
              >
                <option value="">Please Select</option>
                <option value="male">Lower</option>
                <option value="female">Upper</option>
                <option value="female">Middle</option>
                <option value="female">Side Lower</option>
                <option value="female">Side Upper</option>
               
               
              </select>
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber3"
                value={formData.phoneNumber3}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px' ,borderRadius:'11px', border: '3px solid black'}}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email3"
                value={formData.email3}
                onChange={handleChange}
                required
                style={{ width: '150%',height:'70px', padding: '10px', marginBottom: '15px',borderRadius:'11px',border: '3px solid black' }}
              />
            </label>
            </div>
            <label style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                style={{ marginRight: '10px' }}
              />
              I agree to terms & conditions
            </label>
            <p></p>
            <button type="submit" style={{ backgroundColor: '#4caf50', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', fontSize: '18px', cursor: 'pointer' }}>Submit</button>
          </form>
        </>
      ) : (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqIHId2CmGgs3v9z-7hYrIDjE6EOqs4f-Jw&usqp=CAU"} alt="Success" style={{ width: '30%', height: 'auto' }} />
            <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Your submission has been received</h2>
            <p>Check SMS/EMAIL notification for payment confirmation and journey details.</p>
            <p>SMS received time: 8:00 am to 8:00 pm</p>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button onClick={() => setSubmitted(false)} style={{ backgroundColor: '#4caf50', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', fontSize: '18px', cursor: 'pointer' }}>Go Back to Form</button>
            <button onClick={() => window.location.href = '/train-ticket-booking-form'} style={{ backgroundColor: '#4caf50', color: 'white', padding: '12px', border: 'none', borderRadius: '5px', fontSize: '18px', cursor: 'pointer', marginLeft: '10px' }}>Go to Home Page</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Train;