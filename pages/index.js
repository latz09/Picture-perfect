import Head from 'next/head';
import Hero from '../components/hero/Hero';


export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Custom picture frame shop in West Saint Paul Minnesota Quality framing at affordable prices since 1990' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
        <Hero />
      </main>
		</div>
	);
}
