import { useState } from 'react';
import { Link, Outlet } from '@remix-run/react';
import { FaHome, FaTable, FaCog, FaBars, FaTimes } from 'react-icons/fa';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-0 hidden'}`}
      >
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-gray-800">管理系统</h1>
        </div>
        
        <nav className="p-4 space-y-2">
          <Link
            to="/dashboard"
            className="flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 hover:bg-primary/10 hover:text-primary transition-all"
          >
            <FaHome className="text-lg" />
            <span>首页</span>
          </Link>
          
          <Link
            to="/dashboard/table"
            className="flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 hover:bg-primary/10 hover:text-primary transition-all"
          >
            <FaTable className="text-lg" />
            <span>表格管理</span>
          </Link>
          
          <Link
            to="/dashboard/settings"
            className="flex items-center gap-3 px-4 py-2 rounded-md text-gray-700 hover:bg-primary/10 hover:text-primary transition-all"
          >
            <FaCog className="text-lg" />
            <span>系统设置</span>
          </Link>
        </nav>
      </aside>
      
      {/* Main Content */}
      <div className={`ml-${isSidebarOpen ? '64' : '0'} transition-all duration-300`}>
        {/* Top Bar */}
        <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md hover:bg-gray-100 transition-all"
              >
                {isSidebarOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
              </button>
              
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">首页</span>
                <span className="text-gray-400">/</span>
                <span className="text-primary font-medium">仪表板</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">A</span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Content Area */}
        <main className="pt-20 px-6 pb-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}