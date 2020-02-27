import React from 'react';
import '../Components/Styles/Dropdowns.css';
import Api from '../Api';
import Select from "react-dropdown-select";
//import Select from 'react-select';

class Ddlist extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
      posts: [],
     } 
   }

  // handleChange(selectedOption) {
  //  this.setState({selectedOption});
  // }

   handleChange = (selectedOption) => {this.setState({ currentOption: selectedOption });}

 render(){
  
 return (
      <div>
           <Select
                name="form-field-name"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                options={this.props.setValue}
                className="dd"                 
            />
      </div>
  )
 }

}
export default Ddlist;