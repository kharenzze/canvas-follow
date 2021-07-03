import React, { useState } from 'react'
import { Vector3 } from 'three'
import { useFrame } from "@react-three/fiber";
import { Circle } from "./Circle";

const MAX_SPEED = 1

export const CirclePlayer = ({ target, initialPosition,...props }) => {
  const [state, setState] = useState(() => ({
    position: initialPosition ?? new Vector3()
  }))
  useFrame((rootState) => {
    //const dir = target
  })
  return (
    <Circle {...props}/>
  )
}
