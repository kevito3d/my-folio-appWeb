import React from 'react'

function Divider({color = '#fff', height = 1}) {
  return (
    <div
        style={{
            height: `${height}px`,
            backgroundColor: color,
            width: '100%',
        }}
    />

  )
}

export default Divider