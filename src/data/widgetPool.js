export const widgetPool = {
  CSPM: [
    { id: 'cspm-cloud-accounts', title: 'Cloud Accounts', type: 'donut' },
    { id: 'cspm-risk-assessment', title: 'Cloud Account Risk Assessment', type: 'pie' },
    { id: 'cspm-user-access', title: 'User Access Widget', type: 'bar' }
  ],
  CWPP: [
    { id: 'cwpp-top5-alerts', title: 'Top 5 Namespace Alerts', type: 'bar' },
    { id: 'cwpp-workload-alerts', title: 'Workload Alerts', type: 'bar' }
  ],
  Image: [
    { id: 'img-risk-assess', title: 'Image Risk Assessment', type: 'bar' },
    { id: 'img-security-issues', title: 'Image Security Issues', type: 'bar' }
  ],
  Ticket: [
    { id: 'ticket-open', title: 'Open Tickets', type: 'simple' },
    { id: 'ticket-avg-time', title: 'Avg Ticket Resolution', type: 'simple' }
  ]
};

