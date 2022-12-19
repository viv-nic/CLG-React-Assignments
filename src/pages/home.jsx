import { useContext } from "react";
import AuthContext from "../auth/auth-context";
import React from "react";

const Home = () => {
    const { name, isLoggedIn } = useContext(AuthContext);
  
    return (
        <section>
            {isLoggedIn ? (
                <h1>Welcome back, {name}</h1>
            ) : (
                <h1>Welcome to Vivian's blog</h1>
            )}
          </section>
      
    )
}

export default Home;