let elBox1 = document.querySelector('.box1')
let elBox2 = document.querySelector('.box2')
let elBox3 = document.querySelector('.box3')

let counter = 0
setInterval(()=>{
    counter = counter + 1

},1000)
setInterval(()=>{
    if(counter >=1 && counter <=10){
        elBox1.classList.add('qizil')
    }else{
        elBox1.classList.remove('qizil')
    }
    if(counter >=11 && counter <=13 || counter >=25 && counter <=28){
        elBox2.classList.add('sariq')
    }else{
        elBox2.classList.remove('sariq')
    }
    if(counter >=14 && counter <=24){
        elBox3.classList.add('yashil')
    }else{
        elBox3.classList.remove('yashil')
    }
    if(counter == 28){
        counter = 1
    }
    console.log(counter);
},1000)