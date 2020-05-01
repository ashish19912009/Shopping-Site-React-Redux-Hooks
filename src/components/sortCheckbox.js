import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function RadioButtonsGroup(props) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    props.sortOption(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div>
    <div><RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
    <div><FormControlLabel value="LTH" control={<Radio />} label="Price -- High Low" /></div>
    <div><FormControlLabel value="HTL" control={<Radio />} label="Price -- Low High" /></div>
    <div><FormControlLabel value="Discount" control={<Radio />} label="Discount" /></div>
  </RadioGroup></div>
    </div>
  );
}
