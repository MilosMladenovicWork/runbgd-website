// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'

// import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'

// export const IndexPageTemplate = ({
//   image,
//   title,
//   heading,
//   subheading,
//   mainpitch,
//   description,
//   intro,
// }) => (
//   <div>
//     <div
//       className="full-width-image margin-top-0"
//       style={{
//         backgroundImage: `url(${
//           !!image.childImageSharp ? image.childImageSharp.fluid.src : image
//         })`,
//         backgroundPosition: `top left`,
//         backgroundAttachment: `fixed`,
//       }}
//     >
//       <div
//         style={{
//           display: 'flex',
//           height: '150px',
//           lineHeight: '1',
//           justifyContent: 'space-around',
//           alignItems: 'left',
//           flexDirection: 'column',
//         }}
//       >
//         <h1
//           className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
//           style={{
//             boxShadow:
//               'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
//             backgroundColor: 'rgb(255, 68, 0)',
//             color: 'white',
//             lineHeight: '1',
//             padding: '0.25em',
//           }}
//         >
//           {title}
//         </h1>
//         <h3
//           className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
//           style={{
//             boxShadow:
//               'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
//             backgroundColor: 'rgb(255, 68, 0)',
//             color: 'white',
//             lineHeight: '1',
//             padding: '0.25em',
//           }}
//         >
//           {subheading}
//         </h3>
//       </div>
//     </div>
//     <section className="section section--gradient">
//       <div className="container">
//         <div className="section">
//           <div className="columns">
//             <div className="column is-10 is-offset-1">
//               <div className="content">
//                 <div className="content">
//                   <div className="tile">
//                     <h1 className="title">{mainpitch.title}</h1>
//                   </div>
//                   <div className="tile">
//                     <h3 className="subtitle">{mainpitch.description}</h3>
//                   </div>
//                 </div>
//                 <div className="columns">
//                   <div className="column is-12">
//                     <h3 className="has-text-weight-semibold is-size-2">
//                       {heading}
//                     </h3>
//                     <p>{description}</p>
//                   </div>
//                 </div>
//                 <Features gridItems={intro.blurbs} />
//                 <div className="columns">
//                   <div className="column is-12 has-text-centered">
//                     <Link className="btn" to="/products">
//                       See all products
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="column is-12">
//                   <h3 className="has-text-weight-semibold is-size-2">
//                     Latest stories
//                   </h3>
//                   <BlogRoll />
//                   <div className="column is-12 has-text-centered">
//                     <Link className="btn" to="/blog">
//                       Read more
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   </div>
// )

// IndexPageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   subheading: PropTypes.string,
//   mainpitch: PropTypes.object,
//   description: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array,
//   }),
// }

// const IndexPage = ({ data }) => {
//   const { frontmatter } = data.markdownRemark

//   return (
//     <Layout>
//       <IndexPageTemplate
//         image={frontmatter.image}
//         title={frontmatter.title}
//         heading={frontmatter.heading}
//         subheading={frontmatter.subheading}
//         mainpitch={frontmatter.mainpitch}
//         description={frontmatter.description}
//         intro={frontmatter.intro}
//       />
//     </Layout>
//   )
// }

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

// export default IndexPage

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         title
//         image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         heading
//         subheading
//         mainpitch {
//           title
//           description
//         }
//         description
//         intro {
//           blurbs {
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 240, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//       }
//     }
//   }
// `

import React, {useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

import Layout from '../components/Layout'

import BigPostsCarousel from '../components/BigPostsCarousel'
import SecondaryPostsCarousel from '../components/SecondaryPostsCarousel'
import PostCover from '../components/PostCover'
import NewsletterForm from '../components/NewsletterForm';
import FindPlacesMainCard from '../components/FindPlacesMainCard'

const posts = [{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
}
]

const infiniteScrollPosts = [{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
},{
  heading:'This is some blog entry that has meaning on home page.',
  category:'style',
  author:'Dragan Filovski'
}]

const IndexPage = () => {

  let [numOfLatestPosts, setNumOfLatestPosts] = useState(5)

  function loadMoreLatestPosts(){
    setNumOfLatestPosts(prevState => prevState + 5)
  }

  return (
    <Layout>
      <main>
        <BigPostsCarousel posts={posts}/>
        <h2>Trending</h2>
        <SecondaryPostsCarousel posts={posts}/>
        <NewsletterForm />
        <hr/>
        <FindPlacesMainCard />
        <hr/>
        <h2>The City</h2>
        <SecondaryPostsCarousel posts={posts}/>
        <h2>Travel</h2>
        <SecondaryPostsCarousel posts={posts}/>
        <h2>Music</h2>
        <SecondaryPostsCarousel posts={posts}/>
        <h2>Culture</h2>
        <SecondaryPostsCarousel posts={posts}/>
        <h2>Style</h2>
        <SecondaryPostsCarousel posts={posts}/>
        <h2>Life</h2>
        <SecondaryPostsCarousel posts={posts}/>
        <h2>Food & Beverages</h2>
        <SecondaryPostsCarousel posts={posts}/>
        <h2>Latest Stories</h2>
        <div style={{display:'relative'}}>
          <InfiniteScroll
            scrollThreshold='0px'
            dataLength={numOfLatestPosts}
            next={loadMoreLatestPosts}
            hasMore={numOfLatestPosts < infiniteScrollPosts.length ? true : false}
            endMessage={
              <p style={{textAlign: 'center'}}>
                <b>You have seen it all! Come later</b>
              </p>
            }
          >
            {infiniteScrollPosts.map((post, index) => {
              if(index < numOfLatestPosts){
                return <PostCover post={post}/>
              }
          })}
          </InfiniteScroll>
        </div>
      </main>
    </Layout>
  ) 
}

export default IndexPage