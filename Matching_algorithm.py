import json
from geopy.geocoders import Nominatim
import haversine as hs
from haversine import Unit


#JSON
x='{"Owner_Name":"Kali","travel":1000,"Location":"1866 East Shore Drive Maplewood Minnesota", "type":"Dog","otherPets":"Yes","smallChildren":"Yes","Size":"Large","Age":"Puppy","actLevel":1,"budget":500}'
y='{"Pet_Name":"Bronco","Location":"1325 31st street des moines Iowa", "type":"Dog","pet_breed":"Pit Bull","smallChildren":"Yes","otherAnimals":"Yes","Weight":"95","Age":9,"actLevel":2,"price":450}'
z='{"Pet_Name":"Perfect","Location":"1870 East shore dr maplewood mn 55109", "type":"Dog","pet_breed":"Pit Bull","smallChildren":"Yes","otherAnimals":"Yes","Weight":"95","Age":1,"actLevel":1,"price":450}'
a='{"Pet_Name":"BAD","Location":"352 gulfport court las vegas nv", "type":"Dog","pet_breed":"Pit Bull","smallChildren":"Yes","otherAnimals":"Yes","Weight":"10","Age":10,"actLevel":5,"price":1000}'
b='{"Pet_Name":"Tester","Location":"352 gulfport court las vegas nv", "type":"Dog","pet_breed":"Pit Bull","smallChildren":"Yes","otherAnimals":"Yes","Weight":"10","Age":10,"actLevel":5,"price":100000}'

owner = json.loads(x)
pet1 = json.loads(y)
pet2 = json.loads(a)
pet3 = json.loads(z)
pet4 = json.loads(b)

pets=[pet1,pet2,pet3,pet4]


pet_list=[]


def loc_distance(pet):
    geolocator=Nominatim(user_agent="MyApp")

    location_owner=geolocator.geocode(owner["Location"])
    lat=(location_owner.latitude)
    long=(location_owner.longitude)
    loc1=(lat,long)

    location_pet=geolocator.geocode(pet["Location"])
    latp=(location_pet.latitude)
    longp=(location_pet.longitude)
    loc2=(latp,longp)

    distance=hs.haversine(loc1,loc2, unit=Unit.MILES)
    return distance

def type_of_animal(pet):
    if pet["type"]==owner["type"]:
        pet_list.append(pet)

def small_children(pet):
    if pet["smallChildren"]=='No' and owner["smallChildren"]=="Yes":
        pet_list.remove(pet)

def other_animals(pet):
    if pet["otherAnimals"]=="No" and owner["otherPets"]=="Yes":
        pet_list.remove(pet)

def max_distacne(pet, score):
    distance=loc_distance(pet)
    if distance < owner["travel"]:
        score=score+3
    elif distance < owner["travel"]+35:
        score=score+2
    return score


def price_range(pet, score):
    if pet["price"]<owner["budget"]:
        score=score+3
    elif pet["price"]<owner["budget"]+100:
        score=score+2
    return score

        

def activity_level(pet, score):
    if owner["actLevel"]==pet["actLevel"]:
        score=score+3
    if owner["actLevel"]+1==pet["actLevel"]:
        score=score+2
    if owner["actLevel"]-1==pet["actLevel"]: 
        score=score+2
    if owner["actLevel"]+2==pet["actLevel"]:
        score=score+1
    if owner["actLevel"]-2==pet["actLevel"]: 
        score=score+1
    return score

def age(pet, score):
    if pet["Age"]<3:
        pet_age=0
    elif pet["Age"]>7:
        pet_age=2
    else:
        pet_age=1
    if owner["Age"]=="Puppy":
        owner_age=0
    elif owner["Age"]=="Senior":
        owner_age=2
    else:
        owner_age=1
    if pet_age==owner_age:
        score=score+3
    if pet_age+1==owner_age:
        score=score+1
    if pet_age-1==owner_age:
        score=score+1
    return score 


def main():
    pet_high=[]
    pet_med=[]
    pet_low=[]
    for pet in pets:
        score=0
        type_of_animal(pet)
        if pet in pet_list:
            small_children(pet)
        if pet in pet_list:
            other_animals(pet)
        if pet in pet_list:
            a=age(pet, score)
            b=activity_level(pet, a)
            c=price_range(pet, b)
            final_score=max_distacne(pet, c)
            print(pet["Pet_Name"],final_score)
            if final_score <5:
                pet_low.append(pet)
            elif final_score >9:
                pet_high.append(pet)
            else:
                pet_med.append(pet)
    print("high:",pet_high,"med:",pet_med,"low:",pet_low)
    
    
main()

#Notes:
#I need to figure out how I am looping through all the pets and calling the data. 


#Need an error code for if an non existant address is entered
