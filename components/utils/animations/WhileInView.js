
import { motion } from 'framer-motion';

const WhileInView = ({ children }) => {

	return (
		<motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}  >
			{children}
		</motion.div>
	);
};

export default WhileInView;