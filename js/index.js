const dataload = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json()
    const result = data.posts

    //get a selected id and section , when keep data
    const contain = document.getElementById("discuss")

    for (let i of result) {
        const create = document.createElement('div')
        create.innerHTML = `
        <div class="flex gap-8 bg-gray-200 rounded-lg mb-6  p-8">
            <div class="relative">
                <img class="w-10  h-10" src="./sourov.png"></img>
                <p class="absolute text-red-800 font-bold text-3xl -mt-14 mr-96 ">o</p>
            </div>
            <div>
                <div class="flex gap-2">
                    <p>#Music</p>
                    <p>Author</p>
                    <p>Sourov chandra</p>
                </div>
                <h2 class="text-3xl font-bold">10 Kids Unaware of Their Halloween Costume</h2>
                <p>It’s one thing to subject yourself to a Halloween costume mishap because, hey, that’s your prerogative.</p>
                <div class="flex justify-between">
                   <div class="flex gap-4">
                    <div>
                        <p>550</p>
                    </div>
                    <div>1588</div>
                    <div>5</div>min
                   </div>
                   <div>
                    <button id="btnc">Click</button>
                   </div>
                </div>
            </div>
        </div>
    `
        contain.appendChild(create)
    // console.log(i)
}
document.addEventListener('click',function(){
    const data = document.getElementById('keepData')
    const re = document.getElementById('btnc')
    const description =re.parentNode.parentNode.parentNode.childNodes[3].textContent
    const view =re.parentNode.parentNode.childNodes[1].childNodes[3].textContent
    const div = document.createElement('div')
    const p = document.createElement('p')
    p.innerText = description;
    const p1 = document.createElement('p')
    p1.innerText=view
    div.style.display='flex'
    div.style.gap='20px'
    div.appendChild(p)
    div.appendChild(p1)
    data.appendChild(div)
})


}
 


dataload()
 