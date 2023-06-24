


    const func = () => {fetch("http://127.0.0.1:8080/getAllNotes")
        .then(response => response.json())
        .then(data =>{
            // const res = JSON.stringify(data, null, 2);
            const Elem = document.createElement('div');
            console.log(data)
            data.data.forEach(element => {
                const title = document.createElement('h1')
                title.textContent = element.title
                const text = document.createElement('p')
                text.textContent = element.text

                Elem.append(title, text)
            })
            // Elem.textContent = JSON.stringify(data, null, 2);
            document.body.appendChild(Elem);
        })
    }
        func()
    const id = 4
    fetch('http://127.0.0.1:8080/deleteNote', {
        method: 'delete',
        body: JSON.stringify({id: id}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(json)
        .then(data => {
            console.log('data', data);
        })
        .catch(error => {
            console.log('error', error);
        })

