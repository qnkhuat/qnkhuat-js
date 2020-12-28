


import Layout from "../components/layout"
import Head from 'next/head'
export default function Error() {
  return (
    <Layout>
			<Head>
				<title>Family time</title>
				<meta name="og:title" content="I miss my Family playlist" />
				<meta name="description" content="It's okay to cry even if we are adult :'("/>

			</Head>

			<h2 className='text-center m-0'>It's near the end of the year</h2>	
			<h4 className="text-center m-0">These songs bring back a lot of good memories about my family to me, I hope it helps you too.</h4>
			<div className="iframe-wrapper">
				<iframe className='iframe' src="https://open.spotify.com/embed/playlist/7lfjpRWfkClvzxlLqwRUco" allowtransparency="true" allow="encrypted-media"></iframe>
				<style jsx>{`
				.iframe-wrapper{
					position:relative;
					padding-top:56.25%;
					width:80%;
					margin: 10px auto;
				}
				.iframe{
					position:absolute;
					top:0;
					left:0;
					width:100%;
					height:100%;
				}
				`}
				</style>

			</div>
		</Layout>
  )
}
