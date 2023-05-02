import haversine from 'haversine-distance';
import { getPets, getCoords, getOwners } from '../service';

function typeOfAnimal(pet, owner) {
  if (pet.type === owner.type) {
    pet_list.push(pet);
  }
}

function smallChildren(pet, owner) {
  if (pet.smallChildren === 0 && owner.smallChildren === 1) {
    const index = pet_list.indexOf(pet);
    if (index !== -1) {
      pet_list.splice(index, 1);
    }
  }
}

function otherAnimals(pet, owner) {
  if (pet.otherAnimals === 0 && owner.otherPets === 1) {
    const index = pet_list.indexOf(pet);
    if (index !== -1) {
      pet_list.splice(index, 1);
    }
  }
}

function distanceLen(owner_ll, pet_ll) {
  var distances=haversine(owner_ll, pet_ll)
  //console.log("DISTANCE~~", distances)
  return distances
}

function maxDistance(lat_long_owner,lat_long_pet,owner, score) {
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

    if (owner.age < 3) {
        owner_age = 0;
    } else if (owner.age > 7) {
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

  const owners = await getOwners();
  const owner = owners[0];

  const lat_long_owner = await getCoords(owner);

  // reset global arrays
  pet_list = []
  pet_high = []
  pet_med = [];
  pet_low = [];

  const pets = await getPets();

  for (let i = 0; i < pets.length; i++) {
    // get next pet and initialize score
    let pet = pets[i];
    let score = 0;

    // check for type of animal
    typeOfAnimal(pet, owner);
    if (pet_list.includes(pet, owner)) {
      // small children and other animals check
      if (pet_list.includes(pet)) {
        smallChildren(pet, owner);
        if (pet_list.includes(pet)) {
          otherAnimals(pet, owner);
        }
      }
    }

    // acccumulate score
    if (pet_list.includes(pet)) {
      score = age(pet, score, owner);
      score = activityLevel(pet, score, owner);
      score = priceRange(pet, score, owner);
      
      let lat_long_pet = await getCoords(pet);
      let final_score = maxDistance(lat_long_owner, lat_long_pet, owner, score);
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
    return [pet_high, pet_med, pet_low];
}