'use client';

import React from 'react';
import KanbanColumn, { Task } from '../components/KanbanColumn';

// 定义mock数据
const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design UI for homepage',
    description: 'Create wireframes and mockups for the new homepage design',
    status: 'Todo'
  },
  {
    id: '2',
    title: 'Implement login functionality',
    description: 'Add login and registration forms with validation',
    status: 'Todo'
  },
  {
    id: '3',
    title: 'Fix bug in shopping cart',
    description: 'Resolve issue with quantity update not working correctly',
    status: 'Doing'
  },
  {
    id: '4',
    title: 'Optimize database queries',
    description: 'Improve performance of slow database queries',
    status: 'Doing'
  },
  {
    id: '5',
    title: 'Deploy to production',
    description: 'Release the latest version to production server',
    status: 'Done'
  },
  {
    id: '6',
    title: 'Write documentation',
    description: 'Create user manual and API documentation',
    status: 'Done'
  }
];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Kanban Board</h1>
      <KanbanColumn columns={["Todo", "Doing", "Done"]} tasks={mockTasks} />
    </div>
  );
};

export default Home;