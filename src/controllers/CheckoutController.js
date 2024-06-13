const axios = require('axios')
require('dotenv').config

class CheckoutController{
     boleto(request, response){
        const {
            requestNumber,
            dueDate,
            amount,
            shippingAmount,
            usernameCheckout,
                client: {
                name,
                document,
                phoneNumber,
                email,
                address: {
                    codIbge,
                    street,
                    number,
                    complement,
                    zipCode,
                    neighborhood,
                    city,
                    state
                }
            },
            products
        } = request.body;
        
        const data = {
            requestNumber,
            dueDate,
            amount,
            shippingAmount,
            usernameCheckout,
                client: {
                name,
                document,
                phoneNumber,
                email,
                address: {
                    codIbge,
                    street,
                    number,
                    complement,
                    zipCode,
                    neighborhood,
                    city,
                    state
                }
            },
            products
        }


        const config = {
            method: 'post',
            url: 'https://sandbox.ws.suitpay.app/api/v1/gateway/request-boleto',
            headers:{
                'ci': process.env.SUITPAY_CI,
                'cs': process.env.SUITPAY_CS,
                'content-Type': 'application/json'
            },
            data: JSON.stringify(data),
            maxBodyLength: Infinity
        }

        axios(config)
            .then(resp=>{
                response.json(resp.data)
            })
            .catch(err=>{
                response.status(500).json({error: err.message})
            })

    }
}

module.exports = CheckoutController