import React, { Component } from "react";
import axios from "../../../node_modules/axios";
import "./AddCountry.css";
const url = "https://localhost:8081";
class AddCountry extends Component {
	constructor(props) {
		super(props);
		this.state = {
            name: "",
            currencies: "",
            languages: "",
            capital: "",
            population: "",
            flag: ""
    };
	}
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
		axios
			.post(url, this.state)
			.then(res => {
				console.log(res);
			})
			.then(err => {
				console.log(err);
			});
	};
	render() {
		const {
            name,
            currencies,
            languages,
            capital,
            population,
            flag,
		} = this.state;
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12'>
						<h1 className='crud-create-header display-4 my-5 text-center'>
							Add A Country
						</h1>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12'>
						<form className='crudInput' onSubmit={this.handleSubmit}>
							<input
								type='text'
								name='name'
								placeholder='Country Name'
								value={name}
								onChange={this.handleChange}
							></input>
							<input
								type='text'
								name='currencies'
								value={currencies}
								onChange={this.handleChange}
								placeholder='currencies separated by a comma'
							></input>
							<input
								type='text'
								name='languages'
								value={languages}
								onChange={this.handleChange}
								placeholder='Languages separated by a comma'
							></input>
							<input
								type='text'
								name='capital'
								placeholder='Capital City'
								value={capital}
								onChange={this.handleChange}
							></input>
							<input
								type='text'
								name='population'
								placeholder='Population'
								value={population}
								onChange={this.handleChange}
							></input>
							<input
								type='text'
								name='flag'
								value={flag}
								onChange={this.handleChange}
								placeholder='Flag link'
							></input>
							<button type='submit'>Submit a Country!</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default AddCountry;

