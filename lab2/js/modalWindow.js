// var flagModal = true

// document.addEventListener('DOMContentLoaded', function() {


//     const modal = new bootstrap.Modal(document.querySelector('#modal'));

//     //if (flagModal == true)  
//     //  modal.show();

  
//   });



var slider = new Slider("#ex14", {
    ticks: [0, 100, 200, 300, 400],
    ticks_positions: [0, 30, 70, 90, 100],
    ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
    ticks_snap_bounds: 30
});
