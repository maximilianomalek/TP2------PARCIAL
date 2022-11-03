class NumerosMemDAO {

    constructor() {
        this.numeros = [
            { numero: 7 },
            { numero: 8 },
        ]
    }



    findNumeros = async ()  => {
        try {
            let devolver = []
            this.numeros.forEach(element => {
                devolver.push(element.numero)
            });
            return {numeros: devolver}
        }
        catch {
            return []
        }
    }


    findMinMax = async ()  => {
        try {                
            let min = Math.min.apply(Math, this.numeros.map(a => a.numero))
            let max = Math.max.apply(Math, this.numeros.map(a => a.numero))            
            return {minimo: min, maximo: max}
        }
        catch {
            return []
        }
    }

    findCantidad = async ()  => {
        try {                
                     
            return {cantidad:this.numeros.length}
        }
        catch {
            return []
        }
    }



    findCalculo = async ()  => {
        try {
            let suma = 0
            for (let index = 0; index < this.numeros.length; index++) {
                const element = this.numeros[index];
                suma = suma + element.numero
                
            }

            return {promedio: suma/this.numeros.length}
        }
        catch {
            return {}
        }
    }


    saveNumero = async numero => {
        numero.numero = parseInt(numero.numero)
        this.numeros.push(numero)

        return numero    
    }

}

export default NumerosMemDAO
