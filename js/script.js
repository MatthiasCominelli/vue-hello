const { createApp } = Vue;

createApp(
    {
    data() 
    {
        return {
            message: "ciao a tutti"
        }
    }
}).mount("#messaggio");