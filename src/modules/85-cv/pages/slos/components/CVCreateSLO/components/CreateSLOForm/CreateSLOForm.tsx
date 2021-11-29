import React, { useMemo, useState } from 'react'
import { Container, Tab, Tabs } from '@wings-software/uicore'
import { isEmpty } from 'lodash-es'
import { useStrings } from 'framework/strings'
import { CreateSLOEnum } from './CreateSLO.constants'

import { NavButtons } from '../NavButtons/NavButtons'
import SLOName from './components/SLOName/SLOName'
import SLI from './components/SLI/SLI'
import SLOTargetAndBudgetPolicy from './components/SLOTargetAndBudgetPolicy/SLOTargetAndBudgetPolicy'
import type { CreateSLOFormProps } from './CreateSLO.types'
import { validateSLOForm } from './CreateSLO.utils'
import css from './CreateSLO.module.scss'

export default function CreateSLOForm(props: CreateSLOFormProps): JSX.Element {
  const { formikProps, identifier } = props
  const { getString } = useStrings()
  const [selectedTabId, setSelectedTabId] = useState<CreateSLOEnum>(CreateSLOEnum.NAME)

  const navButtons = useMemo(() => {
    const navButtonProps = {
      selectedTabId,
      setSelectedTabId,
      getString,
      formikProps
    }
    return <NavButtons {...navButtonProps} />
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formikProps, selectedTabId])

  return (
    <>
      <Container className={css.sloTabs}>
        <Tabs
          id="createSLOTabs"
          selectedTabId={selectedTabId}
          onChange={nextTab => {
            const errors = validateSLOForm(formikProps, selectedTabId, getString)
            if (isEmpty(errors)) {
              setSelectedTabId(nextTab as CreateSLOEnum)
            }
          }}
        >
          <Tab
            id={CreateSLOEnum.NAME}
            title={getString('name')}
            panel={
              <SLOName formikProps={formikProps} identifier={identifier}>
                {navButtons}
              </SLOName>
            }
          />
          <Tab
            id={CreateSLOEnum.SLI}
            title={getString('cv.slos.sli')}
            panel={<SLI formikProps={formikProps}>{navButtons}</SLI>}
          />
          <Tab
            id={CreateSLOEnum.SLO_TARGET_BUDGET_POLICY}
            title={getString('cv.slos.sloTargetAndBudgetPolicy')}
            panel={<SLOTargetAndBudgetPolicy formikProps={formikProps}>{navButtons}</SLOTargetAndBudgetPolicy>}
          />
        </Tabs>
      </Container>
    </>
  )
}
