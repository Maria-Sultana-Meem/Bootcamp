import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const marks=[
  {
    "student": "Student 1",
    "math": 85,
    "english": 78,
    "science": 92,
    "total": 255,
    "average": 85.0
  },
  {
    "student": "Student 2",
    "math": 74,
    "english": 81,
    "science": 69,
    "total": 224,
    "average": 74.7
  },
  {
    "student": "Student 3",
    "math": 90,
    "english": 88,
    "science": 95,
    "total": 273,
    "average": 91.0
  },
  {
    "student": "Student 4",
    "math": 66,
    "english": 72,
    "science": 58,
    "total": 196,
    "average": 65.3
  },
  {
    "student": "Student 5",
    "math": 79,
    "english": 85,
    "science": 80,
    "total": 244,
    "average": 81.3
  },
  {
    "student": "Student 6",
    "math": 92,
    "english": 89,
    "science": 94,
    "total": 275,
    "average": 91.7
  },
  {
    "student": "Student 7",
    "math": 55,
    "english": 61,
    "science": 70,
    "total": 186,
    "average": 62.0
  },
  {
    "student": "Student 8",
    "math": 83,
    "english": 77,
    "science": 88,
    "total": 248,
    "average": 82.7
  },
  {
    "student": "Student 9",
    "math": 69,
    "english": 73,
    "science": 65,
    "total": 207,
    "average": 69.0
  },
  {
    "student": "Student 10",
    "math": 88,
    "english": 91,
    "science": 85,
    "total": 264,
    "average": 88.0
  }
]

const Results = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={marks}>
                  
                  <XAxis dataKey={'student'}></XAxis>
                  <YAxis></YAxis>
                  <Line dataKey={'math'}></Line>
            </LineChart>
        </div>
    );
};

export default Results;