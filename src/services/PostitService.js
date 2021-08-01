import blue from '../assets/img/blue.png';
import pack from '../assets/img/pack.png'; 
import pink from '../assets/img/pink.jpg'; 
import red from '../assets/img/red.png'; 
import pink2 from '../assets/img/pink2.png'; 
import purple from '../assets/img/purple.png'; 
import axios from 'axios';


export default class PostitService{


    static submitForm(postit, userData){
        console.log(postit);
        console.log(userData);
        axios.post('https://mtkpmqwqf5.execute-api.us-east-1.amazonaws.com/dev/graphql',
        // axios.post('http://127.0.0.1:3100/graphql', 
        { 
            query: `
            mutation {
                createTbReserve(
                    input: { tbReserve: { 
                      productName:"${postit.title}"  , 
                      productPrice:"${postit.price}", 
                      productDescription:"${postit.description}", 
                      productQuantity:1
                      userEmail:"${userData.user_email}" } 
                    }
                ) {
                    tbReserve {
                        productName
                        productPrice
                        productDescription
                        userEmail
                    }
                }
              }`
        },{
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
          }
        }).then(response => {
            console.log(response.data)
            alert('Reserva efetuada!')})
        

        

        // fetch('https://9mcvpqo8wh.execute-api.us-east-2.amazonaws.com/dev/', 
        // {
        //     method: 'POST',
        //     mode: 'cors',
        //     headers: {
        //       'Content-Type': 'text/plain',
        //       'Access-Control-Allow-Origin':'*'
        //     },
        //     body: JSON.stringify({
        //       query: `
        //       mutation {
        //         createTbReserve(
        //             input: { tbReserve: { productName:${postit.name} , productPrice:${postit.price} , productDescription: ${postit.description} , userEmail:${userData} } }
        //         ) {
        //             tbReserve {
        //                 productName
        //                 productPrice
        //                 productDescription
        //                 userEmail
                        
        //             }
        //         }
        //     }
        //         `,
        //     }),
        //   }).then((res) => res.json())
        //     .then((result) => console.log(result));
        

    }

    static getPostits(){
        return new Promise(resolve => {
            resolve({
                products: {
                    product:[
                    {
                        title: "Ocean Blue",
                        img: blue,
                        price: "5.99",
                        description: "It's a postit which looks like the ocean" 
                    },
                    {
                        title: "Pack",
                        img: pack,
                        price: "5.99",
                        description: "It's a useful pack of postits"
                    },
                    {
                        title: "Pinky",
                        img: pink,
                        price: "1.99",
                        description: "It's pinky" 
                    
                    },                   
                    {	
                        title: "Redex",
                        img: red,
                        price: "1.99",
                        description: "IIt's the red one" 
                    },
                    {
                        title: "Super Pink",
                        img: pink2,
                        price: "5.99",
                        description: "It's a pink pack of postits" 
                    },
                    {
                        title: "Purplezoid",
                        img: purple,
                        price: "1.99",
                        description: "It's the purple one" 
                    },
                    ]
                }
            })
        })

        







    }







}