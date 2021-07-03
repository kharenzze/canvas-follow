import React, { useRef } from 'react'
import { useFrame } from "@react-three/fiber";
import { Circle } from "./Circle";

export const CirclePlayer = ({ target, ...props }) => {
  const circle = useRef()
  useFrame((rootState) => {
    circle.current.position.lerp(target, 0.05)
  })
  return (
    <Circle {...props}
            ref={circle}
    />
  )
}
