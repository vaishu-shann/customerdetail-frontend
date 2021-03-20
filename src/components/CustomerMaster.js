import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class customerMaster extends Component {
	constructor(props) {
		super(props);

		this.state = {
			CustomerNumber: '',
			CustomerName: ''
		};

		this.update = this.update.bind(this);

		this.customerData = this.customerData.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	customerData(e) {
		e.preventDefault();
		alert("Customer details entered successfully");
		console.log(' submitted');
		console.log(this.state);
		this.setState({
			customerNumber: '',
			customerName: ''
		});
	}

	render() {
		return (
			<div className="customerMaster">
				<form onSubmit={this.customerData}>
				<h2  >Customer Data</h2>
					<div className="customerNumber">
						<input
							type="text"
							placeholder="Customer Number"
							value={this.state.customerNumber}
							maxLength="5"
							onChange={this.update}
							name="customerNumber"
							required
						/>
					</div>

					<div className="customerName">
						<input
							type="text"
							placeholder="Customer Name"
							value={this.state.customerName}
							maxLength="30"
							onChange={this.update}
							name="customerName"
							required
						/>
					</div>

					<div className="customerAddress1">
						<input
							type="text"
							placeholder="Customer Address 1"
							value={this.state.customerAddress1}
							maxLength="30"
							onChange={this.update}
							name="customerAddress"
							required
						/>
					</div>

					<div className="customerAddress2">
						<input
							type="text"
							placeholder="Customer Address 2"
							value={this.state.customerAddress2}
							maxLength="30"
							onChange={this.update}
							name="customerAddress"							
						/>
					</div>


					<div className="customerAddress3">
						<input
							type="text"
							placeholder="Customer Address 3"
							value={this.state.customerAddress3}
							maxLength="30"
							onChange={this.update}
							name="customerAddress"							
						/>
					</div>

					<div className="customerAddress4">
						<input
							type="text"
							placeholder="Customer Address 4"
							value={this.state.customerAddres4}
							maxLength="30"
							onChange={this.update}
							name="customerAddress"							
						/>
					</div>

					<div className="customerPincode">
						<input
							type="text"
							placeholder="Pincode"
							value={this.state.customerPincode}
							maxLength="8"
							onChange={this.update}
							name="customerPincode"
							required
						/>
					</div>


					<div className="customerPhonenumber">
						<input
							type="text"
							placeholder="Phone Number"
							value={this.state.customerPhonenumber}
							maxLength="15"
							onChange={this.update}
							name="customerPhonenumber"
							required
						/>
					</div>

					<div className="customerFax">
						<input
							type="text"
							placeholder="Fax"
							value={this.state.customerFax}
							maxLength="15"
							onChange={this.update}
							name="customerFax"
							required
						/>
					</div>

					<div className="customerDiscount">
						<input
							type="text"					
							placeholder="Discount"
							value={this.state.customerDiscount}
							onChange={this.update}
							name="customerDiscount"
							required
						/>
					</div>

					<div className="customerContactPerson">
						<input
							type="text"
							placeholder="Contact Person"
							value={this.state.customerContactperson}
							maxLength="30"
							onChange={this.update}
							name="customerContactperson"
							required
						/>
					</div>
						

					<input type="submit" value="Submit" />
				
				</form>
				
			</div>
		);
	}
}

export default customerMaster;
