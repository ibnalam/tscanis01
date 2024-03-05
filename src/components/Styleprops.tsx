import React from 'react'

type mystylebtn = {
  mystyle: React.CSSProperties
}

const Styleprops = (props: mystylebtn) => {
  return (
    <div style={props.mystyle}>
      style
    </div>
  )
}

export default Styleprops