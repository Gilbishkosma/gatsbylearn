module.exports = {
    siteMetadata:{
        title:"FrontEnd Masters Gatsby workshop",
        description:"A site we built together during a full day Frontend gatsby workshop"
    },
    plugins : [
                'gatsby-plugin-emotion',
                'gatsby-plugin-react-helmet',
                'gatsby-plugin-sharp',
                'gatsby-transformer-sharp',
                {
                    resolve:'gatsby-plugin-mdx',
                    options:{
                        defaultLayouts:{
                            default:require.resolve('./src/components/layout.js') //default layout for a markdown
                        },
                        gatsbyRemarkPlugins:[
                            {resolve:'gatsby-remark-images'}
                        ]
                    },
                },
                {
                    resolve:'gatsby-source-filesystem',
                    options:{
                        name:'posts',
                        path:'posts',
                    }
                },
                {
                    resolve:'gatsby-source-filesystem',
                    options:{
                        name:'images',
                        path:'images',
                    }
                },
                {
                    resolve:'gatsby-source-instagram',
                    options:{
                        username:'gilbish_kosma',
                    },
                },
                {
                    resolve:"gatsby-plugin-webpack-bundle-analyzer",
                    options:{
                        production:true,
                        disable: !process.env.ANALYZE_BUNDLE_SIZE,
                        generateStatsFile:true,
                        analyzerMode:'static',
                    }
                }
             ],
};