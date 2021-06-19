import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Card.css';

const Card = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?" +
            "q=Apple&" +
            "from=2021-06-18&" +
            "sortBy=popularity&" + "apiKey=d23dc630fd3142e0858046d93245df79").then((res) => res.json()).then((data) => {
                setUsers(data.articles);
                console.log(data.articles);
            })
    },[])
    return (
        <>
       
            <div className="container pt-5 mt-5 ">
                <h2>Top Trending News Of the Day!</h2>
                <div className="row">
                    {
                        users.map((user) => {
                            return (
                                <div className="col-10 col-md-4 mt-5">
                                <div className="card card-01">
                                    <img className="card-img-top" src={user.urlToImage} alt="Card image cap" />
                                    <div className="card-body">
                                            <h5 className="card-title">{ user.title}</h5>
                                            <p className="card-text">{ user.description}</p>
                                        <a href={user.url} target="blank" className="btn btn-primary">Go More</a>
                                    </div>
                                    </div>
                                    </div>
                            )
                        })
                    }
                </div>
                <p class="para">Made by ❤Sahirat</p>
                </div>
        </>
    )
}

export default Card
