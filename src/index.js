import React, { useState } from 'react'

const LibExample = () => {
  const [clicks, setClicks] = useState(0)

  return (
    <div>
      <h1>Example</h1>
      <button onClick={() => setClicks(clicks + 1)}>
        {clicks}
      </button>
    </div>
  )
}

export default LibExample
