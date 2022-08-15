
function aboutLoad() {
    const mainContent = document.getElementById("mainContent");
    mainContent.innerHTML = "";

    const contentDiv = document.createElement("div");
    contentDiv.id = "contentDiv";
    mainContent.appendChild(contentDiv);
    contentDiv.innerText = "It's a restaurant. Come or don't."


};




export default aboutLoad;