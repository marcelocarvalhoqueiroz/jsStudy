let numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // ele procura primeiro no escopo interno, dando preferĂȘncia pro menor sempre.
}

console.log('fora =', numero)
