import React from "react";

export const Background = (props) => {
  return (
    <mesh {...props}>
      <planeGeometry args={[100, 100]}/>
      <meshStandardMaterial color="black" />
    </mesh>
  )
}
