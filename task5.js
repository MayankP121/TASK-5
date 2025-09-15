let notes = [];
function addNote() {
  const title = document.getElementById("noteTitle").value.trim();
  const content = document.getElementById("noteContent").value.trim();
  if (!title || !content) {
    alert("Please enter both title and content!");
    return;
  }
  notes.push({ title, content });
  document.getElementById("noteTitle").value = "";
  document.getElementById("noteContent").value = "";
  displayNotes();
}
function displayNotes() {
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";
  notes.forEach((note, index) => {
    const noteEl = document.createElement("div");
    noteEl.className = "note";
    noteEl.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
    `;
    container.appendChild(noteEl);
  });
}
function deleteNote(index) {
  notes.splice(index, 1);
  displayNotes();
}
