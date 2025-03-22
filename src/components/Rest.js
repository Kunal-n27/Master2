import React, { useState, useEffect } from 'react';

const Rest = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:1000/forms')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);

            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        // ... consume here
        <div className="posts-container">
            {posts.map((post) => {
                return (
                    <>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Roll No</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Initial</th>
                                    <th scope="col">Education</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <th scope="row">1</th> */}
                                    <td>{post.roll_no}</td>
                                    <td>{post.firstname}</td>
                                    <td>{post.lastname}</td>
                                    <td>{post.gender}</td>
                                    <td>{post.date}</td>
                                    <td>{post.initial}</td>
                                    <td>{post.education}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                        {/* <div className="post-card" key={post.roll_no}>
                            <h2 className="post-title">{post.firstname}</h2>
                            <p className="post-body">{post.lastname}</p>
                            <div className="button">
                                <div className="delete-btn">Delete</div>
                            </div>
                        </div> */}

                    </>
                );
            })}
        </div>
    );

};
export default Rest;