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

	componentDidMount() {
		this.setState({
			tasks: [],
		})
	}

	render() {
		return (
			<>
				<h1 className='text-2xl'>Muzieklijst</h1>
			</>
		)
	}
}

// Exports
export default Muzieklijst
