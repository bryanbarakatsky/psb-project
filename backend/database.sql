CREATE DATABASE tododatabase;
use tododatabase;
CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(200) NOT NULL,
  dateCreated DATETIME NOT NULL,
  isCompleted BOOLEAN DEFAULT false
);

INSERT INTO todos (description, dateCreated, isCompleted) VALUES
('Buy groceries', '2025-10-01 10:00:00', false),
('Finish project report', '2025-09-30 14:30:00', true),
('Call mom', '2025-10-02 08:15:00', false),
('Schedule dentist appointment', '2025-09-28 09:45:00', true),
('Read a book', '2025-10-03 20:00:00', false),
('Clean the house', '2025-10-04 11:00:00', false),
('Pay electricity bill', '2025-09-29 16:00:00', true),
('Attend team meeting', '2025-10-05 09:00:00', false),
('Workout at gym', '2025-10-06 07:30:00', false),
('Submit timesheet', '2025-10-01 17:00:00', true),
('Prepare dinner', '2025-10-06 18:30:00', false),
('Update resume', '2025-09-27 13:00:00', true),
('Book flight tickets', '2025-10-02 15:45:00', false),
('Organize files', '2025-10-03 10:30:00', false),
('Water the plants', '2025-10-04 07:00:00', true),
('Write blog post', '2025-10-05 21:00:00', false),
('Fix bug in code', '2025-10-06 12:00:00', true),
('Plan weekend trip', '2025-10-07 08:45:00', false),
('Respond to emails', '2025-10-07 09:15:00', false),
('Backup laptop', '2025-09-30 19:00:00', true);

SELECT * FROM todos