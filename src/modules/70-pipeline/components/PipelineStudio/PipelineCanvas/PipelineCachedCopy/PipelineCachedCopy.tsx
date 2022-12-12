/*
 * Copyright 2022 Harness Inc. All rights reserved.
 * Use of this source code is governed by the PolyForm Shield 1.0.0 license
 * that can be found in the licenses directory at the root of this repository, also available at
 * https://polyformproject.org/wp-content/uploads/2020/06/PolyForm-Shield-1.0.0.txt.
 */

import React, { useEffect } from 'react'
import { Button, ButtonVariation, Icon, IconName, Layout, ModalDialog, Text, useToggleOpen } from '@harness/uicore'
import { Intent } from '@harness/design-system'
import { Tooltip } from '@blueprintjs/core'
import { isEmpty } from 'lodash-es'
import { useStrings } from 'framework/strings'
import { getReadableDateTime } from '@common/utils/dateUtils'
import type { CacheResponseMetadata } from 'services/pipeline-ng'
import { StringUtils } from '@common/exports'
import { usePipelineContext } from '../../PipelineContext/PipelineContext'
import css from './PipelineCachedCopy.module.scss'

enum CacheState {
  VALID_CACHE = 'VALID_CACHE',
  STALE_CACHE = 'STALE_CACHE',
  UNKNOWN = 'UNKNOWN'
}
const cacheStateToIconMap: Record<CacheResponseMetadata['cacheState'], IconName> = {
  VALID_CACHE: 'success-tick',
  STALE_CACHE: 'stale-cache',
  UNKNOWN: 'danger-icon'
}

function PipelineCachedCopy(): React.ReactElement {
  const { getString } = useStrings()
  const { isOpen: isModalOpen, close: hideModal, open: showModal } = useToggleOpen(false)
  const { isOpen: isErrorModalOpen, close: hideErrorModal, open: showErrorModal } = useToggleOpen(false)
  const {
    state: { cacheResponse = {} as unknown as CacheResponseMetadata, pipelineView, remoteFetchError },
    updatePipelineView,
    fetchPipeline
  } = usePipelineContext()

  useEffect(() => {
    if (!isEmpty(remoteFetchError)) {
      showErrorModal()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remoteFetchError])

  function reloadPipeline(): void {
    updatePipelineView({ ...pipelineView, isYamlEditable: false })
    fetchPipeline({ forceFetch: true, forceUpdate: true, loadFromCache: false })
  }

  function getTooltipContent(): JSX.Element {
    return (
      <>
        {cacheResponse.cacheState === CacheState.STALE_CACHE && (
          <div>{getString('pipeline.pipelineCachedCopy.cacheInProgress')}</div>
        )}
        <div>
          <span>{getString('common.lastUpdatedAt')}</span>:{' '}
          {getReadableDateTime(cacheResponse.lastUpdatedAt, StringUtils.DEFAULT_DATE_FORMAT)}
        </div>
      </>
    )
  }

  return (
    <>
      <Layout.Horizontal
        flex={{ alignItems: 'center' }}
        spacing="small"
        margin={{ right: 'medium' }}
        className={css.reloadFromCache}
      >
        <div className={css.cachedcopy}>
          <Tooltip position="bottom" content={getTooltipContent()}>
            <Text
              font={{ align: 'center', size: 'xsmall' }}
              icon={cacheStateToIconMap[cacheResponse.cacheState]}
              iconProps={{ size: 12 }}
            >
              {getString('pipeline.pipelineCachedCopy.cachedCopyText')}
            </Text>
          </Tooltip>
        </div>
        <Icon size={12} name="command-rollback" onClick={() => showModal()} />
      </Layout.Horizontal>
      <ModalDialog
        isOpen={isModalOpen}
        isCloseButtonShown
        canEscapeKeyClose
        canOutsideClickClose
        enforceFocus={false}
        onClose={hideModal}
        title={
          <>
            <Icon name="warning-icon" intent={Intent.WARNING} size={32} />{' '}
            <span>{getString('pipeline.pipelineCachedCopy.reloadPipeline')}</span>
          </>
        }
        footer={
          <Layout.Horizontal spacing="small">
            <Button variation={ButtonVariation.PRIMARY} text={getString('confirm')} onClick={reloadPipeline} />
            <Button
              variation={ButtonVariation.TERTIARY}
              text={getString('cancel')}
              onClick={/* istanbul ignore next */ () => hideModal()}
            />
          </Layout.Horizontal>
        }
        width={600}
        className={css.dialogStyles}
      >
        <Text margin={{ left: 'huge', top: 'large', right: 'huge', bottom: 'large' }}>
          {getString('pipeline.pipelineCachedCopy.reloadPipelineContent')}
        </Text>
      </ModalDialog>
      <ModalDialog
        isOpen={isErrorModalOpen}
        isCloseButtonShown
        canEscapeKeyClose
        canOutsideClickClose
        enforceFocus={false}
        onClose={hideErrorModal}
        title={
          <>
            <Icon name="danger-icon" intent={Intent.DANGER} size={32} />
            <span>{getString('pipeline.pipelineCachedCopy.cacheUpdateFailed')}</span>
          </>
        }
        footer={
          <Layout.Horizontal spacing="small">
            <Button variation={ButtonVariation.PRIMARY} text={getString('common.tryAgain')} onClick={reloadPipeline} />
            <Button
              variation={ButtonVariation.TERTIARY}
              text={getString('cancel')}
              onClick={/* istanbul ignore next */ () => hideErrorModal()}
            />
          </Layout.Horizontal>
        }
        width={600}
        className={css.dialogStyles}
      >
        <Text margin={{ left: 'huge', top: 'large', right: 'huge', bottom: 'large' }}>
          {getString('pipeline.pipelineCachedCopy.reloadPipelineContent')}
        </Text>
      </ModalDialog>
    </>
  )
}

export default PipelineCachedCopy