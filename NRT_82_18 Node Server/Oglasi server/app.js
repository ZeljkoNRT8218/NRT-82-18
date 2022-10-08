const express = require('express');  //Ukljucivanje novog modula u postojeci primer
const app = express();     //kreiranje aplikacije
const oglasiServis = require('oglasi-modul');

app.listen(3000, ()=>{console.log('Listening...');});  //port 3000, Server startovan na portu 3000
app.use(express.urlencoded({extended: false}));
app.use(express.json());  //prihvatanje json podatka


app.get('/', (req, res) => {    //req=request(zahtev)  res=response(odgovor)
    res.send('Working');
});

// Slanje svih oglasa
app.get('/oglasi', (req, res) => {
    res.send(oglasiServis.sviOglasi());   //app je referenca express objekta
});

// Dodavanje novog oglasa
app.post('/dodajOglas', (req, res) => {
    oglasiServis.novOglas(req.body);
    console.log('req.body: ', req.body);    //req.body sadrzi parsirane podatke tela HTTP poruke
    res.end('ok');
});

//Brisanje oglasa 
app.delete('/delete/:id', (req, res) => {
    oglasiServis.obrisiOglas(req.params["id"]);  //req.params sadrzi parametre rutiranja koji su imenovani po opisanom pravilu
    res.end('ok');
});

//Izmena oglasa
app.put('/izmena/:id', (req, res) => {
    oglasiServis.izmeniOglas(req.body);
    res.end('ok');
});

