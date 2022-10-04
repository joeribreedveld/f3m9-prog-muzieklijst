// Imports
import React from "react"

// Functions
class Muzieklijst extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tasks: [],
		}
	}

	// Enter functionality
	inputPressedEnter = (input) => {
		let toBeAdded = [
			{
				name: input,
				done: false,
				id: 100,
			},
		]
		let mergedArray = this.state.tasks.concat(toBeAdded)
		this.setState({
			tasks: mergedArray,
		})
	}

	// Update
	update = (e) => {
		this.setState({ inputValue: e.target.value })
	}

	// Enter
	enter = (e) => {
		if (e.keyCode === 13) {
			console.log("enter")
			this.inputPressedEnter(this.state.inputValue)
		}
	}

	// Mount
	componentDidMount() {
		this.setState({
			tasks: [],
		})
	}

	// Render
	render() {
		const items = this.state.tasks.map((task) => {
			return (
				<>
					<li>
						<p>{task.name}</p>
					</li>
				</>
			)
		})

		return (
			<>
				<h1 className='text-2xl'>Muzieklijst</h1>
				<p>{this.props.genre}</p>
				<ul>{items}</ul>
				<input onChange={this.update} onKeyDown={this.enter} value={this.state.inputValue} className='input' type='text' placeholder='Nummer' />
			</>
		)
	}
}

// Exports
export default Muzieklijst
