import * as types from '@/types'
import Head from 'next/head'

export default function AppHead(props: types.AppHeadProps) {
  return (
    <Head>
      {/* Basic HTML Meta Tags */}
      <title>{props.metadata.title}</title>
      <meta name="keywords" content={props.metadata.keywords.toString()} />
      <meta name="description" content={props.metadata.description} />
      <meta name="subject" content={props.metadata.subject} />
      <meta name="copyright" content={props.metadata.copyright} />
      <meta name="language" content={props.metadata.language} />
      <meta name="robots" content={props.metadata.robots} />
      <meta name="theme-color" content={props.metadata.themeColor} />
      <link rel="icon" type="image/x-icon" href={props.metadata.icon} />
      <meta
        name="author"
        content={`${props.metadata.authors[0].name}, ${props.metadata.authors[0].email}`}
      />
      <meta name="designer" content={props.metadata.designer} />
      <meta name="reply-to" content={props.metadata.replyTo} />
      <meta name="owner" content={props.metadata.owner} />
      <meta name="url" content={props.metadata.url} />
      <meta name="identifier-URL" content={props.metadata.identifierURL} />
      <meta name="directory" content={props.metadata.directory} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={props.metadata.openGraph.title} />
      <meta property="og:type" content={props.metadata.openGraph.type} />
      <meta property="og:url" content={props.metadata.openGraph.url} />
      <meta
        property="og:image"
        content={props.metadata.openGraph.images[0].url}
      />
      <meta
        property="og:site_name"
        content={props.metadata.openGraph.siteName}
      />
      <meta
        property="og:description"
        content={props.metadata.openGraph.description}
      />
      <meta property="og:locale" content={props.metadata.openGraph.locale} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={props.metadata.twitter.card} />
      <meta name="twitter:site" content={props.metadata.twitter.siteId} />
      <meta name="twitter:creator" content={props.metadata.twitter.creatorId} />
      <meta name="twitter:title" content={props.metadata.twitter.title} />
      <meta
        name="twitter:description"
        content={props.metadata.twitter.description}
      />
      <meta name="twitter:image" content={props.metadata.twitter.images[0]} />
      <meta property="twitter:domain" content={props.metadata.twitter.domain} />
      <meta property="twitter:url" content={props.metadata.twitter.url} />
    </Head>
  )
}
