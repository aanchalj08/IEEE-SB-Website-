import { useState } from 'react';

const StayInTouch = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignUp = () => {
    if (validateEmail(email)) {
      setError('');
      alert('Thank you for signing up!');
      // Handle successful sign up (e.g., send email to server)
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <div className="text-center p-5 font-sans">
      <div className="flex flex-wrap items-center justify-between ">
        <h2 className="text-4xl mx-auto lg:mx-0 text-blue-800 mb-4">Stay in touch</h2>
        <div className="flex flex-wrap">
          <input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-80 p-2 border border-gray-300 rounded mr-2"
          />
          <button
            onClick={handleSignUp}
            className="p-2 text-2xl lg:text-base mt-2 lg:mt-0 w-full lg:w-auto mx-auto bg-gray-200 border border-gray-300 rounded cursor-pointer"
          >
            Sign up
          </button>
        </div>
      </div>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <p className="mt-5 w-3/4 mx-auto text-gray-700">
        We heartily welcome to our student branch and we wish to bring technologies for people by merging together as one. We would also love to address your queries and suggestion, click down the button to contact us.
      </p>
    </div>
  );
};

export default StayInTouch;
