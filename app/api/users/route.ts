const POST = () => {
  return Response.json({ 'msg': 'POST data'});
}

const GET = () => {
  return Response.json({ 'msg': 'GET data'});
}

export { POST , GET}