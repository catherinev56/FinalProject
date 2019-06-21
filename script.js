// The function toggleProjects goes between show and hide.
function toggleProjects(){
  var projectList = document.getElementById("projectList");
  if(projectList.style.display == 'none'){
      //These elements are showing that if the image is hiding, it should show. If it showing, then it should hide.
    projectList.style.display = 'block'
  }
  else{
    projectList.style.display = 'none'
  }
}

function toggleTech(){
  var techList = document.getElementById("techList");
  if(techList.style.display == 'none'){
    techList.style.display = 'block'
  }
  else{
    techList.style.display = 'none'
  }
}
