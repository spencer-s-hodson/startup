let num_rows = 3



function delete_checks() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    for (checkbox of checkboxes) {
      if (checkbox.checked) {
        checkbox.parentNode.textContent = '';
      } 
    }
  };

function add_assignment() {

    trEl = document.createElement("tr")
    tdEl = document.createElement("td")
}
  