import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [subscriberList, setSubscriberList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [letterContent, setLetterContent] = useState("");

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const getDataFromBackend = async () => {
    const response = await fetch(
      "http://localhost:5000/subscriber/getbyowner/" + currentUser._id
    );
    const data = await response.json();

    console.log(data);
    setSubscriberList(data);
  };

  const sendMail = async (recAddress) => {
    const res = await fetch("http://localhost:5000/util/sendmail", {
      method: "POST",
      body: JSON.stringify({
        from: "newsletterproject2022@gmail.com", // sender address
        to: recAddress, // list of receivers
        subject: "newsletter from fahad",
        html: letterContent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log('mail sent to '+recAddress);
    console.log(res);
  };

  const deleteSubscriber = async (id) => {
    console.log(id);
    const res = await fetch("http://localhost:5000/subscriber/delete/" + id, {
      method: "DELETE",
    });
    //  console.log(res,status);
    getDataFromBackend();
  };
  useEffect(() => {
    getDataFromBackend();
  }, []);
  //function
  const displaySubscriber = () => {
    return (
      <table className="table table-striped table-dark mb-5">
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>DATE</th>
          </tr>
        </thead>
        <tbody>
          {subscriberList.map((subscriber) => (
            <tr>
              <td>{subscriber.name}</td>
              <td>{subscriber.email}</td>
              <td>{subscriber.createdAt}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteSubscriber(subscriber._id);
                  }}
                >
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const sendNewsLetter = () => {
    for(let user of subscriberList){
        sendMail(user.email);
    }
  }

  return (
    <div className="container">
      <h1>Welcome, {currentUser.username}</h1>
      <div className="card bg-dark text-white">
        <div className="card-header">
          <h4>Owner Details</h4>
        </div>
        <div className="card-body">
          <h3>Your Key : {currentUser._id}</h3>
          <h3>Name : {currentUser.username}</h3>
          <h3>Name : {currentUser.username}</h3>

          <textarea
            rows={4}
            className="form-control"
            value={`<link rel="stylesheet" href="http://localhost:5000/index.css">
<div id="plugin" ownerid=${currentUser._id}></div>
<script src="http://localhost:5000/index.js"></script>`}
          ></textarea>
        </div>
      </div>

      <p class="text-center text-Light h1 fw-bold mb-2 mx-1 mx-md-4 mt-4 ">
        Dashboard
      </p>

      <hr></hr>

      {displaySubscriber()}

      <textarea onChange={e => setLetterContent(e.target.value)} className="form-control">

      </textarea>
      <button onClick={sendNewsLetter}>Send</button>
    </div>
  );
};

export default Dashboard;
