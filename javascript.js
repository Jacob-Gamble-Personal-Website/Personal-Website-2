const alertMessages = {
    "about.html": "Please click on the Who Am I header to go back home.",
    "projects.html": "Please click on the My Projects header to go back home and click on the project images to be taken to the corresponding git repository.",
    "index.html": "Click on the social media icons to be redirected to the corresponding site!",
  }
  
  const currentPage = window.location.pathname.split("/").pop();
  
  if (alertMessages.hasOwnProperty(currentPage)) {
    alert(alertMessages[currentPage]);
  }