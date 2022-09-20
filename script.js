async function my_post(event) {

    event.preventDefault();

    const restletid = document.getElementById('input-restletid').value;
    const token = document.getElementById('input-tokenid').value;
    const url = `https://driver01.azurewebsites.net`;

    let inputFile = document.querySelector('input[type="file"]');

    let formData = new FormData();
    formData.append('restletid', restletid);
    formData.append('token', token);
    formData.append('firstname', 'John');
    formData.append('lastname', 'Doe');
    formData.append('file', inputFile.files[0])

    fetch(url, {
        method: "POST",
        body: formData,
    })
    .then((response) => {
        console.log('response', response)   
    })
    .catch((error) => {
        console.log('error', error);
    });
}

var form = document.getElementById("form-test");
form.addEventListener("submit", my_post, true);
