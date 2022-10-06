/*
 * Copyright 2022 Harness Inc. All rights reserved.
 * Use of this source code is governed by the PolyForm Shield 1.0.0 license
 * that can be found in the licenses directory at the root of this repository, also available at
 * https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */

import React from 'react'
import { TestWrapper } from '@common/utils/testUtils'
import { render } from '@testing-library/react'
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
