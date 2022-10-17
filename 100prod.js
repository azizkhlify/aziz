let array=[{
    name:'Rayen lamloumi',
    price: 1,
    description:'18sne bac math tfol 3a9l w mzyen!'
},{
    name:'Rayen lamloumi',
    price: 1,
    description:'18sne bac math tfol 3a9l w mzyen!'
},{
    name:'9set layla w el th2b',
    price: 10,
    description:'kteb moufid lezm ta9rah'
},{
    name:'ma9rouna',
    price: 20,
    description:'barcha jbn w escalope !'
},{
    name:'Ahmed ',
    price: 0.300,
    description:'3akel w 9array w yesma3 l klem '
},{
    name:'mongela',
    price: 3.025,
    description:'wa9tha ghalt'
},{
    name:'srwel',
    price: 15.400,
    description:'mankoub'
},{
    name:'mohamed bnchi5',
    price: 00,
    description:'3akel ou yakl la3dham bch yaouali ikaki'
},{
    name:'yassin',
    price: -98000,
    description:'jahch . labs mrayat blash fsos'
},
];

let myMainProduces=document.createElement('div');

for (let index = 0; index < array.length; index++) {
    let myProduce=document.createElement('div');
    let myProduceTitle=document.createElement('h2');
    let myProducePrice=document.createElement('h3');
    let myProducedisc=document.createElement('p');
    var t = array[index].name;
    let sicr=document.createElement('p');
    var p = array[index].price+' Dnt';
    var d = '    '+array[index].description;
    let title=document.createTextNode(t);
    let price=document.createTextNode(p);
    let disc=document.createTextNode(d);
    let s=document.createTextNode('\n exemple exempleexempleexempleexemple exemple exempleexempleexempleexemple exemple exemple pleexemple exemple 200pxexemple exempleexempleexempleexemple');
    sicr.appendChild(s)
    myProduceTitle.appendChild(title);
    myProducePrice.appendChild(price);
    myProducedisc.appendChild(disc);
    myProduce.appendChild(myProduceTitle);
    myProduce.appendChild(myProducePrice);
    myProduce.appendChild(myProducedisc); 
    myProduce.appendChild(sicr)
    sicr.style.setProperty('display','none')
    let opened=false;
    myProduce.onclick=function() {
        
        if (opened) {
            myProduce.style.height='70px'
            sicr.style.setProperty('display','none')
            opened=!opened
        }
        else {
            myProduce.style.height='200px'
            sicr.style.setProperty('display','block')
            opened=!opened
        }
    };
    myMainProduces.appendChild(myProduce)
    myProduce.className='produceClass';
};
document.body.appendChild(myMainProduces);
myMainProduces.className='producesClass';
let prods=document.getElementsByClassName('produceClass');
let button=document.getElementById('bufilter');
let maxPrice=document.getElementById('filter');
button.onclick= function () {
    for (let index = 0; index < array.length; index++) {
    if (array[index].price>maxPrice.value) {
        prods[index].style.setProperty('display','none')
        
        }
    else {
        prods[index].style.setProperty('display','block')
    }


    }
}
