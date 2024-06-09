import React from 'react'
import "./Main.css"
const Main = () => {
  return (
    <>    
      <div className='Main'>
        <div className='top-sec'>
          <div className='top-social'>

          </div>
          <div className='intro' id='home'>
            <h1>HEY, I'M VIKAS FOUJDAR</h1>
            <h2>
              Full stack developer with expertise in front-end and back-end technologies, passionate about creating seamless, user-friendly applications. Skilled in modern frameworks, databases, and responsive design.
             </h2>
             <button><a href='#contact' >CONTACT</a></button>
          </div>
        </div>
       <div className='About' id='about'>
          <h2>ABOUT ME</h2>
          <p>
              Passionate Full Stack Developer delivering tailored web solutions. Expertise in front-end and back-end development ensures seamless, high-quality applications.
          </p>
          <div className='About-box'>
            <div>
              <h3>"Explore Me"</h3>
              <p>
              Welcome to my corner of the digital world! I'm a passionate Full Stack Developer dedicated to crafting dynamic and responsive web experiences. With expertise in both front-end and back-end technologies, I bring ideas to life through seamless integration of design and functionality. From conceptualization to deployment, I thrive on creating innovative solutions that elevate user experiences.<br></br>  &emsp;&emsp;&emsp; Let's collaborate to transform your vision into a captivating reality. Explore my portfolio and let's embark on a journey of digital transformation together!<br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
              <button><a href='#contact'>CONTACT</a></button>
            </div>
            <div className='divider'></div>
           <div>
              <h3>My Skills</h3>
              <div className='skills'>
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>JavaScript</div>
                  <div>React</div>
                  <div>Wordpress</div>
                  <div>SASS</div>
                  <div>Github</div>
                  <div>Responsive Design</div>
                  <div>SEO</div>
                  <div>Terminal</div>
                  <div>MongoDb</div>
                  <div>Sql</div>
                  <div>Node JS</div>
                  <div>Express js</div>
                  <div>..Etc</div>
              </div>
            </div>
          </div>
       </div>
       <div className='contact' id='contact' >
        <h1>CONTACT</h1>
       <form>
          <div className='form'>
            <input required type='text' placeholder='NAME' ></input>
            <input required type='number'  placeholder='NUMBER'></input>
            <input required type='email' placeholder='EMAIL' ></input>
            <textarea required placeholder='Message'></textarea>
            <button type='submit'> SUBMIT </button>
          </div> 
       </form>
       </div>
      </div>
    </>
  )
}

export default Main;
