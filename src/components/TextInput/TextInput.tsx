import React, { useEffect, useRef } from "react";

import {
    StyledInput,
} from "./styles";

interface IProps {
    value: string;
    onChange: (arg: any) => void;
    placeholder?: string;
    withFocus?: boolean
}

const TextInput = ({ value, onChange, withFocus = false, placeholder = '' }: IProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleInput = (e: any) => onChange(e.target.value);

    useEffect(() => {
        if (withFocus && inputRef.current) inputRef.current.focus();
    }, []);

    return <StyledInput
        value={value}
        onInput={handleInput}
        ref={inputRef}
        placeholder={placeholder}
        id="input"
    />
}

export default TextInput;