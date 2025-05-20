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


    Qn13
        app.get('/select/report', (req, res) => {
  const sql = '   app.get('/select', (req, res) => {
  const sql = 'SELECT 
    service.servicename,
    payment.amountpaid,
    car.platenumber
FROM 
    payment
JOIN 
    service_record ON payment.recordnumber = service_record.recordnumber
JOIN 
    car ON service_record.carid = car.carid
JOIN 
    service ON service_record.servicecode = service.servicecode;
';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('❌ Select error:', err);
     res.json({message:'failled to Select'})
    } else {
    res.json(result)
    }
  });
});';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('❌ Select error:', err);
     res.json({message:'failled to Select'})
    } else {
    res.json(result)
    }
  });
});


noneh urakor relationship mur serviceRecord kuk urayikener ukor iy select 
 To add the missing field carid to support your original SQL query structure, you'd need to modify the ERD and database schema — but based on your current ERD, the correct linking field is platenumber, not carid.

However, if you really want to use carid instead of platenumber, here's what you'd need to do:

✅ Step 1: Modify the ERD
Add a carid (Primary Key) to the Car table instead of using platenumber as the PK. The updated Car entity would look like this:

bash
Copy
Edit
Car (
  carid PK,
  platenumber,
  type,
  model,
  manufacturingyear,
  driverphone,
  mechanicalname
)
Then, update related entities:

ServiceRecord should reference carid instead of platenumber.

You could optionally include carid in the Payment table if needed for direct linking (though this duplicates logic already handled by the relationship through ServiceRecord).

✅ Step 2: Update Relationships in Tables
ServiceRecord:

Add carid as FK → Car(carid)

Payment:

Optionally, add carid as FK if you want direct access from Payment → Car

✅ Step 3: Updated SQL Query
Once carid is in place: 
    </div>
   )
 }
 
 export default App

