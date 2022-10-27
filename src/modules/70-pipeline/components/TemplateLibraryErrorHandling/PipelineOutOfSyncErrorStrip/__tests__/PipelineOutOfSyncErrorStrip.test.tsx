import React from 'react'
import { render } from '@testing-library/react'
import { TestWrapper } from '@common/utils/testUtils'
import {
  PipelineOutOfSyncErrorStrip,
  PipelineOutOfSyncErrorStripProps
} from '@pipeline/components/TemplateLibraryErrorHandling/PipelineOutOfSyncErrorStrip/PipelineOutOfSyncErrorStrip'
import * as pipelineService from 'services/pipeline-ng'
import * as OutOfSyncErrorStrip from '@pipeline/components/TemplateLibraryErrorHandling/OutOfSyncErrorStrip/OutOfSyncErrorStrip'

const errorNodeSummaryDummmyResponse = {
  nodeInfo: {
    identifier: 'P2',
    name: 'P2',
    localFqn: null
  },
  templateInfo: null,
  templateResponse: null,
  childrenErrorNodes: []
}

const useValidateTemplateInputsMock = jest.spyOn(pipelineService, 'useValidateTemplateInputs').mockReturnValue({
  data: {
    data: {
      type: 'TemplateInputsErrorMetadataV2',
      validYaml: false,
      errorNodeSummary: errorNodeSummaryDummmyResponse
    }
  },
  loading: false
} as any)

const OutOfSyncErrorStripMock = jest.spyOn(OutOfSyncErrorStrip, 'OutOfSyncErrorStrip')

const baseProps: PipelineOutOfSyncErrorStripProps = {
  updateRootEntity: jest.fn()
}

describe('<PipelineOutOfSyncErrorStrip /> tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should call OutOfSyncErrorStrip with correct props when error', () => {
    render(
      <TestWrapper>
        <PipelineOutOfSyncErrorStrip {...baseProps} />
      </TestWrapper>
    )
    expect(OutOfSyncErrorStripMock).toBeCalledWith(
      expect.objectContaining({
        errorNodeSummary: errorNodeSummaryDummmyResponse,
        entity: 'Pipeline'
      }),
      expect.anything()
    )
  })

  test('should not call OutOfSyncErrorStrip when no error', () => {
    useValidateTemplateInputsMock.mockReturnValue({ data: null } as any)
    render(
      <TestWrapper>
        <PipelineOutOfSyncErrorStrip {...baseProps} />
      </TestWrapper>
    )
    expect(OutOfSyncErrorStripMock).not.toBeCalled()
  })
})