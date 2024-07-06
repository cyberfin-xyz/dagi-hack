import React, { useRef } from 'react';

import {
    StyledContainer,
    StyledInputContainer,
    StyledInput,
    StyledIcon,
    StyledImage,
} from "./styles";

interface IProps {
    selectedImage: string | null;
    onChangeImage: (arg: string | null) => void;
    disabled?: boolean;
}

const PhotoUploadInput = ({ selectedImage, onChangeImage, disabled = false }: IProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            onChangeImage(imageUrl);
        } else {
            onChangeImage(null);
        }
    };

    const handleImageClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    return <StyledContainer>
        <StyledInputContainer>
            <StyledInput
                ref={inputRef}
                type="file"
                id="tokenImg"
                name="tokenImg"
                accept="image/png, image/jpeg"
                onChange={handleImageChange}
                disabled={disabled}
            />
            {selectedImage
                ? <StyledImage src={selectedImage} alt="Selected Image" onClick={handleImageClick} />
                : <FileInputIcon />}
        </StyledInputContainer>

    </StyledContainer>
};

export default PhotoUploadInput;

const FileInputIcon = () =>
    <StyledIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
            d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
            stroke="#DAFF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="#DAFF00" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.75 5H21.25" stroke="#DAFF00" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.5 7.75V2.25" stroke="#DAFF00" strokeWidth="1.5" strokeLinecap="round" />
        <path
            d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001"
            stroke="#DAFF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </StyledIcon>