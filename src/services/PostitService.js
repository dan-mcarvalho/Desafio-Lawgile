import blue from '../assets/img/blue.png';
import pack from '../assets/img/pack.png'; 
import pink from '../assets/img/pink.jpg'; 
import red from '../assets/img/red.png'; 
import pink2 from '../assets/img/pink2.png'; 
import purple from '../assets/img/purple.png'; 


export default class PostitService{

    static getPostits(){
        return new Promise(resolve => {
            resolve({
                products: {
                    product:[
                    {
                        title: "Ocean Blue",
                        img: blue,
                        price: "5,99",
                        description: "It's a postit which looks like the ocean" 
                    },
                    {
                        title: "Pack",
                        img: pack,
                        price: "5,99",
                        description: "It's a useful pack of postits"
                    },
                    {
                        title: "Pinky",
                        img: pink,
                        price: "1,99",
                        description: "It's pinky" 
                    
                    },                   
                    {	
                        title: "Redex",
                        img: red,
                        price: "1,99",
                        description: "IIt's the red one" 
                    },
                    {
                        title: "Super Pink",
                        img: pink2,
                        price: "5,99",
                        description: "It's a pink pack of postits" 
                    },
                    {
                        title: "Purplezoid",
                        img: purple,
                        price: "1,99",
                        description: "It's the purple one" 
                    },
                    ]
                }
            })
        })

        







    }







}