/*<-----Home. JS Starting Here----->*/
import React, { useEffect, useState } from 'react';
import image from '../../images/tech-edu.jpg'
import './Home.css'

/*<-----Home Data Fetching API Data----->*/
const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./technologies.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    /*<-----Slicing 1st 3 Data From Json File ----->*/
    const homeCourses = courses.slice(0, 3)
    return (
        <div>

            {/* The Short Introducing Fo Tech Edu With Title */}
            <section className="hero-section">
                <div className="container" >

                    <div className="row pt-5 pb-5">

                        <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center ">
                            <div>
                                <p className="text-white">Gain Skill With Tech-Edu</p>
                                <h1 className="tech-edu-h1 fw-bolder">Tech-Edu
                                </h1>
                                <p className="text-white tech-edu-p">Devices have been used to aid computation for thousands of years, probably initially in the form of a tally stick. The Antikythera mechanism, dating from about the beginning of the first century BC, is generally considered to be the earliest known mechanical analog computer, and the earliest known geared mechanism. Comparable geared devices did not emerge in Europe until the 16th century, and it was not until 1645 that the first mechanical calculator capable of performing the four basic arithmetical operations was developed.</p>

                                {/* Enroll Now Demo Button */}
                                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Enroll Now
                                </button>
                            </div>

                        </div>

                        {/* Fliuding Home Banner Image */}
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-4 ">
                            <img className="img-fluid" src={image} alt="" />
                        </div>

                    </div>
                </div>
            </section>

            {/* The Top Courses Showing From Here */}
            <div className="container mt-5 mb-5" >
                <div className="d-flex mt-5 justify-content-center ">
                    <h1 >Our Top Courses</h1>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 text-black">

                    {/*Map For Serially Calling Data & 
                    Key For No Error Message From Console*/}
                    {homeCourses.map(homeCourse => <div className="col" key={homeCourse.key}>
                        <div className="card h-100">
                            <img src={homeCourse.img} className="img-fluid rounded-start" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{homeCourse.name}</h5>
                                <p className="card-text">{homeCourse.description}</p>
                            </div>
                            <div className="card-footer  text-center">
                                <h3 className="card-text">Fees: {homeCourse.fees}$</h3>
                            </div>
                        </div>
                    </div>)
                    }

                </div>
            </div>
        </div >

    );
};

export default Home;
/*<-----Home. JS Starting Here----->*/