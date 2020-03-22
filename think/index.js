module.exports = async function(context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const state = req.body;

  context.res = {
    // status: 200, /* Defaults to 200 */
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: { position: state.cells.findIndex(cell => !cell.mark) }
  };
  context.done();
};
