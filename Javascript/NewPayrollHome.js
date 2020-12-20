window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});
const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>"+
        "<th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    const innerHtml = `${headerHtml}

<tr>
    <td><img class="profile" src="../Assets/profile_4.jpg" width="30px" alt="profile4"></td>
    <td>Prajakta Bramhe</td>
    <td>Female</td>
    <td><div class="dept-label">HR</div>
    <div class="dept-label">Finance</div></td>
    <td>3000000</td>
    <td>1 Nov 2020</td>
    <td>
    <img id="1" onclick="remove(this)" alt="delete" src="../Assets/icons/delete.png">
    <img id="1" alt="create"onclick="update(this)" src="../Assets/icons/create.png">
</td>
</tr>`;
document.querySelector('#table-display').innerHTML = innerHtml;
}