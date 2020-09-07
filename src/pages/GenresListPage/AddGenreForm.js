import React from "react";
import { useForm } from "react-hook-form";
import slugify from 'react-slugify';
import { useDispatch } from 'react-redux';
import { addNewGenre } from "ducks/genres";
import TextInput from 'common/TextInput';

let customError;

const AddGenreForm = ({ genres, closeModal }) => {
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    const newGenreId = slugify(data.genreName);
    customError = genres.find(genre => genre.id === newGenreId) && { message: 'Genre already exists.'};
    
    if (!customError) {
      dispatch(addNewGenre(data.genreName, newGenreId));
      closeModal();
    }
  }
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput 
        label="Genre Name"
        fieldName="genreName"
        register={register}
        errors={errors}
        customError={customError}
      />
      <input type="submit" />
    </form>
  );
}

export default AddGenreForm;