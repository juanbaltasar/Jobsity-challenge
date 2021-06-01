const amqp = require('amqplib/callback_api')
const axios = require('axios')
const amqpURL = 'amqp://localhost'

class RabbitMQManager {

    sendMessage(message) {
        amqp.connect(amqpURL, function(err0, conn) {
            if (err0) {
                throw err0
            }
        
            conn.createChannel((err1, chan) => {
                if (err1) {
                    throw err1
                }
        
                const queue = 'msgs';
                const msg = message;
        
                chan.assertQueue(queue, {
                    durable:false
                });
        
                chan.sendToQueue(queue, Buffer.from(msg));
            })
            setTimeout(function() {
                conn.close();
            }, 500);
        })   
    }

    enableReceiveMessage() {
        amqp.connect(amqpURL, function(err0, conn) {
            if (err0) {
                throw err0
            }
        
            conn.createChannel((err1, chan) => {
                if (err1) {
                    throw err1
                }
        
                const queue = 'msgs';
        
                chan.assertQueue(queue, {
                    durable:false
                });
        
                chan.consume(queue, function(msg) {
                    axios.post('http://localhost:4000/messages', {
                        message:msg.content.toString(),
                        user:'Stock Quote Bot'
                    })
                }, {
                    noAck: true
                });
            })
            setTimeout(function() {
                conn.close();
            }, 500);
        })
    }

}

module.exports = RabbitMQManager