export async function onRequestGet(context) {
  //const data = {colo: 'one'};
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context;

  const city = request.cf?.city || 'sydney';
  const fallback = !request.cf?.city;
  let url = `https://api.api-ninjas.com/v1/weather?city=${city.toLowerCase()}`;
  if (fallback && request.cf?.latitude) {
    url = `https://api.api-ninjas.com/v1/weather?lat=${request.cf.latitude}&lon=${request.cf.longitude}`;
  }
  const res = await fetch(url, {headers: {'X-Api-Key': env.API_NINJA_KEY}});
  const resData = await res.json();
  const response = {
    temp: resData.temp,
    feels_like: resData.feels_like,
    min_temp: resData.min_temp,
    max_temp: resData.max_temp,
    city,
    country: request.cf?.country || 'unknown',
    lat: request.cf?.latitude || 'unknown',
    log: request.cf?.longitude || 'unknown',
    colo: request.cf?.colo || 'unknown',
    tz: request.cf?.timezone || 'unknown',
    fallback
  };

  return new Response(JSON.stringify(response, null, 2));
}
