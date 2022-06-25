import React, { useEffect } from "react";
import css from "./upload-image.css";
import { SecondaryButton } from "ui/buttons/buttons";
import Dropzone, { useDropzone } from "react-dropzone";
import { usePhoto } from "hooks";

export default function UploadImage({ petImage = null }) {
  const [photo, setPhoto] = usePhoto();
  const imgPlaceholder =
    "https://res.cloudinary.com/dwf-m7/image/upload/v1656107359/missingimg_mc3rsv.png";
  const [getRootProps, getInputProps] = dropzoneFileManager();
  const image = photo?.preview
    ? photo.preview
    : petImage
    ? petImage
    : imgPlaceholder;

  function dropzoneFileManager(): [any, any] {
    const { getRootProps, getInputProps } = useDropzone({
      maxSize: 20000000,
      onDrop: (acceptedFiles) => {
        const img = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          setPhoto(
            Object.assign(img, {
              preview: event.target.result,
            })
          );
        };
        reader.readAsDataURL(acceptedFiles[0]);
      },
    });
    return [getRootProps, getInputProps];
  }

  return (
    <div className={css.root}>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <img className={css.pic} src={image} />
        <div className={css.button}>
          <SecondaryButton>Agregar/modificar foto</SecondaryButton>
        </div>
      </div>
    </div>
  );
}