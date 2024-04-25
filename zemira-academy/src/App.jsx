import { useState } from 'react'
import Header from './Components/Header'
import board from './assets/images/board.jpg'
import logo from './assets/images/logo.png'
import tech from './assets/images/tech.jpg'
import skill from './assets/images/skill.jpg'
import hand from './assets/images/hand.jpg'
import people from './assets/images/people.jpg'
import boy from './assets/images/boy.png'
import girl from './assets/images/girl.png'
import Footer from './Components/Footer'



import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />



      <div className='container-fluid bg-image'>


        <div className='d-flex py-5 mb-4'>
          <div className='tech '>
            <h1 className=" display-5 fw-bold text-dark ">Accelerate your career in tech</h1>
            <h6 className=''>Enrolling in one of our courses is a smart move that will give you the edge you have been looking for.</h6>
            <button type="button" className="but">join the class</button>
          </div>
          <img src={board} alt="" className='career' style={{ height: '400px', width: '500px' }} />
        </div>

        <div className='program'>
          <h1 className='display-6 fw-bold' style={{ color: 'teal' }}>Find your Perfect Career Program</h1>
          <h6>Our curriculum uses a project-based learning approach that is perfect for both beginners and experienced individuals.</h6>
        </div>





        <div class="container overflow-hidden text-start mt-5 ">
          <div class="row gx-5">
            <div class="col  ">
              <div className='card shadow-3 '>
                <img src={logo} alt="" style={{ height: '40px', width: '40px' }} className='mt-3' />
                <h3>
                  <u className=''>Product</u> Design
                </h3>
                <div class="p-3">User Interface(UI) and User Experience(UX) design are in great demand and are applicable across products and industry domains. With customer experience being the centerfold…</div>
              </div>
            </div>

            <div class="col">
              <div className='card shadow-3'>
                <img src={logo} alt="" style={{ height: '40px', width: '40px' }} className='mt-3' />
                <h3>
                  <u className=''>Web</u> Development
                </h3>
                <div class="p-3">Start off your career today as a Web Developer. Learn to build high quality websites with dynamic applications to create stunning user experiences…</div>
              </div>
            </div>

            <div class="col">
              <div className='card shadow-3'>
                <img src={logo} alt="" style={{ height: '40px', width: '40px' }} className='mt-3' />
                <h3>
                  <u className=''>Graphics</u> Design
                </h3>
                <div class="p-3">Use industry-leading techniques to create unique design projects and learn the skills required to become a sought-after visual thinker and communicator.</div>
              </div>
            </div>

            <div class="col">
              <div className='card shadow-3'>
                <img src={logo} alt="" style={{ height: '40px', width: '40px' }} className='mt-3' />
                <h3>
                  <u className=''>Soft</u> testing
                </h3>
                <div class="p-3">Our Software Testing course will provide you with a thorough understanding of the Software Testing, including important concepts, strategies for using it, and in-depth expertise.</div>
              </div>
            </div>
          </div>
        </div>

        <div class="px-4 py-5 my-5 text-center">
          <h2 class="display-6 fw-bold text-body-emphasis">Zemira Academy Help You Grow In Tech</h2>
          <div class="col-lg-6 mx-auto">
            <h5 class="lead text-bold">Our curriculum uses a project-based learning approach and is perfect for both beginners and experienced individuals.</h5>
          </div>
        </div>


        <div className='d-flex py-5 mb-4'>
          <div className='skills'>
            <h1 className="display-6 fw-bold text-success " >Tech Skills</h1>
            <h6 >Let's accelerate your journey into tech with our immersive training program. We will help you acquire the hottest skills in high demand in the job market..</h6>
          </div>
          <img src={skill} alt="" className='pic1' style={{ height: '400px', width: '500px' }} />
        </div>

        <div className='d-flex py-5 mb-4 '>
          <img src={tech} alt="" className='pic2' style={{ height: '400px', width: '500px', }} />
          <div className='techs '>
            <h1 className="display-6 fw-bold text-success ">Industry tech Approach</h1>
            <h6>Our programs are well structured to take you from Zero to Hero.
              Zemira Academy teaches you in-demand skills and best practices you need to thrive in today's workplace.</h6>
          </div>
        </div>


        <div className='parent'>
          <div className='d-flex py-5 mb-4'>
            <div className='shakes text-light'>
              <h1 className="display-6 fw-bold  " >Hiring Partners</h1>
              <h6 >To suit the demands of your team, we provide the appropriate tech personnel.
                Our employees are skilled at delivering tech solutions that are up to industry standards and are well-suited for the modern workplace.</h6>
            </div>
            <img src={hand} alt="" className='pic1' style={{ height: '400px', width: '500px' }} />
          </div>
        </div>


        <div className='d-flex py-5 mb-4 '>
          <img src={people} alt="" className='pic2' style={{ height: '400px', width: '500px', }} />
          <div className='calenders '>
            <h1 className="display-5 fw-bold text-success ">Flexible Calendars</h1>
            <h6>We offer physical and online classes on both weekdays and weekends. Every quarter, we begin at least two new cohorts. Therefore, you can learn with us whether you have a full-time job or not.</h6>
          </div>
        </div>


        <div class="px-4 py-5 my-5 text-center">
          <h2 class="display-6 fw-bold  text-success">Our Experts Teachers</h2>
          <div class="col-lg-6 mx-auto">
            <h5 class="lead text-bold"> At Zemira Academy, our teaching team and professional ancillary
              staff create the difference in our students' learning experience. </h5>
          </div>
        </div>




        <div class="container px-4 text-center">
          <div class="row gx-5">
            <div class="col ">
              <div class=" card shadow-3">
                <div class="px-4 py-3 my-3 text-center">
                  <img src={boy} alt="" className='text-center' style={{ height: '150px', width: '150px' }} />
                  <h5 class="display-6 fw-bold text-body-emphasis mt-3"> Reward Uche</h5>
                  <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Developer</p>
                    <div className='' style={{ color: 'yellow' }}>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div class="col">
              <div class=" card shadow-3 ">
                <div class="px-4 py-3 my-3 text-center">
                  <img src={girl} alt="" className='text-center' style={{ height: '150px', width: '150px' }} />
                  <h3 class="display-6 fw-bold text-body-emphasis mt-3">Mirabel Ukpere</h3>
                  <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Designer</p>
                    <div className='' style={{ color: 'yellow' }}>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star"></i>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


        <div class="px-4 py-5 my-5 text-center">
          <h1 class="display-6 fw-bold  text-success">Get Started Today</h1>
          <div class="col mx-auto">
            <p class="lead mb-4"> By 2030 there would be a huge deficit of tech talent globally. Whether you are looking to change your career path, increase your earning, Zemira Academy is a tech school designed to accelerate your career in tech. Our approach is Agile Project-based learning that focuses on in-demand tech skills by the industries. The time to start is now!</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-outline-secondary btn-md px-6 text-success fw-bold bg-light">ENROLL NOW</button>
            </div>
          </div>
        </div>








        <div class="px-4 py-5 my-5 text-center">
          <h1 class="display-6 fw-bold text-success mb-6">JOIN US</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4"> Want To Know The Latest From The Academy? Just Enter Your Email Address Below And We'll Keep You Up To Date With News and Trends
            </p>

          </div>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button class="btn btn-outline-secondary text-start" type="button " style={{ width: '450px' }}>Your Email address</button>

            <button type="button" class="btn btn-outline-light btn-lg px-4 bg-light text-success fw-bold">Subscribe</button>
          </div>

          <div>

          </div>

        </div>


        <Footer />

      </div>














    </>
  )
}

export default App
