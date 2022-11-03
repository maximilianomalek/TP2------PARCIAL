import CnxMongoDB from '../DB.js'
import { ObjectId } from "mongodb"


class NumerosMongoDAO {

    findCalculo = async _ => {
        if(!CnxMongoDB.connection) return []
        try {
            let numeros = await CnxMongoDB.db.collection('numeros').find({}).toArray()
            let suma = 0
            for (let index = 0; index < numeros.length; index++) {
                const element = numeros[index];
                suma = suma + Number(element.numero)
                
            }

            return {promedio: suma/numeros.length}
           
        }
        //catch(err) {
        catch {
            return []
        }
    }

    findNumeros = async ()  => {
        if(!CnxMongoDB.connection) return []
        try {
            let numeros = await CnxMongoDB.db.collection('numeros').find({}).toArray()
            let numerosDevolver = []
            numeros.forEach(element => {
                numerosDevolver.push(element.numero)
            });

            return numerosDevolver
        }
        //catch(err) {
        catch {
            return []
        }
    }


    findCantidad = async ()  => {
        if(!CnxMongoDB.connection) return []
        try {
            let numeros = await CnxMongoDB.db.collection('numeros').find({}).toArray()

            return {cantidad:numeros.length}
        }
        //catch(err) {
        catch {
            return []
        }
    }



    findMinMax = async ()  => {
        if(!CnxMongoDB.connection) return []
        try {
            let numeros = await CnxMongoDB.db.collection('numeros').find({}).toArray()
            let min = Math.min.apply(Math, numeros.map(a => a.numero))
            let max = Math.max.apply(Math, numeros.map(a => a.numero)) 
        
            
            return {minimo: min, maximo: max}           
        }
        //catch(err) {
        catch {
            return []
        }
    }


    saveNumero = async numero => {
        if(!CnxMongoDB.connection) return {}

        numero.numero = parseInt(numero.numero)
        await CnxMongoDB.db.collection('numeros').insertOne(numero)
        
        return numero    
    }

}

export default NumerosMongoDAO
