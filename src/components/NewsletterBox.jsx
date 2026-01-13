import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event)=>{
        event.preventDefault();

    }
  return (
    <div className="text-center">
        <p className = "text-2xl font-medium text-gray-800">Subscribe NOW & get 20% OFF</p>
        <p className = "text-gray-400 mt-3">Join our style circle—get exclusive drops, special offers, and early access to trends straight to your inbox.</p>
        <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-gray-200 pl-3 ">
  <input
    className="w-full flex-1 outline-none text-sm"
    type="email"
    placeholder="Enter your email"
    required
  />
  <button
    className="text-white bg-black text-sm px-8 py-3"
    type="submit"
    onSubmit = {onSubmitHandler}
  >
    SUBSCRIBE
  </button>
</form>
    </div>
  )
}

export default NewsLetterBox;