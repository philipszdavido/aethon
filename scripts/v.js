function gh() {
    let food = 'cat'

    function f() {
        console.log('food:' + food)
    }
    return {
        f
    }
}
gh.ij = function() {
    console.log('ij')
}
const g = gh()
g.hj = function hj(params) {
    console.log('hj' + gh.food)
}
g.hj()
g.f()