import React from 'react'

export const Layout = ({children}) => {
  return (
    <div className=' container mx-20' style={{maxWidth:"90vw"}}>
        {children}
    </div>
  )
}
