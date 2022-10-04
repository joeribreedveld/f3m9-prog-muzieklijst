// Imports
import Muzieklijst from "../components/Muzieklijst"

// Functions
function Home() {
	return (
		<>
			<section className='p-8 md:p-16 lg:p-32'>
				<h1 className='text-3xl mb-16'>Mijn Muzieklijst</h1>
				<ul className='flex flex-wrap gap-x-8 gap-y-16'>
					<li className='shadow-xl p-12'>
						<Muzieklijst genre='Rock' />
					</li>
					<li className='shadow-xl p-12'>
						<Muzieklijst genre='Jazz' />
					</li>
					<li className='shadow-xl p-16'>
						<Muzieklijst genre='House' />
					</li>
					<li className='shadow-xl p-12'>
						<Muzieklijst genre='Blues' />
					</li>
					<li className='shadow-xl p-12'>
						<Muzieklijst genre='Pop' />
					</li>
					<li className='shadow-xl p-12'>
						<Muzieklijst genre='Hip Hop' />
					</li>
				</ul>
			</section>
		</>
	)
}

// Exports
export default Home
