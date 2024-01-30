import {Helmet } from 'react-helmet-async'

const Meta = ({title, description, keywords}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: 'Welcome to Amaze',
    description: 'We sell the best products fro cheap rates',
    keywords: 'products from A to Z'
}

export default Meta