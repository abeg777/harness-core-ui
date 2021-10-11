import React from 'react'
import cx from 'classnames'
import { Text, Container, Color } from '@wings-software/uicore'
import { useStrings } from 'framework/strings'
import { createDetailsTitle, getOnClickOptions } from './ChangeDetails.utils'
import type { ChangeDetailsDataInterface } from '../../ChangeCard.types'
import StatusChip from './components/StatusChip/StatusChip'
import css from './ChangeDetails.module.scss'

export default function ChangeDetails({
  ChangeDetailsData
}: {
  ChangeDetailsData: ChangeDetailsDataInterface
}): JSX.Element {
  const { getString } = useStrings()
  const { type, category, details, status } = ChangeDetailsData

  return (
    <Container>
      <Text font={{ size: 'medium', weight: 'bold' }} color={Color.GREY_800}>
        {createDetailsTitle(type, category)} {getString('details')}
      </Text>
      <div className={css.gridContainer}>
        {Object.entries(details).map(item => {
          return (
            <>
              <Text className={css.gridItem} font={{ size: 'small' }}>
                {item[0]}
              </Text>
              <Text className={cx(item[1]?.url && css.isLink)} font={{ size: 'small' }} {...getOnClickOptions(item[1])}>
                {typeof item[1] === 'string' ? item[1] : item[1]?.name}
              </Text>
            </>
          )
        })}
      </div>
      {status ? <StatusChip status={status} /> : null}
    </Container>
  )
}
