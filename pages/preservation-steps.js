import PreservationSteps from '../components/customFraming/PreservationSteps';
import Preservationhero from '../components/heros/PreservationHero';
import WelcomeHero from '../components/heros/WelcomeHero';

const PreservationDescription = () => {
	return (
		<div className=" bg-gray-200">
            <Preservationhero />
            
			<PreservationSteps />
          
		</div>
	);
};

export default PreservationDescription;
