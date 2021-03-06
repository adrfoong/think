// module.exports = async function(context, req) {
//   context.log("JavaScript HTTP trigger function processed a request.");

//   const state = req.body;

//   context.res = {
//     // status: 200, /* Defaults to 200 */
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*"
//     },
//     body: { position: state.cells.findIndex(cell => !cell.mark) }
//   };
//   context.done();
// };

exports.handler = async function(event, context) {
  const state = JSON.parse(event.body);
  console.log(state.cells.map(c => c.playerId));
  console.log(state.cells.findIndex(cell => !cell.playerId));

  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      position: state.cells.findIndex(cell => !cell.playerId)
    })
  };

  return response;
};
