export type MetaDataAuthor = {
  name: string
  email: string
  url: string
}

export type MetaDataImage = {
  key: string
  url: string
  alt: string
  width: number
  height: number
}

export type OpenGraphProps = {
  title: string
  description: string
  type: string
  url: string
  images: Array<MetaDataImage>
  siteName: string
  locale: string
}

export type TwitterProps = {
  card: string
  title: string
  description: string
  siteId: string
  creator: string
  creatorId: string
  images: Array<string>
  domain: string
  url: string
}

export type MetaDataProps = {
  title: string
  description: string
  keywords: Array<string>
  subject: string
  copyright: string
  language: string
  robots: string
  themeColor: string
  icon: string
  authors: Array<MetaDataAuthor>
  designer: string
  replyTo: string
  owner: string
  url: string
  identifierURL: string
  directory: string
  openGraph: OpenGraphProps
  twitter: TwitterProps
}

export type AppHeadProps = {
  metadata: MetaDataProps
}

export type LayoutProps = {
  metadata: MetaDataProps
  children: JSX.Element | Array<JSX.Element>
}

export type MainProps = {
  children: JSX.Element | Array<JSX.Element>
}

export type HomeProps = {
  metadata: MetaDataProps
  children: JSX.Element | Array<JSX.Element>
  movieData: any
  titanicSearch: any
  alternativesData: any
  recommendationsData: any
}

export type ContainerProps = {
  children: JSX.Element | Array<JSX.Element>
}

export type IconProps = {
  icon: string
  fontSize?: string
  className?: string
  onClick?: () => void
}

export type TooltipProps = {
  children: JSX.Element | Array<JSX.Element>
  tip: string
  className?: string
  onClick?: () => void
}
