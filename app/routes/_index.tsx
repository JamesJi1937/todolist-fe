import { Form, useActionData } from '@remix-run/react';
import type { ActionFunctionArgs } from '@remix-run/node';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const username = formData.get('username');
  const password = formData.get('password');

  // Mock login logic
  if (username === 'admin' && password === 'admin123') {
    return { success: true, message: '登录成功' };
  }
  return { success: false, message: '用户名或密码错误' };
}

export default function Login() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">后台管理系统</h1>
          <p className="text-gray-500 mt-2">请登录您的账户</p>
        </div>
        
        <Form method="post" className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              用户名
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="admin"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              密码
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="admin123"
            />
          </div>
          
          {actionData?.message && (
            <div className={`p-3 rounded-md text-sm ${actionData.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {actionData.message}
            </div>
          )}
          
          <button
            type="submit"
            className="w-full btn btn-primary"
          >
            登录
          </button>
        </Form>
      </div>
    </div>
  );
}