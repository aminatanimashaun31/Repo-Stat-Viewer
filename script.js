

function getStats() {
    const username = document.getElementById("username").value;
    const statsDiv = document.getElementById("stats");
    const errorDiv = document.getElementById("error");
    const loadingDiv = document.getElementById("loading");

    // Clear previous data
    statsDiv.innerHTML = "";
    errorDiv.innerHTML = "";

    // Show loading indicator
    loadingDiv.style.display = "block";

    // Make API request
    fetch(`/github-stats/${username}`)
      .then(response => response.json())
      .then(data => {
        // Hide loading indicator
        loadingDiv.style.display = "none";

        if (data.error) {
          errorDiv.innerHTML = data.error;
        } else {
          statsDiv.innerHTML = `
            <p>Username: ${data.username}</p>
            <p>Repositories: ${data.repositories}</p>
            <p>Followers: ${data.followers}</p>
            <p>Following: ${data.following}</p>
          `;
        }
      })
      .catch(error => {
        // Hide loading indicator
        loadingDiv.style.display = "none";

        errorDiv.innerHTML = "An error occurred while fetching data.";
      });
  }
  
