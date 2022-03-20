
// Aqui se hace la petición a la appi PokéAPI
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let  pokeInput= pokeName.value.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        // console.log(res)
        if(res.status != "200"){
            // console.log(res);
            
            pokeImage("../img/Llorando.png");
            pokeNombre("Nombre: Pokémon");
            pokeTipo(`Tipo: `);
            pokehp(" hp");
            pokeAtaque();
            pokeDefensa();
            pokeAtaEsp();
            pokeDefEsp();
            pokeVelocidad();

        }else{
            return res.json();
            
        }
        
    }).then((data) => {
        //console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeNom = data.name;
        let pokeTip = data.types[0].type.name;
        let pokeHp = data.stats[0].base_stat;
        let pokeAtaq = data.stats[1].base_stat;
        let pokeDefe = data.stats[2].base_stat;
        let pokeAtaquEspe = data.stats[3].base_stat;
        let pokeDefenEspe = data.stats[4].base_stat;
        let pokeVelo = data.stats[5].base_stat;
         console.log(pokeHp);
        console.log(pokeTip);
        pokeImage(pokeImg);
        pokeNombre(`Nombre: ${pokeNom}`);
        pokeTipo(`Tipo: ${pokeTip}`);
        pokehp(pokeHp+" hp");
        pokeAtaque(pokeAtaq);
        pokeDefensa(pokeDefe);
        pokeAtaEsp(pokeAtaquEspe);
        pokeDefEsp(pokeDefenEspe);
        pokeVelocidad(pokeVelo);
    });

    
    
}

// fetchPokemon();

const pokeImage =  (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

// pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png");

const pokeNombre = (nombre) => {
    const pokeNombre = document.getElementById("pokeNombre");
    //const dato = pokeNombre.textContent= nombre;
    pokeNombre.textContent= nombre;
    //console.log(dato);
}
//pokeNombre("Nombre del Pokémon1");

const pokeTipo = (tipo) => {
    const pokeTip = document.getElementById("pokeTipo");
    pokeTip.textContent = tipo;
    
}

const pokehp = (hp) => {
    const pokeHP = document.getElementById("pokeHp");
    pokeHP.textContent = hp;    
}

const pokeAtaque = (ataque) => {
    const ataques = document.getElementById("ataque");
    ataques.textContent = ataque;    
}

const pokeDefensa = (defensa) => {
    const defensas = document.getElementById("defensa");
    defensas.textContent = defensa;    
}

const pokeAtaEsp = (ataEsp) => {
    const ataEsps = document.getElementById("ataEsp");
    ataEsps.textContent = ataEsp;    
}

const pokeDefEsp = (defEsp) => {
    const defEsps = document.getElementById("defEsp");
    defEsps.textContent = defEsp;    
}

const pokeVelocidad = (velocidad) => {
    const velocidads = document.getElementById("velocidad");
    velocidads.textContent = velocidad;    
}

