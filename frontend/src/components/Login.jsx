import React from 'react';
import coverPic from'../assets/1.png';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#cecfce]">
      <div className="flex w-full max-w-4xl overflow-hidden card">
       
        <div className="w-1/2 hidden lg:block">
          <img
            src={coverPic}
            alt="Inspired like Instagram"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full lg:w-1/2 p-6 lg:p-8">
          <form className="space-y-4 md:space-y-6">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
              Tabulation System
            </p>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Your username
              </label>
              <input
                placeholder="Ex. Dionar"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                id="username"
                type="text"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                placeholder="••••••••"
                id="password"
                type="password"
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  type="checkbox"
                  aria-describedby="terms"
                  id="terms"
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-light text-gray-500">
                  I accept the
                  <a href="#" className="font-medium text-primary-600 hover:underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <button
              className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
