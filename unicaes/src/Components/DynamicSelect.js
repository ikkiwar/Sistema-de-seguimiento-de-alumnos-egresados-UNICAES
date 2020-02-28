import React, {Component} from 'react';
import Select from "react-dropdown-select";
import '../Components/Styles/Dropdowns.css';

class DynamicSelect extends Component{
    constructor(props){
        super(props)
    }

    //On the change event for the select box pass the selected value back to the parent
    handleChange = (event) =>
    {
        let selectedValue = event.target.value;
        this.props.onSelectChange(selectedValue);
    }

    render(){
            return (
                <select name="customSearch" className="btn btn-light dropdown-toggle form-control" onChange={this.handleChange}>
                <option>{this.props.setSelectTag}</option>
                {this.props.setValue}
           </select>
        )
    }
}

export default DynamicSelect;