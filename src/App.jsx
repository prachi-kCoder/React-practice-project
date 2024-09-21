import React, { useState } from 'react';
import ScheduleRoutine from './components/ScheduleRoutine';

function App() {
    const [isModalOpen, setModalOpen] = useState(true); // Open modal by default for demonstration

    return (
        <div style={{ padding: '20px' }}>

           
            <h1>Routine Scheduler</h1>
            {isModalOpen && <ScheduleRoutine />}
        </div>
    );
}

export default App;
