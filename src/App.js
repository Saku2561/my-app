import React from "react";
import Dashboard from "./components/DashboardMainContent";

function App() {
  return (
    <div className="flex h-screen">
    
<Dashboard />
      {/* Main content */}
      <div className="flex-1 p-6 bg-gray-50 overflow-auto">
        <div className="grid grid-cols-3 gap-6">
        </div>

      </div>
    </div>
  );
}

export default App;
