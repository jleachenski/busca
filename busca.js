const array = [-1, 220, 310, 4000, 7100, 10000, 101100, 1000000000 ]

module.exports = {
    
    sequencial(numero) {
        
        let comparacoes = 0
        for(let i = 0; i < array.length; i++) {

            comparacoes++
            if(array[i] == numero) {
                console.log(`o numero ${numero} esta na posicao ${i}, comparacoes: ${comparacoes}`)
            }
        }
    },
    binaria(numero) {
        let primeiro = 0
        let ultimo = array.length - 1

        let comparacoes = 0

        while(primeiro <= ultimo) { // FIXME

            let meio = Math.floor((primeiro + ultimo) / 2)
            comparacoes++
            if(array[meio] == numero) {
                console.log(`o numero ${numero} esta na posicao ${meio}, comparacoes: ${comparacoes}`)
                break
            } else {
                if(array[meio] < numero) {
                    primeiro = meio +1
                } else {
                    ultimo = meio -1
                }
            }
        }


    }
}