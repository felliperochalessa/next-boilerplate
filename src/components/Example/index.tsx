import { ReactNode } from 'react'

import { Container } from './styles'

interface ExampleProps {
  children: ReactNode
}

function Example() {
  return (
    <Container>
      <h1>Example</h1>
    </Container>
  )
}

export default Example
