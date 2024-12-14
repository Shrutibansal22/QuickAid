// Fetch user data from localStorage
let usernames = localStorage.getItem("usernames") ? localStorage.getItem("usernames").split(",") : [];
let passwords = localStorage.getItem("passwords") ? localStorage.getItem("passwords").split(",") : [];
let accountStatus = localStorage.getItem("accountStatus") ? localStorage.getItem("accountStatus").split(",") : [];
let isAdmin = localStorage.getItem("isAdmin") ? localStorage.getItem("isAdmin").split(",") : [];

// Get users and populate the table
function getUsers() {
    const tableBody = document.querySelector('#table-body');
    tableBody.innerHTML = ''; // Clear existing table rows
    
    usernames.forEach((username, i) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${username}</td>
            <td>
                <button class="btn btn-edit" onclick="editUser(${i})">Edit</button>
                <button class="btn btn-delete" onclick="deleteUser(${i})">Delete</button>
                <button class="btn btn-ban" onclick="banUser(${i})">${accountStatus[i] === '1' ? 'Ban' : 'Un-Ban'}</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Edit user details
function editUser(index) {
    const newUsername = prompt("Enter new username:", usernames[index]);
    if (newUsername) {
        usernames[index] = newUsername;
        localStorage.setItem("usernames", usernames.join(","));
        getUsers();
    }
}

// Delete user
function deleteUser(index) {
    usernames.splice(index, 1);
    passwords.splice(index, 1);
    accountStatus.splice(index, 1);
    isAdmin.splice(index, 1);
    localStorage.setItem("usernames", usernames.join(","));
    localStorage.setItem("passwords", passwords.join(","));
    localStorage.setItem("accountStatus", accountStatus.join(","));
    localStorage.setItem("isAdmin", isAdmin.join(","));
    getUsers();
}

// Ban or unban user
function banUser(index) {
    accountStatus[index] = accountStatus[index] === '1' ? '0' : '1';
    localStorage.setItem("accountStatus", accountStatus.join(","));
    getUsers();
}
