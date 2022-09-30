/*
 * Copyright 2022 Harness Inc. All rights reserved.
 * Use of this source code is governed by the PolyForm Shield 1.0.0 license
 * that can be found in the licenses directory at the root of this repository, also available at
 * https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */

import React from 'react'
import { useToaster, VisualYamlSelectedView as SelectedView } from '@wings-software/uicore'
import { useParams } from 'react-router-dom'
import { useStrings } from 'framework/strings'
import { FreezeWindowContext } from '@freeze-windows/components/FreezeWindowStudio/FreezeWindowContext/FreezeWindowContext'
import { isValidYaml } from '@freeze-windows/components/FreezeWindowStudio/FreezeWindowStudioUtil'
import { useFreezeStudioData } from '@freeze-windows/components/FreezeWindowStudio/useFreezeStudioData'
import type { ProjectPathProps } from '@common/interfaces/RouteInterfaces'
import { RightBar } from '@freeze-windows/components/RightBar/RightBar'
import { FreezeWindowStudioHeader } from './FreezeWindowStudioHeader'
import { FreezeWindowStudioSubHeader } from './FreezeWindowStudioSubHeader'
import { FreezeWindowStudioBody } from './FreezeWindowStudioBody'
import css from './FreezeWindowStudio.module.scss'

export const FreezeWindowStudio = () => {
  const {
    view,
    setView,
    updateYamlView,
    updateFreeze,
    freezeWindowLevel,
    state: { isYamlEditable, yamlHandler }
  } = React.useContext(FreezeWindowContext)
  const { accountId, projectIdentifier, orgIdentifier } = useParams<ProjectPathProps>()

  const resources = useFreezeStudioData({ accountId, freezeWindowLevel, projectIdentifier, orgIdentifier })

  // isYamlError
  const [, setYamlError] = React.useState(false)
  const { showError } = useToaster()
  const { getString } = useStrings()
  const showInvalidYamlError = React.useCallback(
    (error: string) => {
      setYamlError(true)
      showError(error)
    },
    [setYamlError, showError]
  )

  const onViewChange = (newView: SelectedView): boolean => {
    if (newView === view) {
      return false
    }

    if (
      newView === SelectedView.VISUAL &&
      isYamlEditable &&
      !isValidYaml(yamlHandler, showInvalidYamlError, getString, updateFreeze)
    ) {
      return false
    }
    setView(newView)
    updateYamlView(false)
    return true
  }

  return (
    <>
      <div className={css.marginRight}>
        <FreezeWindowStudioHeader />
        <FreezeWindowStudioSubHeader onViewChange={onViewChange} />
        <FreezeWindowStudioBody resources={resources} />
      </div>
      <RightBar />
    </>
  )
}
