module.exports={
    prefix:'-',
    statusBot:'ON',
    //encapsulamiento de modulos
    //SU
    superusers:['412660462065549324'], //process.env.ID Agregar ids de desarrolladores
    categories:[{name:'test',priority:2},{name:'general',priority:3}],
    // Grupos de usuarios confiruacion de acuerdo al servidor dependiendo los rules que deseo tener
    groups:[  
    {name:'user',permLvl:0},
    {name:'member',permLvl:1},
    {name:'🔦Mods',permLvl:2},
    {name:'admin',permLvl:3}]



}