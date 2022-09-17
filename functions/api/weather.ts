export async function onRequestGet(request) {
  //const data = {colo: 'one'};
  const city = request.cf?.city || 'sydney';
  const fallback = !request.cf?.city;
  const url = `https://api.api-ninjas.com/v1/weather?city=${city}`;
  const res = await fetch(url, {headers: {'X-Api-Key': request.env.API_NINJA_KEY}});
  const data = await res.json();
  const response = {
    temp: data.temp,
    feels_like: data.feels_like,
    min_temp: data.min_temp,
    max_temp: data.max_temp,
    fallback
  };

  return new Response(JSON.stringify(response, null, 2));
}
