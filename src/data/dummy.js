export const links = [ 
    {
      title: 'Dashboard',
      links: [
        {
          name: 'installs',
        //   icon: <AiOutlineShoppingCart />,
        },
        {
          name: 'employees',
        //   icon: <IoMdContacts />,
        },
        {
          name: 'clientList ',
        //   icon: <RiContactsLine />,
        }
      ],
    },
    {
      title: 'Apps',
      links: [
        {
          name: 'calendar',
        //   icon: <AiOutlineCalendar />,
        },
        {
          name: 'kanban',
        //   icon: <BsKanban />,
        },
        {
            name: 'expenses'
        },
        {
            name: 'budget'
        }
      ],
    }
  ];

  export const scheduleData = [
    {
      Id: 1,
      Subject: 'Explosion of Betelgeuse Star',
      Location: 'Space Center USA',
      StartTime: '2022-07-13T06:30:00.000Z',
      EndTime: '2022-07-13T08:30:00.000Z',
      CategoryColor: '#1aaa55',
    },
    {
      Id: 2,
      Subject: 'Thule Air Crash Report',
      Location: 'Newyork City',
      StartTime: '2022-07-13T06:30:00.000Z',
      EndTime: '2022-07-13T08:30:00.000Z',
      CategoryColor: '#357cd2',
    },
    {
      Id: 3,
      Subject: 'Blue Moon Eclipse',
      Location: 'Space Center USA',
      StartTime: '2022-07-14T04:00:00.000Z',
      EndTime: '2022-07-14T05:30:00.000Z',
      CategoryColor: '#7fa900',
    }
  ]

  export const kanbanGrid = [
    { headerText: 'To Do',
      keyField: 'Open',
      allowToggle: true },
  
    { headerText: 'In Progress',
      keyField: 'InProgress',
      allowToggle: true },
  
    { headerText: 'Testing',
      keyField: 'Testing',
      allowToggle: true,
      isExpanded: false },
  
    { headerText: 'Done',
      keyField: 'Close',
      allowToggle: true },
  ];

  export const kanbanData = [
    {
      Id: 'Task 1',
      Title: 'Task - 29001',
      Status: 'Open',
      Summary: 'Analyze the new requirements gathered from the customer.',
      Type: 'Story',
      Priority: 'Low',
      Tags: 'Analyze,Customer',
      Estimate: 3.5,
      Assignee: 'Nancy Davloio',
      RankId: 1,
      Color: '#02897B',
      ClassName: 'e-story, e-low, e-nancy-davloio',
    },
    {
      Id: 'Task 2',
      Title: 'Task - 29002',
      Status: 'InProgress',
      Summary: 'Improve application performance',
      Type: 'Improvement',
      Priority: 'Normal',
      Tags: 'Improvement',
      Estimate: 6,
      Assignee: 'Andrew Fuller',
      RankId: 1,
      Color: '#673AB8',
      ClassName: 'e-improvement, e-normal, e-andrew-fuller',
    },
    {
      Id: 'Task 3',
      Title: 'Task - 29003',
      Status: 'Open',
      Summary: 'resubribe with google work force and retain data ',
      Type: 'Others',
      Priority: 'Critical',
      Tags: 'Meeting',
      Estimate: 5.5,
      Assignee: 'Janet Leverling',
      RankId: 2,
      Color: '#1F88E5',
      ClassName: 'e-others, e-critical, e-janet-leverling',
    },
    {
      Id: 'Task 4',
      Title: 'Task - 29004',
      Status: 'InProgress',
      Summary: 'set up database',
      Type: 'Bug',
      Priority: 'Critical',
      Tags: 'IE',
      Estimate: 2.5,
      Assignee: 'Janet Leverling',
      RankId: 2,
      Color: '#E64A19',
      ClassName: 'e-bug, e-release, e-janet-leverling',
    },
    {
      Id: 'Task 5',
      Title: 'Task - 29005',
      Status: 'Review',
      Summary: 'Fix the issues reported by the customer.',
      Type: 'Bug',
      Priority: 'Low',
      Tags: 'Customer',
      Estimate: '3.5',
      Assignee: 'Steven walker',
      RankId: 1,
      Color: '#E64A19',
      ClassName: 'e-bug, e-low, e-steven-walker',
    }
  ];

  export const clientsGrid = [
    { field: 'id',
      headerText: 'Id',
      width: '150',
      // template: gridEmployeeProfile,
      textAlign: 'Center' },
    { field: 'firstName',
      headerText: 'First Name',
      width: '120',
      textAlign: 'Center',
    },
    { field: 'lastName',
      headerText: 'Last Name',
      width: '120',
      textAlign: 'Center',
    },
    { field: 'phoneNumber',
      headerText: 'Phone',
      width: '170',
      textAlign: 'Center',
    },
    { field: 'notes',
      headerText: 'Notes',
      width: '120',
      textAlign: 'Center',
      // template: gridEmployeeCountry 
    },
  
    { field: 'clientAquired',
      headerText: 'clientAquired',
      width: '135',
      format: 'yMd',
      textAlign: 'Center' 
    }
  ];
  
  export const clientsData = [
    {
      id: 1,
      firstName: 'Alissa',
      lastName: 'Miller',
      phoneNumber: '(555) 555 - 5555',
      notes: 'Super easy to work with. Pays by venmo and recommended siblings house as well',
      clientAquired: '2022-11-20'
    },
    {
      id: 2,
      firstName: 'Rob',
      lastName: 'Duffin',
      phoneNumber: '(555) 555 - 5555',
      notes: 'New home built in 2022',
      clientAquired: '2022-11-20'
    },
    {
      id: 3,
      firstName: 'Lindsey',
      lastName: 'Kelly',
      phoneNumber: '(555) 555 - 5555',
      notes: 'Jake Kellys sister',
      clientAquired: '2022-11-20'
    }
  ]

  export const units = [
    {
      id: 1,
      street: '622 W. Aiden Ridge Drive',
      city: 'Draper',
      zip: 84020,
      unitDescription: '2 floors about 200 feet',
      notes: 'moderate',
      colorPattern: ['red', 'white', 'green']
    },
    {
      id: 2,
      street: '123 street',
      city: 'Sandy',
      zip: 84054,
      unitDescription: 'first floor and garage needs to be done',
      notes: 'moderate',
      colorPattern: ['red', 'white', 'green']
    },
    {
      id: 3,
      street: '2524 E Venus Circle',
      city: 'Holladay',
      zip: 84117,
      unitDescription: 'single story',
      notes: 'easy',
      colorPattern: ['warm white', 'warm white', 'warm white']
    }
  ]

  export const service =  [
    {
      id: 1,
      service: 'lights',
      serviceData: '', 
      notes: '',
      charge: 150, 
      supplyCost: 0
    },
    {
      id: 2,
      service: 'lights',
      serviceData: '', 
      notes: '',
      charge: 150, 
      supplyCost: 0
    },
    {
      id: 3,
      service: 'lights',
      serviceData: '', 
      notes: '',
      charge: 150, 
      supplyCost: 0
    }
  ]