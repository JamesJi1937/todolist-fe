export default function DashboardSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">系统设置</h2>
        <p className="text-gray-500 mt-1">管理系统配置</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700 mb-4">基本设置</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">系统名称</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                defaultValue="后台管理系统"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">语言</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                <option>简体中文</option>
                <option>English</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">时区</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                <option>Asia/Shanghai (UTC+8)</option>
                <option>UTC</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-700 mb-4">安全设置</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-gray-700">密码强度</label>
                <p className="text-xs text-gray-500">要求至少8个字符</p>
              </div>
              <input type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary" checked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-gray-700">双因素认证</label>
                <p className="text-xs text-gray-500">增强账户安全性</p>
              </div>
              <input type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary" />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-sm font-medium text-gray-700">登录日志</label>
                <p className="text-xs text-gray-500">记录登录活动</p>
              </div>
              <input type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary" checked />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}