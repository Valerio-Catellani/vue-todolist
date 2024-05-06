<?php


$todoJson = file_get_contents("resources/js/data.json");

$call = $_SERVER['REQUEST_METHOD'];

if ($call === 'POST') {
    if (isset($_POST['text'])) {
        //prendiamo un json e lo trasformiamo in un array associativo
        $AllTasks = json_decode($todoJson, true);
        //creiamo un array degli id che utilizzeremo in un ciclo while per andare ad otternere il primo id disponibile
        $id = 0;
        foreach ($AllTasks as $task) {
            if ($task['id'] >= $id) {
                $id = $task['id'] + 1;
            }
        };
        //creiamo un nuovo array associativo che contenga il nuovo task
        $newTask = [
            "id" => (int)$id,
            "text" => $_POST["text"],
            "done" => false
        ];
        //aggiungiamo il nuovo task all'array transformato da json
        $AllTasks[] = $newTask;
        //ritrasformiamo l'array associativo in json
        $todoJson = json_encode($AllTasks);
        file_put_contents("resources/js/data.json", $todoJson);
    }
} else if ($call === 'DELETE') {
}




header('Content-Type: application/json');
echo $todoJson;
