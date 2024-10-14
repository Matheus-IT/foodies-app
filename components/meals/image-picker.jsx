"use client";

import { useRef, useState } from "react";
import cls from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState(null);

  function handleImagePickerClicked() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={cls.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={cls.controls}>
        <div className={cls.preview}>
          {pickedImage ? (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
            />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          type="file"
          id={name}
          className={cls.input}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          type="button"
          className={cls.button}
          onClick={handleImagePickerClicked}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
