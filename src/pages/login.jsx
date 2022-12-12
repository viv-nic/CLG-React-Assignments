import AuthContext from "../auth/auth-context";
import React, { useState, useEffect, useReducer, useContext } from "react";
import classes from "../styles/Login.module.css";
import Button from "../components/Button";
import Card from "../components/Card/Card";

const nameReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {
            value: action.val, 
            isValid: action.val.length > 1 
        };
    }
    if (action.type === "INPUT_BLUR") {
        return {
            value: state.value,
            isValid: state.value.length > 1
        };
    }
    return { value: "", isValid: false };
};

const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {
            value: action.val, 
            isValid: action.val.includes("@")
        };
    }
    if (action.type === "INPUT_BLUR") {
        return {
            value: state.value,
            isValid: state.value.includes("@")
        };
    }
    return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {
            value: action.val,
            isValid: action.val.trim().length > 6
        };
    }
    if (action.type === "INPUT_BLUR") {
        return {
            value: state.value,
            isValid: state.value.trim().length > 6
        };
    }
    return { value: "", isValid: false };
};

const Login = () => {
    const [formIsValid, setFormIsValid] = useState(false);
    const [error, setError] = useState(null);

    const { onLogin } = useContext(AuthContext);

    const [nameState, dispatchName] = useReducer(nameReducer, {
        value: "",
        isValid: null
    });
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null
    });

    const { isValid: nameIsValid } = nameState;
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(nameIsValid && emailIsValid && passwordIsValid);
        }, 500);
        return () => {
            clearTimeout(identifier);
        };
    }, [nameIsValid, emailIsValid, passwordIsValid]);

    const nameChangeHandler = (event) => {
        dispatchName({ type: "USER_INPUT", val: event.target.value });
    };

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    };

    const validateNameHandler = () => {
        dispatchName({ type: "INPUT_BLUR" });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: "INPUT_BLUR" });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: "INPUT_BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid === true) {
            onLogin(emailState.value, passwordState.value, nameState.value);
        } else {
            setFormIsValid(false);
            setError(true);
        }
    };

    return (
        <Card 
            // className={classes.login}
        >
            <form onSubmit={submitHandler}>
                <h1>Sign In</h1>
                <div
                    className={`${classes.control} ${
                        nameState.isValid === false ? classes.invalid : ""
                }`}
                >
                    <label htmlFor="text">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={nameState.value}
                      onChange={nameChangeHandler}
                      onBlur={validateNameHandler}
                    />
                </div>
                {nameState.isValid === false && (
                    <span className={classes["validation-message"]}>
                        Name must be at least one character long.
                    </span>
                )}
                <div
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : "" 
                    }`}
                >
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      value={emailState.value}
                      onChange={emailChangeHandler}
                      onBlur={validateEmailHandler}
                    />
                </div>
                {emailState.isValid === false && (
                    <span className={classes["validation-message"]}>
                        Email must be a valid email address.
                    </span>
                )}
                <div
                    className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ""}`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={passwordState.value}
                      onChange={passwordChangeHandler}
                      onBlur={validatePasswordHandler}
                    />
                </div>
                {passwordState.isValid === false && (
                    <span className={classes["validation-message"]}>
                        Password must have at least six characters.
                    </span>
                )}
                <div>
                    {/* <Button
                        type="submit"
                        disabled={!formIsValid | (formIsValid === false)}
                    >
                        Sign In
                    </Button> */}
                    <Button 
                    // className={classes.button} 
                    name="Sign In" 
                    disabled={!formIsValid | (formIsValid === false)}
                    />
                </div>
                {error && (
                    <span>
                        Sorry, please fill in the form to continue
                    </span>
                )}
            </form>
        </Card>

    )
};

export default Login;