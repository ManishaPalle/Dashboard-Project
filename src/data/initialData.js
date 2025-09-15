export const initialData = {
  categories: [
    {
      id: 'cspm',
      key: 'CSPM',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { 
          id: 'w1', 
          title: 'Cloud Accounts', 
          subtitle: 'Randomtext for Cloud Accounts', 
          type: 'donut', 
          data: { total: 2, connected: 2 } 
        },
        { 
          id: 'w2', 
          title: 'Cloud Account Risk Assessment', 
          subtitle: 'Randomtext for Risk Assessment', 
          type: 'pie', 
          data: { total: 9659 } 
        },
        { 
          id: 'w7', 
          title: 'User Access Widget', 
          subtitle: 'Shows user access permissions', 
          type: 'bar', 
          data: { series: [
            { name: 'Admin', value: 5 }, 
            { name: 'Viewer', value: 12 }
          ] } 
        }
      ]
    },
    {
      id: 'cwpp',
      key: 'CWPP',
      name: 'CWPP Dashboard',
      widgets: [
        { id: 'w3', title: 'Top 5 Namespace Specific Alerts', subtitle: 'Randomtext for Top 5 Alerts', type: 'bar' },
        { id: 'w4', title: 'Workload Alerts', subtitle: 'Randomtext for Workload Alerts', type: 'bar' }
      ]
    },
    {
      id: 'registry',
      key: 'Image',
      name: 'Registry Scan',
      widgets: [
        { id: 'w5', title: 'Image Risk Assessment', subtitle: 'Randomtext for Image Risk', type: 'bar' },
        { id: 'w6', title: 'Image Security Issues', subtitle: 'Randomtext for Image Security', type: 'bar' }
      ]
    }
  ],
  searchQuery: ''
};
