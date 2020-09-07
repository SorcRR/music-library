import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addNewSong } from "ducks/songs";
import TextInput from 'common/TextInput';
import DropdownSelect from 'common/DropdownSelect';

const AddNewSongForm = ({ genres, closeModal }) => {
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(addNewSong(data));
    closeModal();
  }
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput 
        label="Artist"
        fieldName="artist"
        register={register}
        errors={errors}
      />
      <TextInput 
        label="Song Name"
        fieldName="songName"
        register={register}
        errors={errors}
      />
      <DropdownSelect
        label="Genre"
        fieldName="genreId"
        register={register}
        options={genres}
      />
      <input type="submit" />
    </form>
  );
}

export default AddNewSongForm;