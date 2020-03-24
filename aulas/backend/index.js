const express = require('express'); 

const app = express();

app.get('/',(request,response)=>{
    return response.json({
        evento:'Semana OmniStack',
        versão: '11.0'
    });
});

app.listen(3333);