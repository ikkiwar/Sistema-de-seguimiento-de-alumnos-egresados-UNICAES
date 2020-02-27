import React from 'react';
import '../Components/Styles/Dropdowns.css';
import Api from '../Api';
import Select from "react-dropdown-select";
//import Select from 'react-select';

class Ddlist extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        posts: [],
     } 
   }

   handleChange(selectedOption) {
    this.setState({selectedOption});
   }
 render(){
  
 return (
      <div>
           <Select
                name="form-field-name"
                value={this.state.value}
                onChange={this.handleChange}
                options={this.props.setValue}
                className="dd"                 
            />
      </div>
  )
 }

}
export default Ddlist;