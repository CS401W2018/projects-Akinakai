<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <main>
        <h1>Thank you for Signing up.</h1>
        <p>First Name: <?php print $_POST['Firstname'] ?> </p>
        <p>Email: <?php print $_POST['email'] ?> </p>
        <p>Birthdate: <?php print $_POST['birthdate'] ?> </p>
        <p>Password: <?php print $_POST['password'] ?> </p>
        <p>State: <?php print $_POST['state'] ?> </p> 
        <p>Gender: <?php print $_POST['gender'] ?> </p>
    </main>
</body>
</html>