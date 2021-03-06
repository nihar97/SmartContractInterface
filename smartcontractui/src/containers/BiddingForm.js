import React, {Component} from 'react';
import SingleInput from '../components/SingleInput';
import {ETHEREUM_CLIENT, smartContract} from '../components/EthereumSetup';

var getContractID;

class BiddingForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			thing1 : '',
			thing2 : '',
			thing3 : '',
			thing4 : ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleThing1 = this.handleThing1.bind(this);
		this.handleThing2 = this.handleThing2.bind(this);
		this.handleThing3 = this.handleThing3.bind(this);
		this.handleThing4 = this.handleThing4.bind(this);
	}

	componentDidMount() {

	}

	handleThing1(e) {
		this.setState({ thing1: e.target.value }, () => console.log('name:', this.state.thing1));
	}

	handleThing2(e) {
		this.setState({ thing2: e.target.value }, () => console.log('name:', this.state.thing2));
	}

	handleThing3(e) {
		this.setState({ thing3: e.target.value }, () => console.log('name:', this.state.thing3));
	}

	handleThing4(e) {
		this.setState({ thing4: e.target.value }, () => console.log('name:', this.state.thing4));
	}

	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			thing1: '',
			thing2: '',
			thing3: '',
			thing4: ''
		});
	}

	handleFormSubmit(e) {
		e.preventDefault();
		// This is where you would call the web3 functions to make a new contract
		//Get this shit done before sunday

		const formPayload = {
			thing1: this.state.thing1,
			thing2: this.state.thing2,
			thing3: this.state.thing3,
			thing4: this.state.thing4
		};

		getContractID = formPayload.thing1;
		// uint cid, bytes32 _supplier, uint _price, uint _bidTime
		smartContract.bid.sendTransaction(formPayload.thing1, formPayload.thing2, formPayload.thing3, formPayload.thing4, {from: ETHEREUM_CLIENT.eth.accounts[1], gas: 200000});

		console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(e);
		//window.location.reload();
	}

	render() {
		return (
			<form className="container" onSubmit={this.handleFormSubmit}>
				<h5 className="bloo">Bid Form</h5>
				<table cellSpacing="10" cellPadding="10">
					<tbody>
					<tr>

						<td><label className="form-label">Contract Id</label></td>

						<td><SingleInput
						className="inputField"
						inputType={'number'}
						title={'Contract ID		'}
						name={'name'}
						controlFunc={this.handleThing1}
						content={this.state.thing1}
						placeholder={'Contract Id'} />
						</td>
					</tr>

					<tr>

						<td><label className="form-label">Supplier</label></td>

						<td><SingleInput
							className="inputfield"
							inputType={'text'}
							title={'Supplier   '}
							name={'name'}
							controlFunc={this.handleThing2}
							content={this.state.thing2}
							placeholder={'Supplier'} />
						</td>
					</tr>
					<tr>

						<td><label className="form-label">Target Price</label></td>

						<td><SingleInput
							className="inputfield"
							inputType={'text'}
							title={'Target Price   '}
							name={'name'}
							controlFunc={this.handleThing3}
							content={this.state.thing3}
							placeholder={'Target Price'} />
						</td>
					</tr>
					<tr>

						<td><label className="form-label">Target Time</label></td>

						<td><SingleInput
							className="inputfield"
							inputType={'text'}
							title={'Target Time   '}
							name={'name'}
							controlFunc={this.handleThing4}
							content={this.state.thing4}
							placeholder={'Target Time'} />
						</td>
					</tr>

					</tbody>
				</table>
				<input
					type="submit"
					className="submitButton"
					value="Submit"/>
				<button
					className="submitButton"
					onClick={this.handleClearForm}>Clear</button>
			</form>
		);
	}
}
export var contractBids;
export default BiddingForm;
