/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, image: metaImage, title, pathname }) {
  const { site, defaultImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
        defaultImage: file(relativePath: { eq: "forky.png" }) {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    `
  )
  console.log('SEO!!!')
  console.log('site', site)
  console.log('description', description)
  console.log('lang', lang)
  console.log('meta', meta)
  console.log('title', title)
  const metaDescription = description || site.siteMetadata.description;
  const forky = defaultImage.childImageSharp.resize;
  const image = metaImage && metaImage.src ? metaImage : forky;
  const BASE_URL = site.siteMetadata.siteUrl;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;
  const url = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : site.siteMetadata.siteUrl;
  console.log('metaDescription', metaDescription)
  console.log('!!! forky', forky)
  console.log('site.siteMetadata.siteUrl', site.siteMetadata.siteUrl)
  console.log('url', url)
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
            {
              rel: "canonical",
              href: canonical,
            },
          ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: "og:url",
          content: url
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: "og:image",
          content: BASE_URL + image.src,
        },
        {
          property: "og:image:width",
          content: image.width,
        },
        {
          property: "og:image:height",
          content: image.height,
        },
      ]
        .concat(
          metaImage
            ? [
              {
                name: "twitter:card",
                content: "summary_large_image",
              },
            ]
            : [
              {
                name: "twitter:card",
                content: "summary",
              },
            ]
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `ko-KR`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}

export default SEO
