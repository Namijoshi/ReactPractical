import React from 'react';
// import PropTypes from 'prop-types';
import '../App.css'
const CheckBox = (props) => {

  console.log("props.options", props.options);
  if (props.options === undefined) {
    return '';
  }
  else {
    return (<div className="form-group">
      <label for={props.name} className="labelformat">TODO list</label>
      <div className="checkbox">
        {props.options.map((option, index) => {
          return (
            <div class="margincheck">
              <label key={index} className="checkbox-inline">
                <input
                  id='Add'
                  name={props.name}
                  onChange={e => props.handleChange(e, index)}
                  value={option.item} 
                  checked={option.isChecked}
                  type="checkbox"
                />
                {option.item}
              </label>
            </div>
          );
        })}
      </div>
    </div>
    );
  }

}
// CheckBox.propTypes={
//   name:PropTypes.string.isRequired
// }

export default CheckBox;