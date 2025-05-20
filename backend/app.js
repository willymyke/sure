 import React from 'react'
 
 function App() {
   return (
     <div>
    app.get('/select', (req, res) => {
  const sql = 'SELECT car.plateNumber,car.DriverPhone,payment.AmountPaid FROM payment Join Car on payment.carId = car.carId';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('❌ Select error:', err);
     res.json({message:'failled to Select'})
    } else {
    res.json(result)
    }
  });
});

  ikindi icyo ni question 12 kandi urakor iy field y carId mur table ya car ari primary key ubundi mur payment carId 
   araba ar foreigin key kand ndashak pin yae nayibagiwe
    </div>
   )
 }
 
 export default App

