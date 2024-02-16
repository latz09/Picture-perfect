import delivery from '../public/images/icons/delivery.svg';
import custom from '../public/images/icons/custom.svg';
import wholesale from '../public/images/icons/wholesale.svg';

export const servicesData = [
	{
		title: 'Value Pricing',
        image: wholesale,
		description:
			'Discover unmatched value with our Value Pricing for all project sizes. From large-scale government commissions to individual needs, we deliver exceptional quality at competitive rates.',
	},
	{
		title: 'Custom Framing',
        image: custom,
		description:
			'At the core of our services is Custom Framing, where your vision meets our craftsmanship. From fine art to posters, we create stunning displays that highlight the unique beauty of each piece.',
		link: '/custom-framing',
		linkText: 'learn more',
	},
	// {
	// 	title: 'Delivery and Installation',
    //     image: delivery,
	// 	description:
	// 		'We offer more than framing—count on us for expert delivery and installation. Our team ensures your pieces are perfectly presented, providing a hassle-free experience from conception to completion.',
	// },
];
