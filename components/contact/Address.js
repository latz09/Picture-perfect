import { ImLocation2 } from 'react-icons/im';

const Address = () => {
    // URL Encoded Address
    const address = "898 Smith Avenue South, West Saint Paul, MN 55118";
    const encodedAddress = encodeURIComponent(address);

    // Google Maps URL
    const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    return (
        <a href={googleMapsURL} target="_blank" rel="noopener noreferrer" className="grid gap-1 place-items-center text-2xl text-gray-600">
            <span className="text-red-500 text-3xl py-2">
                <ImLocation2 />{' '}
            </span>
            <span>898 Smith Avenue South</span>
            <span>West Saint Paul, MN 55118</span>
        </a>
    );
};

export default Address;
