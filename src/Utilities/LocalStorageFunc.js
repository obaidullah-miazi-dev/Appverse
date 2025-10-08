export const getApp = () =>{
   try{
     const getapp = localStorage.getItem('appList')
     return getapp ? JSON.parse(getapp) : []
   }
   catch(err){
    console.log(err)
    return []
   }
}

export const saveApp = (app) =>{
    const savedApp = getApp()
    try{
        const savedAppData = [...savedApp,app]
        localStorage.setItem('appList',JSON.stringify(savedAppData))
    }
    catch(err){
        console.log(err);
    }
}