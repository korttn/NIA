$(function(){
    setChart();
});


function setChart(){
var pink = 'rgb(255, 99, 132)';
var pinkA = 'rgb(255, 99, 132, 0.2)';//a는 투명도
var white = '#fff';
var blue = 'rgb(153, 102, 255,0.7)';
var blue2 = 'rgb(153, 102, 255)';
var blueA = 'rgba(153, 102, 255, 0.2)'
var bgColor = [blueA]
var color = [blue]

var legend = ['본인 진단점수']
var fill = [true]

//차트 공통
var chartOptions = {
  responsive: false,
  title: {
      display : true,
      text: ''
  },
  scale: {
      angleLines: {
          display: false
      },
      ticks: {
          beginAtZero: true,
          //min: 0,
          max: 5,
          stepSize: 1,
          display: false
      },
      pointLabels: {
          fontSize: 15,
          fontColor: "black",
      },
      gridLines:{
          color: 'rgba(166, 201, 226, 0.8)',
          lineWidth:1
      }
  },
  legend: {
      position: 'left',
  }
};

Chart.plugins.register({
      afterDatasetsDraw: function(chart) {
        var ctx = chart.ctx;
        chart.data.datasets.forEach(function(dataset, i) {
          var meta = chart.getDatasetMeta(i);
          if (!meta.hidden) {
            meta.data.forEach(function(element, index) {
              // Draw the text in black, with the specified font
              //ctx.fillStyle = 'rgb(255, 0, 0)';
              ctx.fillStyle = blue2;
              var fontSize = 17;
              var fontStyle = 'bold'; //bold
              var fontFamily = 'Helvetica Neue';
              ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
              // Just naively convert to string for now
              var dataString = dataset.data[index].toString();
              // Make sure alignment settings are correct
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              var padding = 8;
              var position = element.tooltipPosition();
              ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
            });
          }
        });
      }
    });

//차트1
let cd1List = [];
let laData1List = [];
let sub1List = [];
let sub1DataList = [];

$(".cd1").each(function(index, element){
//alert($(this).text())
cd1List.push($(this).text()); 
});
cd1List.push($(".cd1Avg").text());

$(".sub1").each(function(index, element){
sub1List.push($(this).text()); 
});
sub1List.push("평균");

$(".sub1_data").each(function(index, element){
sub1DataList.push($(this).text()); 
});

for(var i = 0; i < sub1List.length; i++){
let label1List = [];
label1List.push(sub1List[i]);
if(typeof sub1DataList[i] != 'undefined'){
  label1List.push(sub1DataList[i]);
}else{
  label1List.push("");
}
laData1List.push(label1List);
}

var chartData1 = [cd1List]
var labels1 = [
laData1List[0],
laData1List[1],
laData1List[2],
laData1List[3],
laData1List[4],
laData1List[5],
laData1List[6],
laData1List[7]
];
const radarData1 = {
  labels: labels1,
  datasets: []
}

chartData1.forEach(function(data, i){
radarData1.datasets.push({
    label : legend[i],
    data: data,
    fill: fill[i],
    backgroundColor: bgColor[i],
    borderColor: color[i],
    pointBackgroundColor: color[i],
    pointBorderColor: white,
    pointHoverBackgroundColor: white,
    pointHoverBorderColor: color[i],
    datalabels: {
        align: 'center',
        anchor: 'center'
    }
});
});

//차트2
let cd2List = [];
let laData2List = [];
let sub2List = [];
let sub2DataList = [];

$(".cd2").each(function(index, element){
//alert($(this).text())
cd2List.push($(this).text()); 
});
cd2List.push($(".cd2Avg").text());

$(".sub2").each(function(index, element){
sub2List.push($(this).text()); 
});
sub2List.push("평균");

$(".sub2_data").each(function(index, element){
sub2DataList.push($(this).text()); 
});

for(var i = 0; i < sub2List.length; i++){
let label2List = [];
label2List.push(sub2List[i]);
if(typeof sub2DataList[i] != 'undefined'){
  label2List.push(sub2DataList[i]);
}else{
  label2List.push("");
}
laData2List.push(label2List);
}

var chartData2 = [cd2List]
var labels2 = [
laData2List[0],
laData2List[1],
laData2List[2],
laData2List[3],
laData2List[4]
];
const radarData2 = {
  labels: labels2,
  datasets: []
}

chartData2.forEach(function(data, i){
radarData2.datasets.push({
    label : legend[i],
    data: data,
    fill: fill[i],
    backgroundColor: bgColor[i],
    borderColor: color[i],
    pointBackgroundColor: color[i],
    pointBorderColor: white,
    pointHoverBackgroundColor: white,
    pointHoverBorderColor: color[i],
    datalabels: {
        align: 'center',
        anchor: 'center'
    }
});
});

//차트3
let cd3List = [];
let laData3List = [];
let sub3List = [];
let sub3DataList = [];

$(".cd3").each(function(index, element){
//alert($(this).text())
cd3List.push($(this).text()); 
});
cd3List.push($(".cd3Avg").text());

$(".sub3").each(function(index, element){
sub3List.push($(this).text()); 
});
sub3List.push("평균");

$(".sub3_data").each(function(index, element){
sub3DataList.push($(this).text()); 
});

for(var i = 0; i < sub3List.length; i++){
let label3List = [];
label3List.push(sub3List[i]);
if(typeof sub3DataList[i] != 'undefined'){
  label3List.push(sub3DataList[i]);
}else{
  label3List.push("");
}
laData3List.push(label3List);
}

var chartData3 = [cd3List]
var labels3 = [
laData3List[0],
laData3List[1],
laData3List[2],
laData3List[3],
laData3List[4],
laData3List[5],
laData3List[6]
];
const radarData3 = {
  labels: labels3,
  datasets: []
}

chartData3.forEach(function(data, i){
radarData3.datasets.push({
    label : legend[i],
    data: data,
    fill: fill[i],
    backgroundColor: bgColor[i],
    borderColor: color[i],
    pointBackgroundColor: color[i],
    pointBorderColor: white,
    pointHoverBackgroundColor: white,
    pointHoverBorderColor: color[i],
    datalabels: {
        align: 'center',
        anchor: 'center'
    }
});
});

//차트4
let cd4List = [];
let laData4List = [];
let sub4List = [];
let sub4DataList = [];

$(".cd4").each(function(index, element){
//alert($(this).text())
cd4List.push($(this).text()); 
});
cd4List.push($(".cd4Avg").text());

$(".sub4").each(function(index, element){
sub4List.push($(this).text()); 
});
sub4List.push("평균");

$(".sub4_data").each(function(index, element){
sub4DataList.push($(this).text()); 
});

for(var i = 0; i < sub4List.length; i++){
let label4List = [];
label4List.push(sub4List[i]);
if(typeof sub4DataList[i] != 'undefined'){
  label4List.push(sub4DataList[i]);
}else{
  label4List.push("");
}
laData4List.push(label4List);
}

var chartData4 = [cd4List]
var labels4 = [
laData4List[0],
laData4List[1],
laData4List[2],
laData4List[3]
];
const radarData4 = {
  labels: labels4,
  datasets: []
}

chartData4.forEach(function(data, i){
radarData4.datasets.push({
    label : legend[i],
    data: data,
    fill: fill[i],
    backgroundColor: bgColor[i],
    borderColor: color[i],
    pointBackgroundColor: color[i],
    pointBorderColor: white,
    pointHoverBackgroundColor: white,
    pointHoverBorderColor: color[i],
    datalabels: {
        align: 'center',
        anchor: 'center'
    }
});
});

//차트5
let cd5List = [];
let laData5List = [];
let sub5List = [];
let sub5DataList = [];

$(".cd5").each(function(index, element){
//alert($(this).text())
cd5List.push($(this).text()); 
});
cd5List.push($(".cd5Avg").text());

$(".sub5").each(function(index, element){
sub5List.push($(this).text()); 
});
sub5List.push("평균");

$(".sub5_data").each(function(index, element){
sub5DataList.push($(this).text()); 
});

for(var i = 0; i < sub5List.length; i++){
let label5List = [];
label5List.push(sub5List[i]);
if(typeof sub5DataList[i] != 'undefined'){
  label5List.push(sub5DataList[i]);
}else{
  label5List.push("");
}
laData5List.push(label5List);
}

var chartData5 = [cd5List]
var labels5 = [
laData5List[0],
laData5List[1],
laData5List[2],
laData5List[3]
];
const radarData5 = {
  labels: labels5,
  datasets: []
}

chartData5.forEach(function(data, i){
radarData5.datasets.push({
    label : legend[i],
    data: data,
    fill: fill[i],
    backgroundColor: bgColor[i],
    borderColor: color[i],
    pointBackgroundColor: color[i],
    pointBorderColor: white,
    pointHoverBackgroundColor: white,
    pointHoverBorderColor: color[i],
    datalabels: {
        align: 'center',
        anchor: 'center'
    }
});
});

//차트6
let cd6List = [];
let laData6List = [];
let sub6List = [];
let sub6DataList = [];

$(".cd6").each(function(index, element){
//alert($(this).text())
cd6List.push($(this).text()); 
});
cd6List.push($(".cd6Avg").text());

$(".sub6").each(function(index, element){
sub6List.push($(this).text()); 
});
sub6List.push("평균");

$(".sub6_data").each(function(index, element){
sub6DataList.push($(this).text()); 
});

for(var i = 0; i < sub6List.length; i++){
let label6List = [];
label6List.push(sub6List[i]);
if(typeof sub6DataList[i] != 'undefined'){
  label6List.push(sub6DataList[i]);
}else{
  label6List.push("");
}
laData6List.push(label6List);
}

var chartData6 = [cd6List]
var labels6 = [
laData6List[0],
laData6List[1],
laData6List[2],
laData6List[3]
];
const radarData6 = {
  labels: labels6,
  datasets: []
}

chartData6.forEach(function(data, i){
radarData6.datasets.push({
    label : legend[i],
    data: data,
    fill: fill[i],
    backgroundColor: bgColor[i],
    borderColor: color[i],
    pointBackgroundColor: color[i],
    pointBorderColor: white,
    pointHoverBackgroundColor: white,
    pointHoverBorderColor: color[i],
    datalabels: {
        align: 'center',
        anchor: 'center'
    }
});
});

//차트7
let cd7List = [];
let laData7List = [];
let sub7List = [];
let sub7DataList = [];

$(".cd7").each(function(index, element){
//alert($(this).text())
cd7List.push($(this).text()); 
});
cd7List.push($(".cd7Avg").text());

$(".sub7").each(function(index, element){
sub7List.push($(this).text()); 
});
sub7List.push("평균");

$(".sub7_data").each(function(index, element){
sub7DataList.push($(this).text()); 
});

for(var i = 0; i < sub7List.length; i++){
let label7List = [];
label7List.push(sub7List[i]);
if(typeof sub7DataList[i] != 'undefined'){
  label7List.push(sub7DataList[i]);
}else{
  label7List.push("");
}
laData7List.push(label7List);
}

var chartData7 = [cd7List]
var labels7 = [
laData7List[0],
laData7List[1],
laData7List[2],
];
const radarData7 = {
  labels: labels7,
  datasets: []
}

chartData7.forEach(function(data, i){
radarData7.datasets.push({
    label : legend[i],
    data: data,
    fill: fill[i],
    backgroundColor: bgColor[i],
    borderColor: color[i],
    pointBackgroundColor: color[i],
    pointBorderColor: white,
    pointHoverBackgroundColor: white,
    pointHoverBorderColor: color[i],
    datalabels: {
        align: 'center',
        anchor: 'center'
    }
});
});

//차트 그리기
//chart1
const ctx1 = document.getElementById("chart1");  
const config1 = {
  type: 'radar',
  data: radarData1,
  options: chartOptions
};
const myChart1 = new Chart(
  ctx1,
  config1
);

//chart2
const ctx2 = document.getElementById("chart2");  
const config2 = {
  type: 'radar',
  data: radarData2,
  options: chartOptions
};
const myChart2 = new Chart(
  ctx2,
  config2
);

//chart3
const ctx3 = document.getElementById("chart3");  
const config3 = {
  type: 'radar',
  data: radarData3,
  options: chartOptions
};
const myChart3 = new Chart(
  ctx3,
  config3
);

//chart4
const ctx4 = document.getElementById("chart4");  
const config4 = {
  type: 'radar',
  data: radarData4,
  options: chartOptions
};
const myChart4 = new Chart(
  ctx4,
  config4
);

//chart5
const ctx5 = document.getElementById("chart5");  
const config5 = {
  type: 'radar',
  data: radarData5,
  options: chartOptions
};
const myChart5 = new Chart(
  ctx5,
  config5
);

//chart6
const ctx6 = document.getElementById("chart6");  
const config6 = {
  type: 'radar',
  data: radarData6,
  options: chartOptions
};
const myChart6 = new Chart(
  ctx6,
  config6
);

//chart7
const ctx7 = document.getElementById("chart7");  
const config7 = {
  type: 'radar',
  data: radarData7,
  options: chartOptions
};
const myChart7 = new Chart(
  ctx7,
  config7
);
}   