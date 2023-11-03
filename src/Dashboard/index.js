import React from 'react';

const calculateWorkingHours = (checkIn, checkOut) => {
  if (checkIn && checkOut) {
    const checkInTime = new Date(checkIn);
    const checkOutTime = new Date(checkOut);
    const diffMilliseconds = checkOutTime - checkInTime;
    const hours = Math.floor(diffMilliseconds / 3600000);
    const minutes = Math.floor((diffMilliseconds % 3600000) / 60000);
    return `${hours} hours ${minutes} minutes`;
  }
  return 'N/A';
};

const App = () => {
  const dummyAttendanceData = [
    {
      id: 1,
      employee: { name: 'John Doe' },
      check_in: '2023-11-04 08:30:00',
      check_out: '2023-11-04 17:00:00',
    },
    {
      id: 2,
      employee: { name: 'Jane Smith' },
      check_in: '2023-11-04 09:15:00',
      check_out: '2023-11-04 16:45:00',
    },
    {
      id: 3,
      employee: { name: 'Alice Johnson' },
      check_in: '2023-11-04 08:00:00',
      check_out: '2023-11-04 16:30:00',
    },
    {
      id: 4,
      employee: { name: 'Bob Wilson' },
      check_in: '2023-11-04 10:00:00',
      check_out: '2023-11-04 18:00:00',
    },
    {
      id: 5,
      employee: { name: 'Eve Anderson' },
      check_in: null,
      check_out: null,
    },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Attendance Portal</h1>
      </header>
      <div className="content">
        {/* <aside className="sidebar">
          <ul>
            <li>Dashboard</li>
            <li>Employees</li>
            <li>Reports</li>
          </ul>
        </aside> */}
        <div className="attendance-list">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Total Working Hours</th>
              </tr>
            </thead>
            <tbody>
              {dummyAttendanceData.map((attendance) => (
                <tr key={attendance.id}>
                  <td>{attendance.employee.name}</td>
                  <td>{attendance.check_in}</td>
                  <td>{attendance.check_out}</td>
                  <td>{calculateWorkingHours(attendance.check_in, attendance.check_out)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 Attendance App</p>
      </footer>
    </div>
  );
};

export default App;