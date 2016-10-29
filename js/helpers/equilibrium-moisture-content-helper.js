var EquilibriumMoistureContentHelper = function() {

    var equilibriumMoistureContentTable = new Array(8686);
    equilibriumMoistureContentTable = [0,0.3,0.6,0.9,1.1,1.4,1.6,1.9,2.1,2.3,2.5,2.7,2.9,3.1,3.3,3.5,3.7,3.8,4,4.2,4.4,4.5,4.7,4.8,5,5.2,5.3,5.5,5.6,5.8,5.9,6.1,6.2,6.4,6.5,6.7,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8,8.2,8.4,8.5,8.7,8.8,9,9.2,9.3,9.5,9.7,9.9,10,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12.1,12.3,12.5,12.8,13,13.3,13.5,13.8,14.1,14.4,14.6,15,15.3,15.6,15.9,16.3,16.7,17,17.4,17.9,18.3,18.8,19.2,19.7,20.3,20.8,21.4,22,22.7,23.4,24.1,24.9,25.7,26.6,27.6,0,0.3,0.6,0.9,1.1,1.4,1.6,1.9,2.1,2.3,2.5,2.7,2.9,3.1,3.3,3.5,3.7,3.9,4,4.2,4.4,4.5,4.7,4.9,5,5.2,5.3,5.5,5.7,5.8,6,6.1,6.3,6.4,6.6,6.7,6.9,7,7.2,7.3,7.5,7.6,7.8,7.9,8.1,8.2,8.4,8.6,8.7,8.9,9.1,9.2,9.4,9.6,9.7,9.9,10.1,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.3,12.6,12.8,13.1,13.3,13.6,13.9,14.1,14.4,14.7,15,15.3,15.7,16,16.4,16.7,17.1,17.5,17.9,18.4,18.8,19.3,19.8,20.3,20.9,21.5,22.1,22.8,23.5,24.2,25,25.8,26.7,27.7,0,0.3,0.6,0.9,1.1,1.4,1.6,1.9,2.1,2.3,2.5,2.7,2.9,3.1,3.3,3.5,3.7,3.9,4.1,4.2,4.4,4.6,4.7,4.9,5.1,5.2,5.4,5.5,5.7,5.8,6,6.1,6.3,6.4,6.6,6.8,6.9,7.1,7.2,7.4,7.5,7.7,7.8,8,8.1,8.3,8.5,8.6,8.8,8.9,9.1,9.3,9.4,9.6,9.8,10,10.2,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.7,12,12.2,12.4,12.6,12.9,13.1,13.4,13.6,13.9,14.2,14.5,14.8,15.1,15.4,15.7,16.1,16.4,16.8,17.2,17.6,18,18.4,18.9,19.4,19.9,20.4,21,21.6,22.2,22.9,23.6,24.3,25.1,25.9,26.8,27.8,0,0.3,0.6,0.9,1.1,1.4,1.6,1.9,2.1,2.3,2.5,2.8,3,3.2,3.3,3.5,3.7,3.9,4.1,4.2,4.4,4.6,4.8,4.9,5.1,5.2,5.4,5.6,5.7,5.9,6,6.2,6.3,6.5,6.6,6.8,6.9,7.1,7.2,7.4,7.6,7.7,7.9,8,8.2,8.3,8.5,8.7,8.8,9,9.2,9.3,9.5,9.7,9.8,10,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.5,12.7,12.9,13.2,13.4,13.7,14,14.2,14.5,14.8,15.1,15.5,15.8,16.1,16.5,16.9,17.2,17.6,18.1,18.5,19,19.5,20,20.5,21.1,21.6,22.3,22.9,23.6,24.4,25.2,26,26.9,27.9,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.3,2.6,2.8,3,3.2,3.4,3.5,3.7,3.9,4.1,4.3,4.4,4.6,4.8,4.9,5.1,5.3,5.4,5.6,5.7,5.9,6.1,6.2,6.4,6.5,6.7,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8.1,8.2,8.4,8.5,8.7,8.9,9,9.2,9.4,9.5,9.7,9.9,10.1,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.3,12.5,12.7,13,13.2,13.5,13.7,14,14.3,14.6,14.9,15.2,15.5,15.8,16.2,16.5,16.9,17.3,17.7,18.1,18.6,19,19.5,20,20.6,21.1,21.7,22.3,23,23.7,24.5,25.3,26.1,27,28,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.3,2.6,2.8,3,3.2,3.4,3.6,3.7,3.9,4.1,4.3,4.5,4.6,4.8,5,5.1,5.3,5.4,5.6,5.8,5.9,6.1,6.2,6.4,6.5,6.7,6.9,7,7.2,7.3,7.5,7.6,7.8,7.9,8.1,8.3,8.4,8.6,8.7,8.9,9.1,9.2,9.4,9.6,9.7,9.9,10.1,10.3,10.5,10.7,10.9,11,11.2,11.5,11.7,11.9,12.1,12.3,12.5,12.8,13,13.3,13.5,13.8,14.1,14.3,14.6,14.9,15.2,15.6,15.9,16.2,16.6,17,17.4,17.8,18.2,18.6,19.1,19.6,20.1,20.6,21.2,21.8,22.4,23.1,23.8,24.5,25.3,26.2,27.1,28.1,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,3.9,4.1,4.3,4.5,4.6,4.8,5,5.1,5.3,5.5,5.6,5.8,5.9,6.1,6.3,6.4,6.6,6.7,6.9,7,7.2,7.3,7.5,7.7,7.8,8,8.1,8.3,8.4,8.6,8.8,8.9,9.1,9.3,9.4,9.6,9.8,10,10.1,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.4,12.6,12.8,13.1,13.3,13.6,13.8,14.1,14.4,14.7,15,15.3,15.6,15.9,16.3,16.6,17,17.4,17.8,18.2,18.7,19.1,19.6,20.1,20.7,21.2,21.8,22.5,23.1,23.9,24.6,25.4,26.3,27.2,28.2,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.1,4.3,4.5,4.7,4.8,5,5.2,5.3,5.5,5.7,5.8,6,6.1,6.3,6.4,6.6,6.8,6.9,7.1,7.2,7.4,7.5,7.7,7.8,8,8.2,8.3,8.5,8.6,8.8,9,9.1,9.3,9.5,9.6,9.8,10,10.2,10.4,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.2,12.4,12.6,12.9,13.1,13.3,13.6,13.9,14.1,14.4,14.7,15,15.3,15.6,16,16.3,16.7,17.1,17.4,17.8,18.3,18.7,19.2,19.7,20.2,20.7,21.3,21.9,22.5,23.2,23.9,24.7,25.5,26.4,27.3,28.3,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.3,4.5,4.7,4.9,5,5.2,5.4,5.5,5.7,5.8,6,6.2,6.3,6.5,6.6,6.8,6.9,7.1,7.2,7.4,7.6,7.7,7.9,8,8.2,8.3,8.5,8.7,8.8,9,9.2,9.3,9.5,9.7,9.8,10,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.4,12.7,12.9,13.1,13.4,13.6,13.9,14.2,14.5,14.7,15,15.4,15.7,16,16.4,16.7,17.1,17.5,17.9,18.3,18.8,19.2,19.7,20.2,20.8,21.3,21.9,22.6,23.3,24,24.7,25.6,26.4,27.4,28.4,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.3,4.5,4.7,4.9,5,5.2,5.4,5.5,5.7,5.9,6,6.2,6.3,6.5,6.6,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8.1,8.2,8.4,8.5,8.7,8.9,9,9.2,9.4,9.5,9.7,9.9,10.1,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.5,12.7,12.9,13.2,13.4,13.7,13.9,14.2,14.5,14.8,15.1,15.4,15.7,16,16.4,16.8,17.1,17.5,17.9,18.4,18.8,19.3,19.8,20.3,20.8,21.4,22,22.6,23.3,24,24.8,25.6,26.5,27.4,28.5,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.5,4.7,4.9,5.1,5.2,5.4,5.6,5.7,5.9,6,6.2,6.4,6.5,6.7,6.8,7,7.1,7.3,7.5,7.6,7.8,7.9,8.1,8.2,8.4,8.6,8.7,8.9,9.1,9.2,9.4,9.6,9.7,9.9,10.1,10.3,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.3,12.5,12.7,12.9,13.2,13.4,13.7,14,14.2,14.5,14.8,15.1,15.4,15.7,16.1,16.4,16.8,17.2,17.5,18,18.4,18.8,19.3,19.8,20.3,20.9,21.4,22,22.7,23.4,24.1,24.9,25.7,26.6,27.5,28.5,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.5,4.7,4.9,5.1,5.2,5.4,5.6,5.7,5.9,6.1,6.2,6.4,6.5,6.7,6.8,7,7.2,7.3,7.5,7.6,7.8,7.9,8.1,8.3,8.4,8.6,8.7,8.9,9.1,9.2,9.4,9.6,9.8,9.9,10.1,10.3,10.5,10.7,10.8,11,11.2,11.4,11.6,11.8,12.1,12.3,12.5,12.7,13,13.2,13.5,13.7,14,14.3,14.5,14.8,15.1,15.4,15.8,16.1,16.4,16.8,17.2,17.6,18,18.4,18.9,19.3,19.8,20.3,20.9,21.5,22.1,22.7,23.4,24.1,24.9,25.7,26.6,27.6,28.6,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.7,4.9,5.1,5.3,5.4,5.6,5.7,5.9,6.1,6.2,6.4,6.5,6.7,6.9,7,7.2,7.3,7.5,7.6,7.8,8,8.1,8.3,8.4,8.6,8.8,8.9,9.1,9.3,9.4,9.6,9.8,9.9,10.1,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.3,12.5,12.8,13,13.2,13.5,13.7,14,14.3,14.6,14.9,15.2,15.5,15.8,16.1,16.5,16.8,17.2,17.6,18,18.4,18.9,19.4,19.8,20.4,20.9,21.5,22.1,22.7,23.4,24.2,24.9,25.8,26.7,27.6,28.6,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.7,4.9,5.1,5.3,5.4,5.6,5.8,5.9,6.1,6.2,6.4,6.6,6.7,6.9,7,7.2,7.4,7.5,7.7,7.8,8,8.1,8.3,8.5,8.6,8.8,8.9,9.1,9.3,9.4,9.6,9.8,10,10.1,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.3,12.5,12.8,13,13.3,13.5,13.8,14,14.3,14.6,14.9,15.2,15.5,15.8,16.1,16.5,16.8,17.2,17.6,18,18.5,18.9,19.4,19.9,20.4,20.9,21.5,22.1,22.8,23.5,24.2,25,25.8,26.7,27.7,28.7,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.8,4.9,5.1,5.3,5.4,5.6,5.8,5.9,6.1,6.3,6.4,6.6,6.7,6.9,7.1,7.2,7.4,7.5,7.7,7.8,8,8.2,8.3,8.5,8.6,8.8,9,9.1,9.3,9.5,9.6,9.8,10,10.2,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.3,12.6,12.8,13,13.3,13.5,13.8,14,14.3,14.6,14.9,15.2,15.5,15.8,16.2,16.5,16.9,17.2,17.6,18,18.5,18.9,19.4,19.9,20.4,21,21.5,22.2,22.8,23.5,24.2,25,25.9,26.7,27.7,28.8,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.8,4.9,5.1,5.3,5.5,5.6,5.8,6,6.1,6.3,6.4,6.6,6.8,6.9,7.1,7.2,7.4,7.5,7.7,7.9,8,8.2,8.3,8.5,8.7,8.8,9,9.1,9.3,9.5,9.6,9.8,10,10.2,10.4,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.3,12.6,12.8,13,13.3,13.5,13.8,14,14.3,14.6,14.9,15.2,15.5,15.8,16.2,16.5,16.9,17.3,17.6,18.1,18.5,18.9,19.4,19.9,20.4,21,21.6,22.2,22.8,23.5,24.3,25,25.9,26.8,27.8,28.8,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.4,2.6,2.8,3,3.2,3.5,3.7,3.8,4,4.2,4.4,4.6,4.8,4.9,5.1,5.3,5.5,5.6,5.8,6,6.1,6.3,6.4,6.6,6.8,6.9,7.1,7.2,7.4,7.6,7.7,7.9,8,8.2,8.3,8.5,8.7,8.8,9,9.2,9.3,9.5,9.7,9.8,10,10.2,10.4,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.4,12.6,12.8,13,13.3,13.5,13.8,14.1,14.3,14.6,14.9,15.2,15.5,15.8,16.2,16.5,16.9,17.3,17.7,18.1,18.5,19,19.4,19.9,20.4,21,21.6,22.2,22.9,23.5,24.3,25.1,25.9,26.8,27.8,28.8,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.4,2.6,2.8,3,3.2,3.5,3.7,3.9,4,4.2,4.4,4.6,4.8,5,5.1,5.3,5.5,5.6,5.8,6,6.1,6.3,6.5,6.6,6.8,6.9,7.1,7.2,7.4,7.6,7.7,7.9,8,8.2,8.4,8.5,8.7,8.8,9,9.2,9.3,9.5,9.7,9.8,10,10.2,10.4,10.6,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.4,12.6,12.8,13.1,13.3,13.5,13.8,14.1,14.3,14.6,14.9,15.2,15.5,15.8,16.2,16.5,16.9,17.3,17.7,18.1,18.5,19,19.4,19.9,20.5,21,21.6,22.2,22.9,23.6,24.3,25.1,25.9,26.8,27.8,28.9,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.4,2.6,2.8,3,3.3,3.5,3.7,3.9,4,4.2,4.4,4.6,4.8,5,5.1,5.3,5.5,5.6,5.8,6,6.1,6.3,6.5,6.6,6.8,6.9,7.1,7.3,7.4,7.6,7.7,7.9,8,8.2,8.4,8.5,8.7,8.8,9,9.2,9.3,9.5,9.7,9.9,10,10.2,10.4,10.6,10.8,10.9,11.1,11.3,11.5,11.7,11.9,12.2,12.4,12.6,12.8,13.1,13.3,13.5,13.8,14.1,14.3,14.6,14.9,15.2,15.5,15.8,16.2,16.5,16.9,17.3,17.7,18.1,18.5,19,19.4,19.9,20.5,21,21.6,22.2,22.9,23.6,24.3,25.1,26,26.9,27.9,28.9,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.4,2.6,2.8,3,3.3,3.5,3.7,3.9,4.1,4.2,4.4,4.6,4.8,5,5.1,5.3,5.5,5.7,5.8,6,6.1,6.3,6.5,6.6,6.8,6.9,7.1,7.3,7.4,7.6,7.7,7.9,8.1,8.2,8.4,8.5,8.7,8.9,9,9.2,9.3,9.5,9.7,9.9,10,10.2,10.4,10.6,10.8,10.9,11.1,11.3,11.5,11.7,11.9,12.2,12.4,12.6,12.8,13.1,13.3,13.6,13.8,14.1,14.3,14.6,14.9,15.2,15.5,15.8,16.2,16.5,16.9,17.3,17.7,18.1,18.5,19,19.4,19.9,20.5,21,21.6,22.2,22.9,23.6,24.3,25.1,26,26.9,27.9,28.9,0,0.3,0.6,0.9,1.1,1.4,1.7,1.9,2.1,2.4,2.6,2.8,3,3.3,3.5,3.7,3.9,4.1,4.2,4.4,4.6,4.8,5,5.1,5.3,5.5,5.7,5.8,6,6.2,6.3,6.5,6.6,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8.1,8.2,8.4,8.5,8.7,8.9,9,9.2,9.4,9.5,9.7,9.9,10,10.2,10.4,10.6,10.8,10.9,11.1,11.3,11.5,11.7,11.9,12.2,12.4,12.6,12.8,13.1,13.3,13.5,13.8,14.1,14.3,14.6,14.9,15.2,15.5,15.8,16.2,16.5,16.9,17.3,17.7,18.1,18.5,19,19.4,19.9,20.5,21,21.6,22.2,22.9,23.6,24.3,25.1,26,26.9,27.9,29,0,0.3,0.6,0.9,1.1,1.4,1.6,1.9,2.1,2.4,2.6,2.8,3,3.3,3.5,3.7,3.9,4.1,4.2,4.4,4.6,4.8,5,5.2,5.3,5.5,5.7,5.8,6,6.2,6.3,6.5,6.6,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8.1,8.2,8.4,8.5,8.7,8.9,9,9.2,9.4,9.5,9.7,9.9,10,10.2,10.4,10.6,10.8,10.9,11.1,11.3,11.5,11.7,11.9,12.2,12.4,12.6,12.8,13.1,13.3,13.5,13.8,14.1,14.3,14.6,14.9,15.2,15.5,15.8,16.2,16.5,16.9,17.3,17.7,18.1,18.5,19,19.4,19.9,20.5,21,21.6,22.2,22.9,23.6,24.3,25.2,26,26.9,27.9,29,0,0.3,0.6,0.9,1.1,1.4,1.6,1.9,2.1,2.4,2.6,2.8,3,3.3,3.5,3.7,3.9,4.1,4.2,4.4,4.6,4.8,5,5.2,5.3,5.5,5.7,5.8,6,6.2,6.3,6.5,6.6,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8.1,8.2,8.4,8.5,8.7,8.9,9,9.2,9.4,9.5,9.7,9.9,10,10.2,10.4,10.6,10.8,10.9,11.1,11.3,11.5,11.7,11.9,12.2,12.4,12.6,12.8,13.1,13.3,13.5,13.8,14.1,14.3,14.6,14.9,15.2,15.5,15.8,16.2,16.5,16.9,17.3,17.7,18.1,18.5,19,19.4,19.9,20.5,21,21.6,22.2,22.9,23.6,24.4,25.2,26,26.9,27.9,29,0,0.3,0.6,0.9,1.1,1.4,1.6,1.9,2.1,2.4,2.6,2.8,3,3.3,3.5,3.7,3.9,4.1,4.2,4.4,4.6,4.8,5,5.2,5.3,5.5,5.7,5.8,6,6.2,6.3,6.5,6.6,6.8,7,7.1,7.3,7.4,7.6,7.8,7.9,8.1,8.2,8.4,8.5,8.7,8.9,9,9.2,9.4,9.5,9.7,9.9,10,10.2,10.4,10.6,10.8,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.4,12.6,12.8,13,13.3,13.5,13.8,14.1,14.3,14.6,14.9,15.2,15.5,15.8,16.2,16.5,16.9,17.3,17.6,18.1,18.5,18.9,19.4,19.9,20.5,21,21.6,22.2,22.9,23.6,24.4,25.2,26,27,28,29,0,0.3,0.6,0.9,1.1,1.4,1.6,1.9,2.1,2.4,2.6,2.8,3,3.2,3.5,3.7,3.9,4.1,4.2,4.4,4.6,4.8,5,5.2,5.3,5.5,5.7,5.8,6,6.2,6.3,6.5,6.6,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8.1,8.2,8.4,8.5,8.7,8.9,9,9.2,9.4,9.5,9.7,9.9,10,10.2,10.4,10.6,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.4,12.6,12.8,13,13.3,13.5,13.8,14,14.3,14.6,14.9,15.2,15.5,15.8,16.2,16.5,16.9,17.2,17.6,18.1,18.5,18.9,19.4,19.9,20.4,21,21.6,22.2,22.9,23.6,24.4,25.2,26,27,28,29,0,0.3,0.6,0.9,1.1,1.4,1.6,1.9,2.1,2.4,2.6,2.8,3,3.2,3.5,3.7,3.9,4.1,4.2,4.4,4.6,4.8,5,5.2,5.3,5.5,5.7,5.8,6,6.2,6.3,6.5,6.6,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8.1,8.2,8.4,8.5,8.7,8.9,9,9.2,9.3,9.5,9.7,9.9,10,10.2,10.4,10.6,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.3,12.6,12.8,13,13.3,13.5,13.8,14,14.3,14.6,14.9,15.2,15.5,15.8,16.1,16.5,16.8,17.2,17.6,18,18.5,18.9,19.4,19.9,20.4,21,21.6,22.2,22.9,23.6,24.3,25.2,26,27,28,29.1,0,0.3,0.6,0.8,1.1,1.4,1.6,1.9,2.1,2.4,2.6,2.8,3,3.2,3.5,3.7,3.9,4.1,4.2,4.4,4.6,4.8,5,5.2,5.3,5.5,5.7,5.8,6,6.2,6.3,6.5,6.6,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8.1,8.2,8.4,8.5,8.7,8.9,9,9.2,9.3,9.5,9.7,9.8,10,10.2,10.4,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.3,12.6,12.8,13,13.3,13.5,13.8,14,14.3,14.6,14.9,15.2,15.5,15.8,16.1,16.5,16.8,17.2,17.6,18,18.5,18.9,19.4,19.9,20.4,21,21.6,22.2,22.9,23.6,24.3,25.1,26,27,28,29.1,0,0.3,0.6,0.8,1.1,1.4,1.6,1.9,2.1,2.4,2.6,2.8,3,3.2,3.4,3.7,3.9,4,4.2,4.4,4.6,4.8,5,5.1,5.3,5.5,5.7,5.8,6,6.2,6.3,6.5,6.6,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8.1,8.2,8.4,8.5,8.7,8.8,9,9.2,9.3,9.5,9.7,9.8,10,10.2,10.4,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.3,12.5,12.8,13,13.2,13.5,13.7,14,14.3,14.5,14.8,15.1,15.4,15.8,16.1,16.5,16.8,17.2,17.6,18,18.4,18.9,19.4,19.9,20.4,21,21.6,22.2,22.9,23.6,24.3,25.1,26,27,28,29.1,0,0.3,0.6,0.8,1.1,1.4,1.6,1.9,2.1,2.3,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.8,5,5.1,5.3,5.5,5.7,5.8,6,6.2,6.3,6.5,6.6,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8,8.2,8.4,8.5,8.7,8.8,9,9.2,9.3,9.5,9.7,9.8,10,10.2,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.3,12.5,12.7,13,13.2,13.5,13.7,14,14.3,14.5,14.8,15.1,15.4,15.7,16.1,16.4,16.8,17.2,17.6,18,18.4,18.9,19.3,19.8,20.4,20.9,21.5,22.2,22.8,23.5,24.3,25.1,26,26.9,28,29.1,0,0.3,0.6,0.8,1.1,1.4,1.6,1.9,2.1,2.3,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.8,5,5.1,5.3,5.5,5.7,5.8,6,6.1,6.3,6.5,6.6,6.8,6.9,7.1,7.3,7.4,7.6,7.7,7.9,8,8.2,8.4,8.5,8.7,8.8,9,9.2,9.3,9.5,9.6,9.8,10,10.2,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.3,12.5,12.7,13,13.2,13.4,13.7,14,14.2,14.5,14.8,15.1,15.4,15.7,16.1,16.4,16.8,17.1,17.5,18,18.4,18.8,19.3,19.8,20.4,20.9,21.5,22.1,22.8,23.5,24.3,25.1,26,26.9,28,29.1,0,0.3,0.6,0.8,1.1,1.4,1.6,1.9,2.1,2.3,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.8,5,5.1,5.3,5.5,5.6,5.8,6,6.1,6.3,6.5,6.6,6.8,6.9,7.1,7.3,7.4,7.6,7.7,7.9,8,8.2,8.3,8.5,8.7,8.8,9,9.1,9.3,9.5,9.6,9.8,10,10.1,10.3,10.5,10.7,10.9,11.1,11.2,11.4,11.6,11.8,12.1,12.3,12.5,12.7,12.9,13.2,13.4,13.7,13.9,14.2,14.5,14.8,15.1,15.4,15.7,16,16.4,16.7,17.1,17.5,17.9,18.4,18.8,19.3,19.8,20.3,20.9,21.5,22.1,22.8,23.5,24.3,25.1,26,26.9,27.9,29.1,0,0.3,0.6,0.8,1.1,1.4,1.6,1.9,2.1,2.3,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.8,5,5.1,5.3,5.5,5.6,5.8,6,6.1,6.3,6.5,6.6,6.8,6.9,7.1,7.2,7.4,7.6,7.7,7.9,8,8.2,8.3,8.5,8.6,8.8,9,9.1,9.3,9.5,9.6,9.8,10,10.1,10.3,10.5,10.7,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.5,12.7,12.9,13.2,13.4,13.7,13.9,14.2,14.5,14.7,15,15.4,15.7,16,16.4,16.7,17.1,17.5,17.9,18.3,18.8,19.3,19.8,20.3,20.9,21.5,22.1,22.8,23.5,24.2,25.1,26,26.9,27.9,29,0,0.3,0.6,0.8,1.1,1.4,1.6,1.9,2.1,2.3,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.8,4.9,5.1,5.3,5.5,5.6,5.8,6,6.1,6.3,6.4,6.6,6.8,6.9,7.1,7.2,7.4,7.5,7.7,7.9,8,8.2,8.3,8.5,8.6,8.8,9,9.1,9.3,9.4,9.6,9.8,9.9,10.1,10.3,10.5,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.4,12.7,12.9,13.1,13.4,13.6,13.9,14.2,14.4,14.7,15,15.3,15.6,16,16.3,16.7,17.1,17.5,17.9,18.3,18.8,19.2,19.7,20.3,20.8,21.4,22.1,22.7,23.5,24.2,25,25.9,26.9,27.9,29,0,0.3,0.6,0.8,1.1,1.3,1.6,1.8,2.1,2.3,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.8,4.9,5.1,5.3,5.5,5.6,5.8,6,6.1,6.3,6.4,6.6,6.8,6.9,7.1,7.2,7.4,7.5,7.7,7.8,8,8.2,8.3,8.5,8.6,8.8,8.9,9.1,9.3,9.4,9.6,9.8,9.9,10.1,10.3,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.4,12.6,12.9,13.1,13.4,13.6,13.9,14.1,14.4,14.7,15,15.3,15.6,16,16.3,16.7,17,17.4,17.8,18.3,18.7,19.2,19.7,20.2,20.8,21.4,22,22.7,23.4,24.2,25,25.9,26.9,27.9,29,0,0.3,0.6,0.8,1.1,1.3,1.6,1.8,2.1,2.3,2.5,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.8,4.9,5.1,5.3,5.4,5.6,5.8,5.9,6.1,6.3,6.4,6.6,6.7,6.9,7.1,7.2,7.4,7.5,7.7,7.8,8,8.1,8.3,8.4,8.6,8.8,8.9,9.1,9.2,9.4,9.6,9.7,9.9,10.1,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.4,12.6,12.8,13.1,13.3,13.6,13.8,14.1,14.4,14.7,15,15.3,15.6,15.9,16.3,16.6,17,17.4,17.8,18.2,18.7,19.2,19.7,20.2,20.8,21.4,22,22.7,23.4,24.2,25,25.9,26.8,27.9,29,0,0.3,0.5,0.8,1.1,1.3,1.6,1.8,2.1,2.3,2.5,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.7,4.9,5.1,5.3,5.4,5.6,5.8,5.9,6.1,6.3,6.4,6.6,6.7,6.9,7,7.2,7.4,7.5,7.7,7.8,8,8.1,8.3,8.4,8.6,8.7,8.9,9.1,9.2,9.4,9.5,9.7,9.9,10.1,10.2,10.4,10.6,10.8,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.4,12.6,12.8,13.1,13.3,13.5,13.8,14.1,14.3,14.6,14.9,15.2,15.6,15.9,16.2,16.6,17,17.4,17.8,18.2,18.7,19.1,19.6,20.2,20.7,21.3,22,22.6,23.4,24.1,25,25.9,26.8,27.9,29,0,0.3,0.5,0.8,1.1,1.3,1.6,1.8,2.1,2.3,2.5,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.7,4.9,5.1,5.3,5.4,5.6,5.8,5.9,6.1,6.2,6.4,6.6,6.7,6.9,7,7.2,7.3,7.5,7.6,7.8,7.9,8.1,8.3,8.4,8.6,8.7,8.9,9,9.2,9.4,9.5,9.7,9.9,10,10.2,10.4,10.6,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.3,12.6,12.8,13,13.3,13.5,13.8,14,14.3,14.6,14.9,15.2,15.5,15.8,16.2,16.6,16.9,17.3,17.7,18.2,18.6,19.1,19.6,20.1,20.7,21.3,21.9,22.6,23.3,24.1,24.9,25.8,26.8,27.8,29,0,0.3,0.5,0.8,1.1,1.3,1.6,1.8,2.1,2.3,2.5,2.7,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.5,4.7,4.9,5.1,5.2,5.4,5.6,5.7,5.9,6.1,6.2,6.4,6.5,6.7,6.9,7,7.2,7.3,7.5,7.6,7.8,7.9,8.1,8.2,8.4,8.5,8.7,8.9,9,9.2,9.3,9.5,9.7,9.8,10,10.2,10.4,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.3,12.5,12.8,13,13.2,13.5,13.7,14,14.3,14.6,14.9,15.2,15.5,15.8,16.2,16.5,16.9,17.3,17.7,18.1,18.6,19.1,19.6,20.1,20.7,21.3,21.9,22.6,23.3,24.1,24.9,25.8,26.8,27.8,28.9,0,0.3,0.5,0.8,1.1,1.3,1.6,1.8,2.1,2.3,2.5,2.7,3,3.2,3.4,3.6,3.8,4,4.2,4.3,4.5,4.7,4.9,5.1,5.2,5.4,5.6,5.7,5.9,6.1,6.2,6.4,6.5,6.7,6.8,7,7.2,7.3,7.5,7.6,7.8,7.9,8.1,8.2,8.4,8.5,8.7,8.8,9,9.2,9.3,9.5,9.6,9.8,10,10.2,10.3,10.5,10.7,10.9,11.1,11.3,11.4,11.6,11.9,12.1,12.3,12.5,12.7,13,13.2,13.4,13.7,14,14.2,14.5,14.8,15.1,15.4,15.8,16.1,16.5,16.9,17.2,17.7,18.1,18.5,19,19.5,20.1,20.6,21.2,21.9,22.5,23.3,24,24.9,25.8,26.7,27.8,28.9,0,0.3,0.5,0.8,1.1,1.3,1.6,1.8,2,2.3,2.5,2.7,2.9,3.2,3.4,3.6,3.8,4,4.1,4.3,4.5,4.7,4.9,5.1,5.2,5.4,5.6,5.7,5.9,6,6.2,6.4,6.5,6.7,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8,8.2,8.4,8.5,8.7,8.8,9,9.1,9.3,9.5,9.6,9.8,10,10.1,10.3,10.5,10.7,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.5,12.7,12.9,13.2,13.4,13.7,13.9,14.2,14.5,14.8,15.1,15.4,15.7,16.1,16.4,16.8,17.2,17.6,18,18.5,19,19.5,20,20.6,21.2,21.8,22.5,23.2,24,24.8,25.7,26.7,27.7,28.9,0,0.3,0.5,0.8,1.1,1.3,1.6,1.8,2,2.3,2.5,2.7,2.9,3.1,3.4,3.6,3.8,3.9,4.1,4.3,4.5,4.7,4.9,5,5.2,5.4,5.5,5.7,5.9,6,6.2,6.3,6.5,6.7,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8,8.2,8.3,8.5,8.6,8.8,9,9.1,9.3,9.4,9.6,9.8,9.9,10.1,10.3,10.5,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.4,12.7,12.9,13.1,13.4,13.6,13.9,14.2,14.5,14.7,15,15.4,15.7,16,16.4,16.8,17.2,17.6,18,18.5,18.9,19.4,20,20.5,21.1,21.8,22.4,23.2,23.9,24.8,25.7,26.6,27.7,28.8,0,0.3,0.5,0.8,1,1.3,1.5,1.8,2,2.3,2.5,2.7,2.9,3.1,3.3,3.5,3.7,3.9,4.1,4.3,4.5,4.7,4.8,5,5.2,5.4,5.5,5.7,5.9,6,6.2,6.3,6.5,6.6,6.8,6.9,7.1,7.2,7.4,7.6,7.7,7.9,8,8.2,8.3,8.5,8.6,8.8,8.9,9.1,9.2,9.4,9.6,9.7,9.9,10.1,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.4,12.6,12.9,13.1,13.3,13.6,13.9,14.1,14.4,14.7,15,15.3,15.7,16,16.4,16.7,17.1,17.5,18,18.4,18.9,19.4,19.9,20.5,21.1,21.7,22.4,23.1,23.9,24.7,25.6,26.6,27.7,28.8,0,0.3,0.5,0.8,1,1.3,1.5,1.8,2,2.2,2.5,2.7,2.9,3.1,3.3,3.5,3.7,3.9,4.1,4.3,4.5,4.7,4.8,5,5.2,5.3,5.5,5.7,5.8,6,6.2,6.3,6.5,6.6,6.8,6.9,7.1,7.2,7.4,7.5,7.7,7.8,8,8.1,8.3,8.4,8.6,8.7,8.9,9.1,9.2,9.4,9.5,9.7,9.9,10,10.2,10.4,10.6,10.8,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.4,12.6,12.8,13.1,13.3,13.6,13.8,14.1,14.4,14.7,15,15.3,15.6,15.9,16.3,16.7,17.1,17.5,17.9,18.4,18.8,19.3,19.9,20.4,21,21.7,22.3,23.1,23.8,24.7,25.6,26.6,27.6,28.8,0,0.3,0.5,0.8,1,1.3,1.5,1.8,2,2.2,2.5,2.7,2.9,3.1,3.3,3.5,3.7,3.9,4.1,4.3,4.5,4.6,4.8,5,5.2,5.3,5.5,5.7,5.8,6,6.1,6.3,6.4,6.6,6.8,6.9,7.1,7.2,7.4,7.5,7.7,7.8,8,8.1,8.3,8.4,8.6,8.7,8.9,9,9.2,9.4,9.5,9.7,9.8,10,10.2,10.4,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.3,12.5,12.8,13,13.3,13.5,13.8,14,14.3,14.6,14.9,15.2,15.6,15.9,16.3,16.6,17,17.4,17.9,18.3,18.8,19.3,19.8,20.4,21,21.6,22.3,23,23.8,24.6,25.5,26.5,27.6,28.7,0,0.3,0.5,0.8,1,1.3,1.5,1.8,2,2.2,2.5,2.7,2.9,3.1,3.3,3.5,3.7,3.9,4.1,4.3,4.4,4.6,4.8,5,5.1,5.3,5.5,5.6,5.8,6,6.1,6.3,6.4,6.6,6.7,6.9,7,7.2,7.3,7.5,7.6,7.8,7.9,8.1,8.2,8.4,8.5,8.7,8.8,9,9.2,9.3,9.5,9.6,9.8,10,10.2,10.3,10.5,10.7,10.9,11.1,11.2,11.4,11.6,11.9,12.1,12.3,12.5,12.7,13,13.2,13.5,13.7,14,14.3,14.6,14.9,15.2,15.5,15.9,16.2,16.6,17,17.4,17.8,18.3,18.7,19.2,19.8,20.3,20.9,21.6,22.2,23,23.7,24.6,25.5,26.5,27.5,28.7,0,0.3,0.5,0.8,1,1.3,1.5,1.8,2,2.2,2.4,2.7,2.9,3.1,3.3,3.5,3.7,3.9,4.1,4.3,4.4,4.6,4.8,5,5.1,5.3,5.5,5.6,5.8,5.9,6.1,6.3,6.4,6.6,6.7,6.9,7,7.2,7.3,7.5,7.6,7.8,7.9,8.1,8.2,8.4,8.5,8.7,8.8,9,9.1,9.3,9.5,9.6,9.8,9.9,10.1,10.3,10.5,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.5,12.7,12.9,13.2,13.4,13.7,14,14.2,14.5,14.8,15.1,15.5,15.8,16.2,16.5,16.9,17.3,17.8,18.2,18.7,19.2,19.7,20.3,20.9,21.5,22.2,22.9,23.7,24.5,25.4,26.4,27.5,28.6,0,0.3,0.5,0.8,1,1.3,1.5,1.7,2,2.2,2.4,2.6,2.9,3.1,3.3,3.5,3.7,3.9,4.1,4.2,4.4,4.6,4.8,4.9,5.1,5.3,5.4,5.6,5.8,5.9,6.1,6.2,6.4,6.5,6.7,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8,8.2,8.3,8.5,8.6,8.8,8.9,9.1,9.3,9.4,9.6,9.7,9.9,10.1,10.3,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.4,12.7,12.9,13.1,13.4,13.6,13.9,14.2,14.5,14.8,15.1,15.4,15.8,16.1,16.5,16.9,17.3,17.7,18.2,18.6,19.1,19.7,20.2,20.8,21.5,22.1,22.9,23.6,24.5,25.4,26.4,27.4,28.6,0,0.3,0.5,0.8,1,1.3,1.5,1.7,2,2.2,2.4,2.6,2.8,3.1,3.3,3.5,3.7,3.8,4,4.2,4.4,4.6,4.8,4.9,5.1,5.3,5.4,5.6,5.7,5.9,6.1,6.2,6.4,6.5,6.7,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8,8.2,8.3,8.5,8.6,8.8,8.9,9.1,9.2,9.4,9.5,9.7,9.9,10,10.2,10.4,10.6,10.8,10.9,11.1,11.3,11.5,11.7,11.9,12.2,12.4,12.6,12.8,13.1,13.3,13.6,13.9,14.1,14.4,14.7,15,15.4,15.7,16.1,16.4,16.8,17.2,17.7,18.1,18.6,19.1,19.6,20.2,20.8,21.4,22.1,22.8,23.6,24.4,25.3,26.3,27.4,28.5,0,0.3,0.5,0.8,1,1.2,1.5,1.7,2,2.2,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.6,4.7,4.9,5.1,5.2,5.4,5.6,5.7,5.9,6,6.2,6.3,6.5,6.6,6.8,6.9,7.1,7.2,7.4,7.5,7.7,7.8,8,8.1,8.3,8.4,8.6,8.7,8.9,9,9.2,9.4,9.5,9.7,9.8,10,10.2,10.4,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.3,12.6,12.8,13,13.3,13.5,13.8,14.1,14.4,14.7,15,15.3,15.7,16,16.4,16.8,17.2,17.6,18,18.5,19,19.6,20.1,20.7,21.3,22,22.7,23.5,24.4,25.3,26.3,27.3,28.5,0,0.3,0.5,0.8,1,1.2,1.5,1.7,1.9,2.2,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.4,4.5,4.7,4.9,5.1,5.2,5.4,5.5,5.7,5.9,6,6.2,6.3,6.5,6.6,6.8,6.9,7.1,7.2,7.4,7.5,7.6,7.8,7.9,8.1,8.2,8.4,8.5,8.7,8.8,9,9.2,9.3,9.5,9.6,9.8,10,10.1,10.3,10.5,10.7,10.9,11.1,11.2,11.4,11.6,11.9,12.1,12.3,12.5,12.8,13,13.2,13.5,13.8,14,14.3,14.6,14.9,15.3,15.6,16,16.3,16.7,17.1,17.5,18,18.5,19,19.5,20.1,20.6,21.3,22,22.7,23.5,24.3,25.2,26.2,27.3,28.4,0,0.2,0.5,0.7,1,1.2,1.5,1.7,1.9,2.2,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.2,4.3,4.5,4.7,4.9,5,5.2,5.4,5.5,5.7,5.8,6,6.1,6.3,6.4,6.6,6.7,6.9,7,7.2,7.3,7.5,7.6,7.8,7.9,8.1,8.2,8.4,8.5,8.7,8.8,9,9.1,9.3,9.4,9.6,9.8,9.9,10.1,10.3,10.5,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.5,12.7,12.9,13.2,13.5,13.7,14,14.3,14.6,14.9,15.2,15.5,15.9,16.3,16.7,17.1,17.5,17.9,18.4,18.9,19.4,20,20.6,21.2,21.9,22.6,23.4,24.2,25.2,26.1,27.2,28.4,0,0.2,0.5,0.7,1,1.2,1.5,1.7,1.9,2.1,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.1,4.3,4.5,4.7,4.8,5,5.2,5.3,5.5,5.7,5.8,6,6.1,6.3,6.4,6.6,6.7,6.9,7,7.2,7.3,7.4,7.6,7.7,7.9,8,8.2,8.3,8.5,8.6,8.8,8.9,9.1,9.2,9.4,9.6,9.7,9.9,10.1,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.4,12.7,12.9,13.1,13.4,13.7,13.9,14.2,14.5,14.8,15.2,15.5,15.8,16.2,16.6,17,17.4,17.9,18.3,18.8,19.4,19.9,20.5,21.2,21.8,22.6,23.3,24.2,25.1,26.1,27.1,28.3,0,0.2,0.5,0.7,1,1.2,1.5,1.7,1.9,2.1,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,3.9,4.1,4.3,4.5,4.7,4.8,5,5.2,5.3,5.5,5.6,5.8,5.9,6.1,6.2,6.4,6.5,6.7,6.8,7,7.1,7.3,7.4,7.6,7.7,7.9,8,8.1,8.3,8.4,8.6,8.7,8.9,9.1,9.2,9.4,9.5,9.7,9.9,10,10.2,10.4,10.6,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.2,12.4,12.6,12.8,13.1,13.4,13.6,13.9,14.2,14.5,14.8,15.1,15.4,15.8,16.2,16.5,16.9,17.4,17.8,18.3,18.8,19.3,19.9,20.5,21.1,21.8,22.5,23.3,24.1,25,26,27.1,28.3,0,0.2,0.5,0.7,1,1.2,1.4,1.7,1.9,2.1,2.3,2.6,2.8,3,3.2,3.4,3.6,3.7,3.9,4.1,4.3,4.5,4.6,4.8,5,5.1,5.3,5.4,5.6,5.8,5.9,6.1,6.2,6.4,6.5,6.7,6.8,6.9,7.1,7.2,7.4,7.5,7.7,7.8,8,8.1,8.3,8.4,8.6,8.7,8.9,9,9.2,9.3,9.5,9.7,9.8,10,10.2,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.3,12.6,12.8,13,13.3,13.6,13.8,14.1,14.4,14.7,15,15.4,15.7,16.1,16.5,16.9,17.3,17.7,18.2,18.7,19.2,19.8,20.4,21,21.7,22.4,23.2,24.1,25,26,27,28.2,0,0.2,0.5,0.7,1,1.2,1.4,1.7,1.9,2.1,2.3,2.5,2.7,3,3.1,3.3,3.5,3.7,3.9,4.1,4.3,4.4,4.6,4.8,4.9,5.1,5.3,5.4,5.6,5.7,5.9,6,6.2,6.3,6.5,6.6,6.8,6.9,7.1,7.2,7.4,7.5,7.6,7.8,7.9,8.1,8.2,8.4,8.5,8.7,8.8,9,9.1,9.3,9.5,9.6,9.8,9.9,10.1,10.3,10.5,10.7,10.8,11,11.2,11.4,11.6,11.8,12.1,12.3,12.5,12.7,13,13.2,13.5,13.8,14.1,14.4,14.7,15,15.3,15.7,16,16.4,16.8,17.2,17.7,18.2,18.7,19.2,19.7,20.3,21,21.6,22.4,23.1,24,24.9,25.9,27,28.1,0,0.2,0.5,0.7,1,1.2,1.4,1.6,1.9,2.1,2.3,2.5,2.7,2.9,3.1,3.3,3.5,3.7,3.9,4.1,4.2,4.4,4.6,4.8,4.9,5.1,5.2,5.4,5.6,5.7,5.9,6,6.2,6.3,6.5,6.6,6.7,6.9,7,7.2,7.3,7.5,7.6,7.8,7.9,8,8.2,8.3,8.5,8.6,8.8,8.9,9.1,9.3,9.4,9.6,9.7,9.9,10.1,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.5,12.7,12.9,13.2,13.5,13.7,14,14.3,14.6,14.9,15.3,15.6,16,16.4,16.8,17.2,17.6,18.1,18.6,19.1,19.7,20.3,20.9,21.6,22.3,23.1,23.9,24.8,25.8,26.9,28.1,0,0.2,0.5,0.7,0.9,1.2,1.4,1.6,1.9,2.1,2.3,2.5,2.7,2.9,3.1,3.3,3.5,3.7,3.9,4,4.2,4.4,4.6,4.7,4.9,5.1,5.2,5.4,5.5,5.7,5.8,6,6.1,6.3,6.4,6.6,6.7,6.9,7,7.1,7.3,7.4,7.6,7.7,7.9,8,8.2,8.3,8.4,8.6,8.7,8.9,9.1,9.2,9.4,9.5,9.7,9.9,10,10.2,10.4,10.6,10.7,10.9,11.1,11.3,11.5,11.7,12,12.2,12.4,12.6,12.9,13.1,13.4,13.7,14,14.2,14.6,14.9,15.2,15.5,15.9,16.3,16.7,17.1,17.6,18,18.5,19,19.6,20.2,20.8,21.5,22.2,23,23.8,24.8,25.7,26.8,28,0,0.2,0.5,0.7,0.9,1.2,1.4,1.6,1.8,2.1,2.3,2.5,2.7,2.9,3.1,3.3,3.5,3.7,3.8,4,4.2,4.4,4.5,4.7,4.9,5,5.2,5.3,5.5,5.7,5.8,6,6.1,6.2,6.4,6.5,6.7,6.8,7,7.1,7.3,7.4,7.5,7.7,7.8,8,8.1,8.3,8.4,8.6,8.7,8.9,9,9.2,9.3,9.5,9.7,9.8,10,10.2,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.4,12.6,12.8,13.1,13.3,13.6,13.9,14.2,14.5,14.8,15.1,15.5,15.8,16.2,16.6,17,17.5,18,18.5,19,19.5,20.1,20.8,21.4,22.2,22.9,23.8,24.7,25.7,26.8,27.9,0,0.2,0.5,0.7,0.9,1.2,1.4,1.6,1.8,2.1,2.3,2.5,2.7,2.9,3.1,3.3,3.5,3.6,3.8,4,4.2,4.3,4.5,4.7,4.8,5,5.2,5.3,5.5,5.6,5.8,5.9,6.1,6.2,6.4,6.5,6.6,6.8,6.9,7.1,7.2,7.4,7.5,7.6,7.8,7.9,8.1,8.2,8.4,8.5,8.7,8.8,9,9.1,9.3,9.4,9.6,9.8,9.9,10.1,10.3,10.5,10.7,10.8,11,11.2,11.4,11.6,11.9,12.1,12.3,12.5,12.8,13,13.3,13.6,13.8,14.1,14.4,14.7,15.1,15.4,15.8,16.2,16.6,17,17.4,17.9,18.4,18.9,19.5,20.1,20.7,21.4,22.1,22.9,23.7,24.6,25.6,26.7,27.9,0,0.2,0.5,0.7,0.9,1.2,1.4,1.6,1.8,2,2.3,2.5,2.7,2.9,3.1,3.3,3.4,3.6,3.8,4,4.2,4.3,4.5,4.7,4.8,5,5.1,5.3,5.4,5.6,5.7,5.9,6,6.2,6.3,6.5,6.6,6.8,6.9,7,7.2,7.3,7.5,7.6,7.8,7.9,8,8.2,8.3,8.5,8.6,8.8,8.9,9.1,9.2,9.4,9.6,9.7,9.9,10.1,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.2,12.5,12.7,13,13.2,13.5,13.8,14.1,14.4,14.7,15,15.4,15.7,16.1,16.5,16.9,17.4,17.8,18.3,18.8,19.4,20,20.6,21.3,22,22.8,23.6,24.5,25.5,26.6,27.8,0,0.2,0.5,0.7,0.9,1.1,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,4,4.1,4.3,4.5,4.6,4.8,5,5.1,5.3,5.4,5.6,5.7,5.9,6,6.2,6.3,6.4,6.6,6.7,6.9,7,7.1,7.3,7.4,7.6,7.7,7.9,8,8.1,8.3,8.4,8.6,8.7,8.9,9,9.2,9.4,9.5,9.7,9.9,10,10.2,10.4,10.6,10.7,10.9,11.1,11.3,11.5,11.7,12,12.2,12.4,12.7,12.9,13.2,13.4,13.7,14,14.3,14.6,15,15.3,15.7,16,16.4,16.8,17.3,17.8,18.2,18.8,19.3,19.9,20.5,21.2,21.9,22.7,23.6,24.5,25.5,26.5,27.7,0,0.2,0.5,0.7,0.9,1.1,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3,3.2,3.4,3.6,3.8,3.9,4.1,4.3,4.4,4.6,4.8,4.9,5.1,5.2,5.4,5.5,5.7,5.8,6,6.1,6.3,6.4,6.5,6.7,6.8,7,7.1,7.3,7.4,7.5,7.7,7.8,8,8.1,8.3,8.4,8.5,8.7,8.8,9,9.2,9.3,9.5,9.6,9.8,10,10.1,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.4,12.6,12.9,13.1,13.4,13.7,13.9,14.2,14.6,14.9,15.2,15.6,16,16.4,16.8,17.2,17.7,18.2,18.7,19.2,19.8,20.5,21.1,21.9,22.6,23.5,24.4,25.4,26.5,27.6,0,0.2,0.4,0.7,0.9,1.1,1.3,1.6,1.8,2,2.2,2.4,2.6,2.8,3,3.2,3.4,3.6,3.7,3.9,4.1,4.3,4.4,4.6,4.7,4.9,5.1,5.2,5.4,5.5,5.7,5.8,5.9,6.1,6.2,6.4,6.5,6.7,6.8,6.9,7.1,7.2,7.4,7.5,7.6,7.8,7.9,8.1,8.2,8.4,8.5,8.7,8.8,9,9.1,9.3,9.4,9.6,9.8,9.9,10.1,10.3,10.5,10.6,10.8,11,11.2,11.4,11.6,11.9,12.1,12.3,12.5,12.8,13.1,13.3,13.6,13.9,14.2,14.5,14.8,15.2,15.5,15.9,16.3,16.7,17.1,17.6,18.1,18.6,19.2,19.8,20.4,21.1,21.8,22.6,23.4,24.3,25.3,26.4,27.6,0,0.2,0.4,0.7,0.9,1.1,1.3,1.6,1.8,2,2.2,2.4,2.6,2.8,3,3.2,3.4,3.5,3.7,3.9,4.1,4.2,4.4,4.6,4.7,4.9,5,5.2,5.3,5.5,5.6,5.8,5.9,6.1,6.2,6.3,6.5,6.6,6.8,6.9,7,7.2,7.3,7.5,7.6,7.7,7.9,8,8.2,8.3,8.5,8.6,8.8,8.9,9.1,9.2,9.4,9.5,9.7,9.9,10,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12,12.3,12.5,12.7,13,13.3,13.5,13.8,14.1,14.4,14.8,15.1,15.5,15.8,16.2,16.6,17.1,17.5,18,18.5,19.1,19.7,20.3,21,21.7,22.5,23.3,24.2,25.2,26.3,27.5,0,0.2,0.4,0.7,0.9,1.1,1.3,1.5,1.8,2,2.2,2.4,2.6,2.8,3,3.1,3.3,3.5,3.7,3.9,4,4.2,4.4,4.5,4.7,4.8,5,5.1,5.3,5.4,5.6,5.7,5.9,6,6.2,6.3,6.4,6.6,6.7,6.9,7,7.1,7.3,7.4,7.6,7.7,7.8,8,8.1,8.3,8.4,8.6,8.7,8.9,9,9.2,9.3,9.5,9.7,9.8,10,10.2,10.4,10.5,10.7,10.9,11.1,11.3,11.5,11.7,12,12.2,12.4,12.7,12.9,13.2,13.5,13.8,14.1,14.4,14.7,15,15.4,15.8,16.2,16.6,17,17.5,18,18.5,19,19.6,20.2,20.9,21.6,22.4,23.2,24.1,25.1,26.2,27.4,0,0.2,0.4,0.7,0.9,1.1,1.3,1.5,1.7,1.9,2.2,2.4,2.6,2.7,2.9,3.1,3.3,3.5,3.7,3.8,4,4.2,4.3,4.5,4.7,4.8,5,5.1,5.3,5.4,5.6,5.7,5.8,6,6.1,6.3,6.4,6.5,6.7,6.8,7,7.1,7.2,7.4,7.5,7.7,7.8,7.9,8.1,8.2,8.4,8.5,8.7,8.8,9,9.1,9.3,9.4,9.6,9.8,9.9,10.1,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.1,12.4,12.6,12.9,13.1,13.4,13.7,14,14.3,14.6,15,15.3,15.7,16.1,16.5,16.9,17.4,17.9,18.4,18.9,19.5,20.2,20.8,21.5,22.3,23.2,24.1,25.1,26.1,27.3,0,0.2,0.4,0.6,0.9,1.1,1.3,1.5,1.7,1.9,2.1,2.3,2.5,2.7,2.9,3.1,3.3,3.5,3.6,3.8,4,4.1,4.3,4.5,4.6,4.8,4.9,5.1,5.2,5.4,5.5,5.7,5.8,6,6.1,6.2,6.4,6.5,6.6,6.8,6.9,7.1,7.2,7.3,7.5,7.6,7.8,7.9,8,8.2,8.3,8.5,8.6,8.8,8.9,9.1,9.2,9.4,9.6,9.7,9.9,10.1,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12.1,12.3,12.6,12.8,13.1,13.3,13.6,13.9,14.2,14.6,14.9,15.3,15.6,16,16.4,16.9,17.3,17.8,18.3,18.9,19.5,20.1,20.7,21.5,22.2,23.1,24,25,26.1,27.2,0,0.2,0.4,0.6,0.9,1.1,1.3,1.5,1.7,1.9,2.1,2.3,2.5,2.7,2.9,3.1,3.3,3.4,3.6,3.8,4,4.1,4.3,4.4,4.6,4.8,4.9,5.1,5.2,5.3,5.5,5.6,5.8,5.9,6.1,6.2,6.3,6.5,6.6,6.7,6.9,7,7.2,7.3,7.4,7.6,7.7,7.9,8,8.1,8.3,8.4,8.6,8.7,8.9,9,9.2,9.3,9.5,9.7,9.8,10,10.2,10.4,10.6,10.8,10.9,11.1,11.4,11.6,11.8,12,12.3,12.5,12.7,13,13.3,13.6,13.9,14.2,14.5,14.8,15.2,15.6,15.9,16.4,16.8,17.2,17.7,18.2,18.8,19.4,20,20.7,21.4,22.2,23,23.9,24.9,26,27.2,0,0.2,0.4,0.6,0.9,1.1,1.3,1.5,1.7,1.9,2.1,2.3,2.5,2.7,2.9,3.1,3.2,3.4,3.6,3.8,3.9,4.1,4.3,4.4,4.6,4.7,4.9,5,5.2,5.3,5.5,5.6,5.7,5.9,6,6.2,6.3,6.4,6.6,6.7,6.8,7,7.1,7.3,7.4,7.5,7.7,7.8,8,8.1,8.2,8.4,8.5,8.7,8.8,9,9.1,9.3,9.5,9.6,9.8,10,10.1,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.7,12,12.2,12.4,12.7,12.9,13.2,13.5,13.8,14.1,14.4,14.8,15.1,15.5,15.9,16.3,16.7,17.2,17.6,18.2,18.7,19.3,19.9,20.6,21.3,22.1,22.9,23.8,24.8,25.9,27.1,0,0.2,0.4,0.6,0.8,1.1,1.3,1.5,1.7,1.9,2.1,2.3,2.5,2.7,2.8,3,3.2,3.4,3.6,3.7,3.9,4.1,4.2,4.4,4.5,4.7,4.8,5,5.1,5.3,5.4,5.6,5.7,5.8,6,6.1,6.3,6.4,6.5,6.7,6.8,6.9,7.1,7.2,7.4,7.5,7.6,7.8,7.9,8.1,8.2,8.3,8.5,8.6,8.8,8.9,9.1,9.3,9.4,9.6,9.7,9.9,10.1,10.3,10.5,10.6,10.8,11,11.2,11.5,11.7,11.9,12.1,12.4,12.6,12.9,13.2,13.4,13.7,14,14.4,14.7,15,15.4,15.8,16.2,16.6,17.1,17.6,18.1,18.6,19.2,19.8,20.5,21.2,22,22.8,23.7,24.7,25.8,27,0,0.2,0.4,0.6,0.8,1,1.3,1.5,1.7,1.9,2.1,2.3,2.5,2.6,2.8,3,3.2,3.4,3.5,3.7,3.9,4,4.2,4.4,4.5,4.7,4.8,5,5.1,5.2,5.4,5.5,5.7,5.8,5.9,6.1,6.2,6.4,6.5,6.6,6.8,6.9,7,7.2,7.3,7.4,7.6,7.7,7.9,8,8.1,8.3,8.4,8.6,8.7,8.9,9,9.2,9.4,9.5,9.7,9.9,10,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.8,12.1,12.3,12.6,12.8,13.1,13.4,13.7,14,14.3,14.6,15,15.3,15.7,16.1,16.6,17,17.5,18,18.5,19.1,19.7,20.4,21.1,21.9,22.7,23.6,24.6,25.7,26.9,0,0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3,3.2,3.3,3.5,3.7,3.8,4,4.2,4.3,4.5,4.6,4.8,4.9,5.1,5.2,5.4,5.5,5.6,5.8,5.9,6,6.2,6.3,6.5,6.6,6.7,6.9,7,7.1,7.3,7.4,7.5,7.7,7.8,8,8.1,8.2,8.4,8.5,8.7,8.8,9,9.1,9.3,9.5,9.6,9.8,10,10.2,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.8,12,12.2,12.5,12.8,13,13.3,13.6,13.9,14.2,14.5,14.9,15.3,15.6,16.1,16.5,16.9,17.4,17.9,18.5,19,19.7,20.3,21,21.8,22.6,23.6,24.5,25.6,26.8,0,0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3,3.1,3.3,3.5,3.6,3.8,4,4.1,4.3,4.4,4.6,4.7,4.9,5,5.2,5.3,5.5,5.6,5.7,5.9,6,6.1,6.3,6.4,6.6,6.7,6.8,7,7.1,7.2,7.4,7.5,7.6,7.8,7.9,8.1,8.2,8.3,8.5,8.6,8.8,8.9,9.1,9.3,9.4,9.6,9.8,9.9,10.1,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.7,11.9,12.2,12.4,12.7,13,13.2,13.5,13.8,14.1,14.5,14.8,15.2,15.6,16,16.4,16.9,17.3,17.8,18.4,19,19.6,20.2,21,21.7,22.6,23.5,24.4,25.5,26.7,0,0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,2.9,3.1,3.3,3.5,3.6,3.8,3.9,4.1,4.3,4.4,4.6,4.7,4.9,5,5.1,5.3,5.4,5.6,5.7,5.8,6,6.1,6.2,6.4,6.5,6.6,6.8,6.9,7,7.2,7.3,7.5,7.6,7.7,7.9,8,8.1,8.3,8.4,8.6,8.7,8.9,9,9.2,9.4,9.5,9.7,9.9,10,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.9,12.1,12.4,12.6,12.9,13.2,13.5,13.8,14.1,14.4,14.7,15.1,15.5,15.9,16.3,16.8,17.3,17.8,18.3,18.9,19.5,20.2,20.9,21.6,22.5,23.4,24.4,25.4,26.6,0,0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.7,2.9,3.1,3.3,3.4,3.6,3.8,3.9,4.1,4.2,4.4,4.5,4.7,4.8,5,5.1,5.2,5.4,5.5,5.7,5.8,5.9,6.1,6.2,6.3,6.5,6.6,6.7,6.9,7,7.1,7.3,7.4,7.5,7.7,7.8,8,8.1,8.2,8.4,8.5,8.7,8.8,9,9.2,9.3,9.5,9.6,9.8,10,10.2,10.4,10.5,10.7,10.9,11.2,11.4,11.6,11.8,12.1,12.3,12.6,12.8,13.1,13.4,13.7,14,14.3,14.7,15,15.4,15.8,16.2,16.7,17.2,17.7,18.2,18.8,19.4,20.1,20.8,21.5,22.4,23.3,24.3,25.3,26.5,0,0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.2,2.3,2.5,2.7,2.9,3.1,3.2,3.4,3.6,3.7,3.9,4,4.2,4.3,4.5,4.6,4.8,4.9,5.1,5.2,5.3,5.5,5.6,5.8,5.9,6,6.2,6.3,6.4,6.6,6.7,6.8,7,7.1,7.2,7.4,7.5,7.6,7.8,7.9,8.1,8.2,8.3,8.5,8.6,8.8,8.9,9.1,9.3,9.4,9.6,9.8,9.9,10.1,10.3,10.5,10.7,10.9,11.1,11.3,11.5,11.8,12,12.2,12.5,12.8,13,13.3,13.6,13.9,14.3,14.6,15,15.3,15.7,16.2,16.6,17.1,17.6,18.1,18.7,19.3,20,20.7,21.5,22.3,23.2,24.2,25.2,26.4,0,0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.8,2,2.1,2.3,2.5,2.7,2.9,3,3.2,3.4,3.5,3.7,3.9,4,4.2,4.3,4.5,4.6,4.8,4.9,5,5.2,5.3,5.4,5.6,5.7,5.9,6,6.1,6.3,6.4,6.5,6.6,6.8,6.9,7,7.2,7.3,7.4,7.6,7.7,7.9,8,8.1,8.3,8.4,8.6,8.7,8.9,9,9.2,9.4,9.5,9.7,9.9,10.1,10.2,10.4,10.6,10.8,11,11.2,11.5,11.7,11.9,12.2,12.4,12.7,13,13.2,13.5,13.9,14.2,14.5,14.9,15.3,15.7,16.1,16.5,17,17.5,18,18.6,19.2,19.9,20.6,21.4,22.2,23.1,24.1,25.2,26.3,0,0.2,0.4,0.6,0.8,1,1.2,1.4,1.6,1.7,1.9,2.1,2.3,2.5,2.7,2.8,3,3.2,3.3,3.5,3.7,3.8,4,4.1,4.3,4.4,4.6,4.7,4.9,5,5.1,5.3,5.4,5.5,5.7,5.8,5.9,6.1,6.2,6.3,6.5,6.6,6.7,6.9,7,7.1,7.3,7.4,7.5,7.7,7.8,8,8.1,8.2,8.4,8.5,8.7,8.8,9,9.1,9.3,9.5,9.6,9.8,10,10.2,10.4,10.6,10.8,11,11.2,11.4,11.6,11.9,12.1,12.4,12.6,12.9,13.2,13.5,13.8,14.1,14.5,14.8,15.2,15.6,16,16.5,16.9,17.4,18,18.5,19.1,19.8,20.5,21.3,22.1,23,24,25.1,26.2,0,0.2,0.4,0.6,0.8,1,1.2,1.3,1.5,1.7,1.9,2.1,2.3,2.5,2.6,2.8,3,3.1,3.3,3.5,3.6,3.8,3.9,4.1,4.2,4.4,4.5,4.7,4.8,5,5.1,5.2,5.4,5.5,5.6,5.8,5.9,6,6.2,6.3,6.4,6.6,6.7,6.8,7,7.1,7.2,7.4,7.5,7.6,7.8,7.9,8,8.2,8.3,8.5,8.6,8.8,8.9,9.1,9.3,9.4,9.6,9.8,9.9,10.1,10.3,10.5,10.7,10.9,11.1,11.3,11.6,11.8,12,12.3,12.5,12.8,13.1,13.4,13.7,14,14.4,14.7,15.1,15.5,15.9,16.4,16.8,17.3,17.9,18.4,19.1,19.7,20.4,21.2,22,22.9,23.9,25,26.1,0,0.2,0.4,0.6,0.8,0.9,1.1,1.3,1.5,1.7,1.9,2.1,2.3,2.4,2.6,2.8,3,3.1,3.3,3.4,3.6,3.8,3.9,4.1,4.2,4.4,4.5,4.6,4.8,4.9,5.1,5.2,5.3,5.5,5.6,5.7,5.9,6,6.1,6.3,6.4,6.5,6.6,6.8,6.9,7,7.2,7.3,7.4,7.6,7.7,7.9,8,8.1,8.3,8.4,8.6,8.7,8.9,9,9.2,9.4,9.5,9.7,9.9,10.1,10.2,10.4,10.6,10.8,11,11.3,11.5,11.7,12,12.2,12.5,12.7,13,13.3,13.6,14,14.3,14.7,15,15.4,15.8,16.3,16.8,17.3,17.8,18.4,19,19.6,20.3,21.1,21.9,22.8,23.8,24.9,26,0,0.2,0.4,0.6,0.7,0.9,1.1,1.3,1.5,1.7,1.9,2.1,2.2,2.4,2.6,2.8,2.9,3.1,3.3,3.4,3.6,3.7,3.9,4,4.2,4.3,4.5,4.6,4.7,4.9,5,5.2,5.3,5.4,5.6,5.7,5.8,6,6.1,6.2,6.3,6.5,6.6,6.7,6.9,7,7.1,7.3,7.4,7.5,7.7,7.8,7.9,8.1,8.2,8.4,8.5,8.7,8.8,9,9.1,9.3,9.5,9.6,9.8,10,10.2,10.4,10.6,10.8,11,11.2,11.4,11.7,11.9,12.1,12.4,12.7,13,13.3,13.6,13.9,14.2,14.6,15,15.3,15.8,16.2,16.7,17.2,17.7,18.3,18.9,19.5,20.2,21,21.8,22.7,23.7,24.8,25.9,0,0.2,0.4,0.5,0.7,0.9,1.1,1.3,1.5,1.7,1.9,2,2.2,2.4,2.6,2.7,2.9,3.1,3.2,3.4,3.5,3.7,3.8,4,4.1,4.3,4.4,4.6,4.7,4.8,5,5.1,5.3,5.4,5.5,5.6,5.8,5.9,6,6.2,6.3,6.4,6.6,6.7,6.8,6.9,7.1,7.2,7.3,7.5,7.6,7.8,7.9,8,8.2,8.3,8.5,8.6,8.8,8.9,9.1,9.2,9.4,9.6,9.8,9.9,10.1,10.3,10.5,10.7,10.9,11.1,11.4,11.6,11.8,12.1,12.3,12.6,12.9,13.2,13.5,13.8,14.1,14.5,14.9,15.3,15.7,16.1,16.6,17.1,17.6,18.2,18.8,19.4,20.1,20.9,21.7,22.6,23.6,24.7,25.8,0,0.2,0.4,0.5,0.7,0.9,1.1,1.3,1.5,1.7,1.8,2,2.2,2.4,2.5,2.7,2.9,3,3.2,3.4,3.5,3.7,3.8,4,4.1,4.3,4.4,4.5,4.7,4.8,4.9,5.1,5.2,5.3,5.5,5.6,5.7,5.9,6,6.1,6.3,6.4,6.5,6.6,6.8,6.9,7,7.2,7.3,7.4,7.6,7.7,7.8,8,8.1,8.3,8.4,8.6,8.7,8.9,9,9.2,9.4,9.5,9.7,9.9,10.1,10.3,10.4,10.6,10.9,11.1,11.3,11.5,11.8,12,12.3,12.5,12.8,13.1,13.4,13.7,14.1,14.4,14.8,15.2,15.6,16,16.5,17,17.5,18.1,18.7,19.3,20,20.8,21.6,22.5,23.5,24.6,25.7,0,0.2,0.4,0.5,0.7,0.9,1.1,1.3,1.5,1.6,1.8,2,2.2,2.3,2.5,2.7,2.8,3,3.2,3.3,3.5,3.6,3.8,3.9,4.1,4.2,4.4,4.5,4.6,4.8,4.9,5,5.2,5.3,5.4,5.6,5.7,5.8,5.9,6.1,6.2,6.3,6.5,6.6,6.7,6.8,7,7.1,7.2,7.4,7.5,7.6,7.8,7.9,8.1,8.2,8.4,8.5,8.7,8.8,9,9.1,9.3,9.5,9.6,9.8,10,10.2,10.4,10.6,10.8,11,11.2,11.5,11.7,11.9,12.2,12.5,12.7,13,13.3,13.7,14,14.3,14.7,15.1,15.5,16,16.4,16.9,17.4,18,18.6,19.3,19.9,20.7,21.5,22.4,23.4,24.5,25.6,0,0.2,0.3,0.5,0.7,0.9,1.1,1.3,1.4,1.6,1.8,2,2.1,2.3,2.5,2.6,2.8,3,3.1,3.3,3.4,3.6,3.7,3.9,4,4.2,4.3,4.5,4.6,4.7,4.9,5,5.1,5.3,5.4,5.5,5.6,5.8,5.9,6,6.2,6.3,6.4,6.5,6.7,6.8,6.9,7.1,7.2,7.3,7.5,7.6,7.7,7.9,8,8.2,8.3,8.5,8.6,8.8,8.9,9.1,9.2,9.4,9.6,9.8,9.9,10.1,10.3,10.5,10.7,10.9,11.2,11.4,11.6,11.9,12.1,12.4,12.7,13,13.3,13.6,13.9,14.3,14.6,15,15.4,15.9,16.3,16.8,17.4,17.9,18.5,19.2,19.9,20.6,21.4,22.3,23.3,24.4,25.5,0,0.2,0.3,0.5,0.7,0.9,1.1,1.2,1.4,1.6,1.8,1.9,2.1,2.3,2.5,2.6,2.8,2.9,3.1,3.3,3.4,3.6,3.7,3.9,4,4.1,4.3,4.4,4.6,4.7,4.8,5,5.1,5.2,5.3,5.5,5.6,5.7,5.9,6,6.1,6.2,6.4,6.5,6.6,6.8,6.9,7,7.1,7.3,7.4,7.5,7.7,7.8,8,8.1,8.2,8.4,8.5,8.7,8.9,9,9.2,9.3,9.5,9.7,9.9,10.1,10.3,10.5,10.7,10.9,11.1,11.3,11.6,11.8,12.1,12.3,12.6,12.9,13.2,13.5,13.8,14.2,14.6,14.9,15.4,15.8,16.2,16.7,17.3,17.8,18.4,19.1,19.8,20.5,21.3,22.2,23.2,24.3,25.4];

    var get = function(index) {
        return equilibriumMoistureContentTable[index];
    };

    return {
        get: function(index) {
            return get(index);
        }
    };
}();