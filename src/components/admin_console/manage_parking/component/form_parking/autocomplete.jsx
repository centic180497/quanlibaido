/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Controller, useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    "& > * + *": {
      marginTop: theme.spacing(3)
    }
  },
  formInput: {
    marginBottom: theme.spacing(2)
  }
}));

const ContentTypes = {
  ANGULAR: "ANGULAR",
  REACT: "REACT",
  JQUERY: "JQUERY",
  VUE: "VUE"
};

export default function Tags() {
  const { register, handleSubmit, errors, control } = useForm();
  const [districts, setdistricts] = useState([
    { id: 1, name: "Quan Hai Chau" },
    { id: 2, name: "Quan Cam Le" },
    { id: 3, name: "Quan Ngu Hanh Son" }
  ]);

  const onSubmit = handleSubmit((updatedData) => console.log(updatedData));
  const [value, setValue] = React.useState();
  return (
    <div>
      <form onSubmit={onSubmit} autoComplete="off">
        <Controller
          name="contentTypes"
          as={
            <Autocomplete
            // inputValue={value}
            // value={value}
              multiple
              id="contentTypes"
              options={districts}
              getOptionLabel={(option) => option.name}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  helperText="Content Type is required"
                  variant="outlined"
                  label="Content Types"
                  placeholder=""
                />
                
              )}

        //  onChange={(event, val) => console.log("event",event)}
          
            />
          }
          control={control}
        //   onInputChange={(_, val) => {
        //     setValue(val);
        //     console.log(val);
        //   }}
          onChange={([, data]) => console.log("vjkdvhid")}
         onChange={(event, val) => console.log("asmkasjf")}
        
 
        />

        <Button type="submit" variant="outlined" color="primary">
          Save
        </Button>
      </form>
    </div>
  );
}
