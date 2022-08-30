let db = [{
    name: 'Victor',
    code: 1601416,
    age: 14,
    length: 160,
    weight: 42,
    money: 252,
    pic:'image2.png'
},
{
    name: 'Taras',
    code: 1423243,
    age: 19,
    length: 180,
    weight: 50,
    money: 1000,
    pic:'page7ava4.png'
},
{
    name: 'Alex',
    code: 4533333,
    age: 10,
    length: 110,
    weight: 45,
    money: 10,
    pic:'page7Ava2.png'
},
{
    name: 'Nastya',
    code: 89878789,
    age: 20,
    length: 160,
    weight: 60,
    money: 776,
    pic:'image.png'
},
{
    name: 'Oleg',
    code: 66787998,
    age: 30,
    length: 180,
    weight: 90,
    money: 12323,
    pic:'page7Ava2.png'
},
{
    name: 'Valera',
    code: 76787876,
    age: 17,
    length: 190,
    weight: 110,
    money: 12,
    pic:'image.png'
    
},
{
    name: 'John',
    code: 34343422,
    age: 9,
    length: 90,
    weight: 30,
    money: 776,
    pic:'page7ava4.png'
},
{
    name: 'Yura',
    code: 7888765,
    age: 14,
    length: 150,
    weight: 56,
    money: 8998,
    pic:'page7Ava2.png'
},
{
    name: 'Andrii',
    code: 8898788,
    age: 18,
    length: 170,
    weight: 77,
    money: 677,
    pic:'image2.png'
},
{
    name: 'Yulia',
    code: 1215456,
    age: 7,
    length: 80,
    weight: 34,
    money: 0,
    pic:'page7avatar.png'
}
];


function showUsers(){
  for (let el of db) {
   
     $('.userContainer').append(`<div class='userItem'>

     <div class="page7__peopleGroup__item">
     <div class="page7__peopleGroup__item__img" id="m${el.code}">
       <div class="page7__peopleGroup__item__avatar">
       
         <div class="page7__peopleGroup__item__img__social" id="page7__peopleGroup__item__img__social3">
         
           <div class="page7__peopleGroup__item__img__social__icon"></div>
           <div class="page7__peopleGroup__item__img__social__iconInst"></div>
           <div class="page7__peopleGroup__item__img__social__iconIn"></div>
         </div>
         <button class= 'userInfo' id='c${el.code}'>Information</button>
       </div>
     </div>
     <span class='page7__peopleGroup__item__name'>${el.name}</span>
     <div class='cardItem'>
                <span class='
                 page7__peopleGroup__item__name2' > Age :</span>
                <span class='
                 page7__peopleGroup__item__name2'>${el.age}</span>
            </div>
     
   </div>
     
     </div>`);
     $(`#m${el.code}`).css('background-image', `url('../img/${el.pic}')`)
   
       
        
  }
}
showUsers();

$('.filter').slideUp(0);

