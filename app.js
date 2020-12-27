
let dummyTex = [
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati aliquam voluptas numquam sapiente pariatur tempore vitae eius harum magni consequatur dolor, nobis error reprehenderit quasi. Atque at rem laborum voluptas laudantium maxime magnam sequi? Labore reiciendis nobis beatae doloribus accusamus dignissimos! Dicta nesciunt ab facere ut placeat quibusdam asperiores!',

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati aliquam voluptas numquam sapiente pariatur tempore vitae eius harum magni consequatur dolor, nobis error reprehenderit quasi. Atque at rem laborum voluptas laudantium maxime magnam sequi? Labore reiciendis nobis beatae doloribus accusamus dignissimos! Dicta nesciunt ab facere ut placeat quibusdam asperiores!',

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati aliquam voluptas numquam sapiente pariatur tempore vitae eius harum magni consequatur dolor, nobis error reprehenderit quasi. Atque at rem laborum voluptas laudantium maxime magnam sequi? Labore reiciendis nobis beatae doloribus accusamus dignissimos! Dicta nesciunt ab facere ut placeat quibusdam asperiores!',

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati aliquam voluptas numquam sapiente pariatur tempore vitae eius harum magni consequatur dolor, nobis error reprehenderit quasi. Atque at rem laborum voluptas laudantium maxime magnam sequi? Labore reiciendis nobis beatae doloribus accusamus dignissimos! Dicta nesciunt ab facere ut placeat quibusdam asperiores!',

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati aliquam voluptas numquam sapiente pariatur tempore vitae eius harum magni consequatur dolor, nobis error reprehenderit quasi. Atque at rem laborum voluptas laudantium maxime magnam sequi? Labore reiciendis nobis beatae doloribus accusamus dignissimos! Dicta nesciunt ab facere ut placeat quibusdam asperiores!',

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati aliquam voluptas numquam sapiente pariatur tempore vitae eius harum magni consequatur dolor, nobis error reprehenderit quasi. Atque at rem laborum voluptas laudantium maxime magnam sequi? Labore reiciendis nobis beatae doloribus accusamus dignissimos! Dicta nesciunt ab facere ut placeat quibusdam asperiores!',

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati aliquam voluptas numquam sapiente pariatur tempore vitae eius harum magni consequatur dolor, nobis error reprehenderit quasi. Atque at rem laborum voluptas laudantium maxime magnam sequi? Labore reiciendis nobis beatae doloribus accusamus dignissimos! Dicta nesciunt ab facere ut placeat quibusdam asperiores!',

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati aliquam voluptas numquam sapiente pariatur tempore vitae eius harum magni consequatur dolor, nobis error reprehenderit quasi. Atque at rem laborum voluptas laudantium maxime magnam sequi? Labore reiciendis nobis beatae doloribus accusamus dignissimos! Dicta nesciunt ab facere ut placeat quibusdam asperiores!',

'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore obcaecati aliquam voluptas numquam sapiente pariatur tempore vitae eius harum magni consequatur dolor, nobis error reprehenderit quasi. Atque at rem laborum voluptas laudantium maxime magnam sequi? Labore reiciendis nobis beatae doloribus accusamus dignissimos! Dicta nesciunt ab facere ut placeat quibusdam asperiores!'

]


// Select Element 
const form = document.getElementById('form');
const amount = document.getElementById('amount');
const result = document.getElementById('result');

// Event Listner

form.addEventListener('submit',function(e){

    e.preventDefault();
    
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random()*dummyTex.length);

    // For empty ,negative , and grater than 9 
     if(isNaN(value)||value<=0||value>9){
         result.innerHTML = `<p>${dummyTex[random]}</p>`
     } else {
         const slicedArray = dummyTex.slice(0,value);
         const finalArray = slicedArray.map(function(singleDummy){

            return `<p>${singleDummy}</p>`

         }).join('');

        //  Display final dummy text 

        result.innerHTML = finalArray;
     }

})