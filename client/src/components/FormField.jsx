import React from 'react'

const FormField = ({ labelName, name, PlaceHolder, inputType, value, handleChange }) => {
    return (
        <label className="flex-1 w-full flex flex-col">
            {labelName && (
                <span className="font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]">{labelName}</span>
            )}

            <input
                required
                value={value}
                name={name}
                onChange={handleChange}
                type={inputType}
                step="0.1"
                placeholder={PlaceHolder}
                className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#8f939f] rounded-[10px] sm:min-w-[300px]"
            />

        </label>
    )
}

export default FormField