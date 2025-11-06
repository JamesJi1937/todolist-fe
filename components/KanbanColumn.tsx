'use client';

import React, { useState } from 'react';

// 定义任务类型
export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

// 定义组件属性类型
interface KanbanColumnProps {
  columns: string[];
  tasks: Task[];
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ columns, tasks }) => {
  // 状态管理：任务列表
  const [taskList, setTaskList] = useState<Task[]>(tasks);
  // 状态管理：展开的卡片ID
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  // 状态管理：新卡片输入值
  const [newCardInput, setNewCardInput] = useState<Record<string, string>>({});

  // 初始化新卡片输入值
  React.useEffect(() => {
    const initialInput: Record<string, string> = {};
    columns.forEach(column => {
      initialInput[column] = '';
    });
    setNewCardInput(initialInput);
  }, [columns]);

  // 处理卡片拖拽开始
  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    e.dataTransfer.setData('taskId', taskId);
  };

  // 处理卡片拖拽结束
  const handleDragEnd = (e: React.DragEvent) => {
    e.dataTransfer.clearData();
  };

  // 处理卡片拖拽进入列
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // 处理卡片拖拽离开列
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // 处理卡片拖拽在列上移动
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // 处理卡片拖拽放置到列
  const handleDrop = (e: React.DragEvent, newStatus: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    
    // 更新任务状态
    const updatedTasks = taskList.map(task => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    
    setTaskList(updatedTasks);
  };

  // 处理添加新卡片
  const handleAddNewCard = (column: string) => {
    const inputValue = newCardInput[column].trim();
    if (inputValue) {
      const newTask: Task = {
        id: Date.now().toString(),
        title: inputValue,
        description: '',
        status: column
      };
      
      setTaskList([...taskList, newTask]);
      setNewCardInput(prev => ({ ...prev, [column]: '' }));
    }
  };

  // 处理卡片展开/折叠
  const handleToggleCard = (taskId: string) => {
    setExpandedCardId(expandedCardId === taskId ? null : taskId);
  };

  return (
    <div className="flex gap-4 p-4 overflow-x-auto">
      {columns.map(column => {
        // 获取当前列的任务
        const columnTasks = taskList.filter(task => task.status === column);
        
        return (
          <div 
            key={column} 
            className="min-w-[300px] bg-gray-100 rounded-lg p-4 shadow-md"
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column)}
          >
            {/* 列标题和统计 */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{column}</h2>
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                {columnTasks.length}
              </div>
            </div>
            
            {/* 任务卡片列表 */}
            <div className="space-y-3 mb-4">
              {columnTasks.map(task => (
                <div 
                  key={task.id} 
                  className="bg-white rounded-lg p-4 shadow-sm cursor-move hover:shadow-md transition-shadow"
                  draggable
                  onDragStart={(e) => handleDragStart(e, task.id)}
                  onDragEnd={handleDragEnd}
                >
                  <div 
                    className="flex justify-between items-start mb-2"
                    onClick={() => handleToggleCard(task.id)}
                  >
                    <h3 className="font-semibold">{task.title}</h3>
                    <span className="text-gray-500 text-sm">
                      {expandedCardId === task.id ? '▼' : '▶'}
                    </span>
                  </div>
                  
                  {/* 展开的卡片内容 */}
                  {expandedCardId === task.id && (
                    <div className="mt-2 p-2 bg-gray-50 rounded">
                      <p className="text-sm text-gray-600">{task.description || 'No description'}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* 添加新卡片 */}
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder={`Add new ${column} task...`}
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={newCardInput[column]}
                onChange={(e) => setNewCardInput(prev => ({ ...prev, [column]: e.target.value }))}
                onKeyPress={(e) => e.key === 'Enter' && handleAddNewCard(column)}
              />
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                onClick={() => handleAddNewCard(column)}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KanbanColumn;