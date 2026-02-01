const booksByGenre = {
  fiction: ["The Alchemist", "Harry Potter"],
  scifi: ["Dune", "The Time Machine"],
  romance: ["Pride and Prejudice", "Me Before You"]
};

function showBooks() {
  const genre = document.getElementById("genre").value;
  const bookSelect = document.getElementById("books");

  // clear previous books
  bookSelect.innerHTML = '<option value="">-- Select Book --</option>';

  if (genre === "") return;

  // add new books
  booksByGenre[genre].forEach(book => {
    const option = document.createElement("option");
    option.text = book;
    option.value = book;
    bookSelect.appendChild(option);
  });
}
function generateReceipt() {
   document.getElementById("box").style.opacity = "1";
      const issuedate = document.getElementById("issue-date").value;
    const roll = document.getElementById("roll-no").value;
    const genre = document.getElementById("genre").value;
    const book = document.getElementById("books").value;
    let issueid= Math.floor(100 + Math.random() * 1000);
    let duedate = new Date(issuedate);
    duedate.setDate(duedate.getDate() + 14);
    duedate = duedate.toISOString().split('T')[0];  

    document.getElementById("rIssue").innerText = issuedate;
    document.getElementById("rRoll").innerText = roll;
    document.getElementById("rGenre").innerText = genre;
    document.getElementById("rBook").innerText = book;
    document.getElementById("rDue").innerText = duedate;
    document.getElementById("issue-id").innerText = issueid;
    
  
   
  
}

function book(){
    
document.getElementById("msg").innerText = "Book issued successfully!";
document.getElementById("msg").style.color = "green";}







