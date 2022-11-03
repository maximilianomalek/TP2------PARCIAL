import ApiNumeros from '../api/numeros.js'


class ControladorNumeros {

    constructor() {
        this.apiNumeros = new ApiNumeros()
    }

    getNumeros = async (req,res) => {
        res.json( await this.apiNumeros.obtenerNumeros())
    }

    getCalculo = async (req,res) => {
        res.json( await this.apiNumeros.obtenerCalculo())
    }
    getMinMax = async (req,res) => {
        res.json( await this.apiNumeros.obtenerMinMax())
    }

    getCantidad = async (req,res) => {
        res.json( await this.apiNumeros.obtenerCantidad())
    }



    postNumero = async (req,res) => {
        const numero = req.body
        await this.apiNumeros.guardarNumero(numero)
        res.redirect('/')

        
    }
}

export default ControladorNumeros