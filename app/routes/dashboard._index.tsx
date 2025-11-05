export default function DashboardIndex() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">欢迎回来</h2>
        <p className="text-gray-500 mt-1">这是您的仪表板首页</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">总用户数</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">1,234</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
              <span className="text-blue-600">👥</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">今日访问</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">456</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
              <span className="text-green-600">📈</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">活跃用户</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">78</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center">
              <span className="text-purple-600">✨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}