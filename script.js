document.getElementById('btn').addEventListener('click',async()=>{
    const to=document.getElementById('to').value;
    const from=document.getElementById('from').value;
    const value = document.getElementById('value').value;
    const result = document.getElementById('res')
;    const resp = await fetch(`https://api.fastforex.io/fetch-multi?from=${from}&to=${to}&api_key=2a11c5cd1d-c1fffae47f-szw7jj`);
    const data = await resp.json();
    const res = value * data.results[to];
    result.innerHTML=`<h1>${res}</h1>`;
})