import React from 'react'

const loading = () => {
  return (
    <div className="loading">
      <div className="loading__content">
        <div className="loading__content__spinner"></div>
        <div className="loading__content__text">Loading...</div>
      </div>
    </div>
  )
}

export default loading