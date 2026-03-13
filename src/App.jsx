import Navbar from "./components/Navbar";
import AttendanceGrid from "./components/AttendanceGrid";
import { studentDetails, attendanceSubjects } from "./data/attendanceData";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar student={studentDetails} />
      <AttendanceGrid subjects={attendanceSubjects} />
    </div>
  );
}

export default App;