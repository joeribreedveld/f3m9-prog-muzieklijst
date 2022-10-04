// Imports
import React from "react"

// Functions
class Muzieklijst extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			nummers: [],
		}
	}

	// Enter functionality
	inputPressedEnter = (nummer, artiest) => {
		let toBeAdded = [
			{
				nummer: nummer,
				artiest: artiest,
				done: false,
				id: 100,
			},
		]
		let mergedArray = this.state.nummers.concat(toBeAdded)
		this.setState({
			nummers: mergedArray,
			nummerValue: "",
			artiestValue: "",
		})
	}

	// Update
	updateArtiest = (e) => {
		this.setState({ artiestValue: e.target.value })
		this.setState({ artiestValue: e.target.value })
	}

	updateNummer = (e) => {
		this.setState({ nummerValue: e.target.value })
		this.setState({ nummerValue: e.target.value })
	}

	// Enter
	enter = (e) => {
		if (this.state.nummerValue && this.state.artiestValue && Object.keys(this.state.nummerValue).length !== 0 && Object.keys(this.state.artiestValue).length !== 0) {
			if (e.keyCode === 13) {
				console.log("enter")
				this.inputPressedEnter(this.state.nummerValue, this.state.artiestValue)
			}
		}
	}

	enterButton = (e) => {
		if (this.state.nummerValue && this.state.artiestValue && Object.keys(this.state.nummerValue).length !== 0 && Object.keys(this.state.artiestValue).length !== 0) {
			console.log("enter")
			this.inputPressedEnter(this.state.nummerValue, this.state.artiestValue)
		}
	}

	cancelButton = (e) => {
		this.setState({ nummerValue: "", artiestValue: "" })
	}

	// Mount
	componentDidMount() {
		this.setState({
			nummers: [],
		})
	}

	// Render
	render() {
		const items = this.state.nummers.map((nummer) => {
			return (
				<>
					<li className=''>
						<p>Nummer: {nummer.nummer}</p>
						<p>Artiest: {nummer.artiest}</p>
					</li>
				</>
			)
		})

		return (
			<>
				<article>
					<h2 className='text-2xl mb-4 font-medium'>{this.props.genre}</h2>
					<ul className='flex flex-col gap-4'>{items}</ul>
					<ul className='flex gap-8 mb-2 mt-2'>
						<input onChange={this.updateNummer} onKeyDown={this.enter} value={this.state.nummerValue} className='bg-[#f8f8f8] text-black p-4 mt-4' type='text' placeholder='Nummer' />
						<input onChange={this.updateArtiest} onKeyDown={this.enter} value={this.state.artiestValue} className='bg-[#f8f8f8] text-black p-4 mt-4' type='text' placeholder='Artiest' />
					</ul>
					<ul className='flex gap-8'>
						<button className='bg-[#b1ffb1] hover:bg-[#99e899] h-full w-1/2 py-4 px-8 mt-4 text-white font-bold transition-all transition-duration-200' onClick={this.enterButton}>
							Enter
						</button>
						<button className='bg-[#ff9999] hover:bg-[#e27e7e] h-full w-1/2 py-4 px-8 mt-4 text-white font-bold transition-all transition-duration-200' onClick={this.cancelButton}>
							Cancel
						</button>
					</ul>
				</article>
			</>
		)
	}
}

// Exports
export default Muzieklijst
