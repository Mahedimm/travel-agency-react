import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initialize from "../Firebase/firebase.initialize";

initialize();

const useFirebase = ()=>{

    const[user, setUser] = useState({});
    const[error, setError] = useState('');
    const[isLoading, setIsLoading] = useState(true);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    


     //set input data
     const handleEmailChange = e=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e=>{
      setPassword(e.target.value);
    }
    const handleName = e=>{
        setName(e.target.value);
      }


    //Google Sign In 
    const signInUsingGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

 
    
        //sign up using email password
        const handleSignUp = e =>{
            
            e.preventDefault();
            if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(password)){
                    setError('Must Be 8 Character long At least one a, A,8,,special !');
                    return; 
                 } 
            // const regix = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;
            
            // if(regix.test(password)===false){
            //     setError('password must be a minimum of 8 characters including number, Upper, Lower And one special character !')
            //     return;
            // }

            createUserWithEmailAndPassword(auth,email,password)
            .then(result=>{
                const user = result.user;
                console.log(user);
                setError('');
                verificationEmail();
            })
            .catch((error) => {
                setError(error.message);
            
            });
            
        }

   
    
      //sign in using email password
      const handleSignIn = e =>{
        setIsLoading(true);
		e.preventDefault();
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
  		.then((result) => {
			const user = result.user;
			console.log(user);
			setError('');  
  })
  .catch((error) => {
    setError(error.message);
  });
      }

  


    //verificationEmail
    const  verificationEmail = ()=>{
        sendEmailVerification(auth.currentUser)
        .then((result) => {
          // Email verification sent!
          console.log(result);
          // ...
        });
    }


    //set user Name
    const setUserName = ()=>{
        updateProfile(auth.currentUser,{
            displayName: name,
        })
        .then(result=>{ 

        })

    }

    //observe user state change
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user=>{
            if (user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
        return ()=>unsubscribed;
    },[])

    const signOutGoogle = ()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({});
        })
        .catch((error)=>{

        })
        .finally(()=>setIsLoading(false));
    }
 

    return{
        user,
        error,isLoading,
        signInUsingGoogle,
        signOutGoogle,
        handleEmailChange,
        handlePasswordChange,
        handleName,
        handleSignIn,
        handleSignUp,
        
    }

}

export default useFirebase;
