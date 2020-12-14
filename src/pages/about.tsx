import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/Utils/seo"

export default function About(props) {
	return (
		<Layout>
			{/* siteTitle specifies that the title will the siteTitle alone */}
			<SEO title="siteTitle" />
			<section className="About">
				<h1>About me</h1>
				<p>
					<br />
					I'm a Computer Science Engineer focused in cloud technologies, web development and digital products.
					<br />
					<br />
					I work with a variety of companies and brands offering Software Architecture consultancy and support for cloud and web development.
					<br />
					<br />
					I run Ciudades agency which is specialized in AWS, GCP and Azure services, data engineering and product development.
					<br />
					<br />
					I'm always eager to share ideas and thoughts and available for consultancy collaborations.
					<br />
					Feel free to drop an email to {" "}
					<a
						href="mailto://diegoaguilar@ciudades.dev"
						target="_blank"
						rel="noopener noreferrer"
					>
						diegoaguilar@ciudades.dev
					</a>{" "}
					<br />
					<br />
					<br />
					<br />
					- Diego
				</p>
			</section>
		</Layout>
	)
}
