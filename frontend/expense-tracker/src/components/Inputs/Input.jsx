import React from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';

const Input = ({value, onChange, placeholder, label, type}) => {
    const [showPassowrd, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassowrd);
    };
  return (
    <div>
      <label className="text-[13px] text-slate-800">{label}</label>

      <div className="input-box">
        <input
            type={type === 'password' ? showPassowrd ? 'text' : 'password' : type}
            placeholder={placeholder}
            className="w-full bg-transparent outline-none"
            value={value}
            onChange={(e) => onChange(e)}
        />

        {type === 'password' && (
            <>
                {showPassowrd ? (
                    <FaRegEye
                        size={22}
                        className="text-primary cursor-pointer"
                        onClick={() => toggleShowPassword()}
                    />
                ) : (
                    <FaRegEyeSlash
                        size={22}
                        className="text-slate-400 cursor-pointer"
                        onClick={() => toggleShowPassword()}
                    />
                )}
            </>
        )}
      </div>
    </div>
  )
}

export default Input
