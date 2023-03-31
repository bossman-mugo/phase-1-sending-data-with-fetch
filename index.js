function submitData(userName, userEmail){
    let formData = {
        name: userName,
        email: userEmail,
    };

    const configObj = {
        method:'POST',
        headers: {
            'Content-Type:' : 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(formData),
    };

    return fetch("http://localhost:3000/users", configObj)
            .then((response) => response.json())
            .then(object => {
                const id = object.id;
                document.body.innerHTML = `<p>${id}</p>`
            })
            .catch(error => {
                const errorMessage = document.createElement('span');
                errorMessage.textContent = "You have an error please check";
                document.body.appendChild(errorMessage);
              });
}
