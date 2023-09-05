import React from 'react'
import Switcher from '../DarkModeSwitch/Switcher'

const Test = () => {
  return (
    <div className="container mx-auto bg-primary rounded-xl shadow border">
    <h1 className="text-3xl font-medium underline">
    Hello world!
  </h1>
  <Switcher/>
  </div>
  )
}

export default Test