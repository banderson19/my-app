import React from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../data/dummy';

import Sidebar from '../Component_dash/Sidebar/sidebar.jsx';
import  { useStateContext } from '../context/ContextProvider.js';

const Kanban = () => {
  const {sidebarActive} = useStateContext();

  return (
    <div style={sidebarActive ? { marginLeft: '18%', transition: "300ms" } : { marginLeft: '0', transition: '300ms' }}>
      <Sidebar />
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
      </KanbanComponent>

    </div>
  )
}

export default Kanban