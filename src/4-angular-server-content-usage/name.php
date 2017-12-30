<?php
header('Content-Type: application/json');

$names = array("Sebastian", "Timo");

echo json_encode($names);