$('.page7__peopleGroup__item__img').mouseenter(function(){
    $(this).find('.page7__peopleGroup__item__img__social').css('display','flex');
    $(this).find('.userInfo').css('display','flex');
    
    
 })
 $('.page7__peopleGroup__item__img').mouseleave(function(){
    $('.page7__peopleGroup__item__img__social').css('display','none');
    $('.userInfo').css('display','none');  
 })

  $('.optionBtn').click(function(){
    $('.filter').slideDown(400);
    $('.option').slideUp(0);       
 })

 $('.btnExit').mouseenter(function(){
    $('.btnExit__row').css('width','80%');
    $('.btnExit__row').css('background-color','#fff');
    $('#btnExit__row2').css('margin-left','-29.5px');
 })
 $('.btnExit').mouseleave(function(){
    $('.btnExit__row').css('width','50%');
    $('.btnExit__row').css('background-color','#424551');
    $('#btnExit__row2').css('margin-left','-18.5px');
 })

 $('.btnExit').click(function(){
    $('.filter').slideUp(0);
    $('.option').slideDown(400);       
 })

 $('.optionBtn').mouseenter(function(){
    $('.optionBtn__row_second').css('width','100%');
    $('.optionBtn__row_tihrd').css('width','100%');   
 })

 $('.optionBtn').mouseleave(function(){
    $('.optionBtn__row_second').css('width','60%');
    $('.optionBtn__row_tihrd').css('width','40%');   
 }) 

 $('#ageFilter').click(function(){
    returnBigAge();
    $('.userContainer').empty();
    showUsers()
 })

 $('#ageReverseFilter').click(function(){
    returnMinAge();
    $('.userContainer').empty();
    showUsers()
 })

 $('#nameFilter').click(function(){
    returnName();
    $('.userContainer').empty();
    showUsers()
 })

 $('#nameReverseFilter').click(function(){
    returnReverseName();
    $('.userContainer').empty();
    showUsers()
 })

 $('.userInfo').click(function(e){
  let userId = (e.target.id).substring(1);
  for(let el of db){
    if(userId == el.code){
        
       $('.popup').css('display','flex');    
       $('.wrap').css('filter','blur(10px)');   
       $('.popup__item__left__profil').css('background-image', `url('../img/${el.pic}')`);
        popupDescr.innerText = 'Information about ' + el.name;
        popup__item__right__p1.innerText = 'Code: ' + el.code;
        popup__item__right__p2.innerText = 'Money: ' + el.money;
        popup__item__right__p3.innerText = 'Weight: ' + el.weight;
        popup__item__right__p4.innerText = 'Lenth: ' + el.length;
          
             
    }
  }
 })

 $('.popup__btn').click(function(){
   
    $('.popup').css('display','none');
    $('.wrap').css('filter','blur(0px)');

 })


 function returnBigAge(){
    db.sort(function(a, b){
        return a.age - b.age
    })
 }

 function returnMinAge(){
    db.sort(function(a, b){
        return b.age - a.age
    })
 }

 function returnName(){
    db.sort(function(a, b){
        if(b.name > a.name){
            return -1
        }
    })
 }

 function returnReverseName(){
    db.sort(function(a, b){
        if(b.name < a.name){
            return -1
        }
    })
 }

 minAgeNumber.innerText = minAgeInp.value;
minAgeInp.oninput = function(){
    minAgeNumber.innerText = minAgeInp.value;     
}
// фільтрування за віком з інпуту  
minAgeBtn.onclick = function(){  
$('.userContainer').empty();
for(let el of db){  
    if(el.age>=minAgeInp.value){  
        $('.userContainer').append(`<div class='userItem'>

        <div class="page7__peopleGroup__item">
        <div class="page7__peopleGroup__item__img" id="m${el.code}">
          <div class="page7__peopleGroup__item__avatar">
          
            <div class="page7__peopleGroup__item__img__social" id="page7__peopleGroup__item__img__social3">
            
              <div class="page7__peopleGroup__item__img__social__icon"></div>
              <div class="page7__peopleGroup__item__img__social__iconInst"></div>
              <div class="page7__peopleGroup__item__img__social__iconIn"></div>
            </div>
            <button class= 'userInfo' id='c${el.code}'>Information</button>
          </div>
        </div>
        <span class='page7__peopleGroup__item__name'>${el.name}</span>
        <div class='cardItem'>
                   <span class='
                    page7__peopleGroup__item__name2' > Age :</span>
                   <span class='
                    page7__peopleGroup__item__name2'>${el.age}</span>
               </div>
        
      </div>
        
        </div>`);
        $(`#m${el.code}`).css('background-image', `url('../img/${el.pic}')`)
    }
}} 

