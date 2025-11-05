import ExcelTable from '~/components/ExcelTable';

export default function DashboardTable() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">动态表格</h2>
        <p className="text-gray-500 mt-1">可输入数字的表格，自动计算行和与列和</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-medium text-gray-700 mb-4">示例表格 (3行4列)</h3>
        <ExcelTable rows={3} columns={4} />
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="text-lg font-medium text-gray-700 mb-4">另一个表格 (5行5列)</h3>
        <ExcelTable rows={5} columns={5} />
      </div>
    </div>
  );
}