<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header('Content-type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}


/* Require */
date_default_timezone_set('America/New_York');
require_once("vendor/autoload.php");

//use PHRETS\Configuration;
$config = new  \PHRETS\Configuration;
//Config PHRets
$config->setLoginUrl('http://retsgw.flexmls.com/rets2_3/Login')
  ->setUsername('gcar.rets.Bliones')
  ->setPassword('vG(1n57vOw')
  ->setRetsVersion('1.7.2');
$rets = new PHRETS\Session($config);
$connect = $rets->Login();

//variable for data build/construct
$dataConstruct = [];

$data = [];
$all_ids = [];
$imagesID = [];
$data = [];

//switch ($method) {
switch ($_SERVER['REQUEST_URI']) {
  case '/activeAgents':
    $activeAgentsData = $rets->Search('ActiveAgent', 'Agent', '*', ['Limit' => 10]);
    $response = ['data' => $activeAgentsData->toArray()];
    break;
  case '/agents':
    $agentsData = $rets->Search('Agent', 'Agent', '*', ['Limit' => 10]);
    $response = ['data' => $agentsData->toArray()];
    break;
  case '/offices':
    $officeData = $rets->Search('Office', 'Office', '*', ['Limit' => 10]);
    $response = ['data' => $officeData->toArray()];
    break;
  case '/units':
    $unitData = $rets->Search('Unit', 'B', '*', ['Limit' => 10]);
    $response = ['data' => $unitData->toArray()];
    break;
  case '/rooms':
    $roomData = $rets->Search('Room', 'A', '*', ['Limit' => 10]);
    $response = ['data' => $roomData->toArray()];
    break;
  case '/openhouses':
    $openHouseData = $rets->Search('OpenHouse', 'OpenHouse', '*', ['Limit' => 10]);
    $response = ['data' => $openHouseData->toArray()];

    break;
  case '/aproperties':
    $aPropertyData = $rets->Search('Property', 'A', '*', ['Limit' => 10]);
    $response = ['data' => $aPropertyData->toArray()];

    break;
  case '/bproperties':
    $bPropertyData = $rets->Search('Property', 'B', '*', ['Limit' => 10]);
    $response = ['data' => $bPropertyData->toArray()];

    break;
  case '/cproperties':
    $cPropertyData = $rets->Search('Property', 'C', '*', ['Limit' => 10]);
    $response = ['data' => $cPropertyData->toArray()];

    break;
  case '/dproperties':
    $dPropertyData = $rets->Search('Property', 'D', '*', ['Limit' => 10]);
    $response = ['data' => $dPropertyData->toArray()];

    break;
  default:
    // $openHouseData = $rets->Search('OpenHouse', 'OpenHouse', '*', ['Limit' => 10]);
    // $response = ['data' => $openHouseData->toArray()];

    if ($_GET['images']) {
      $id = $_GET['images'];
      $imagesData = $rets->GetObject('Property', 'Photo', $id, '*', 1);
      $id_search = [];
      foreach ($imagesData as $key => $images) {
        //echo $imagesData[$key]->getLocation() . "\n";
        $value = $imagesData[$key]->getLocation();
        $id_search[] = $value;
      }
    
      if ($response) {
        $data = $response;
        $response = array(
          'data' => $data,
          'imagesUrl' => $id_search
        );
        return;
      }
    
      $response = ['imagesUrl' => $id_search];
    }

    break;
}

if ($_GET['images']) {
  $id = $_GET['images'];
  $imagesData = $rets->GetObject('Property', 'Photo', $id, '*', 1);
  $id_search = [];
  foreach ($imagesData as $key => $images) {
    //echo $imagesData[$key]->getLocation() . "\n";
    $value = $imagesData[$key]->getLocation();
    $id_search[] = $value;
  }

  if ($response) {
    $data = $response;
    $response = array(
      'data' => $data,
      'imagesUrl' => $id_search
    );
    echo json_encode($response);
    return;
  }

  $response = ['imagesUrl' => $id_search];
}

echo json_encode($response);
