import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { TrendingUpTwoTone } from '@material-ui/icons';
import Autocomplete from '@material-ui/lab/Autocomplete';

function Form() {
    const { register, handleSubmit,errors } = useForm();

  const onSubmit = (data) => {
    console.log("dât",data);
    
  };

   
    return (
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input name="firstName" placeholder="bill" ref={register} />
            {errors.firstName && 'nhập họ'}
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" placeholder="luo" ref={register({ required: true, minLength: 5 })} />
          </div>
          {errors.lastName && 'Password must be 3 characters at minimum'}

          <div>
            <label htmlFor="isDeveloper">Is an developer?</label>
            <input type="checkbox" name="isDeveloper" value="yes" ref={register} />
            {errors.isDeveloper && 'vui lòng chọn'}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" ref={register} />
            {errors.email && 'vui lòng nhập email'}
          </div>
          <input type="submit" />
        </form>

       
      </div>
    );
}
export default Form;
