import React from 'react';

function Hero() {

    const hero = [
        {
            name: "Cinder",
            power: "Fire",
            color: "orange",
            age: '28',
            special1: "Trailblazer",
            special2: "Inferno",
            special3: "Fire Flash",
        },
        {
            name: "Agnos",
            power: "Rock",
            color: "#00999",
            age: "I'm to old for this",
            special1: "Payload Assault",
            special2: "Pulverize",
            special3: "Ruin",
        },
        {
            name: "Naruto",
            power: "Rasengan",
            color: "purple",
            age: "45",
            special1: "Fist",
            special2: "Punch",
            special3: "Kick",
        },
        {
            name: "Ichicago",
            power: "Hollow",
            color: "pink",
            age: "15",
            special1: "Sword",
            special2: "Bankai",
            special3: "Getsuga Te",
        },
        {
            name: "Deku",
            power: "Punch",
            color: "#336699",
            age: "25",
            special1: "Edokukken",
            special2: "Tiger Fury",
            special3: "Wind Kick",
        },
        {
            name: "Jago",
            power: "Tiger Spirit",
            color: "#336699",
            age: "25",
            special1: "Edokukken",
            special2: "Tiger Fury",
            special3: "Wind Kick",
        },

    ];

    let heroStyle =  {
        minHeight: "100px",
        width: "200px",

    };

    let occupationAge = "young";




    let opacityVar = "none";




    let HeroList = hero.map((hro: {name: string, power: string, color: string, age: string, special1: string, special2: string, special3: string}, idx:number )=>



        <div key={idx} style={{backgroundColor: (hro.color)}} onClick={opacityVar = "block"}>
            <p>{hro.name}</p>
            <p>{hro.power}</p>
            <p>{hro.age}</p>
            <p>{hro.special1}</p>
            <p>{hro.special2}</p>
            <p>{hro.special3}</p>
            <p className="hidden" style={{display: opacityVar}} >my power is {hro.power}</p>
        </div>




    );


    return (
        <div style={heroStyle}>{HeroList}</div>
    );
}

export default Hero;