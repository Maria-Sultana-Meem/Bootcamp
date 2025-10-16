const getStoredBook=()=>{

const getStoreStr= localStorage.getItem('readList')
if (getStoreStr) {
    const storeBookdata= JSON.parse(getStoreStr)
return storeBookdata
    
}
else{
    return []
}
}

const AddToStoreDB=(id)=>{
const storeBookdata = getStoredBook()
if (storeBookdata.includes(id)) {
    alert("already exists")
    
}
else{
    storeBookdata.push(id)
    const data = JSON.stringify(storeBookdata)
    localStorage.setItem("readList",data)
}
}

export {AddToStoreDB,getStoredBook}