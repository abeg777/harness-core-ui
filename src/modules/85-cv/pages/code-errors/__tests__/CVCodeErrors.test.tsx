import { TestWrapper } from '@common/utils/testUtils'
import { render } from '@testing-library/react'
import React from 'react'
import { CVCodeErrors } from '../CVCodeErrors'

const WrapperComponent = (): React.ReactElement => {
  return (
    <TestWrapper>
      <CVCodeErrors />
    </TestWrapper>
  )
}

describe('Unit tests for CVCodeErrors', () => {
  test('Verify CodeErrors page renders and matches snapshot', async () => {
    const container = render(<WrapperComponent />)
    expect(container).toMatchSnapshot()
  })
})
