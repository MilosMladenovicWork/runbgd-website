const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      website: String,
      email: String,
      description: String
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  await graphql(`
    {
      posts: allMarkdownRemark(
        limit: 2000
        filter: {
          frontmatter: {
            createPage: { eq: "true" }
            templateKey: { eq: "blog-post" }
          }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              category
              icons {
                icon
              }
            }
          }
        }
      }
      tags: allMarkdownRemark(
        limit: 2000
        filter: { frontmatter: { templateKey: { eq: "tag" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              iconDescription
            }
          }
        }
      }
      subcategoryItems: allMarkdownRemark(
        limit: 2000
        filter: {
          frontmatter: {
            createPage: { eq: "true" }
            templateKey: { eq: "subcategory-item" }
          }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              subcategory
            }
          }
        }
      }
      authors: allMarkdownRemark(
        limit: 2000
        filter: {
          frontmatter: {
            createPage: { eq: "true" }
            templateKey: { eq: "author-page" }
          }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              name
            }
          }
        }
      }
      titleAndBodyPages: allMarkdownRemark(
        limit: 2000
        filter: { frontmatter: { templateKey: { eq: "page-title-and-body" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
      categorySubcategories: allMarkdownRemark(
        limit: 2000
        filter: {
          frontmatter: {
            createPage: { eq: "true" }
            templateKey: { eq: "category-subcategory" }
          }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              title
            }
          }
        }
      }
      shopProducts: allMarkdownRemark(
        limit: 2000
        filter: { frontmatter: { templateKey: { eq: "shop-product" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              category
            }
          }
        }
      }
      categories: allMarkdownRemark(
        limit: 2000
        filter: {
          frontmatter: {
            createPage: { eq: "true" }
            templateKey: { eq: "category-page" }
          }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              title
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.posts.edges

    posts.forEach((edge) => {
      const id = edge.node.id
      const category = edge.node.frontmatter.category
      const tagArray = edge.node.frontmatter.icons
        ? edge.node.frontmatter.icons.map((icon) => icon.icon)
        : []

      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}/index.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          category,
          tagArray,
        },
      })
    })

    const tags = result.data.tags.edges

    tags.forEach((edge) => {
      const id = edge.node.id
      const tag = edge.node.frontmatter.iconDescription

      createPage({
        path: `/tag/${tag.toLowerCase()}`,
        component: path.resolve(`src/templates/tags-page/index.js`),
        // additional data can be passed via context
        context: {
          id,
          tag,
        },
      })
    })

    const subcategoryItems = result.data.subcategoryItems.edges

    subcategoryItems.forEach((edge) => {
      const id = edge.node.id
      const subcategory = edge.node.frontmatter.subcategory

      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}/index.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          subcategory,
        },
      })
    })

    const authors = result.data.authors.edges

    authors.forEach((edge) => {
      const id = edge.node.id
      const author = edge.node.frontmatter.name

      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}/index.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          author,
        },
      })
    })

    const titleAndBodyPages = result.data.titleAndBodyPages.edges

    titleAndBodyPages.forEach((edge) => {
      const id = edge.node.id

      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(`src/templates/page-title-and-body/index.js`),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    const categorySubcategories = result.data.categorySubcategories.edges

    categorySubcategories.forEach((edge) => {
      const id = edge.node.id
      const title = edge.node.frontmatter.title

      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(`src/templates/subcategory-page/index.js`),
        // additional data can be passed via context
        context: {
          id,
          title,
        },
      })
    })

    const shopProducts = result.data.shopProducts.edges

    shopProducts.forEach((edge) => {
      const id = edge.node.id
      const category = edge.node.frontmatter.category

      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(`src/templates/shop-product/index.js`),
        // additional data can be passed via context
        context: {
          id,
          category,
        },
      })
    })

    const categories = result.data.categories.edges

    categories.forEach((edge) => {
      const id = edge.node.id
      const title = edge.node.frontmatter.title

      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}/index.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          title,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
