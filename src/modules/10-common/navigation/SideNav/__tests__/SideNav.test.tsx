/*
 * Copyright 2022 Harness Inc. All rights reserved.
 * Use of this source code is governed by the PolyForm Shield 1.0.0 license
 * that can be found in the licenses directory at the root of this repository, also available at
 * https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */

import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { TestWrapper } from '@common/utils/testUtils'
import { usePreferenceStore } from 'framework/PreferenceStore/PreferenceStoreContext'
import { useGetAccountNG } from 'services/cd-ng'
import SideNav from '../SideNav'

jest.mock('framework/PreferenceStore/PreferenceStoreContext')
;(usePreferenceStore as jest.Mock).mockImplementation(() => {
  return {
    setPreference: () => {
      // empty
    },
    preference: {
      collapseSideNav: true
    },
    clearPreference: jest.fn
  }
})

jest.mock('services/cd-ng')
const useGetAccountNGMock = useGetAccountNG as jest.MockedFunction<any>

useGetAccountNGMock.mockImplementation(() => {
  return {
    data: {
      data: {
        name: 'account name',
        identifier: 'id1',
        cluster: 'free',
        defaultExperience: 'NG'
      }
    },
    refetch: jest.fn()
  }
})

describe('Side nav', () => {
  test('test expanded side nav', () => {
    const { container } = render(
      <TestWrapper
        defaultFeatureFlagValues={{
          SPG_SIDENAV_COLLAPSE: true
        }}
      >
        <SideNav title="title" subtitle="sub title" />
      </TestWrapper>
    )

    expect(container.querySelector('[class*="sideNavExpanded"]')).not.toBeNull()
  })

  test('test collapsed side nav', () => {
    const { container } = render(
      <TestWrapper
        defaultFeatureFlagValues={{
          SPG_SIDENAV_COLLAPSE: true
        }}
      >
        <SideNav collapseByDefault />
      </TestWrapper>
    )

    expect(container.querySelector('[class*="sideNavExpanded"]')).toBeNull()
  })

  test('click on collapse button', async () => {
    const { container } = render(
      <TestWrapper
        defaultFeatureFlagValues={{
          SPG_SIDENAV_COLLAPSE: true
        }}
      >
        <SideNav />
      </TestWrapper>
    )

    const resizeBtn = container.querySelector('[class*="sideNavResizeBtn"]')
    fireEvent.click(resizeBtn!)
    await waitFor(() => {
      expect(container.querySelector('[class*="collapse"]')).toBeDefined()
    })
  })

  test('click on rezie button when expanded', async () => {
    const { container } = render(
      <TestWrapper
        defaultFeatureFlagValues={{
          SPG_SIDENAV_COLLAPSE: true
        }}
      >
        <SideNav collapseByDefault />
      </TestWrapper>
    )

    const resizeBtn = container.querySelector('[class*="sideNavResizeBtn"]')
    fireEvent.click(resizeBtn!)
    await waitFor(() => {
      expect(container.querySelector('[class*="collapse"]')).toBeDefined()
    })
  })
})
