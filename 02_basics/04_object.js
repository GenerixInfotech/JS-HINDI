// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123"
tinderUser.email = "m@gmail.com"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"someuser@gmail.com",
    fullName:{
        userFullName:{
            fistName:"Mehul",
            lastName:"Mahapatra"
        }
    }
}
// console.log(regularUser.fullName.userFullName.fistName);

const obj01 ={1:"a", 2:"b"}
const obj02 ={3:"c", 4:"d"}
const obj04 ={5:"e", 6:"f"}

// const obj03 = {obj01, obj02}
// const obj03 = Object.assign({}, obj01, obj02, obj04)

const obj03 = {...obj01, ...obj02} //Spread Method like Array [....xyz, ...pqr]
// console.log(obj03);

const users = [
    {
        id:"1",
        email:"xyz@gmail.com"
    },
    {
        id:"2",
        email:"pqr@gmail.com"
    },
    {
        id:"3",
        email:"mno@gmail.com"
    }
]
// console.log(users[0].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedOut'));

const course = {
    name:"Java Script",
    price: 9999,
    courseInstructor:"Manish"
}

// course.courseInstructor

// console.log(course.courseInstructor);

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// { Object Format
//     "courseName" = "JavaScript"
//     "Price" = "free"
// }

// [ Array Format
//     {},
//     {},
//     {}
// ]

{
    "results": [
      {
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "Maxime",
          "last": "Morin"
        },
        "location": {
          "street": {
            "number": 8712,
            "name": "Concession Road 6"
          },
          "city": "Trout Lake",
          "state": "Saskatchewan",
          "country": "Canada",
          "postcode": "T1J 3O7",
          "coordinates": {
            "latitude": "-69.5037",
            "longitude": "-66.1037"
          },
          "timezone": {
            "offset": "-5:00",
            "description": "Eastern Time (US & Canada), Bogota, Lima"
          }
        },
        "email": "maxime.morin@example.com",
        "login": {
          "uuid": "aa4d5ee9-af18-40fe-97f7-26fe0dee305b",
          "username": "whiteladybug253",
          "password": "jiggaman",
          "salt": "P0gIc03e",
          "md5": "74c733c6ca0b77696d54f8613a650f53",
          "sha1": "5ae5f66fd61f763bb485e816b52d91b6c6b5ec71",
          "sha256": "7076251deb4fa28b221cb323d94795168e81f425f970e38829ea84a0836ca81d"
        },
        "dob": {
          "date": "1967-11-08T13:38:44.130Z",
          "age": 55
        },
        "registered": {
          "date": "2021-08-04T16:56:20.568Z",
          "age": 2
        },
        "phone": "B88 X20-3775",
        "cell": "L00 Z77-8270",
        "id": {
          "name": "SIN",
          "value": "652988486"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/93.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/93.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/93.jpg"
        },
        "nat": "CA"
      }
    ],
    "info": {
      "seed": "4faafffd554f9a69",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }