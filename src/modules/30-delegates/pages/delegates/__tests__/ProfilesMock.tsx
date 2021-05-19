import moment from 'moment'
export default {
  metadata: '',
  resource: {
    response: [
      {
        accountId: 'TEST_ACCOUNTID',
        uuid: 'profile2',
        name: 'Primary',
        description: 'The primary profile for the account',
        primary: true,
        approvalRequired: true,
        startupScript: 'test this',
        createdBy: {
          uuid: 'person1',
          name: 'Admin',
          email: 'adm@harn.io'
        },
        lastUpdatedBy: {
          uuid: 'person1',
          name: 'Admin',
          email: 'adm@harn.io'
        },
        lastUpdatedAt: moment(),
        scopingRules: []
      }
    ]
  }
}
