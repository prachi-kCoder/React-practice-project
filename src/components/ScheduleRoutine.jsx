import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { FaClipboardList, FaCalendarAlt } from 'react-icons/fa';

// Styled Components
const Modal = styled.div`
    background: #ffffff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 20px auto;
`;

const Title = styled.h3`
    color: #333;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Label = styled.label`
    margin: 10px 0 5px;
    display: block;
    font-weight: bold;
    color: #555;
`;

const Select = styled.select`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #f1f1f1;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #f1f1f1;
`;

const Button = styled.button`
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;

    &:hover {
        background-color: #218838;
    }
`;

const Icon = styled.span`
    margin-right: 8px;
`;

const ScheduleRoutine = () => {
    const [routine, setRoutine] = useState('');
    const [scheduleDate, setScheduleDate] = useState(new Date());
    const [selectedGymId, setSelectedGymId] = useState('');
    const gyms = [{ _id: '1', name: 'FitNess Place' },{ _id: '2', name: 'Yoga Care' }, { _id: '3', name: 'Fitness Studio' }]; // Sample gyms

    const handleScheduleRoutine = () => {
        if (!routine.trim() || !selectedGymId) {
            toast.error('Please enter a routine and select a gym');
            return;
        }

        // Here, you would send the routine data to your backend
        toast.success(`Routine scheduled for ${scheduleDate.toLocaleDateString()} at ${selectedGymId}!`);
        setRoutine('');
        setSelectedGymId('');
        setScheduleDate(new Date());
    };

    return (
        <Modal>
            <Title>
                <Icon><FaClipboardList size={24} /></Icon>
                Schedule New Routine
            </Title>
            <Label>Select Gym:</Label>
            <Select onChange={(e) => setSelectedGymId(e.target.value)} value={selectedGymId}>
                <option value="">--Select Gym--</option>
                {gyms.map(gym => (
                    <option key={gym._id} value={gym._id}>{gym.name}</option>
                ))}
            </Select>
            <Label>Routine:</Label>
            <Input 
                type="text" 
                value={routine}
                onChange={(e) => setRoutine(e.target.value)} 
                placeholder="Enter your routine here" 
            />
            <Label>Select Date:</Label>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                <FaCalendarAlt size={20} style={{ marginRight: '8px', color: '#555' }} />
                <DatePicker selected={scheduleDate} onChange={date => setScheduleDate(date)} />
            </div>
            <Button onClick={handleScheduleRoutine}>Schedule Routine</Button>
            <ToastContainer position="top-right" autoClose={3000} />
        </Modal>
    );
}

export default ScheduleRoutine;
