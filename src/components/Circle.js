import React from 'react'

const Circle_ = (props, ref) => {
  return (
    <mesh {...props} ref={ref}>
      <circleGeometry args={[1, 40]}/>
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}

export const Circle = React.forwardRef(Circle_)
