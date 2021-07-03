import React, { useEffect, useRef } from 'react'
import { useFrame } from "@react-three/fiber";
import { Circle } from "./Circle";
import { ZERO3 } from "../constants";

const useInit = (circle) => {
  useEffect(() => {
    circle.current.speed = ZERO3
    circle.current.acceleration = ZERO3
  }, [circle])
}

export const CirclePlayer = ({ target, ...props }) => {
  const circle = useRef()
  useFrame((rootState) => {
    const c = circle.current
    c.position.lerp(target, 0.05)
  })
  useInit(circle)
  return (
    <Circle {...props}
            ref={circle}
    />
  )
}
