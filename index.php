<?php
// Database configurations
$db1_config = [
    'servername' => 'localhost',
    'username' => 'root',
    'password' => '',
    'dbname' => 'booknow'
];

$db2_config = [
    'servername' => 'localhost',
    'username' => 'root',
    'password' => '',
    'dbname' => 'booking'
];

$db3_config = [
    'servername' => 'localhost',
    'username' => 'root',
    'password' => '',
    'dbname' => 'contacts' // Ensure this matches your actual database name
];

// Function to create a database connection
function createConnection($config) {
    $conn = new mysqli($config['servername'], $config['username'], $config['password'], $config['dbname']);
    if ($conn->connect_error) {die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check which form was submitted
    if (isset($_POST['form_type'])) {
        $form_type = $_POST['form_type'];

        if ($form_type === 'form1') {
            // Handle Form 1 submission
            $name = $_POST["name"];
            $departure_date = $_POST["departure_date"];
            $departure_time = $_POST["departure_time"];
            $people = $_POST["people"];

            // Insert into the first database (booknow)
            $conn1 = createConnection($db1_config);
            $sql1 = "INSERT INTO `booknow`(`name`, `departure_date`, `departure_time`, `people`)
                     VALUES (?, ?, ?, ?)";
            $stmt1 = $conn1->prepare($sql1);
            $stmt1->bind_param("ssss", $name, $departure_date, $departure_time, $people);

            if ($stmt1->execute() === TRUE) {
                echo '<div style="background-color: #4CAF50; color: white; padding: 15px; text-align: center; font-size: 18px; border-radius: 5px;">Booking Successful!</div>';
            } else {
                echo "Error in booknow: " . $stmt1->error;
            }
            $stmt1->close();
            $conn1->close();

        } elseif ($form_type === 'form2') {
            // Handle Form 2 submission
            $name = $_POST["name"];
            $email = $_POST["email"];
            $people = $_POST["people"];
            $departure_time = $_POST["departure_time"];
            $departure_date = $_POST["departure_date"];
            $phone = $_POST["phone"];

            // Insert into the second database (booking)
            $conn2 = createConnection($db2_config);
            $sql2 = "INSERT INTO `booking`(`name`, `email`, `people`, `departure_time`, `departure_date`, `phone`)
                     VALUES (?, ?, ?, ?, ?, ?)";
            $stmt2 = $conn2->prepare($sql2);
            $stmt2->bind_param("ssssss", $name, $email, $people, $departure_time, $departure_date, $phone);

            if ($stmt2->execute() === TRUE) {
                echo '<div style="background-color: #4CAF50; color: white; padding: 15px; text-align: center; font-size: 18px; border-radius: 5px;">Booking Successful!</div>';
            } else {
                echo "Error in booking: " . $stmt2->error;
            }
            $stmt2->close();
            $conn2->close();

        } elseif ($form_type === 'form3') {
            // Handle Contact Form submission
            $name = $_POST["name"];
            $email = $_POST["email"];
            $phone = $_POST["phone"];
            $message = $_POST["message"];

            // Insert into the contacts database using prepared statements
            $conn3 = createConnection($db3_config);
            $sql3 = "INSERT INTO `contacts` (`name`, `email`, `phone`, `message`) 
                     VALUES (?, ?, ?, ?)";
            $stmt3 = $conn3->prepare($sql3);
            $stmt3->bind_param("ssss", $name, $email, $phone, $message);

            if ($stmt3->execute() === TRUE) {
                echo '<div style="background-color: #4CAF50; color: white; padding: 15px; text-align: center; font-size: 18px; border-radius: 5px;">Message sent successfully!</div>';
            } else {
                echo "Error in contacts: " . $stmt3->error; 
            }
            $stmt3->close();
            $conn3->close();
        }
    } else {
        echo "No form type specified.";
    }
} else {
    echo "Please fill in all required fields.";
}
?>