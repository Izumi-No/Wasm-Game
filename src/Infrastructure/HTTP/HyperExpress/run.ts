import { server } from "./server";

export async function run(port?: number) {
  try {
    await server.listen(port || 3000);
    console.log("server is listening on ", port || 3000);
  } catch (e) {
    console.log("could not run the server");
  }
}
