const PORT=8001
const fetch = require('node-fetch');
const express= require('express')
const cors= require('cors')
const app=express()

app.use(express.json())
app.use(cors())

const API_KEY = 'openai_api_key'

app.post('/completions', async (req, res )=>{

    const options={
        method:"POST",
        headers: {
            "Authorization":`Bearer ${API_KEY}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            model:"gpt-3.5-turbo",
            messages: [{ role: "user", content: req.body.message }],
            max_tokens:300,
        })
    }
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions', options);
        const data = await response.json();
        let message = '';
        if (data && data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
          message = data.choices[0].message.content;
        }
        res.send({ message });
    } catch (error){
        console.error(error)
    }
})

app.listen(PORT, () =>console.log('Your server is running on PORT' + PORT))
