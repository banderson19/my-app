import React, {useState} from 'react'
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import Sidebar from '../Component_dash/Sidebar/sidebar.jsx';
import Header from '../Component_dash/Header/header.jsx';

import {scheduleData} from '../data/dummy.js';
import { useStateContext } from '../context/ContextProvider.js';

const Calendar = () => {
  const {sidebarActive} = useStateContext();
  const [scheduleObj, setScheduleObj] = useState();

  const onDragStart = (arg) => {
    // eslint-disable-next-line no-param-reassign
    arg.navigation.enable = true;
  };

  return (
    <div className="m-2">
      <div style={sidebarActive ? {marginLeft: '18%', transition: '300ms'} : {marginLeft: '0', transition: '300ms'}}  >
        <Sidebar />
        <h1>Calendar</h1>
        <ScheduleComponent
          height="650px"
          dragStart={onDragStart}
          eventSettings={{ dataSource: scheduleData }}
          
          
          >
          <ViewsDirective>
          { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
        </ViewsDirective>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
        </ScheduleComponent>
        
          </div>
    </div>
  )
}

export default Calendar