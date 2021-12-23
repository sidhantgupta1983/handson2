import React, {useState} from 'react'

const EmployeeForm = () => {

    const [userDetails, setUserDetails] = useState({
        name:"",
        dept:"",
        rating:"",
    })

    const [record, setRecord] = useState([])

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(value);
        setUserDetails({...userDetails,[name]: value});

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const storeRecord = { ...userDetails, id:new Date().getTime().toString()}
        console.log(record);
        setRecord([...record, storeRecord]);
        console.log(record);

        setUserDetails({name:"", dept:"", rating:""});

    }


    return (
        <div className="employeeForm">
            <div className="title">EMPLOYEE FEEDBACK FORM</div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name' className='labeling'>Name:</label>
                    <input type="text" name='name' id='name' className='curvedBorder'
                    value={userDetails.name} onChange={handleInput}/>

                </div>
                <div>
                    <label htmlFor='dept' className='labeling'>Department:</label>
                    <input type="text" name='dept' id='dept' className='curvedBorder'
                    value={userDetails.dept} onChange={handleInput}/>
                </div>
                <div>
                    <label htmlFor='rating' className='labeling'>Rating:</label>
                    <input type="number" name='rating' id='rating' className='curvedBorder'
                    value={userDetails.rating} onChange={handleInput}/>
                </div>
                <button type='submit' className='submitBtn'>Submit</button> 
            </form>
            <div className="infoDisplay">
                {
                    record.map((curElement)=>{
                        return(
                            <div className="row">
                                <p>Name: {curElement.name} | Department : {curElement.dept} | Rating : {curElement.rating}</p>
                            </div>
                        )
                    })
                }
            
            </div>
        </div>
        
    )
}

export default EmployeeForm
