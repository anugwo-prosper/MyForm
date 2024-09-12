let data = [
    {
        id:1,
        name :'sholly',
        email: 'sholly@gmail.com'
    },

    {
        id:2,
        name :'Ola',
        email: 'ola@gmail.com'
    },

    {
        id:3,
        name :'Fola',
        email: 'fola@gmail.com'
    }
]



function readAll(){
    localStorage.setItem('object', JSON.stringify(data));
    var prosper = document.querySelector('.data_table');
    var myobject = localStorage.getItem('object')
    var myobjectdata = JSON.parse(myobject)
    // console.log(myobjectdata)
    var element = "";
    myobjectdata.map(x => (
        element+= `
           <tr>
           <td>${x.name}</td>   
           <td>${x.email}</td>
           <td><button onclick={myedit(${x.id})}>Edit</button></td>
           <td><button onclick={mydelete(${x.id})}>Delete</button></td>

           
           </tr>
          
        `
       
    ))

    prosper.innerHTML=element;
}




function mydelete (id) {
    data = data.filter(x => x.id !== id);
    readAll();
}


function mycreate(){
    document.querySelector('.create_form').style.display='block';
    document.querySelector('.add_div').style.display = 'none';
    

}
function myadd(){
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    let myclass = Math.floor(Math.random() * 1000)
    var myobject = {id: myclass,  name:name, email:email}
    data.push(myobject)
    console.log(myobject)



    document.querySelector('.create_form').style.display='none';
    document.querySelector('.add_div').style.display = 'block';
    readAll()

}

function myedit(id){
   
    document.querySelector('.update_form').style.display='block';
    var myget = data.find(x => x.id == id);
    document.querySelector('.uid').value = myget.id;
    document.querySelector('.uname').value = myget.name;
    document.querySelector('.uemail').value= myget.email;
    



}

function myupdate(){

    var id = document.querySelector('.uid').value;
    var name = document.querySelector('.uname').value;
    var email = document.querySelector('.uemail').value;
    document.querySelector('.uname').value = '';
    document.querySelector('.uemail').value = '';
   

    var myindex = data.findIndex(x => x.id == id);
    data[myindex] = {id, name, email};
   
    
    document.querySelector('.update_form').style.display='block';
    readAll()

}




// let mylist = [10, 20, 30, 40,]
// console.log(mylist.find(x => x > 20 ))

// destructuring

// spread operator
// let mydays = ['monday', 'tuesday', 'wednesday', 'thursday']
// let num = [29, 30, 50, 70]
// let myweek = [...mydays, 'friday', 'saturday', 'sunday', ...num]
// console.log(myweek)

// let employee = {
//     'name': 'tunde',
//     'state': 'lagos',
//     'lga': 'alimosho',
//     'age': 10
// }
// console.log(employee['state']);
// let {name, state, lga} = employee
// console.log(state)



class Product{

     constructor(name, brand, color, version){
        this.name = name;
        this.brand = brand;
        this.color = color
        this.version = version
     }


     getProduct(){
        console.log(`The current product has the feactures of ${this.name} ${this.brand} ${this.color} ${this.version}`)
     }



}

let myProduct = new Product('Headset', 'Oraimo', 'black', '2.2')
console.log(myProduct.getProduct())




class NewProduct extends Product{
    constructor(name, brand, color, version, model, price){
        super(name, brand, color, version)
        this.model = model
        this.price = price
    }
    myNewProduct(){
        console.log(`The current product has the feactures of ${this.name} ${this.brand} ${this.color} ${this.version} ${this.model} ${this.price}`)
     }
}

let myProduct2 = new NewProduct('Headset', 'Oraimo', 'black', '2.2', 'samsug', 12000)
console.log(myProduct2.myNewProduct())
 



