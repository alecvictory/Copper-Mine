let copper = 0;
let multiplier = 0
let automultiplier = 0

let clickUpgrades = {
    pickaxe: {
        price: 1,
        quantity: 0,
        multiplier: 1,
    },

    sledgehammer: {
        price: 5,
        quantity: 0,
        multiplier: 5,
    }
}
let automaticUpgrades = {
    steamengine: {
        price: 10,
        quantity: 0,
        multiplier: 10,
    },

    goblinlaborer: {
        price: 50,
        quantity: 0,
        multiplier: 15,
    }
}

function mine() {
    copper++
    copper += multiplier
    update()
}

//single purchase function
//alert for no purchase
//disable buttons if can't purchase
//animations

function buyPickaxe() {
    if (copper >= clickUpgrades.pickaxe.price) {
        clickUpgrades.pickaxe.quantity++
        multiplier += clickUpgrades.pickaxe.multiplier
        copper -= clickUpgrades.pickaxe.price
        clickUpgrades.pickaxe.price *= clickUpgrades.pickaxe.price
        update()
    }
}
function buySledgehammer() {
    if (copper >= clickUpgrades.sledgehammer.price) {
        clickUpgrades.sledgehammer.quantity++
        multiplier += clickUpgrades.sledgehammer.multiplier
        copper -= clickUpgrades.sledgehammer.price
        clickUpgrades.sledgehammer.price *= clickUpgrades.sledgehammer.price
        update()
    }
}
function buySteamengine() {
    if (copper >= automaticUpgrades.steamengine.price) {
        automaticUpgrades.steamengine.quantity++
        multiplier += automaticUpgrades.steamengine.multiplier
        copper -= automaticUpgrades.steamengine.price
        automultiplier += automaticUpgrades.steamengine.multiplier
        automaticUpgrades.steamengine.price *= automaticUpgrades.steamengine.price
        update()
    }
}
function buyGoblinlaborer() {
    if (copper >= automaticUpgrades.goblinlaborer.price) {
        automaticUpgrades.goblinlaborer.quantity++
        multiplier += automaticUpgrades.goblinlaborer.multiplier
        copper -= automaticUpgrades.goblinlaborer.price
        automultiplier += automaticUpgrades.goblinlaborer.multiplier
        automaticUpgrades.goblinlaborer.price *= automaticUpgrades.goblinlaborer.price
        update()
    }
}

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 2000)
}

function collectAutoUpgrades() {
    copper += automultiplier
    update()
}

function update() {
    document.getElementById('copper').innerText = `${copper}`
    document.getElementById('pickaxe').innerText = `${clickUpgrades.pickaxe.quantity}`
    document.getElementById('sledgehammer').innerText = `${clickUpgrades.sledgehammer.quantity}`
    document.getElementById('steamengine').innerText = `${automaticUpgrades.steamengine.quantity}`
    document.getElementById('goblinlaborer').innerText = `${automaticUpgrades.goblinlaborer.quantity}`
    document.getElementById('pickaxeprice').innerText = `${clickUpgrades.pickaxe.price}`
    document.getElementById('sledgehammerprice').innerText = `${clickUpgrades.sledgehammer.price}`
    document.getElementById('steamengineprice').innerText = `${automaticUpgrades.steamengine.price}`
    document.getElementById('goblinlaborerprice').innerText = `${automaticUpgrades.goblinlaborer.price}`
}

startInterval()
update()