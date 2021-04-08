export async function request(method, endpoint, data = {}, formData = false){
    let fetchData = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if(method !== 'GET' && !formData)
        fetchData['body'] = JSON.stringify(data)

    if(formData){
      let formBody = new FormData()
      for(let key in data){
        formBody.append(key, data[key])
      }

      delete fetchData.headers
      fetchData['body'] = formBody
    }

    let res = await fetch('http://citylink/api' + endpoint, fetchData)
    let resJson = await res.json()
    return{json:resJson, status:res.status}
}