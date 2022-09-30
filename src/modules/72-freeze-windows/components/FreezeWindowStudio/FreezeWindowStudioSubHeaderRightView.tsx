/*
 * Copyright 2022 Harness Inc. All rights reserved.
 * Use of this source code is governed by the PolyForm Shield 1.0.0 license
 * that can be found in the licenses directory at the root of this repository, also available at
 * https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */

import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, ButtonVariation } from '@wings-software/uicore'
import { useCreateFreeze } from 'services/cd-ng'
import { useStrings } from 'framework/strings'
import { yamlStringify } from '@common/utils/YamlHelperMethods'
import type { ProjectPathProps } from '@common/interfaces/RouteInterfaces'
import { FreezeWindowContext } from '@freeze-windows/components/FreezeWindowStudio/FreezeWindowContext/FreezeWindowContext'

export const FreezeWindowStudioSubHeaderRightView = () => {
  const { getString } = useStrings()
  const {
    state: { freezeObj } // freeze,
  } = React.useContext(FreezeWindowContext)
  const { accountId: accountIdentifier, projectIdentifier, orgIdentifier } = useParams<ProjectPathProps>()
  const { mutate: createFreeze } = useCreateFreeze({
    // loading
    queryParams: {
      accountIdentifier,
      orgIdentifier,
      projectIdentifier
    }
  })
  const onSave = () => {
    try {
      // check errors
      createFreeze(yamlStringify({ freeze: freezeObj }), { headers: { 'content-type': 'application/json' } })
      // const freeze =// freeze
    } catch (e) {
      // console.log(e)
    }
  }
  return (
    <div>
      <Button variation={ButtonVariation.PRIMARY} text={getString('save')} icon="send-data" onClick={onSave} />
    </div>
  )
}
