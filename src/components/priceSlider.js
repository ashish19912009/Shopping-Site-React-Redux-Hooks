import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};


export default function CustomizedSlider(props) {
  const [value, setValue] = React.useState([1000, 100000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
    <Slider
      ValueLabelComponent={ValueLabelComponent}
      min={1000}
      max={100000}
      step={1000}
      value={value}
      onChange={handleChange}
      onChangeCommitted={()=> props.priceRange(value)}
      valueLabelDisplay="on"
      style={{margin:'10px 10px'}}
    />
    </React.Fragment>
  );
}
