
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import defaultImage from './image.svg'

Permission.defaultProps = {
  width: '100%',
  thumb: defaultImage,
  type: 'default',
}

Permission.prototype = {
  title: PropTypes.node,
  description: PropTypes.node,
  thumb: PropTypes.node,
  operation: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(['default', 'content']),
}

export default function Permission(props) {
  const [styled, setStyled] = useState('default')

  useEffect(() => {
    setStyled(props.type)
  }, [props.type])

  return (
    <div className={`oit-permission permission__${styled}`}>
      <div
        className={`oit-permission__items${props.className ? ` ${props.className}` : ""}`}
        style={props.style}
      >
        <div className="oit-permission__thumb">
          <img src={props.thumb} alt={props.title} />
        </div>
        <div className="oit-permission__item">
          <div className="oit-permission__title">{props.title}</div>
          <div className="oit-permission__description">{props.description}</div>
          {props.operation}
        </div>
      </div>
    </div>
  )
}
