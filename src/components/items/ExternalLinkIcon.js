import React from 'react'

const ExternalLinkIcon = ({link, icon}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
        <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon