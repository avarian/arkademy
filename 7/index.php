<?php

$conn = mysqli_connect("localhost", "root", "", "arkademy");

$result = mysqli_query($conn, "SELECT `nama`.`nama`, `work`.`name`, `kategori`.`salary` FROM `work`, `kategori`, `nama` where `nama`.`id_work`=`work`.`id` AND `nama`.`id_salary`=`kategori`.`id`");

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
    <header id="main-header" class="bg-success text-white p-4 mb-3">
        <div class="container">
            <h1 id="header-title">Item List</h1>
        </div>
    </header>
    <div class="container">
        <div id="main" class="card card-body">
            <h3 class="title">Search</h3>
            <form class="form-inline mb-3">
                <input type="text" class="form-control mr-2">
                <input type="submit" class="btn btn-dark" value="search">
            </form>
        </div>
        <table border="1" cellpadding="10" cellspacing="0">
            <tr>
                <th>Nama</th>
                <th>Work</th>
                <th>Salary</th>
                <th>Aksi</th>
            </tr>
            <?php while($row = mysqli_fetch_assoc($result) ) : ?>
            <tr>
                <td><?= $row["nama"]; ?></td>
                <td><?= $row["name"]; ?></td>
                <td><?= $row["salary"]; ?></td>
                <td>
                    <a href="">edit</a> ||
                    <a href="">delete</a>
                </td>
            </tr>
            <?php endwhile; ?>
        </table>
    </div>
</body>
</html>