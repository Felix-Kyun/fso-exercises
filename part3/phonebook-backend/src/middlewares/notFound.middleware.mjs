export async function notFound(req, res, next) {
  return res.status(404).send("Not found");
}
