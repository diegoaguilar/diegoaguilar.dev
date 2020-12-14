module.exports = {
	siteMetadata: {
		// Update these and enjoy :)
		title: `Diego Aguilar`,
		description: `Thoughts and words`,
		author: `Diego Benjamín Aguilar Aguilar`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-texblog`,
				short_name: `texblog`,
				start_url: `/`,
				// Color settings can be found in /styles/colors.scss
				background_color: `oldlace`,
				display: `standalone`
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// If using cloud deployment services, add GOOGLE_ANALYTICS_TRACKING_ID to your environment variables.
				trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
				head: true,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `writings`,
				path: `${__dirname}/content/writings`,
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [`gatsby-remark-katex`],
				remarkPlugins: [require(`remark-math`)],
				defaultLayouts: {
					writings: require.resolve("./src/components/WritingPage/writingpage.tsx"),
				},
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sass`,
	],
}
