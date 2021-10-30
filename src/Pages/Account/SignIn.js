import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import signInimg from '../../images/signIn.png';
import Button from '../Account/AccountComponents/Button';
import ButtonAuth from './AccountComponents/ButtonAuth';
import Top from './AccountComponents/Top';


const SignIn = () => {
    const {signInUsingGoogle,handleSignIn,handleEmailChange,handlePasswordChange,error} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home"
    const handleGoogleSignIn =()=>{
        signInUsingGoogle()
        .then(result=>{
            // console.log(result.user);
            history.push(redirect_uri);
        });
    }

    const SignInUsingEmail = ()=>{
        handleSignIn();
        history.push(redirect_uri);
    }
  

  

    return (
        <div>
             <section>
            <div class="flex  min-h-screen overflow-hidden flex-wrap  bg-gray-800 ">
              <div class="flex flex-col justify-center flex-1 px-4 py-12  sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-2/5">
                <div class="w-full max-w-2xl mx-auto lg:w-96">
                <Top>
                    <Link to='/signUp'>Sign Up</Link>
                </Top>
                  <div>

                    <h2 class="mt-6 text-3xl font-extrabold text-yellow">Sign in.</h2>
                  </div>
                  <div class="mt-8">
                    <div class="mt-6">
                      <form onSubmit={SignInUsingEmail}action="#" method="POST" class="space-y-6">
                        <div>
                          <label for="email" class="block text-sm font-medium text-white"> Email address </label>
                          <div class="mt-1">
                            <input onBlur={handleEmailChange}id="email" name="email" type="email" autocomplete="email" required="" placeholder="Your Email" class="block w-full px-5 py-3 text-base text-black placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                          </div>
                        </div>
                        <div class="space-y-1">
                          <label for="password" class="block text-sm font-medium text-white"> Password </label>
                          <div class="mt-1">
                            <input onBlur={handlePasswordChange}id="password" name="password" type="password" autocomplete="current-password" required="" placeholder="Your Password" class="block w-full px-5 py-3 text-base text-black placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg  bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                          </div>
                          <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
			                  {error}
                        </span>
                        </div>
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" class="w-4 h-4 text-green-400 border-gray-200 rounded  focus:ring-green-400"/>
                            <label for="remember-me" class="block ml-2 text-sm text-white"> Remember me </label>
                          </div>
                          <div class="text-sm">
                            <Link to="/resetPassword" className="font-medium text-red hover:text-blue-500"> Forgot your password? </Link>
                          </div>
                        </div>
                        <div>
                          <Button>
                              Sign In
                          </Button>
                        </div>
                      </form>
                      <div class="relative my-4">
                        <div class="absolute inset-0 flex items-center">
                          <div class="w-full border-t border-gray-300"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                          <span class="px-2 text-black bg-white"> Or continue with </span>
                        </div>
                      </div>
                      <div>
                          <ButtonAuth>
                          <img src="https://img.icons8.com/fluency/24/000000/google-logo.png" alt='google'/>
                          <button onClick={handleGoogleSignIn} >Log in with Google</button>
                          </ButtonAuth>
                          <ButtonAuth>
                          <img src="https://img.icons8.com/material-rounded/30/000000/github.png" alt='github'/>
                          <button onClick={handleGoogleSignIn} >Log in with github</button>
                          </ButtonAuth>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" relative flex-1 hidden  overflow-hidden lg:block w-3/5">
                <img class="absolute inset-0 object-cover  " src={signInimg} alt=""/>
              </div>
            </div>
          </section>
        </div>
    );
};

export default SignIn;