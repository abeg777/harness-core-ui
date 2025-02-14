import { executionListRoute, executionSummaryAPI, pageHeaderClassName } from '../../support/70-pipeline/constants'

describe('RETRY FAILED PIPELINE', () => {
  const gitSyncCall =
    '/ng/api/git-sync/git-sync-enabled?accountIdentifier=accountId&orgIdentifier=default&projectIdentifier=project1'
  beforeEach(() => {
    cy.on('uncaught:exception', () => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    cy.initializeRoute()
    cy.intercept('GET', gitSyncCall, { connectivityMode: null, gitSyncEnabled: false })

    cy.visit(`${executionListRoute}?listview=true`, {
      timeout: 30000
    })
    cy.intercept('POST', executionSummaryAPI, {
      fixture: '/pipeline/api/pipelineExecution/pipelineExecutionSummary'
    }).as('pipelineExecutionSummary')
    cy.wait(2000)
  })

  it('should be able to retry failed/aborted execution', () => {
    cy.visitPageAssertion(pageHeaderClassName)
    cy.wait('@pipelineExecutionSummary')
    cy.get('[data-icon="Options"]').eq(3).click()
    cy.contains('div', 'Retry Failed Pipeline').click()

    // Modal header for retry failed pipeline dialog should be Retry Failed Pipeline
    cy.contains('h2', 'Retry Failed Pipeline').should('be.visible')

    // Select stage option should be present by default
    cy.contains('div', 'Select the stage that you would like to resume from').should('be.visible')
    cy.get('button[data-testid="retry-failed-pipeline"]').should('be.visible')

    //Retry Button should be disabled if no stages are selected
    cy.get('button[data-testid="retry-failed-pipeline"]').should('be.disabled')
  })

  it('should not have retry option on successful execution', () => {
    cy.visitPageAssertion(pageHeaderClassName)
    cy.wait('@pipelineExecutionSummary')
    cy.get('[data-icon="Options"]').eq(0).click()
    cy.get('div[data-testid="retry-pipeline-menu"]').should('not.exist')
  })
})
