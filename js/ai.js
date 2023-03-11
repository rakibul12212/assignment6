const loadData = () => {
    const URL = "https://openapi.programming-hero.com/api/ai/tools";
    fetch(URL).then((res) => res.json()).then((data) => showData(data.data.tools.slice(0, 6)));
};
const showData = (tools) => {
    //console.log(tools);
    tools.forEach((tools) => {
        console.log(tools);

        const featureContainer = document.getElementById("section");

        const div = document.createElement("div");
        div.innerHTML =
            `
        <div class="card w-96 bg-base-100 shadow-xl mt-5 pl-5 p10">
           <figure><img src="${tools.image}" alt="" /></figure>
             <div class="card-body">
               <h2 class="card-title">Feature</h2>
     
              <ol>
                <li>1.${tools.features[0]}</li>
                <li>2.${tools.features[1]}</li>
                <li>3.${tools.features[2]}</li>
             </ol>

               <h2 class="card-title mt-5">${tools.name}</h2>
              <input type="date" name="${tools.published_in}" id="">
       <div class="card-action text-center">
       

    
       <label for="my-modal-6" class="btn">Details</label>
    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box  ">
            <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

            <div>
                <h1 class="font-bold text-lg">${tools.description}</h1>


                <div class="stats stats-vertical lg:stats-horizontal shadow flex">

                    <div class="stat">
                        <div class="stat-title">10$/</div>
                        <div class="stat-title">month</div>
                        <div class="stat-title">besic</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">50$/</div>
                        <div class="stat-title">month</div>
                        <div class="stat-title">pro</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">contact</div>
                        <div class="stat-title">us</div>
                        <div class="stat-title">enterprise</div>
                    </div>

                </div>

                <div class="flex space-x-28">
                    <div>
                    <h1 class="text-center font-bold text-lg">Feature</h1>
                    <ol class="pt-2">
                            <li>customizeable responses</li>
                            <li>multilingual suppout</li>
                            <li>seemless intregation</li>
                            
                        </ol>
                    </div>

                    <div>
                    <h1 class="text-center font-bold text-lg">Intregrations</h1>
                    <ol class="pt-2">
                            <li class"text-left">fb messenger</li>
                            <li class"text-start">slack</li>
                            <li class"text-left">telegram</li>
                            
                        </ol>
                    </div>

                </div>

            </div>


            <div mt-10>
                <img src="${tools.image}" alt="">
                <h1 class="font-bold text-lg">hi.How are you doing today?</h1>
                <p>I'm doing well,thank you for asking.How can i assist you today?</p>
            </div>


        </div>
    </div>




  </div>   
  </div>
  </div>
   `;
        featureContainer.appendChild(div);
    });

};
loadData();

const showAllDataTogether = () => {
    const URL = "https://openapi.programming-hero.com/api/ai/tools";
    fetch(URL).then((res) => res.json()).then((data) => showData(data.data.tools));
}

























































// const fetchCategories = () => {
//     fetch("https://openapi.programming-hero.com/api/ai/tools")
//         .then((res) => res.json())
//         .then((data) => allCategories(data.data.tools));
// };

// function allCategories(tools) {
//     for (const details of tools) {
//         console.log(details)
//     }
// }
// const showAllFeature = (cards) => {
//     console.log(data.data.tools);
//     const featureContainer = document.getElementById('feature-container');
//     data.forEach(singleFeature => {
//         const card = document.createElement('div');
//         card.classList.add('card-body');
//         card.innerHTML = `
//         <div class="card-body">
//                 <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
//                 <h2 class="card-title">Shoes!</h2>
//                 <p>If a dog chews shoes whose shoes does he choose?</p>
//             </div>`;
//         featureContainer.appendChild(card)
//     });
// };