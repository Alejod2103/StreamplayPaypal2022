import { SelectCont,
         LabelStyled,
          } from './SelectFieldStyle.js';


const SelectField = (props) => {
    const { label, handleChange, name } = props;
    return (
      <SelectCont>
        <LabelStyled htmlFor={name}>{label}</LabelStyled><br/>
        <select onChange={handleChange} defaultValue="role" name={name} className="SelectField">
          <option value="role" disabled>Paquete elegido</option>
          <option value="frontEnd" className="op">Plan 1 mes - $30.00</option>
          <option value="backEnd" className="op">Plan 3 meses - $75.00</option>
          <option value="qa" className="op">Plan 6 meses - $120.00</option>
        </select>
        </SelectCont>
    )
  }
  
  export default SelectField