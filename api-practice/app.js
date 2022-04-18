// load api data
const loadData = async () => {
  const url = `https://jsonplaceholder.typicode.com/comments`;
  const res = await fetch(url);
  const data = await res.json();
  recivedData(data);
};
loadData();

const recivedData = (data) => {
  const commentsDiv = document.getElementById("comments");
  data.forEach((item) => {
    const { id, name, email, body } = item;
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
        <div class="comments-items" onclick="showDetailsView(${id})">
            <h4>ID : ${id}</h4>
            <h2>${name}</h2>
            <h5>${email}</h5>
            <p>${body.slice(0, 150)}</p>
            </div>
        `;
    commentsDiv.appendChild(createDiv);
  });
};


// comment show detsils
const showDetailsView = async (id) => {
    const url = await `https://jsonplaceholder.typicode.com/comments/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    viewDetails(data)
}
// view details
const viewDetails = (viewId)=> {
    const { id, name, email, body } = viewId;
    const showDetails = document.getElementById('details');
    showDetails.textContent = ' ';
    console.log(showDetails);
    const createView = document.createElement("div");
    createView.innerHTML = `
        <div class="comments-items" onclick="showDetails(${id})">
            <h4>ID : ${id}</h4>
            <h2>${name}</h2>
            <h5>${email}</h5>
            <p>${body.slice(0, 150)}</p>
            </div>
        `;
        showDetails.appendChild(createView);

}