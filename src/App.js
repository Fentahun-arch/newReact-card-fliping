import React from 'react';
import ReactCardFlip from 'react-card-flip';
import './App.css';

const App = () => {
  const [isFlipped, setIsFlipped] = React.useState();
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <main className='sign'>
      <div className='container'>
        <div className='card'>
          <div className='inner-box'>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
              <div className='card-front'>
                <h1>Sign In</h1>
                <form>
                  <input
                    type='email'
                    className='input-box'
                    placeholder='Your Email Id'
                    required
                  />
                  <input
                    type='password'
                    className='input-box'
                    placeholder='Password'
                    required
                  />
                  <button type='submit' className='submit-btn'>
                    Submit
                  </button>
                  <input type='checkbox' />
                  <span>Remember Me</span>
                </form>
                <button onClick={handleClick} type='button' className='btn'>
                  {' '}
                  I'M New here
                </button>
                <a href='_blank'> Forgot Password</a>
              </div>
              <div className='card-back '>
                <h2>Sign Up</h2>
                <form>
                  <input
                    type='text'
                    className='input-box'
                    placeholder='Your Name'
                    required
                  />
                  <input
                    type='email'
                    className='input-box'
                    placeholder='Your Email Id'
                    required
                  />
                  <input
                    type='password'
                    className='input-box'
                    placeholder='Password'
                    required
                  />
                  <button type='submit' className='submit-btn'>
                    Submit
                  </button>
                  <input type='checkbox' />
                  <span>Remember Me</span>
                </form>
                <button onClick={handleClick} type='button' className='btn'>
                  {' '}
                  I've an account
                </button>
                <a href='_blank'> Forgot Password</a>
              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
