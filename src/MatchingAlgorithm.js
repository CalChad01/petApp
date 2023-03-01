// const geolocation = require('geolocation-nominatim');
// const haversine = require('haversine');

const owner = JSON.parse('{"Owner_Name":"Kali","travel":1000,"Location":"1866 East Shore Drive Maplewood Minnesota", "type":"Dog","otherPets":"Yes","smallChildren":"Yes","Size":"Large","Age":"Puppy","actLevel":1,"budget":500}');
const pet1 = JSON.parse('{"Pet_Name":"Bronco","Location":"1325 31st street des moines Iowa", "type":"Dog","pet_breed":"Pit Bull","smallChildren":"Yes","otherAnimals":"Yes","Weight":"95","Age":9,"actLevel":2,"price":450}');
const pet2 = JSON.parse('{"Pet_Name":"Perfect","Location":"1870 East shore dr maplewood mn 55109", "type":"Dog","pet_breed":"Pit Bull","smallChildren":"Yes","otherAnimals":"Yes","Weight":"95","Age":1,"actLevel":1,"price":450}');
const pet3 = JSON.parse('{"Pet_Name":"BAD","Location":"352 gulfport court las vegas nv", "type":"Dog","pet_breed":"Pit Bull","smallChildren":"Yes","otherAnimals":"Yes","Weight":"10","Age":10,"actLevel":5,"price":1000}');
const pet4 = JSON.parse('{"Pet_Name":"Tester","Location":"352 gulfport court las vegas nv", "type":"Dog","pet_breed":"Pit Bull","smallChildren":"Yes","otherAnimals":"Yes","Weight":"10","Age":10,"actLevel":5,"price":100000}');

const pets = [pet1, pet2, pet3, pet4];

const pet_list = [];

// function loc_distance(pet) {
//   const geolocator = geolocation({ provider: 'openstreetmap' });

//   return new Promise((resolve, reject) => {
//     geolocator(pet.Location, (err, location_pet) => {
//       if (err) {
//         reject(err);
//       } else {
//         geolocator(owner.Location, (err, location_owner) => {
//           if (err) {
//             reject(err);
//           } else {
//             const loc1 = { latitude: location_owner.latitude, longitude: location_owner.longitude };
//             const loc2 = { latitude: location_pet.latitude, longitude: location_pet.longitude };
//             const distance = haversine(loc1, loc2, { unit: 'mile' });
//             resolve(distance);
//           }
//         });
//       }
//     });
//   });
// }

function type_of_animal(pet) {
  if (pet.type === owner.type) {
    pet_list.push(pet);
  }
}

function small_children(pet) {
  if (pet.smallChildren === 'No' && owner.smallChildren === 'Yes') {
    const index = pet_list.indexOf(pet);
    if (index !== -1) {
      pet_list.splice(index, 1);
    }
  }
}

function other_animals(pet) {
  if (pet.otherAnimals === 'No' && owner.otherPets === 'Yes') {
    const index = pet_list.indexOf(pet);
    if (index !== -1) {
      pet_list.splice(index, 1);
    }
  }
}

// function max_distacne(pet, score) {
//   return loc_distance(pet).then((distance) => {
//     if (distance < owner.travel) {
//       score += 3;
//     } else if (distance < owner.travel + 35) {
     
//       function price_range(pet, score, owner) {
//         if (pet["price"] < owner["budget"]) {
//             score = score + 3;
//         } else if (pet["price"] < owner["budget"] + 100) {
//             score = score + 2;
//         }
//         return score;
//     }
    
function activity_level(pet, score, owner) {
    if (owner["actLevel"] == pet["actLevel"]) {
        score = score + 3;
    }
    if (owner["actLevel"] + 1 == pet["actLevel"]) {
        score = score + 2;
    }
    if (owner["actLevel"] - 1 == pet["actLevel"]) {
        score = score + 2;
    }
    if (owner["actLevel"] + 2 == pet["actLevel"]) {
        score = score + 1;
    }
    if (owner["actLevel"] - 2 == pet["actLevel"]) {
        score = score + 1;
    }
    return score;
}

function age(pet, score, owner) {
    let pet_age;
    let owner_age;
    if (pet["Age"] < 3) {
        pet_age = 0;
    } else if (pet["Age"] > 7) {
        pet_age = 2;
    } else {
        pet_age = 1;
    }
    if (owner["Age"] == "Puppy") {
        owner_age = 0;
    } else if (owner["Age"] == "Senior") {
        owner_age = 2;
    } else {
        owner_age = 1;
    }
    if (pet_age == owner_age) {
        score = score + 3;
    }
    if (pet_age + 1 == owner_age) {
        score = score + 1;
    }
    if (pet_age - 1 == owner_age) {
        score = score + 1;
    }
    return score;
}

function price_range(pet, score, owner) {
    if (pet["price"] < owner["budget"]) {
        score = score + 3;
    } else if (pet["price"] < owner["budget"] + 100) {
        score = score + 2;
    }
    return score;
}

export function main() {
    let pet_high = [];
    let pet_med = [];
    let pet_low = [];
    for (let i = 0; i < pets.length; i++) {
        let pet = pets[i];
        let score = 0;
        type_of_animal(pet);
        if (pet_list.includes(pet)) {
            small_children(pet);
        }
        if (pet_list.includes(pet)) {
            other_animals(pet);
        }
        if (pet_list.includes(pet)) {
            let a = age(pet, score, owner);
            let b = activity_level(pet, a, owner);
            let final_score = price_range(pet, b, owner);
           // let final_score = max_distacne(pet, c);
            console.log(pet["Pet_Name"], final_score);
            if (final_score < 5) {
                pet_low.push(pet);
            } else if (final_score > 9) {
                pet_high.push(pet);
            } else {
                pet_med.push(pet);
            }
        }
    }
    console.log("high:", pet_high, "med:", pet_med, "low:", pet_low);
}

export default main;