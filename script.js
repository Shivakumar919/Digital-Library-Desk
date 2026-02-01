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
   
  
}

function book(){
    
document.getElementById("msg").innerText = "Book issued successfully!";
document.getElementById("msg").style.color = "green";}






