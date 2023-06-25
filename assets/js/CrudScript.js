    // crud function read
    const getAllNotes = () => {
        fetch("http://127.0.0.1:8080/getAllNotes")
        .then(response => response.json())
        .then(data =>{
            const noteList = document.getElementById('notesList')
            // 
            if(data.data.length != 0){
                data.data.forEach(element => {

                    let note = document.createElement('div')
                    note.className = "note"

                    const title = document.createElement('h1')
                    title.className = "title"
                    title.textContent = element.title

                    const text = document.createElement('p')
                    text.className = "text"
                    text.textContent = element.text

                    // button crud
                    const buttonUpdate = document.createElement('button')
                    buttonUpdate.className = "btn update"
                    buttonUpdate.textContent = "Изменить"
                    buttonUpdate.addEventListener("click", () => {
                        openModal(element.id)
                    })


                    const buttonDelete = document.createElement('button')
                    buttonDelete.className = "btn delete"
                    buttonDelete.textContent = "Удалить"
                    buttonDelete.addEventListener("click", () => {
                        deleteNote(element.id)
                        location.reload()
                    })
                    
                    let buttons = document.createElement('div')
                    buttons.className = "buttons"
                    buttons.append(buttonUpdate, buttonDelete)
                    note.append(title, text, buttons)
                    noteList.append(note)
                })
                document.body.appendChild(noteList)
            }
            else{
                const title = document.createElement('h1')
                title.classname = "nonTitle"
                title.textContent = "У вас нет записей"
                noteList.append(title)
            }
        })
    }





    // crud function delete
    const deleteNote = (id) => {
        fetch('http://127.0.0.1:8080/deleteNote', {
        method: 'delete',
        body: JSON.stringify({id: id}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(data => {
            console.log('data', data);
        })
        .catch(error => {
            console.log('error', error);
        })
    }





    // crud function update
    const updateNote = (id, title, text) => {
        fetch('http://127.0.0.1:8080/updateNote', {
        method: 'PUT',
        body: JSON.stringify({id: id, title: title, text: text}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(data => {
            console.log('data', data);
        })
        .catch(error => {
            console.log('error', error);
        })
    }
    




    // crud function create
    const createNote = (title, text) => {
        fetch('http://127.0.0.1:8080/createNote', {
        method: 'post',
        body: JSON.stringify({title: title, text: text}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(data => {
            console.log('data', data);
        })
        .catch(error => {
            console.log('error', error);
        })
    }




    // get form data
    const setReqest = (id) =>{
        const form = document.getElementById('form')
        const formData = new FormData(form)
        const text = formData.get('text')
        const title = formData.get('title')
        id ? updateNote(id, title, text) : createNote(title, text)
    }


    
    // open modal window
    function openModal(id) {
        const modal =  document.getElementById("myModal")
        const form = document.getElementById('form')

        const button = document.createElement('button')
        button.className = "btn"
        button.textContent = "Отправить"
        button.addEventListener("click", ()=>{
            setReqest(id)
        })

        form.append(button)
    
        modal.style.display = "block";
    }



    // close modal window
    function closeModal() {
        const form = document.getElementById('form')
        const button = form.querySelector("button")
        console.log(button)
        button.remove()
        document.getElementById("myModal").style.display = "none";
    }

    getAllNotes()