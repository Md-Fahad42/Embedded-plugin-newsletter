import React, {useEffect, useState} from 'react'



const Dashboard = () => {
  
const [subscriberList, setSubscriberList] = useState([]);
const [showForm, setShowForm] = useState(false);


const getDataFromBackend = async () => {
    const response = await fetch('http://localhost:5000/subscriber/getall',);
    const data = await response.json();

    console.log(data);
    setSubscriberList(data);
};

const deleteSubscriber = async (id) => {
    console.log(id);
    const res = await fetch('http://localhost:5000/subscriber/delete/'+id,{
        method: 'DELETE'
    });
    //  console.log(res,status);
   getDataFromBackend();
}
useEffect(() => {
    getDataFromBackend();

}, []);
//function
const displaySubscriber = () => {
   return <table className='table table-striped table-dark'>
    <thead>
        <tr>
            
            <th>NAME</th>
            <th>EMAIL</th>
            <th>DATE</th>
        </tr>
    </thead>
    <tbody>
        {
            subscriberList.map((subscriber) => (
                <tr>
                    
                    <td>{subscriber.name}</td>
                    <td>{subscriber.email}</td>
                    <td>{subscriber.createdAt}</td>
                    <td><button className='btn btn-danger' onClick={() => {deleteSubscriber(subscriber._id)}} ><i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    </td>
                </tr>
                
            ))
        }
    </tbody>
   </table>
}

    return (
    <div className='container'>
    
            <p class="text-center text-dark h1 fw-bold mb-2 mx-1 mx-md-4 mt-4 ">Dashboard</p> 
           
                <hr></hr>
                
                {displaySubscriber()}
                </div>
                
        


  )
}

export default Dashboard