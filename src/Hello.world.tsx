import React from 'react'

const ONE_SECOND = 1000

export const HelloWorld = () => {
  const [ count, setCount ] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => setCount(prev => prev + 1), ONE_SECOND)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h3>Hello World</h3>
      <p>{ count }</p>
    </div>
  )
}
