
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('submitBtn').addEventListener('click', function() {
            var FirstName = document.getElementById('FirstName').value;
            var LastName = document.getElementById('LastName').value;
            var Email = document.getElementById('Email').value;
            var Phone = document.getElementById('Phone').value;
            var Address = document.getElementById('Address').value;

            var Message = document.getElementById('Message').value;


            var message = 'You Submitted:\n';
            message += 'FirstName: ' + FirstName+ '\n';
            message += 'LastName: ' + LastName+ '\n';
            message += 'Email: ' + Email+ '\n';
            message += 'Phone: ' + Phone+ '\n';
            message += 'Address: ' + Address+ '\n';
            message += 'Message: ' + Message+ '\n';

            alert(message);
        });
    });