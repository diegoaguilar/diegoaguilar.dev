import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import dateInEnglish from "../Utils/dateInEnglish"
import truncateText from "../Utils/truncateText"

import "./writings.scss"

export default function Writings({ data }) {
	const allMdx = useWritingQuery()
	if (!allMdx)
		return (
			<h2 style={{ textAlign: "center", marginTop: "50px", color: "gray" }}>
				No writings found.
			</h2>
		)
	return (
		<>
			<section className="Writings">
				<h2 className="Writings__banner">Writings</h2>
				{allMdx.edges.map((post, i) => (
					<div className="Writing" key={i}>
						<Link to={`/writings/${post.node.slug}`} className="Writing__metainfo">
							<h3 className="Writing__title">{post.node.frontmatter.title}</h3>
							<h5 className="Writing__date">
								{dateInEnglish(post.node.frontmatter.date)}
							</h5>
						</Link>
						<div className="Writing__description">
							{post.node.frontmatter.description.length > 1
								? truncateText(post.node.frontmatter.description, 265)
								: truncateText(post.node.rawBody, 265)}
						</div>
						<Link to={`/writings/${post.node.slug}`} className="Writing__readmore">
							Read more
						</Link>
					</div>
				))}
			</section>
		</>
	)
}

export const useWritingQuery = () => {
	// Fetch latest writings
	const { allMdx } = useStaticQuery(
		graphql`
			query FetchRecentWritings {
				allMdx(
					sort: { order: DESC, fields: frontmatter___date }
					filter: { fileAbsolutePath: { regex: "/content/writings/" } }
				) {
					edges {
						node {
							frontmatter {
								date
								description
								title
							}
							slug
							rawBody
						}
					}
				}
			}
		`
	)
	return allMdx
}
