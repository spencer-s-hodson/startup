function delete_checks(col_num) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (checkbox of checkboxes) {
      if (checkbox.checked) {
        checkbox.parentNode.textContent = "";
        // for (let i = 0; i < checkboxes.length; i++) {
        //     for (let j = 0; j < col_num+1; j++) {
        //         console.log(checkboxes[i][j])
        //     }
        // }
      } 
    }
  };

function add_assignment(col_num) {







}
  