let sortForName = true;
$("#sortNameGroup__btn__left").click(function(){      
    db.sort(function(a, b){
    let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
    if (nameA < nameB) //сортируем строки по возрастанию
    return -1
    if (nameA > nameB)
    return 1
    return 0 // Никакой сортировки
})
$('.userContainer').empty();
for(let el of db){  
    if(el.age>=minAgeInp.value){  
        $('.userContainer').append(`<div class='userItem'>

        <div class="page7__peopleGroup__item">
        <div class="page7__peopleGroup__item__img" id="m${el.code}">
          <div class="page7__peopleGroup__item__avatar">
          
            <div class="page7__peopleGroup__item__img__social" id="page7__peopleGroup__item__img__social3">
            
              <div class="page7__peopleGroup__item__img__social__icon"></div>
              <div class="page7__peopleGroup__item__img__social__iconInst"></div>
              <div class="page7__peopleGroup__item__img__social__iconIn"></div>
            </div>
            <button class= 'userInfo' id='c${el.code}'>Information</button>
          </div>
        </div>
        <span class='page7__peopleGroup__item__name'>${el.name}</span>
        <div class='cardItem'>
                   <span class='
                    page7__peopleGroup__item__name2' > Age :</span>
                   <span class='
                    page7__peopleGroup__item__name2'>${el.age}</span>
               </div>
        
      </div>
        
        </div>`);
        $(`#m${el.code}`).css('background-image', `url('../img/${el.pic}')`)
    }
}
    $('.sortNameGroup__btn').css('color','#424551')
    $('.sortNameGroup__btn').css('background-color','inherit')
    $('#sortNameGroup__btn__left').css('background-color','#424551') 
    $('#sortNameGroup__btn__left').css('color','#fff')
        sortForName = true
    
   
}) 
// кнопка сортування по іменні від Z
$("#sortNameGroup__btn__right").click(function(){
        db.sort(function(a, b){
        let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameB < nameA) //сортируем строки по возрастанию
          return -1
        if (nameB > nameA)
          return 1
        return 0 // Никакой сортировки
        })
        $('.userContainer').empty();
        for(let el of db){  
            if(el.age>=minAgeInp.value){  
                $('.userContainer').append(`<div class='userItem'>
        
                <div class="page7__peopleGroup__item">
                <div class="page7__peopleGroup__item__img" id="m${el.code}">
                  <div class="page7__peopleGroup__item__avatar">
                  
                    <div class="page7__peopleGroup__item__img__social" id="page7__peopleGroup__item__img__social3">
                    
                      <div class="page7__peopleGroup__item__img__social__icon"></div>
                      <div class="page7__peopleGroup__item__img__social__iconInst"></div>
                      <div class="page7__peopleGroup__item__img__social__iconIn"></div>
                    </div>
                    <button class= 'userInfo' id='c${el.code}'>Information</button>
                  </div>
                </div>
                <span class='page7__peopleGroup__item__name'>${el.name}</span>
                <div class='cardItem'>
                           <span class='
                            page7__peopleGroup__item__name2' > Age :</span>
                           <span class='
                            page7__peopleGroup__item__name2'>${el.age}</span>
                       </div>
                
              </div>
                
                </div>`);
                $(`#m${el.code}`).css('background-image', `url('../img/${el.pic}')`)
            }
        }
$('.sortNameGroup__btn').css('color','#424551')
$('.sortNameGroup__btn').css('background-color','inherit')
$('#sortNameGroup__btn__right').css('background-color','#424551') 
$('#sortNameGroup__btn__right').css('color','#fff')
        sortForName = false
    

}) 
let sortForAge = true;
// кнопка сортування по віку з 30
$("#sortAgeGroup__btn__left").click(function(){
    $('.sortNameGroup__btn').css('color','#424551')
    $('.sortNameGroup__btn').css('background-color','inherit')
    $('#sortAgeGroup__btn__left').css('background-color','#424551') 
    $('#sortAgeGroup__btn__left').css('color','#fff')
        sortForAge = true       
        db.sort(function(a, b){
            return b.age-a.age
          })
          $('.userContainer').empty();
          for(let el of db){  
            if(el.age>=minAgeInp.value){  
                $('.userContainer').append(`<div class='userItem'>
        
                <div class="page7__peopleGroup__item">
                <div class="page7__peopleGroup__item__img" id="m${el.code}">
                  <div class="page7__peopleGroup__item__avatar">
                  
                    <div class="page7__peopleGroup__item__img__social" id="page7__peopleGroup__item__img__social3">
                    
                      <div class="page7__peopleGroup__item__img__social__icon"></div>
                      <div class="page7__peopleGroup__item__img__social__iconInst"></div>
                      <div class="page7__peopleGroup__item__img__social__iconIn"></div>
                    </div>
                    <button class= 'userInfo' id='c${el.code}'>Information</button>
                  </div>
                </div>
                <span class='page7__peopleGroup__item__name'>${el.name}</span>
                <div class='cardItem'>
                           <span class='
                            page7__peopleGroup__item__name2' > Age :</span>
                           <span class='
                            page7__peopleGroup__item__name2'>${el.age}</span>
                       </div>
                
              </div>
                
                </div>`);
                $(`#m${el.code}`).css('background-image', `url('../img/${el.pic}')`)
            }
        }}
) 
// кнопка сортування по віку з 7
$("#sortAgeGroup__btn__right").click(function(){
    
        db.sort(function(a, b){
            return a.age-b.age
          })
          $('.userContainer').empty();
          for(let el of db){  
            if(el.age>=minAgeInp.value){  
                $('.userContainer').append(`<div class='userItem'>
        
                <div class="page7__peopleGroup__item">
                <div class="page7__peopleGroup__item__img" id="m${el.code}">
                  <div class="page7__peopleGroup__item__avatar">
                  
                    <div class="page7__peopleGroup__item__img__social" id="page7__peopleGroup__item__img__social3">
                    
                      <div class="page7__peopleGroup__item__img__social__icon"></div>
                      <div class="page7__peopleGroup__item__img__social__iconInst"></div>
                      <div class="page7__peopleGroup__item__img__social__iconIn"></div>
                    </div>
                    <button class= 'userInfo' id='c${el.code}'>Information</button>
                  </div>
                </div>
                <span class='page7__peopleGroup__item__name'>${el.name}</span>
                <div class='cardItem'>
                           <span class='
                            page7__peopleGroup__item__name2' > Age :</span>
                           <span class='
                            page7__peopleGroup__item__name2'>${el.age}</span>
                       </div>
                
              </div>
                
                </div>`);
                $(`#m${el.code}`).css('background-image', `url('../img/${el.pic}')`)
            }
        }
          console.log(db)
          $('.sortNameGroup__btn').css('color','#424551')
          $('.sortNameGroup__btn').css('background-color','inherit')
          $('#sortAgeGroup__btn__right').css('background-color','#424551')
          $('#sortAgeGroup__btn__right').css('color','#fff')
        sortForAge = false
    
   
}) 
let sortForMoney = true
// кнопка сортування по грошей від максимуму
$("#sortMoneyGroup__btn__left").click(function(){
    $('.sortNameGroup__btn').css('color','#424551')
    $('.sortNameGroup__btn').css('background-color','inherit')
    $('#sortMoneyGroup__btn__left').css('background-color','#424551')
    $('#sortMoneyGroup__btn__left').css('color','#fff')
        sortForMoney = true       
        db.sort(function(a, b){
            return b.money-a.money
          })
          $('.userContainer').empty();
          for(let el of db){  
            if(el.age>=minAgeInp.value){  
                $('.userContainer').append(`<div class='userItem'>
        
                <div class="page7__peopleGroup__item">
                <div class="page7__peopleGroup__item__img" id="m${el.code}">
                  <div class="page7__peopleGroup__item__avatar">
                  
                    <div class="page7__peopleGroup__item__img__social" id="page7__peopleGroup__item__img__social3">
                    
                      <div class="page7__peopleGroup__item__img__social__icon"></div>
                      <div class="page7__peopleGroup__item__img__social__iconInst"></div>
                      <div class="page7__peopleGroup__item__img__social__iconIn"></div>
                    </div>
                    <button class= 'userInfo' id='c${el.code}'>Information</button>
                  </div>
                </div>
                <span class='page7__peopleGroup__item__name'>${el.name}</span>
                <div class='cardItem'>
                           <span class='
                            page7__peopleGroup__item__name2' > Age :</span>
                           <span class='
                            page7__peopleGroup__item__name2'>${el.age}</span>
                       </div>
                
              </div>
                
                </div>`);
                $(`#m${el.code}`).css('background-image', `url('../img/${el.pic}')`)
            }
        }}
) 
// кнопка сортування по грошей від мінімуму
$("#sortMoneyGroup__btn__right").click(function(){
    
        db.sort(function(a, b){
            return a.money-b.money
          })
          $('.userContainer').empty();
          for(let el of db){  
            if(el.age>=minAgeInp.value){  
                $('.userContainer').append(`<div class='userItem'>
        
                <div class="page7__peopleGroup__item">
                <div class="page7__peopleGroup__item__img" id="m${el.code}">
                  <div class="page7__peopleGroup__item__avatar">
                  
                    <div class="page7__peopleGroup__item__img__social" id="page7__peopleGroup__item__img__social3">
                    
                      <div class="page7__peopleGroup__item__img__social__icon"></div>
                      <div class="page7__peopleGroup__item__img__social__iconInst"></div>
                      <div class="page7__peopleGroup__item__img__social__iconIn"></div>
                    </div>
                    <button class= 'userInfo' id='c${el.code}'>Information</button>
                  </div>
                </div>
                <span class='page7__peopleGroup__item__name'>${el.name}</span>
                <div class='cardItem'>
                           <span class='
                            page7__peopleGroup__item__name2' > Age :</span>
                           <span class='
                            page7__peopleGroup__item__name2'>${el.age}</span>
                       </div>
                
              </div>
                
                </div>`);
                $(`#m${el.code}`).css('background-image', `url('../img/${el.pic}')`)
            }
        }
          console.log(db)
         $('.sortNameGroup__btn').css('background-color','inherit')
         $('.sortNameGroup__btn').css('color','#424551')
         $('#sortMoneyGroup__btn__right').css('background-color','#424551')
         $('#sortMoneyGroup__btn__right').css('color','#fff')
          sortForMoney = false
    
   
}) 

