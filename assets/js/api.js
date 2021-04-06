export async function request(method, endpoint, data = {}){
    let fetchData = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if(method !== 'GET')
        fetchData['body'] = JSON.stringify(data)

    let res = await fetch('http://citylink/api' + endpoint, fetchData)
    let resJson = await res.json()
    return{json:resJson, status:res.status}
}