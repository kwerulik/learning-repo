<?php
header('Content-Type: application/json');

// Konfiguracja bazy danych
$host = 'localhost';
$dbname = 'baza_danych';
$user = 'uzytkownik';
$password = 'haslo';

// Połączenie z bazą danych
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Błąd połączenia z bazą danych: " . $e->getMessage());
}

// Sprawdzenie, czy dane zostały przesłane metodą POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstname = $_POST['firstname'] ?? null;
    $lastname = $_POST['lastname'] ?? null;
    $address = $_POST['address'] ?? null;

    if ($firstname && $lastname && $address) {
        try {
            $stmt = $pdo->prepare('INSERT INTO klienci (firstname, lastname, address) VALUES (:firstname, :lastname, :address)');
            $stmt->execute([
                ':firstname' => $firstname,
                ':lastname' => $lastname,
                ':address' => $address
            ]);
            echo json_encode(['message' => 'Dane zapisane poprawnie!']);
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['message' => 'Błąd podczas zapisywania danych: ' . $e->getMessage()]);
        }
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Niekompletne dane wejściowe.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['message' => 'Nieprawidłowa metoda żądania.']);
}
?>
