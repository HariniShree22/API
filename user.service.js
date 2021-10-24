const pool=require("../../config/database");
module.exports={
    create: (data, callBack) => {
        pool.query(
          `insert into details(Brandname, Ram, Rom, Price, Processor, Operatingsystem,Color,Customerrating) 
                    values(?,?,?,?,?,?,?,?)`,
          [
            data.Brandname,
            data.Ram,
            data.Rom,
            data.Price,
            data.Processor,
            data.Operatingsystem,
            data.Color,
            data.Customerrating
          ],
          
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
    },
     getBrand:callBack=>{
         pool.query(
             `select * from details`,
             [],
             (error,results,fields)=>{
                 if(error){
                     return callBack(error);
                 }
                 return callBack(null,results);
             }
         )
            }
     };
    