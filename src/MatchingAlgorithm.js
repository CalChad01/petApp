import haversine from 'haversine-distance';
import { getCoords } from './UserService';

const owner = JSON.parse('{"name":"Kali","travel":1000,"address":"1866 East Shore Drive Maplewood Minnesota 55109", "type":"Dog","otherPets":"Yes","smallChildren":"Yes","Size":"Large","Age":"Puppy","actLevel":1,"budget":500}');
const pet1 = JSON.parse('{"name":"Bronco","address":"1325 31st street des moines Iowa", "type":"Dog","pet_breed":"Pit Bull","smallChildren":"Yes","otherAnimals":"Yes","Weight":"95","Age":9,"actLevel":2,"price":450}');
const pet2 = JSON.parse('{"name":"Perfect","address":"1870 East shore dr maplewood mn 55109", "type":"Dog","pet_breed":"Pit Bull","smallChildren":"Yes","otherAnimals":"Yes","Weight":"95","Age":1,"actLevel":1,"price":450}');
const pet3 = JSON.parse('{"name":"BAD","address":"352 gulfport court las vegas nv", "type":"Dog","pet_breed":"Pit Bull","smallChildren":"Yes","otherAnimals":"Yes","Weight":"10","Age":10,"actLevel":5,"price":1000}');
const pet4 = JSON.parse('{"name":"Tester","address":"352 gulfport court las vegas nv", "type":"Dog","pet_breed":"Pit Bull","smallChildren":"Yes","otherAnimals":"Yes","Weight":"10","Age":10,"actLevel":5,"price":100000}');

const pets = [pet1, pet2, pet3, pet4];

function typeOfAnimal(pet) {
  if (pet.type === owner.type) {
    pet_list.push(pet);
  }
}

function smallChildren(pet) {
  if (pet.smallChildren === 0 && owner.smallChildren === 1) {
    const index = pet_list.indexOf(pet);
    if (index !== -1) {
      pet_list.splice(index, 1);
    }
  }
}

function otherAnimals(pet) {
  if (pet.otherAnimals === 0 && owner.otherPets === 1) {
    const index = pet_list.indexOf(pet);
    if (index !== -1) {
      pet_list.splice(index, 1);
    }
  }
}

function distanceLen(owner_ll, pet_ll) {
  var distances=haversine(owner_ll,pet_ll)
  //console.log("DISTANCE~~", distances)
  return distances
}

function maxDistance(lat_long_owner,lat_long_pet,owner,pet, score) {
  const distance = distanceLen(lat_long_owner, lat_long_pet);

  if (distance < owner.travel) {
    score += 3;
  } else if (distance < owner.travel + 35) {
    score += 2;
  }

  return score;
    
}

function priceRange(pet, score, owner) {
    if (pet.price < owner.price) {
        score = score + 3;
    } else if (pet.price < owner.budget + 100) {
        score = score + 2;
    }
    return score;
}
    
function activityLevel(pet, score, owner) {
    if (owner.actLevel == pet.actLevel) {
        score = score + 3;
    }
    if (owner.actLevel + 1 == pet.actLevel) {
        score = score + 2;
    }
    if (owner.actLevel - 1 == pet.actLevel) {
        score = score + 2;
    }
    if (owner.actLevel + 2 == pet.actLevel) {
        score = score + 1;
    }
    if (owner.actLevel - 2 == pet.actLevel) {
        score = score + 1;
    }
    return score;
}

function age(pet, score, owner) {
    let pet_age;
    let owner_age;

    if (pet.age < 3) {
        pet_age = 0;
    } else if (pet.age > 7) {
        pet_age = 2;
    } else {
        pet_age = 1;
    }

    if (owner.age == "puppy") {
        owner_age = 0;
    } else if (owner.age == "senior") {
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

// global pet list arrays
let pet_list = [];
let pet_high = [];
let pet_med = [];
let pet_low = [];

export async function match() {

  const lat_long_owner = await getCoords(owner);

  // reset global arrays
  pet_list = []
  pet_high = []
  pet_med = [];
  pet_low = [];

  for (let i = 0; i < pets.length; i++) {
    // get next pet and initialize score
    let pet = pets[i];
    let score = 0;

    // check for type of animal
    typeOfAnimal(pet);
    if (pet_list.includes(pet)) {
      // small children and other animals check
      if (pet_list.includes(pet)) {
        smallChildren(pet);
        if (pet_list.includes(pet)) {
          otherAnimals(pet);
        }
      }
    }

    // acccumulate score
    if (pet_list.includes(pet)) {
      score = age(pet, score, owner);
      score = activityLevel(pet, score, owner);
      score = priceRange(pet, score, owner);
      
      let lat_long_pet = await getCoords(pet);
      let final_score = maxDistance(lat_long_owner, lat_long_pet, owner, pet, score);
      //console.log(pet.name, final_score);

      if (final_score < 5) {
        pet_low.push(pet);
      } else if (final_score > 9) {
        pet_high.push(pet);
      } else {
        pet_med.push(pet);
      }
    }
  }
    console.log("high:", pet_high);
    console.log("med:", pet_med);
    console.log("low:", pet_low);

    // const data = [pet_high, pet_med, pet_low];
    // console.log(data);
    return pet_high;
}