$("#inpBtn").click(function(){
    $('.userContainer').empty();
    for(let el of db){  
        if(el.age>=minAgeInp.value){  
            $('.userContainer').append(`<div class='userItem'>
    
            <div class="page7__peopleGroup__item">
            <div class="page7__peopleGroup__item__img" id="m${el.code}">
              <div class="page7__peopleGroup__item__avatar">
              
                <div class="page7__peopleGroup__item__img__social" id="page7__peopleGroup__item__img__social3">
                
                  <div class="page7__peopleGroup__item__img__social__icon"></div>
                  <div class="page7__peopleGroup__item__img__social__iconInst"></div>
                  <div class="page7__peopleGroup__item__img__social__iconIn"></div>
                </div>
                <button class= 'userInfo' id='c${el.code}'>Information</button>
              </div>
            </div>
            <span class='page7__peopleGroup__item__name'>${el.name}</span>
            <div class='cardItem'>
                       <span class='
                        page7__peopleGroup__item__name2' > Age :</span>
                       <span class='
                        page7__peopleGroup__item__name2'>${el.age}</span>
                   </div>
            
          </div>
            
            </div>`);
            $(`#m${el.code}`).css('background-image', `url('../img/${el.pic}')`)
        }
    }for(let el of db){  
    if(el.age>=minAgeInp.value){  
        $('.userContainer').append(`<div class='userItem'>

        <div class="page7__peopleGroup__item">
        <div class="page7__peopleGroup__item__img" id="m${el.code}">
          <div class="page7__peopleGroup__item__avatar">
          
            <div class="page7__peopleGroup__item__img__social" id="page7__peopleGroup__item__img__social3">
            
              <div class="page7__peopleGroup__item__img__social__icon"></div>
              <div class="page7__peopleGroup__item__img__social__iconInst"></div>
              <div class="page7__peopleGroup__item__img__social__iconIn"></div>
            </div>
            <button class= 'userInfo' id='c${el.code}'>Information</button>
          </div>
        </div>
        <span class='page7__peopleGroup__item__name'>${el.name}</span>
        <div class='cardItem'>
                   <span class='
                    page7__peopleGroup__item__name2' > Age :</span>
                   <span class='
                    page7__peopleGroup__item__name2'>${el.age}</span>
               </div>
        
      </div>
        
        </div>`);
        $(`#m${el.code}`).css('background-image', `url('../img/${el.pic}')`)
    }
}
})

