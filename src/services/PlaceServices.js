import http from './http-config';
function authHeader(){
   
    const userToken = JSON.parse(localStorage.getItem("user"));
    
    if(userToken && userToken.access_token){
        
        return {
               Authorization:"Bearer "+userToken.access_token
          }
    
    }else {
        return {}
    }
}
const getAll = ()=>{
    
    return http.get("/places/",{headers:authHeader()});
}
const get = (id)=>{
    return http.get(`/places/${id}`,id);
}
const create = (placeData)=>{
    return http.post("/places/",placeData);
}
const update = (id, placeData)=>{
    return http.put(`/places/${id}`,placeData);
}
const remove = id => {
    return http.delete(`/places/${id}`);
}

const exportedObjects = {
    getAll,
    get,
    create,
    update,
    remove
}
export default exportedObjects; 