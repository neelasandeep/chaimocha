import {democheck} from './democheck';
let cd= new democheck();
cd.setname();
cd.setuser();
console.log(cd.getname());
console.log(cd.getUser());
interface vehicle{
    color:String;
    camera?:boolean;
    engine:number;
}
let bmw={
    color:"red",
    engine:500,
    camera:true
}
let validate=(car:vehicle)=>{
console.log(car.engine);
}
validate(bmw);