$('#sortWeightGroup__btn__left').click(function(){
    $('.sortNameGroup__btn').css('color','#424551')
    $('.sortNameGroup__btn').css('background-color','inherit')
    $('#sortWeightGroup__btn__left').css('background-color','#424551')
    $('#sortWeightGroup__btn__left').css('color','#fff')
            
        db.sort(function(a, b){
            return b.weight-a.weight
          })
          $('.userContainer').empty();
          for(let el of db){  
            if(el.age>=minAgeInp.value){  
                $('.userContainer').append(`<div class='userItem'>
        
                <div class="page7__peopleGroup__item">
                <div class="page7__peopleGroup__item__img" id="m${el.code}">
                  <div class="page7__peopleGroup__item__avatar">
                  
                    <div class="page7__peopleGroup__item__img__social" id="page7__peopleGroup__item__img__social3">
                    
                      <div class="page7__peopleGroup__item__img__social__icon"></div>
                      <div class="page7__peopleGroup__item__img__social__iconInst"></div>
                      <div class="page7__peopleGroup__item__img__social__iconIn"></div>
                    </div>
                    <button class= 'userInfo' id='c${el.code}'>Information</button>
                  </div>
                </div>
                <span class='page7__peopleGroup__item__name'>${el.name}</span>
                <div class='cardItem'>
                           <span class='
                            page7__peopleGroup__item__name2' > Age :</span>
                           <span class='
                            page7__peopleGroup__item__name2'>${el.age}</span>
                       </div>
                
              </div>
                
                </div>`);
                $(`#m${el.code}`).css('background-image', `url('../img/${el.pic}')`)
            }
        }
})

