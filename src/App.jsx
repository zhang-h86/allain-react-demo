import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import React from 'react';

// DataTable 组件
function DataTable({ columns, data }) {
  return (
    <table border="1" cellPadding="6" cellSpacing="0">
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.key}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {columns.map(col => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function App() { 
  // 示例数据
  const columns = [
    { key: 'name', title: 'Name' },
    { key: 'age', title: 'Age' },
    { key: 'email', title: 'Email' }
  ];
  const data = [
    { name: 'Alice', age: 25, email: 'alice@example.com' },
    { name: 'Bob', age: 30, email: 'bob@example.com' },
    { name: 'Charlie', age: 28, email: 'charlie@example.com' }
  ];

  // 日期输入状态
  const [date, setDate] = React.useState('');

  return (
    <div>
      <h1>Welcome to Allain React Demo</h1>
      <p>This is a simple React application.</p>
      <h2>Data Table Example</h2> 
      <DataTable columns={columns} data={data} />
      {/* 日期输入框 */}
      <div style={{ marginTop: 16 }}>
        <label>
          选择日期: 
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            style={{ marginLeft: 8 }}
          />
        </label>
      </div>
    </div>
  );
}

const container = document.getElementById('app');
const root = createRoot(container);   
root.render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>    
);

