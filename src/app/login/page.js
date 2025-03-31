"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: "onTouched" });

    const onSubmit = (data) => {
        const { username, password } = data;

        if (username === "test" && password === "password") {
            Swal.fire({
                icon: "success",
                title: "Login Successful!",
                text: "Welcome back!",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid Credentials",
                text: "Username or password is incorrect.",
            });
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-success">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="form-container p-4 rounded shadow-sm bg-white col-md-6"
            >
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        maxLength={50}
                        {...register("username", { required: "Username is required" })}
                        className="form-control"
                    />
                    {errors.username && (
                        <div className="text-danger">{errors.username.message}</div>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        maxLength={50}
                        {...register("password", { required: "Password is required" })}
                        className="form-control"
                    />
                    {errors.password && (
                        <div className="text-danger">{errors.password.message}</div>
                    )}
                </div>

                <button type="submit" className="btn btn-primary w-100" disabled={!isValid}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;