$('#sortWeightGroup__btn__right').click(function(){
    $('.sortNameGroup__btn').css('color','#424551')
    $('.sortNameGroup__btn').css('background-color','inherit')
    $('#sortWeightGroup__btn__right').css('background-color','#424551')
    $('#sortWeightGroup__btn__right').css('color','#fff')
            
        db.sort(function(a, b){
            return a.weight-b.weight
          })
          $('.userContainer').empty();
          for(let el of db){  
            if(el.age>=minAgeInp.value){  
                $('.userContainer').append(`<div class='userItem'>
        
                <div class="page7__peopleGroup__item">
                <div class="page7__peopleGroup__item__img" id="m${el.code}">
                  <div class="page7__peopleGroup__item__avatar">
                  
                    <div class="page7__peopleGroup__item__img__social" id="page7__peopleGroup__item__img__social3">
                    
                      <div class="page7__peopleGroup__item__img__social__icon"></div>
                      <div class="page7__peopleGroup__item__img__social__iconInst"></div>
                      <div class="page7__peopleGroup__item__img__social__iconIn"></div>
                    </div>
                    <button class= 'userInfo' id='c${el.code}'>Information</button>
                  </div>
                </div>
                <span class='page7__peopleGroup__item__name'>${el.name}</span>
                <div class='cardItem'>
                           <span class='
                            page7__peopleGroup__item__name2' > Age :</span>
                           <span class='
                            page7__peopleGroup__item__name2'>${el.age}</span>
                       </div>
                
              </div>
                
                </div>`);
                $(`#m${el.code}`).css('background-image', `url('../img/${el.pic}')`)
            }
        }
})



 

