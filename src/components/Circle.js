import React from 'react'

export const Circle = (props) => {
  return (
    <mesh {...props}>
      <circleGeometry args={[1, 40]}/>
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}
