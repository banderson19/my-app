import React from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../data/dummy';


import Sidebar from '../Component_dash/Sidebar/sidebar.jsx';
import Header from '../Component_dash/Header/header.jsx';

const Kanban = () => {
  return (
    <div>
      <div className="w-25 position-fixed bg-light ">
        <Sidebar />
      </div>
        <Header />
        
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        style={{ marginLeft: "25%" }}
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