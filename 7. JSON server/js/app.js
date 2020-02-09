let url = 'http://localhost:3000/posts';

async function loadData(){
  let response = await fetch(url);
  console.log(await response.json());
}

loadData();

