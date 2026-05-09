
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(res => {
    if(res.ok === false) throw new error("error")
        return res.json() 
})
.then((data) => console.log(json.stringify(data)))
.catch((error) => console.error(error))