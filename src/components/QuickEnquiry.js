

import React, { useState, useEffect } from 'react';

const QuickEnquiry = () => {

  const [posts, setPosts] = useState([]);
  const [name, setName] = useState('');
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [contactno, setContactno] = useState('');

  useEffect(() => {
    fetch('http://localhost:1000/quickenquiry/get')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);

      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const addPosts = async (name,address,city,contactno) => {
    await fetch('http://localhost:1000/quickenquiry/post', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        address: address,
        city: city,
        contactno: contactno,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((posts) => [data, ...posts]);
        setName('');
        setAddress('');
        setCity('');
        setContactno('');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(name,address,city,contactno);
  };

  return (
    <>
     


      <form className="container" onSubmit={handleSubmit} >
        <div class="form-group">
          <label for="formGroupExampleInput">Name</label>
          <input type="text" class="form-control" id="formGroupExampleInput" value={name}
              onChange={(e) => setName(e.target.value)}/>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" class="form-control" id="inputAddress"  value={address}
              onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">City</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" value={city}
              onChange={(e) => setCity(e.target.value)} />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Contact No.</label>
          <input type="text" class="form-control" id="formGroupExampleInput2" value={contactno}
              onChange={(e) => setContactno(e.target.value)} />
        </div>
        <div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Sr. No</th>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">City</th>
                      <th scope="col">Contact No.</th>
                      
                    </tr>
                    </thead>
                    {/* <tbody>{()}</tbody>
                    */}
                   
                  
                  
                </table>
        <div>
        
         {posts.map((post) => {
            
            return (
              <>
                <table class="table">
                  
                   
                    <tr>
                      <td>{post.id}</td>
                      <td>{post.name}</td>
                      <td>{post.address}</td>
                      <td>{post.city}</td>
                      <td>{post.contactno}</td>
                    </tr>

                   
                  
                  
                </table>


              </>
            );
          })}

        </div>

      </form>
    </>
  );
}
export default QuickEnquiry;