// SPREAD DESTRUCTURING EXERCISE

// 1a
const mcuShows = [
    `The Falcon And The Winter Soldier`,
    `Wanda Vision`
]
    console.log(mcuShows);

    // 1b
    const starWarsShows = [
        `The Mandalorian`,
         `The Clone Wars` 
    ]
    console.log(starWarsShows);

    // 1c
    const disneyPlusShows = [
        ...mcuShows, 
        ...starWarsShows
    ];
       
    // 1d
    console.log(disneyPlusShows);

    // 2a
    const netflixMovies = {
        action: `Extraction`,
        drama: `The Irishman`
};
    console.log(netflixMovies);

    // 2b
    const disneyPlusMovies = {
    musical: `Hamilton`,
    drama: `Togo`
};
console.log(disneyPlusMovies);

// 2c

const streamingMovies = {
    ...disneyPlusMovies,
    ...netflixMovies,
    comedy: `Shazam!`,
};

// 2d
console.log(streamingMovies);

// 3a
const disneyJunior = [
    `PJ Masks`,
    `Jake and the Neverland Pirates`
]
console.log(disneyJunior);

// 3b
const [pj] = `PJ Masks`;
const [jake] = `Jake and the Neverland Pirates`;

// 3c
console.log(pj, jake);

// 4a
const avengers = {
    captainAmerica: `Steve Rogers`,
    theHulk: `Bruce Banner`
}
console.log(avengers);

// 4b
const {captainAmerica, theHulk} = avengers;
console.log(captainAmerica);
console.log(theHulk);

// 4c
console.log(captainAmerica, theHulk);

// 4d
const moreAvengers = {
    blackwidow: "Natasha Romanoff",
    hawkeye: "Clint Barton",
    ironMan: "Tony Stark"
}
console.log(moreAvengers);

// 4e
const {blackwidow: nat, ...others} = moreAvengers;
console.log(nat);
console.log(others);

// 4f
console.log(nat, others);


  