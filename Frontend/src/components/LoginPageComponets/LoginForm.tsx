import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { loginUserSchema, type LoginUserFormData } from '../../schemas/auth.schema';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LoginUserFormData>({
        resolver: zodResolver(loginUserSchema),
    })

    const submit = async (data: LoginUserFormData) => {

    }


  return (
    <div className='relative w-full max-w-md px-6'>
      
    </div>
  )
}

export default LoginForm
