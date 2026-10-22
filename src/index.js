buttonAddRandom.addEventListener("click", () => {
  // Evitar error si ya no quedan contactos
  if (contacts.length === 0) return;

  // 1. Obtener contacto aleatorio
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];

  // 2. Crear nueva fila
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // 3. Delete button (igual que Iteration 2)
  const deleteBtn = newRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    newRow.remove();
  });

  // 4. Like button (igual que Iteration 3)
  const likeBtn = newRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });

  // 5. Añadir fila a la tabla
  tableBody.appendChild(newRow);
});
