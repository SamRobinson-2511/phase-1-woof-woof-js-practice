function fetchDogs(){
    fetch('http://localhost:3000/pups')
        .then(response => response.json())
        .then(dogs => renderDog(dogs))
}

function renderDog(dogs){
    console.log(dogs)
    dogs.forEach(dogs => {
        const span = document.querySelector('#dog-bar')
        const dogSpan = document.createElement('span')
        dogSpan.textContent = dogs.name
        span.append(dogSpan)

        const image = document.querySelector('#dog-info')
        const dogImage = document.createElement('img')
        dogImage.src = dogs.image
        image.append(dogImage)

        const name = document.querySelector('#dog-info')
        const dogName = document.createElement('h2')
        dogName.textContent = dogs.name
        name.append(dogName)

        const button = document.querySelector('#dog-info')
        const badButton = document.createElement('btn')

        button.append(badButton)


    })
}









        // dogSpan.forEach(dogSpan =>{
        //     dogSpan.addEventListener('click', (e) =>{
        //         const imageDiv = document.querySelector('#dog-info')
        //         const dogImage = 

//             })
//         })
//     })

// }
    






document.addEventListener("DOMContentLoaded", function() {
    fetchDogs()
})