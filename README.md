# 后台管理系统

基于 Remix、TypeScript、ShadCN、TailwindCSS 4.0 和 Alova 构建的现代化后台管理系统。

## 技术栈

- **框架**: Remix (React Router v7)
- **语言**: TypeScript
- **样式**: TailwindCSS 4.0
- **组件库**: ShadCN (计划集成)
- **请求库**: Alova
- **包管理**: pnpm

## 功能特性

### 1. 认证系统
- 密码登录 (admin / admin123)
- 会话管理

### 2. 界面布局
- 左侧可折叠菜单栏
- 顶部导航栏
- 面包屑导航
- 响应式设计

### 3. 动态表格组件
- 可配置行数和列数
- 仅允许输入数字
- 自动计算行和与列和
- 实时更新

## 项目结构

```
app/
├── components/          # React 组件
│   └── ExcelTable.tsx  # 动态表格组件
├── routes/             # 路由页面
│   ├── _index.tsx      # 登录页
│   ├── dashboard.tsx   # 主布局
│   ├── dashboard._index.tsx  # 仪表板首页
│   ├── dashboard.table.tsx    # 表格管理
│   └── dashboard.settings.tsx # 系统设置
├── root.tsx            # 根组件
└── tailwind.css        # 样式文件
```

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
pnpm build
pnpm start
```

## 使用说明

### 登录

使用默认账号登录：
- 用户名: admin
- 密码: admin123

### 动态表格

在 `dashboard.table.tsx` 中使用 `ExcelTable` 组件：

```tsx
<ExcelTable rows={3} columns={4} />
```

参数：
- `rows`: 行数
- `columns`: 列数

## 后续计划

- [ ] 集成 ShadCN 组件库
- [ ] 使用 Alova 实现 API 请求
- [ ] 添加数据持久化
- [ ] 实现更多表格功能
- [ ] 容器化部署

## 许可证

MIT