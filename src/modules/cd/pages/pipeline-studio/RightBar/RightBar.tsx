import React from 'react'
import cx from 'classnames'
import { Icon, Button, useModalHook } from '@wings-software/uikit'
import { Dialog } from '@blueprintjs/core'
import { useToaster } from 'modules/common/exports'
import { RunPipelineForm } from 'modules/cd/components/RunPipelineModal/RunPipelineForm'
import { runPipelineDialogProps } from 'modules/cd/components/RunPipelineModal/RunPipelineModal'
import i18n from './RightBar.i18n'
import { PipelineContext } from '../PipelineContext/PipelineContext'
import { DrawerTypes } from '../PipelineContext/PipelineActions'
import css from './RightBar.module.scss'

export const RightBar = (): JSX.Element => {
  const { showWarning } = useToaster()
  const {
    state: {
      isUpdated,
      pipeline,
      pipelineView,
      pipelineView: {
        drawerData: { type }
      }
    },
    updatePipelineView
  } = React.useContext(PipelineContext)

  const [isRunPipelineOpen, setRunPipelineOpen] = React.useState(true)

  const [openModel, hideModel] = useModalHook(
    () => (
      <Dialog isOpen={isRunPipelineOpen} {...runPipelineDialogProps}>
        <RunPipelineForm pipelineIdentifier={pipeline.identifier} onClose={closeModel} />
      </Dialog>
    ),
    [pipeline.identifier]
  )

  const closeModel = React.useCallback(() => {
    setRunPipelineOpen(false)
    hideModel()
  }, [hideModel])

  const handleRunPipeline = React.useCallback(async () => {
    if (!isUpdated) {
      openModel()
    } else {
      showWarning(i18n.pipelineUnSave)
    }
  }, [openModel, isUpdated, showWarning])

  return (
    <div className={css.rightBar}>
      <div />
      <Button
        noStyling
        className={cx(css.iconButton, { [css.selected]: type === DrawerTypes.Templates })}
        onClick={() =>
          updatePipelineView({
            ...pipelineView,
            isDrawerOpened: true,
            drawerData: { type: DrawerTypes.Templates, size: 700 }
          })
        }
      >
        <Icon name="template-library" title={i18n.templateLibrary} size={type === DrawerTypes.Templates ? 22 : 16} />
      </Button>
      <Button
        noStyling
        className={cx(css.iconButton, { [css.selected]: type === DrawerTypes.PipelineVariables })}
        onClick={() =>
          updatePipelineView({
            ...pipelineView,
            isDrawerOpened: true,
            drawerData: { type: DrawerTypes.PipelineVariables, size: 1335, hasBackdrop: true }
          })
        }
      >
        <Icon
          name="pipeline-variables"
          size={type === DrawerTypes.PipelineVariables ? 26 : 16}
          title={i18n.inputVariables}
        />
      </Button>
      <Button noStyling className={css.iconButton} onClick={handleRunPipeline}>
        <Icon name="run-pipeline" title={i18n.runPipeline} />
      </Button>
      <div />
    </div>
  )
}
