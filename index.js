import _ from 'lodash';

export default function solution(content) {
  // BEGIN
  //console.log(content)

  //step 1
  const data = content.split('\n');
  const dataNorm = data.slice(2, data.length);
  const dataFlowers = dataNorm.map(row => row.split('|'));
  const flowerList = dataFlowers.map(row => row.slice(1, row.length - 1));
  const numberFlowers = dataNorm.length;

  console.log(`Number of plants: ${numberFlowers}`);



  // step 2
  const list_of_plants = flowerList.map(list => list[0]);
  const list_of_plants_Up = list_of_plants.map(list => `${list[1].toUpperCase()}${list.slice(2)}`);
  const list_of_plants_Up_sorted = _.sortBy(list_of_plants_Up);
  const mayami = list_of_plants_Up_sorted.map(list => list.split(' '));
  const listPlants = mayami.map(list => list[0]);
  console.log(listPlants);


  // step 3
  const lev_Of_Danger_Plants = flowerList.map(row => row[4]);
  const mayami2 = lev_Of_Danger_Plants.map(list => list.split(' '));
  const level_Of_Danger_Plants = mayami2.map(list => list[1]);
  const safePlants = level_Of_Danger_Plants.filter(row => row === 'Нет');
  const dangerPlants = level_Of_Danger_Plants.filter(row => row === 'Да');
  const perSafe = safePlants.length;
  const perDanger = dangerPlants.length;
  const percent_Of_Safe = (perSafe * 100) / numberFlowers;
  const percent_Of_Danger = (perDanger * 100) / numberFlowers;
  console.log(`Number of safe plants: ${percent_Of_Safe}%`);
  console.log(`Number of danger plants: ${percent_Of_Danger}%`);
  console.log('---------------------------------------------------------------------');




  // step 4
  const arr_areaPlants = [];
  const arr_timePlants = [];
  const objArrTime = {};
  const arr_test = [];
/*
  for (let flower of flowerList) {
    let key = flower[1];
    let value = flower[3];
    objArrTime[key] = value;
  }
  //console.log(objArrTime);

  for (let area in objArrTime) {
    area.split(',');
    arr_test.push(area);
    console.log(arr_test);
  }

  console.log(arr_test);
*/


  const list_Of_area_Plants = flowerList.map(row => row[1]);
  const mayami3 = list_Of_area_Plants.map(list => list.split(' '));
  const kiks = mayami3.map(list => list[1]);
  const mayami4 = kiks.map(list => list.split(','));
  const areaPlants = mayami4.map(list => list[0]);



  const list_Of_Time_Plants = flowerList.map(row => row[3]);
  const mayami5 = list_Of_Time_Plants.map(list => list.split(' '));
  const firs = mayami5.map(list => list[1]);
  const mayami6 = firs.map(list => list.split(','));

  const timePlants = mayami6.map(list => list[0]);

  const mayami7 = timePlants.map(row => row.split('-'));
  let a1, a2 = 0;
  const mayami8 = [];
  for (let i = 0; i < mayami7.length; i += 1) {
    a1 = Number(mayami7[i][0]);
    a2 = Number(mayami7[i][1]);
    mayami8.push([a1, a2]);
    
  }


  const mayami9 = [];
  for (let i = 0; i < mayami8.length; i += 1) {
    if (isNaN(mayami8[i][1])) {
      mayami8[i][1] = 1;
    }
    mayami9.push([mayami8[i][0], mayami8[i][1]]);
  }

  let timeRock = 0;
  const meanTimeLifeEachPlant = [];
  for (let i = 0; i < mayami9.length; i += 1) {
    timeRock = (mayami9[i][0] + mayami9[i][1]) / 2;
    meanTimeLifeEachPlant.push([timeRock]);
  }
  const meanTimeLifeEachPlant_all = meanTimeLifeEachPlant.flat();


  

 // console.log(areaPlants);
 // console.log(meanTimeLifeEachPlant_all);



  let obj_TIME = [];
  for (let i = 0; i < 19; i += 1) {
    obj_TIME.push([areaPlants[i], meanTimeLifeEachPlant_all[i]]);
  }


  let sum_of_time = 0;
  let count_sum = 0;
  for (let plant of obj_TIME) {
    if (plant[0] === 'Леса') {
      sum_of_time = sum_of_time + plant[1];
      count_sum += 1;
    }
  }

  const meanTimeLifeForestPlants = sum_of_time / count_sum;

  console.log(`Среднее время жизни всех лесных растений: ${meanTimeLifeForestPlants} лет`);
  




/*


  
  for (let time in mayami9) {
    if (time[0] === NaN) {
      time[0] = 1;
    } 
    mayami10.push([time[0]]);
  }


 // console.log(mayami10);
  
*/

  
  // END
}